export const FLOWS = [
  {id:'quote',name:'Consulta a presupuesto',category:'Comercial',icon:'◇',description:'Ordená una consulta, creá una tarea y avisá al responsable.',example:'Necesito un sistema de stock para mi taller. Quiero conversar sobre un presupuesto esta semana.'},
  {id:'receipt',name:'Comprobante a revisión',category:'Finanzas',icon:'▤',description:'Extraé el importe del texto y generá una tarea de revisión.',example:'Comprobante de transferencia. Importe: $32.500,00. Concepto: insumos para el taller. Fecha: 12/10/2026.'},
  {id:'followup',name:'Seguimiento de contacto',category:'Operaciones',icon:'↗',description:'Convertí un pendiente en una tarea y un aviso para retomarlo.',example:'Pendiente: confirmar la propuesta de automatización. Contactar al cliente mañana para coordinar una reunión.'},
];
export const STEPS = ['Analizar entrada','Crear tarea','Registrar aviso'];
export function validateInput(input) {
  if (!input || typeof input !== 'object') throw new Error('Completá la solicitud.');
  if (!FLOWS.some(f=>f.id===input.flowId)) throw new Error('Automatización no válida.');
  if (typeof input.contact !== 'string' || !input.contact.trim() || input.contact.length>120) throw new Error('Ingresá un contacto de hasta 120 caracteres.');
  if (typeof input.text !== 'string' || !input.text.trim() || input.text.length>12000) throw new Error('Ingresá un texto de entre 1 y 12.000 caracteres.');
  if (input.email && (typeof input.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email))) throw new Error('Revisá el email del contacto.');
  if(input.mode && !['demo','connected'].includes(input.mode)) throw new Error('Modo no válido.');
  return {flowId:input.flowId,contact:input.contact.trim(),email:input.email||'',text:input.text.trim(),mode:input.mode||'demo',simulateFailure:input.mode!=='connected' && input.simulateFailure===true};
}
export function localAnalysis(input) {
  const result={title:input.text.split(/[\n.!?]/)[0].slice(0,90),summary:input.text.slice(0,240),contact:input.contact,email:input.email,category:FLOWS.find(f=>f.id===input.flowId).category,processor:'Reglas locales'};
  if(input.flowId==='receipt'){
    const m=input.text.match(/(?:importe|monto|total)\s*:?\s*\$?\s*([\d.,]+)/i)||input.text.match(/\$\s*([\d.,]+)/);
    if(!m)throw new Error('No encontré un importe. Usá “Importe: $32.500,00”.');
    const raw=m[1];const normalized=raw.includes(',')?raw.replace(/\./g,'').replace(',','.'):raw.replace(/\.(?=\d{3}(?:\D|$))/g,'');
    const amount=Number(normalized);if(!Number.isFinite(amount)||amount<=0)throw new Error('El importe debe ser positivo.');
    result.amount=amount;result.currency='ARS';result.title='Revisar comprobante de '+input.contact;
  }
  return result;
}
export function createRun(input,now=new Date().toISOString()){
  const clean=validateInput(input);
  return {id:crypto.randomUUID(),input:clean,status:'pending',createdAt:now,updatedAt:now,attempts:0,steps:STEPS.map(name=>({name,status:'pending'})),events:[],analysis:null,taskId:null,notificationId:null};
}
export async function executeRun(run,adapters){
  if(run.status==='completed')return run;
  run.attempts+=1;run.status='running';
  const save=async()=>{run.updatedAt=new Date().toISOString();await adapters.save(run);};
  const log=(step,status,message)=>run.events.push({at:new Date().toISOString(),attempt:run.attempts,step,status,message});
  await save();
  for(let i=0;i<run.steps.length;i++){
    const step=run.steps[i];if(step.status==='completed')continue;
    step.status='running';step.error=null;log(i,'running',step.name);await save();
    try{
      if(i===0){run.analysis=await adapters.analyze(run.input);if(!run.analysis || typeof run.analysis.title!=='string' || typeof run.analysis.summary!=='string')throw new Error('La respuesta de análisis no tiene el formato esperado.');}
      if(i===1){const task=await adapters.createTask({id:'task-'+run.id,runId:run.id,title:run.analysis.title,contact:run.input.contact,category:run.analysis.category,status:'pending',createdAt:run.createdAt,amount:run.analysis.amount??null});run.taskId=task.id;}
      if(i===2){if(run.input.simulateFailure && run.attempts===1)throw new Error('Fallo de aviso simulado. Reintentá para continuar sin duplicar la tarea.');const notification=await adapters.notify(run);run.notificationId=notification.id;}
      step.status='completed';log(i,'completed','Paso completado');await save();
    }catch(error){step.status='failed';step.error=error.message||'No se pudo completar el paso.';run.status='failed';log(i,'failed',step.error);await save();return run;}
  }
  run.status='completed';log(null,'completed','Automatización completada');await save();return run;
}
