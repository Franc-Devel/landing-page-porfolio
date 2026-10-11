
const INITIAL_ALUMNOS = [{"nombre":"Agustin","apellido":"Delgado","edad":32,"email":"Agustin@gmail.com","comision":"Comisión 1 - Prog III","activo":true,"id":"1","id_alumno":1},{"nombre":"Oriana","apellido":"Gordillo","edad":19,"email":"oriana@gmail.com","comision":"Comisión 1 - Prog III","activo":true,"id":"2","id_alumno":2},{"nombre":"Lautaro","apellido":"Fernández","edad":24,"email":"lautaro@gmail.com","comision":"Comisión 2 - Prog III","activo":true,"id":"3","id_alumno":3}];

function getLocalAlumnos() {
  const data = localStorage.getItem("alumnos_crud_db");
  if (!data) {
    localStorage.setItem("alumnos_crud_db", JSON.stringify(INITIAL_ALUMNOS));
    return [...INITIAL_ALUMNOS];
  }
  return JSON.parse(data);
}

function saveLocalAlumnos(list) {
  localStorage.setItem("alumnos_crud_db", JSON.stringify(list));
}

const API_URL = "http://localhost:3000/alumnos";

// Referencias al DOM
const form = document.getElementById("alumno-form");
const alumnoIdInput = document.getElementById("alumno-id");
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const edadInput = document.getElementById("edad");
const emailInput = document.getElementById("email");
const comisionInput = document.getElementById("comision");
const activoInput = document.getElementById("activo");
const tbody = document.getElementById("alumnos-tbody");
const statusMessage = document.getElementById("status-message");
const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
const reloadBtn = document.getElementById("reload-btn");

let alumnosCache = [];

// --- GESTIÓN DE MENSAJES Y UI ---

function mostrarMensaje(texto, tipo = "success") {
  statusMessage.textContent = texto;
  // Adaptado para las alertas de Bootstrap
  statusMessage.className = `alert alert-${tipo === "success" ? "success" : "danger"} mt-3`;
  statusMessage.classList.remove("d-none");

  // Autocerrar mensaje después de 5 segundos
  setTimeout(limpiarMensaje, 5000);
}

function limpiarMensaje() {
  statusMessage.textContent = "";
  statusMessage.className = "alert d-none";
}

function obtenerDatosFormulario() {
  return {
    nombre: nombreInput.value.trim(),
    apellido: apellidoInput.value.trim(),
    edad: edadInput.value ? Number(edadInput.value) : null,
    email: emailInput.value.trim(),
    comision: comisionInput.value.trim(),
    activo: activoInput.checked,
  };
}

function validarAlumno(alumno) {
  if (!alumno.nombre || !alumno.apellido || !alumno.email) {
    return "Nombre, apellido y email son obligatorios.";
  }
  if (
    alumno.edad !== null &&
    (isNaN(alumno.edad) || alumno.edad < 1 || alumno.edad > 120)
  ) {
    return "La edad debe estar entre 1 y 120.";
  }
  return "";
}

function resetFormulario() {
  form.reset();
  alumnoIdInput.value = "";
  activoInput.checked = true;
  formTitle.textContent = "Agregar alumno";
  submitBtn.textContent = "Guardar alumno";
  cancelBtn.hidden = true;
}

function cargarAlumnoEnFormulario(alumno) {
  // Guardamos el id real (ej: qD4CK...) en el input oculto para que el PUT funcione
  alumnoIdInput.value = String(alumno.id);

  nombreInput.value = alumno.nombre ?? "";
  apellidoInput.value = alumno.apellido ?? "";
  edadInput.value = alumno.edad ?? "";
  emailInput.value = alumno.email ?? "";
  comisionInput.value = alumno.comision ?? "";
  activoInput.checked = Boolean(alumno.activo);

  // Mostramos el ID numérico en el título para que quede bien
  formTitle.textContent = `Editar alumno #${alumno.id_alumno}`;
  submitBtn.textContent = "Actualizar alumno";
  cancelBtn.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- LOGICA DE TABLA ---

function crearFilaAlumno(alumno) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><strong>${alumno.id_alumno}</strong></td>
    <td>${alumno.nombre ?? ""}</td>
    <td>${alumno.apellido ?? ""}</td>
    <td>${alumno.edad ?? "-"}</td>
    <td>${alumno.email ?? ""}</td>
    <td>${alumno.comision ?? "-"}</td>
    <td>
      <span class="badge ${alumno.activo ? "bg-success" : "bg-secondary"}">
        ${alumno.activo ? "Sí" : "No"}
      </span>
    </td>
    <td>
      <div class="d-flex gap-2 justify-content-center">
        <button type="button" class="btn btn-sm btn-outline-primary edit-btn" data-id="${alumno.id}">Editar</button>
        <button type="button" class="btn btn-sm btn-outline-danger delete-btn" data-id="${alumno.id}">Eliminar</button>
      </div>
    </td>
  `;
  return tr;
}

function renderAlumnos(alumnos) {
  tbody.innerHTML = "";
  if (!alumnos.length) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted py-4">No hay alumnos cargados.</td></tr>`;
    return;
  }
  alumnos.forEach((alumno) => {
    tbody.appendChild(crearFilaAlumno(alumno));
  });
}

// --- COMUNICACIÓN CON API (FETCH) ---

async function pedirJson(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const detalle = await response.text();
    throw new Error(
      `${response.status} ${response.statusText}${detalle ? ` - ${detalle}` : ""}`,
    );
  }
  return response.status === 204 ? null : response.json();
}

async function listarAlumnos() {
  try {
    const alumnos = await pedirJson(API_URL);
    alumnosCache = alumnos;
    renderAlumnos(alumnosCache);
  } catch (error) {
    mostrarMensaje(`Error al listar alumnos: ${error.message}`, "error");
  }
}

async function crearAlumno(alumno) {
  try {
    const alumnosActuales = await pedirJson(API_URL);
    // Calculamos nuestro número de ID independiente
    const nuevoIdNumerico = alumnosActuales.length + 1;

    const payload = {
      ...alumno,
      id_alumno: nuevoIdNumerico, // Este es nuestro ID real para la vista
    };

    if (payload.edad === null) delete payload.edad;

    await pedirJson(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    throw new Error("Error al crear alumno: " + error.message);
  }
}

async function actualizarAlumno(id, alumno) {
  // Buscamos el alumno original para no perder su "id_alumno" numérico
  const alumnoOriginal = alumnosCache.find((a) => String(a.id) === String(id));

  const payload = {
    ...alumno,
    id: id,
    id_alumno: alumnoOriginal ? alumnoOriginal.id_alumno : null,
  };

  if (payload.edad === null) {
    delete payload.edad;
  }

  await pedirJson(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

async function eliminarAlumno(id) {
  await pedirJson(`${API_URL}/${id}`, { method: "DELETE" });
}

// --- EVENTOS ---

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const alumno = obtenerDatosFormulario();
  const errorValidacion = validarAlumno(alumno);

  if (errorValidacion) {
    mostrarMensaje(errorValidacion, "error");
    return;
  }

  try {
    const id = alumnoIdInput.value;
    if (id) {
      await actualizarAlumno(id, alumno);
      mostrarMensaje("Alumno actualizado correctamente.");
    } else {
      await crearAlumno(alumno);
      mostrarMensaje("Alumno creado correctamente.");
    }
    resetFormulario();
    await listarAlumnos();
  } catch (error) {
    mostrarMensaje(
      `No se pudo procesar la solicitud: ${error.message}`,
      "error",
    );
  }
});

cancelBtn.addEventListener("click", () => {
  resetFormulario();
  limpiarMensaje();
});

reloadBtn.addEventListener("click", listarAlumnos);

tbody.addEventListener("click", async (event) => {
  const target = event.target;
  const id = target.dataset.id;
  if (!id) return;

  if (target.classList.contains("edit-btn")) {
    const alumno = alumnosCache.find((item) => String(item.id) === String(id));
    if (alumno) {
      cargarAlumnoEnFormulario(alumno);
      limpiarMensaje();
    }
  }

  if (target.classList.contains("delete-btn")) {
    if (confirm("¿Estás seguro de que deseas eliminar este alumno?")) {
      try {
        await eliminarAlumno(id);
        mostrarMensaje("Alumno eliminado correctamente.");
        await listarAlumnos();
        if (alumnoIdInput.value === String(id)) resetFormulario();
      } catch (error) {
        mostrarMensaje(`Error al eliminar: ${error.message}`, "error");
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", listarAlumnos);
