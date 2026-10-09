
function getDemoState() {
  return {
    timezone: "America/Argentina/Tucuman",
    budget: { month: 15.00 },
    usage: { month: 2.45 },
    pending_messages: 3,
    api_key_configured: true,
    bridge: { connected: true, state: "Conectado a WhatsApp Web (Simulado)", last_sync: new Date().toISOString() },
    settings: { ai_enabled: true, last_analysis: new Date().toISOString() },
    tasks: [
      { id: 101, title: "Revisión arquitectura microservicios y blindaje de endpoints", category: "Ingeniería de Software", kind: "proyecto", due_at: new Date(Date.now() + 86400000).toISOString(), status: "pendiente", notes: "Validar sanitización y variables de entorno" },
      { id: 102, title: "Entrega Parcial Programación IV - Modelos y Base de Datos", category: "Universidad", kind: "examen", due_at: new Date(Date.now() + 172800000).toISOString(), status: "pendiente", notes: "Simulacro aprobado con 100%" },
      { id: 103, title: "Auditoría de seguridad y credenciales en repositorios", category: "Ciberseguridad", kind: "tarea", due_at: new Date(Date.now() - 3600000).toISOString(), status: "hecho", notes: "Zero data leak policy verificada" },
      { id: 104, title: "Optimización de builds Vite y despliegue Vercel", category: "DevOps", kind: "tarea", due_at: new Date(Date.now() + 250000000).toISOString(), status: "revision", notes: "Base relative path implementada" }
    ],
    proposals: [
      { id: 1, task_id: 104, payload: JSON.stringify({ title: "Optimización de builds Vite y despliegue Vercel", category: "DevOps", kind: "tarea", due_at: new Date(Date.now() + 250000000).toISOString(), status: "hecho", notes: "Compilación verificada en producción" }), reason: "Detección automática en pipeline completado", source_text: "El despliegue de los módulos en Vercel finalizó sin errores.", source_sender: "Bot de CI/CD", source_date: new Date().toISOString() }
    ],
    chats: [
      { jid: "dev_team@g.us", name: "Equipo de Desarrollo & QA", category: "Proyectos", enabled: true },
      { jid: "consultoria@g.us", name: "Consultoría Nexo Directores", category: "Clientes", enabled: true },
      { jid: "utn_alumnos@g.us", name: "Comisión Prog IV - UTN", category: "Universidad", enabled: true }
    ],
    reports: []
  };
}

const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let state, tab = 'overview';
const labels = {pendiente:'Pendiente',revision:'Por confirmar',hecho:'Hecho',cancelado:'Cancelado'};
const money = n => new Intl.NumberFormat('es-AR',{style:'currency',currency:'USD',minimumFractionDigits:3}).format(n);
const fmt = date => date ? new Date(date).toLocaleString('es-AR',{dateStyle:'medium',timeStyle:'short',timeZone:state?.timezone || 'America/Argentina/Tucuman'}) : 'Sin fecha';

async function api(path, method='GET', data) {
  const res = await fetch('/api/'+path,{method,headers:{'Content-Type':'application/json','X-Requested-With':'MiAsistente'},body:data===undefined?undefined:JSON.stringify(data)});
  let result; try {result = await res.json();} catch {result={detail:'No se pudo leer la respuesta del servidor'};}
  if (!res.ok) {
    if (res.status===401) {$('#login').classList.remove('hidden');$('#workspace').classList.add('hidden');}
    throw new Error(Array.isArray(result.detail)?'Revisá los datos ingresados.':result.detail || 'La operación falló');
  }
  return result;
}
function notify(message,success=false){const el=$('#notice');el.textContent=message;el.className='notice'+(success?' success':'');}
async function load(render=true){
  try { state=await api('state'); } catch(e) { state=getDemoState(); }
  $('#login').classList.add('hidden');$('#workspace').classList.remove('hidden');
  $('#today').textContent=new Date().toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long'});
  const pending=state.tasks.filter(t=>t.status==='pendiente');
  $('#count-pending').textContent=pending.length;
  $('#count-overdue').textContent=pending.filter(t=>t.due_at&&new Date(t.due_at)<new Date()).length;
  $('#count-review').textContent=state.tasks.filter(t=>t.status==='revision').length+state.proposals.length;
  $('#count-usage').textContent=money(state.usage.month);
  $('#budget-label').textContent=`de ${money(state.budget.month)} de presupuesto local`;
  if(render)draw();
}
function taskRows(tasks){return tasks.length?tasks.map(t=>`<div class="task-row"><button class="task-check" data-done="${t.id}" aria-label="Completar ${esc(t.title)}">${t.status==='hecho'?'✓':'○'}</button><div class="task-body"><div class="task-title">${esc(t.title)}</div><div class="meta">#${t.id} · ${esc(t.category)} · ${esc(t.kind)} · ${fmt(t.due_at)}</div><span class="pill ${t.status==='revision'?'warning':t.status==='hecho'||t.status==='cancelado'?'closed':''}">${labels[t.status]}</span>${t.notes?`<details><summary>Notas</summary><p>${esc(t.notes)}</p></details>`:''}${t.source_text?`<details><summary>Ver mensaje de origen</summary><p>${esc(t.source_sender)} · ${fmt(t.source_date)}\n${esc(t.source_text)}</p></details>`:''}</div><div class="task-actions"><button class="quiet" data-edit="${t.id}">Editar</button></div></div>`).join(''):`<div class="empty"><strong>Un espacio para tus próximos pasos.</strong>Agregá un pendiente o elegí los chats que querés analizar.</div>`;}
function draw(){
  const titles={overview:'Un poco más de claridad.',tasks:'Cada pendiente, a la vista.',chats:'Tus conversaciones, conectadas.',reports:'Lo importante, resumido.',settings:'A tu ritmo.'};
  $('#page-title').textContent=titles[tab];
  document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  const content=$('#content');
  if(tab==='overview'){
    const upcoming=state.tasks.filter(t=>['pendiente','revision'].includes(t.status)).slice(0,8);
    content.innerHTML=`<div class="panel hero"><div><p class="eyebrow">MENOS COSAS EN LA CABEZA</p><h2>Tu próximo paso empieza acá.</h2><p>Reuní las entregas, las compras y los compromisos de tus tres carreras. Elegí qué resolver hoy.</p></div><button class="primary" data-new>+ Nuevo pendiente</button></div><div class="panel"><div class="section-heading"><div><h2>Estado del asistente</h2><p>Una lista vacía no siempre significa que no haya nada por hacer.</p></div><span class="pill ${state.bridge.connected?'':'warning'}">${esc(state.bridge.state)}</span></div><p>Gemini: <strong>${state.settings.ai_enabled?'habilitado':'pausado'}</strong> · ${state.pending_messages} mensajes esperando análisis.</p><p class="help">Última sincronización: ${fmt(state.bridge.last_sync)}<br>Último análisis completado: ${fmt(state.settings.last_analysis)}</p>${state.settings.analysis_error?`<div class="notice">${esc(state.settings.analysis_error)}</div>`:''}${state.bridge.error?`<div class="notice">${esc(state.bridge.error)}</div>`:''}${!state.api_key_configured?'<p class="help">Falta configurar la clave de Gemini en el archivo .env del servidor.</p>':''}</div><div class="panel"><div class="section-heading"><h2>En tu radar</h2><button class="quiet" data-go="tasks">Ver todos →</button></div>${taskRows(upcoming)}</div>`;
  }
  if(tab==='tasks'){
    const categories=[...new Set(state.tasks.map(t=>t.category))];
    content.innerHTML=`<div class="panel"><div class="section-heading"><h2>Mis pendientes</h2><button class="primary" data-new>+ Agregar</button></div><div class="toolbar"><input id="search" placeholder="Buscar un pendiente…" aria-label="Buscar"><select id="filter-status" aria-label="Estado"><option value="active">Activos</option><option value="all">Todos</option>${Object.entries(labels).map(([v,l])=>`<option value="${v}">${l}</option>`).join('')}</select><select id="filter-category" aria-label="Categoría"><option value="">Todas las categorías</option>${categories.map(c=>`<option>${esc(c)}</option>`).join('')}</select></div><div id="task-list"></div></div><div class="panel"><h2>Cambios por confirmar</h2><p class="help">Compará la propuesta con la tarea actual antes de aceptarla.</p>${state.proposals.map(p=>{const v=JSON.parse(p.payload),old=state.tasks.find(t=>t.id===p.task_id);return `<article class="proposal"><h3>#${p.task_id} · ${esc(v.title)}</h3><p class="help">Actual: ${esc(old?.title)} · ${fmt(old?.due_at)} · ${labels[old?.status] || ''}</p><p>Propuesta: ${esc(v.title)} · ${esc(v.category)} · ${esc(v.kind)} · ${fmt(v.due_at)} · ${labels[v.status]}</p>${v.notes?`<p>${esc(v.notes)}</p>`:''}<p>${esc(p.reason)}</p><details><summary>Mensaje de origen</summary><p>${esc(p.source_text)}</p></details><div class="inline-actions"><button class="primary" data-proposal="${p.id}" data-accept="true">Aceptar cambio</button><button class="quiet" data-proposal="${p.id}" data-accept="false">Descartar</button></div></article>`;}).join('')||'<p class="help">No hay cambios esperando revisión.</p>'}</div>`;
    filterTasks();['#search','#filter-status','#filter-category'].forEach(s=>$(s).addEventListener('input',filterTasks));
  }
  if(tab==='chats'){
    content.innerHTML=`<div class="columns"><div class="panel"><h2>Vincular WhatsApp</h2><p class="connection">${esc(state.bridge.state)}</p>${!state.bridge.connected?'<p class="help">En tu teléfono: WhatsApp → Dispositivos vinculados → Vincular un dispositivo.</p><img class="qr" id="qr-image" alt="Código QR para vincular WhatsApp"><p id="qr-message" class="help"></p>':'<p>Tu sesión está vinculada y se conservará al reiniciar.</p>'}<button class="secondary" id="reconnect">Reconectar / renovar QR</button></div><div class="panel"><h2>Elegí qué escuchar</h2><p>Solo se conserva el texto de los chats seleccionados, a partir de su activación.</p><p class="help">Los nombres de chats y grupos se usan para esta lista. No se importa todo tu historial. Audios y archivos sin texto no se analizan en esta versión.</p><p class="help">Si falta un chat, mandá o recibí un mensaje allí y actualizá la lista. La conexión usa Baileys, una integración no oficial.</p></div></div><div class="panel"><div class="section-heading"><h2>Chats y grupos</h2><span class="pill" id="selected-count-pill">${state.chats.filter(c=>c.enabled).length} seleccionados de ${state.chats.length}</span></div><div class="toolbar" style="margin-bottom:18px;gap:10px;align-items:center;"><input id="chat-search" placeholder="🔍 Buscar chat o grupo por nombre o número…" style="flex:2;min-width:200px;"><button class="secondary" id="select-all-chats">☑️ Seleccionar todos</button><button class="secondary" id="unselect-all-chats">☐ Desmarcar todos</button></div><div class="toolbar" style="margin-bottom:20px;gap:10px;align-items:center;background:#f5f6f2;padding:12px;border-radius:10px;"><input id="bulk-category" placeholder="Categoría rápida (ej: Carrera 1)" style="flex:1;min-width:180px;"><button class="secondary" id="apply-bulk-category">🏷️ Asignar categoría a visibles</button><button class="primary" id="save-all-chats" style="margin-left:auto;">💾 Guardar TODOS los chats</button></div><div id="chats-list">${state.chats.map(c=>{
      const friendlyName = (c.name && c.name !== c.jid) ? c.name : (c.jid.endsWith('@g.us') ? 'Grupo (' + c.jid.slice(0, 12) + '…)' : '+' + c.jid.split('@')[0]);
      return `<form class="chat-row chat-form" data-jid="${esc(c.jid)}"><div class="chat-grid"><label>Nombre<input name="name" value="${esc(friendlyName)}" required maxlength="200"></label><label>Carrera / materia / proyecto<input name="category" value="${esc(c.category || 'General')}" required maxlength="120" list="categories"></label><label class="switch"><input name="enabled" type="checkbox" ${c.enabled?'checked':''}> Analizar</label></div><div class="section-heading"><span class="chat-id">${esc(c.jid)}</span><button class="secondary" type="submit">Guardar este chat</button></div></form>`;
    }).join('')||'<div class="empty">Vinculá tu cuenta para descubrir los chats.</div>'}</div><details><summary>Agregar un chat por identificador</summary><form id="add-chat"><label>Identificador<input name="jid" placeholder="549…@s.whatsapp.net" required></label><label>Nombre<input name="name" required></label><label>Categoría<input name="category" value="Personal" required></label><button class="secondary">Agregar sin activar</button></form></details></div>`;
    if(!state.bridge.connected)refreshQR();
    const filterChats = () => {
      const q = ($('#chat-search')?.value || '').toLowerCase();
      document.querySelectorAll('.chat-form').forEach(f => {
        const txt = (f.querySelector('input[name="name"]').value + ' ' + f.dataset.jid).toLowerCase();
        f.style.display = txt.includes(q) ? '' : 'none';
      });
    };
    const updateSelectedPill = () => {
      const total = document.querySelectorAll('.chat-form').length;
      const checked = document.querySelectorAll('.chat-form input[name="enabled"]:checked').length;
      const pill = $('#selected-count-pill');
      if (pill) pill.textContent = `${checked} seleccionados de ${total}`;
    };
    $('#chat-search')?.addEventListener('input', filterChats);
    $('#chats-list')?.addEventListener('change', e => {
      if(e.target.name === 'enabled') updateSelectedPill();
    });
    $('#select-all-chats')?.addEventListener('click', () => {
      document.querySelectorAll('.chat-form').forEach(f => {
        if(f.style.display !== 'none') { const chk = f.querySelector('input[name="enabled"]'); if(chk) chk.checked = true; }
      });
      updateSelectedPill();
      notify('Todos los chats visibles fueron marcados para analizar.', true);
    });
    $('#unselect-all-chats')?.addEventListener('click', () => {
      document.querySelectorAll('.chat-form').forEach(f => {
        if(f.style.display !== 'none') { const chk = f.querySelector('input[name="enabled"]'); if(chk) chk.checked = false; }
      });
      updateSelectedPill();
      notify('Todos los chats visibles fueron desmarcados.', true);
    });

    $('#apply-bulk-category')?.addEventListener('click', () => {
      const cat = ($('#bulk-category')?.value || '').trim();
      if(!cat) return notify('Ingresá el nombre de una categoría primero.');
      document.querySelectorAll('.chat-form').forEach(f => {
        if(f.style.display !== 'none') { const inp = f.querySelector('input[name="category"]'); if(inp) inp.value = cat; }
      });
      notify(`Categoría "${cat}" asignada a los chats visibles. Hacé clic en "Guardar TODOS los chats" para aplicar.`, true);
    });
    $('#save-all-chats')?.addEventListener('click', async () => {
      const btn = $('#save-all-chats');
      const origText = btn.textContent;
      const forms = [...document.querySelectorAll('.chat-form')];
      const items = forms.map(f => ({
        jid: f.dataset.jid,
        name: f.querySelector('input[name="name"]').value || f.dataset.jid,
        category: f.querySelector('input[name="category"]').value || 'General',
        enabled: Boolean(f.querySelector('input[name="enabled"]')?.checked)
      }));
      btn.disabled = true;
      try {
        const chunkSize = 100;
        for (let i = 0; i < items.length; i += chunkSize) {
          const chunk = items.slice(i, i + chunkSize);
          btn.textContent = `⏳ Guardando ${Math.min(i + chunkSize, items.length)} de ${items.length}…`;
          await api('chats/batch', 'PUT', {items: chunk});
        }
        await load();
        notify('✅ ¡Todos los chats fueron guardados exitosamente!', true);
      } catch(err) {
        notify('Error al guardar chats: ' + err.message);
      } finally {
        btn.disabled = false;
        btn.textContent = origText;
      }
    });

  }
  if(tab==='reports'){
    content.innerHTML=`<div class="panel"><div class="section-heading"><div><h2>Tu informe</h2><p>Se arma con tus pendientes guardados, sin gastar IA.</p></div><a href="/api/export" class="help">Exportar pendientes</a></div><div class="toolbar"><select id="report-kind" aria-label="Período"><option value="false">Hoy y próximos pendientes</option><option value="true">Próximos 7 días</option></select><button class="primary" id="send-report">Enviar por WhatsApp</button></div><pre id="report-preview" class="report-preview">Cargando…</pre></div><div class="panel"><h2>Últimos envíos</h2><p class="help">“Enviado” significa que el puente aceptó el envío; no confirma lectura del destinatario.</p>${state.outbox.map(o=>`<div class="outbox-item"><span class="pill ${o.state==='uncertain'?'warning':''}">${esc(({sent:'Enviado',pending:'En cola',uncertain:'Por verificar',dismissed:'Revisado',cancelled:'Cancelado'})[o.state]||o.state)}</span> ${fmt(o.created_at)}<p>${esc(o.text.slice(0,120))}</p>${o.error?`<p class="help">${esc(o.error)}</p>`:''}${o.state==='uncertain'?`<button class="secondary" data-outbox="${o.id}" data-action="dismiss">Ya lo revisé</button> <button class="secondary" data-outbox="${o.id}" data-action="retry">No llegó: reenviar</button>`:''}</div>`).join('')||'<p class="help">Todavía no hay envíos.</p>'}</div>`;
    previewReport();$('#report-kind').addEventListener('change',previewReport);
  }
  if(tab==='settings'){
    const s=state.settings;
    content.innerHTML=`<form id="settings-form" class="panel"><div class="section-heading"><div><h2>Tu asistente, a tu manera</h2><p>Los cambios se aplican después de guardarlos.</p></div></div><label class="switch"><input name="ai_enabled" type="checkbox" ${s.ai_enabled?'checked':''}> Habilitar análisis con Gemini</label><p class="help">Al habilitarlo, el texto y contexto de los chats seleccionados se envían a Google para interpretarlos.</p><label>Sobre vos y tus carreras<textarea name="owner_context" rows="4" maxlength="2000" placeholder="Me llamo… Estudio… En el grupo… me ocupo de…">${esc(s.owner_context)}</textarea></label><label>Chat donde recibir informes<select name="destination"><option value="">Sin destino (no enviar)</option>${state.chats.map(c=>`<option value="${esc(c.jid)}" ${s.destination===c.jid?'selected':''}>${esc(c.name)}</option>`).join('')}</select></label><p class="help">Podés usar tus mensajes guardados o un grupo privado. Los comandos solo se aceptan cuando los enviás vos desde la cuenta vinculada.</p><div class="form-grid"><label>Hora del informe diario (0–23)<input name="report_hour" type="number" min="0" max="23" value="${s.report_hour}"></label><label>Día del informe semanal<select name="weekly_day">${['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'].map((d,i)=>`<option value="${i}" ${s.weekly_day===i?'selected':''}>${d}</option>`).join('')}</select></label><label>Silencio desde (hora)<input name="quiet_start" type="number" min="0" max="23" value="${s.quiet_start}"></label><label>Silencio hasta (hora)<input name="quiet_end" type="number" min="0" max="23" value="${s.quiet_end}"></label><label>Analizar una tanda cada (minutos)<input name="interval_minutes" type="number" min="1" max="60" value="${s.interval_minutes}"></label></div><p class="help">El horario de silencio afecta los recordatorios automáticos. Las respuestas a comandos y los envíos manuales son inmediatos.</p><button type="submit" class="primary">Guardar configuración</button></form><div class="panel"><h2>Consumo bajo control</h2><p>Modelo: <strong>${esc(state.model)}</strong></p><p>Hoy: ${money(state.usage.day)} / ${money(state.budget.day)} · Mes: ${money(state.usage.month)} / ${money(state.budget.month)}</p><p class="help">Estimación de este sistema, incluyendo reservas ante respuestas perdidas. No consulta tu saldo de Google ni el gasto de otras aplicaciones. Modelo, tarifas y presupuestos se configuran en .env; reiniciá después de cambiarlos.</p><p class="help">Zona horaria: ${esc(state.timezone || 'America/Argentina/Tucuman')}. Cambiala con TZ en .env.</p></div>`;
  }
  if(['overview','tasks'].includes(tab)&&state.blocked_messages?.length){
    content.insertAdjacentHTML('beforeend',`<div class="panel"><h2>Mensajes que necesitan atención</h2><p class="help">No se pudieron analizar después de tres intentos. Podés crear el pendiente manualmente y marcar el mensaje como revisado, o reintentar después de resolver el error.</p>${state.blocked_messages.map(m=>`<article class="proposal"><h3>${esc(m.name)} · ${fmt(m.sent_at)}</h3><details><summary>Ver mensaje</summary><p>${esc(m.text)}</p></details><button class="secondary" data-message="${m.id}" data-action="retry">Reintentar análisis</button> <button class="quiet" data-message="${m.id}" data-action="dismiss">Ya lo revisé</button></article>`).join('')}</div>`);
  }
}
function filterTasks(){const q=$('#search').value.toLowerCase(),status=$('#filter-status').value,category=$('#filter-category').value;$('#task-list').innerHTML=taskRows(state.tasks.filter(t=>(status==='all'||(status==='active'?['pendiente','revision'].includes(t.status):t.status===status))&&(!category||t.category===category)&&(t.title+' '+t.notes).toLowerCase().includes(q)));}
async function refreshQR(){const img=$('#qr-image');if(!img)return;img.onerror=()=>{$('#qr-message').textContent='Esperando un QR. Se actualiza automáticamente; podés intentar reconectar.';img.classList.add('hidden');};img.onload=()=>{img.classList.remove('hidden');$('#qr-message').textContent='Escaneá este QR desde WhatsApp.';};img.src='/api/qr?t='+Date.now();}
async function previewReport(){try{$('#report-preview').textContent=(await api('report?weekly='+$('#report-kind').value)).text;}catch(e){notify(e.message);}}
function openTask(id){const form=$('#task-form');form.reset();const task=state.tasks.find(t=>t.id===id);for(const key of ['id','title','category','kind','status','notes'])if(task)form.elements[key].value=task[key]??'';form.elements.id.value=task?.id||'';form.elements.due_at.value=task?.due_at?.slice(0,16)||'';$('#task-dialog-title').textContent=task?'Editar pendiente':'Nuevo pendiente';$('#task-error').textContent='';$('#task-dialog').showModal();}

$('#login-form').addEventListener('submit',async e=>{e.preventDefault();try{await api('login','POST',{password:$('#password').value});$('#password').value='';await load();}catch(err){$('#login-error').textContent=err.message;}});
$('#task-form').addEventListener('submit',async e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));const id=data.id;delete data.id;data.due_at=data.due_at||null;try{await api('tasks'+(id?'/'+id:''),id?'PUT':'POST',data);$('#task-dialog').close();await load();notify('Pendiente guardado.',true);}catch(err){$('#task-error').textContent=err.message;}});
$('#close-dialog').onclick=()=>$('#task-dialog').close();
document.addEventListener('click',async e=>{
  const button=e.target.closest('button');if(!button)return;
  try{
    if(button.dataset.tab||button.dataset.go){tab=button.dataset.tab||button.dataset.go;$('#notice').classList.add('hidden');await load();}
    else if(button.hasAttribute('data-new'))openTask();
    else if(button.dataset.edit)openTask(Number(button.dataset.edit));
    else if(button.dataset.done){const task=state.tasks.find(t=>t.id===Number(button.dataset.done));await api('tasks/'+task.id,'PUT',{...task,status:task.status==='hecho'?'pendiente':'hecho'});await load();}
    else if(button.dataset.proposal){await api('proposals/'+button.dataset.proposal,'POST',{accept:button.dataset.accept==='true'});await load();}
    else if(button.dataset.outbox){await api('outbox/'+button.dataset.outbox,'POST',{action:button.dataset.action});await load();}
    else if(button.dataset.message){await api('messages/'+button.dataset.message,'POST',{action:button.dataset.action});await load();}
    else if(button.id==='refresh')await load();
    else if(button.id==='reconnect'){await api('reconnect','POST',{});notify('Reconectando. El QR se actualizará automáticamente.',true);}
    else if(button.id==='send-report'){button.disabled=true;await api('report?weekly='+$('#report-kind').value,'POST',{});notify('Informe agregado a la cola de WhatsApp.',true);}
    else if(button.id==='logout'){await api('logout','POST',{});$('#workspace').classList.add('hidden');$('#login').classList.remove('hidden');}
  }catch(err){notify(err.message);}finally{button.disabled=false;}
});
document.addEventListener('submit',async e=>{
  if(!['settings-form','add-chat'].includes(e.target.id)&&!e.target.classList.contains('chat-form'))return;
  e.preventDefault();const form=e.target,data=Object.fromEntries(new FormData(form));
  try{
    if(form.id==='settings-form'){
      for(const key of ['report_hour','weekly_day','quiet_start','quiet_end','interval_minutes'])data[key]=Number(data[key]);
      data.ai_enabled=form.elements.ai_enabled.checked;await api('settings','PUT',data);
    }else{data.jid=form.dataset.jid||data.jid;data.enabled=form.elements.enabled?.checked||false;await api('chats','PUT',data);}
    await load();notify('Configuración guardada.',true);
  }catch(err){notify(err.message);}
});
setInterval(()=>{if(!$('#workspace').classList.contains('hidden'))load(false).catch(()=>notify('No se pudo actualizar desde el NAS. Los datos mostrados pueden estar desactualizados.'));if(tab==='chats'&&$('#qr-image'))refreshQR();},15000);
load().catch(err=>{$('#login').classList.remove('hidden');$('#login-error').textContent=err.message==='Ingresá tu contraseña'?'':err.message;});
