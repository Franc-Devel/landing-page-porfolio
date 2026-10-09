# Carpeta de Informes y Apuntes de Estudio

Colocá en esta carpeta tus archivos de estudio cuando los tengas:
- Informes de cátedra
- Apuntes en Markdown (`.md`)
- Documentos de texto (`.txt`)
- Resúmenes o PDFs de la materia

### Cómo pasar los temas a la aplicación web:
1. Revisá los temas del informe.
2. Abrí `assets/js/analysis-data.js` en el proyecto.
3. Copiá los nombres de los temas en `temas: [ ... ]`.
4. Cargá las preguntas en el formato:
   ```javascript
   {
     id: 1,
     t: 0, // tema 0, 1, 2...
     q: "¿Enunciado de la pregunta?",
     o: ["Opción A", "Opción B", "Opción C", "Opción D"],
     c: 0, // índice de la correcta
     e: "Explicación de la respuesta."
   }
   ```
