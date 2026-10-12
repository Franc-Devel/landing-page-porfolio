import {createRun,executeRun} from './engine.js';
export const SCENARIOS=[
 {flowId:'quote',label:'Nueva oportunidad',contact:'Lucía · Taller del Norte',text:'Necesitamos controlar stock y turnos de nuestro taller. Somos 4 personas y manejamos 180 productos. Pedimos una propuesta de implementación para este mes.'},
 {flowId:'receipt',label:'Comprobante recibido',contact:'Martín · Distribuidora Andina',text:'Comprobante de transferencia. Importe: $185.000,00. Concepto: anticipo de implementación de catálogo digital. Referencia: FAU-2048.'},
 {flowId:'followup',label:'Seguimiento pendiente',contact:'Sofía · Estudio Horizonte',text:'Pendiente: confirmar propuesta de automatización de consultas. Contactar mañana para coordinar una demostración con el equipo comercial.'},
 {flowId:'quote',label:'Probar recuperación',contact:'Diego · Agro Cumbre',text:'Necesitamos conectar las consultas de ventas con un tablero y recordatorios. Preparar presupuesto para 2 sucursales.',simulateFailure:true}
];
export async function seedActivity(state,adapters){
 for(const [i,c] of SCENARIOS.entries()){
  const run=createRun({...c,mode:'demo'},new Date(Date.now()-(SCENARIOS.length-i)*3600000).toISOString());
  state.runs.unshift(run);await executeRun(run,adapters);
 }
}
