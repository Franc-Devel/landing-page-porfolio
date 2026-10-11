# Aplicacion Web CRUD de Alumnos

Proyecto frontend en HTML, CSS y JavaScript que consume una API REST simulada con `json-server` para gestionar alumnos.

## Estructura

- `index.html`: interfaz principal con formulario y tabla de alumnos.
- `styles.css`: estilos de la aplicacion (incluye responsive basico).
- `index.js`: logica CRUD con `fetch` y validaciones.
- `db.json`: base de datos simulada para `json-server`.

## Requisitos

- Node.js instalado.

## Instalacion y ejecucion

1. Instalar `json-server` (global o local):

```bash
npm install -g json-server
```

2. Iniciar la API REST simulada en la carpeta del proyecto:

```bash
json-server --watch db.json --port 3000
```

3. Abrir `index.html` en el navegador.

## Endpoint utilizado

- `http://localhost:3000/alumnos`

## Operaciones implementadas

- **GET** listar alumnos al cargar.
- **POST** crear alumno desde formulario.
- **PUT** actualizar alumno seleccionado.
- **DELETE** eliminar alumno con confirmacion previa.

## Validaciones

- Campos obligatorios: `nombre`, `apellido`, `email`.
- `edad` opcional, pero si se carga debe estar entre 1 y 120.

## Notas

- Se muestran mensajes de exito/error para cada operacion.
- Interfaz responsive basica para escritorio y mobile.
