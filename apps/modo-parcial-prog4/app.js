const topicSummaries = [
  ["Variables, alcance y expresiones", "const por defecto, let cuando el vínculo cambia y var con alcance de función.", "Alcance global, de función y de bloque; sombreado, hoisting y zona muerta temporal.", "Expresiones, sentencias, precedencia, asociatividad e incremento."],
  ["El tipo boolean", "true y false frente a valores truthy y falsy.", "Los ocho falsy: false, 0, -0, 0n, cadena vacía, null, undefined y NaN.", "Cortocircuito con && y ||, coalescencia con ??, igualdad estricta y De Morgan."],
  ["Los tipos number y bigint", "number representa enteros y decimales e incluye Infinity, NaN y -0.", "Precisión decimal, enteros seguros, redondeo y diferencia entre calcular y formatear.", "bigint maneja enteros grandes, pero no se mezcla directamente con number."],
  ["El tipo string y Unicode", "Strings inmutables, plantillas literales, búsqueda, extracción y transformación.", "length cuenta unidades UTF-16; for...of recorre puntos de código.", "Intl.Segmenter trata grafemas, normalize equivalencias e Intl.Collator orden humano."],
  ["undefined, null y ausencia", "undefined suele ser falta de asignación; null expresa ausencia intencional.", "Ausencia no equivale a falsedad: 0, cadena vacía y false pueden ser válidos.", "Usos de ??, ?., parámetros predeterminados y estados explícitos."],
  ["Conversión y coerción", "String, Number, Boolean y BigInt convierten de forma explícita.", "Number exige el texto completo; parseInt y parseFloat leen desde el comienzo.", "La coerción, el operador + y la igualdad flexible requieren especial atención."],
  ["Symbol y protocolos", "Cada Symbol es una identidad única; Symbol.for usa un registro global.", "Los símbolos sirven como claves sin colisiones y tienen reglas propias de enumeración.", "Symbol.iterator y otros símbolos conocidos conectan objetos con protocolos del lenguaje."],
  ["Arrays y matrices", "Acceso, búsqueda, spread, desestructuración y diferencia entre copias y mutaciones.", "slice y toSorted no mutan; splice y sort sí lo hacen.", "Matrices, pilas, colas, arrays dispersos e índices válidos."],
  ["Objetos y referencias", "Las variables guardan referencias y === compara identidad, no contenido.", "Propiedades propias, heredadas, enumerables, descriptores y claves dinámicas.", "Spread y Object.assign copian un nivel; structuredClone cubre copias profundas comunes."],
  ["Map, Set y colecciones", "Map acepta claves de cualquier tipo; Set conserva valores únicos.", "Ambos mantienen orden de inserción y comparan objetos por identidad.", "WeakMap y WeakSet no son enumerables y no impiden la recolección de sus claves."],
  ["Estructuras de control", "if, switch, ternario y guardas según la forma de la decisión.", "for, while, do...while, for...of y for...in; valores frente a claves.", "break, continue, return y throw cambian el flujo de ejecución."],
  ["Errores y excepciones", "throw señala que no se pudo cumplir un contrato.", "try, catch y finally controlan propagación, recuperación y limpieza.", "Capturá donde puedas resolver o agregar contexto sin ocultar el error original."],
  ["Funciones", "Declaraciones, expresiones y arrows; parámetros, argumentos, rest y spread.", "Alcance léxico, clausuras y diferencias de this en funciones comunes y arrow.", "Funciones de orden superior, composición, recursión y generadores."],
  ["Programación funcional", "Las funciones puras no mutan estado externo y son previsibles.", "map transforma, filter selecciona y reduce acumula.", "Los pipelines separan etapas; la inmutabilidad reduce efectos compartidos."],
  ["Recursividad y árboles", "Caso base, reducción del problema y combinación del resultado.", "La pila de llamadas limita profundidad; puede reemplazarse por una pila explícita.", "Recorridos preorden, inorden y postorden e invariante del árbol de búsqueda."],
  ["Programación asincrónica", "Una promesa pasa de pendiente a cumplida o rechazada una sola vez.", "async devuelve una promesa y await pausa solamente esa función.", "Promise.all, allSettled, race y any responden a necesidades distintas."],
  ["Archivos con Node.js", "Rutas relativas, absolutas, process.cwd() y ubicación del módulo.", "fs/promises para archivos completos, FileHandle para control y streams para volumen.", "Codificación, cierre de recursos, backpressure y prevención de path traversal."],
  ["Desarrollo web y clima", "HTML da semántica, CSS presentación y JavaScript comportamiento con DOM y eventos.", "Cascada, especificidad, caja, Flexbox, Grid, media queries y accesibilidad.", "Validación, URLs, APIs, estados de interfaz y manejo de datos viejos en la app del clima."],
  ["Arrow.js e inventario", "reactive observa datos y las funciones de plantilla declaran dependencias.", "Los componentes devuelven plantillas y key conserva identidad en listas.", "Borradores separados, eventos, enlace de inputs y reemplazo explícito de arrays."],
  ["API REST", "HTTP es pedido-respuesta y sin estado; URL, método, cabeceras y cuerpo tienen roles distintos.", "GET, POST, PUT, PATCH, DELETE, idempotencia y códigos de estado.", "JSON.stringify y response.json; fetch resuelve en 4xx/5xx y exige comprobar response.ok."]
];

const elementIds = ["restartButton", "scoreValue", "streakValue", "levelValue", "livesValue", "questionCounter", "bestScore", "progressBar", "startScreen", "quizScreen", "endScreen", "modeSelect", "startButton", "studyGuide", "modulePlan", "levelPlan", "unitBadge", "difficultyBadge", "questionText", "answersList", "feedbackBox", "nextButton", "resultTitle", "resultText", "finalScore", "accuracyText", "mistakesBox", "celebration", "againButton", "retryButton"];
const els = Object.fromEntries(elementIds.map(id => [id, document.getElementById(id)]));
const questions = PROGRAMMING_DATA.preguntas.map(question => ({ ...question, topic: PROGRAMMING_DATA.temas[question.t] }));
const FIRST_PARTIAL_P4_IDS = [4, 5, 7, 21, 27, 35, 55, 56, 57, 76, 88, 92, 96, 99, 106, 127, 139, 142, 143, 163, 171, 177, 181, 185, 203, 215, 219, 240, 257, 265, 269, 275, 276, 281, 286, 288, 289, 301, 303, 308, 309, 313, 320, 326, 328, 346, 353, 364, 372, 383];
const MINIMUM_GRADE = 6;
const examModels = {
  "exam-a": {
    title: "Modelo A",
    questionIds: [3, 7, 15, 24, 35, 44, 54, 62, 74, 96, 104, 116, 130, 148, 165, 184, 204, 228, 248, 269, 285, 315, 329, 340, 345, 354, 364, 370, 380, 391]
  },
  "exam-b": {
    title: "Modelo B",
    questionIds: [5, 9, 18, 28, 37, 53, 64, 78, 93, 111, 119, 141, 154, 168, 176, 190, 197, 209, 220, 231, 240, 254, 272, 292, 307, 333, 349, 366, 376, 393]
  }
};
const gameLevels = [
  { name: "Fundamentos", description: "Sintaxis, tipos y estructuras básicas.", minRank: 0, maxRank: 0.35 },
  { name: "Construcción", description: "Transformaciones, decisiones y funciones.", minRank: 0.35, maxRank: 0.6 },
  { name: "Aplicación", description: "Datos, asincronía y casos de uso reales.", minRank: 0.6, maxRank: 0.8 },
  { name: "Desafío final", description: "Conceptos avanzados e integración de temas.", minRank: 0.8, maxRank: 1.01 }
];

let deck = [];
let current = 0;
let score = 0;
let streak = 0;
let lives = 8;
let correct = 0;
let answered = false;
let mistakes = [];
let activeMode = null;
let activeGameLevel = null;

const shuffle = list => [...list].sort(() => Math.random() - 0.5);
const escapeHtml = text => String(text).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const formatText = text => escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\n/g, "<br>");
const requiredCorrectAnswers = total => Math.ceil(total * MINIMUM_GRADE / 10);
const allowedMistakes = total => total - requiredCorrectAnswers(total);
const unlockedGameLevel = () => Math.min(gameLevels.length, Math.max(1, Number(localStorage.getItem("programmingUnlockedLevel") || 1)));
const isGameLevel = mode => mode?.startsWith("level:");
const gameLevelNumber = mode => Number(mode.split(":")[1]);

function savedMistakeIds() {
  return new Set(JSON.parse(localStorage.getItem("programmingMistakes") || "[]"));
}

function prioritizeMistakes(pool, limit = pool.length) {
  const failedIds = savedMistakeIds();
  const failed = pool.filter(question => failedIds.has(question.id));
  const newQuestions = pool.filter(question => !failedIds.has(question.id));
  return [...shuffle(failed), ...shuffle(newQuestions)].slice(0, limit);
}

function setScreen(active) {
  [els.startScreen, els.quizScreen, els.endScreen].forEach(screen => screen.classList.toggle("active", screen === active));
}

function countQuestions(topicIndex) {
  return questions.filter(question => question.t === topicIndex).length;
}

function renderStudyContent() {
  els.studyGuide.innerHTML = topicSummaries.map((topic, topicIndex) => `
    <article class="summary-card">
      <div class="summary-card-head"><span>Tema ${topicIndex + 1}</span><strong>${countQuestions(topicIndex)} preguntas</strong></div>
      <h4>${formatText(topic[0])}</h4>
      <ul>${topic.slice(1).map(point => `<li>${formatText(point)}</li>`).join("")}</ul>
    </article>`).join("");

  els.modulePlan.innerHTML = PROGRAMMING_DATA.temas.map((title, topicIndex) => `
    <article class="module-card">
      <header><div><small>Tema ${topicIndex + 1}</small><h4>${formatText(title)}</h4></div>
      <div class="question-count"><strong>${countQuestions(topicIndex)}</strong><span>preguntas</span></div></header>
      <button class="module-button" type="button" data-topic="${topicIndex}">Practicar tema</button>
    </article>`).join("");

  els.modulePlan.querySelectorAll("[data-topic]").forEach(button => {
    button.addEventListener("click", () => startQuiz(`topic:${button.dataset.topic}`));
  });

  renderGameLevels();
}

function renderGameLevels() {
  const unlocked = unlockedGameLevel();
  els.levelPlan.innerHTML = gameLevels.map((level, index) => {
    const number = index + 1;
    const isUnlocked = number <= unlocked;
    const isCurrent = number === unlocked;
    return `<article class="level-card ${isUnlocked ? "unlocked" : "locked"}">
      <div class="level-card-head"><span>Nivel ${number}</span><strong>${isUnlocked ? isCurrent ? "Disponible" : "Superado" : "Bloqueado"}</strong></div>
      <h4>${level.name}</h4><p>${level.description}</p>
      <small>15 preguntas · 9 aciertos para aprobar</small>
      <button class="level-button" type="button" data-level="${number}" ${isUnlocked ? "" : "disabled"}>${isUnlocked ? "Jugar nivel" : "🔒 Bloqueado"}</button>
    </article>`;
  }).join("");
  els.levelPlan.querySelectorAll("[data-level]").forEach(button => {
    button.addEventListener("click", () => startQuiz(`level:${button.dataset.level}`));
  });
}

function buildDeck(mode) {
  if (mode === "first-partial") {
    const questionById = new Map(questions.map(question => [question.id, question]));
    return FIRST_PARTIAL_P4_IDS.map(id => questionById.get(id));
  }
  if (isGameLevel(mode)) {
    const level = gameLevels[gameLevelNumber(mode) - 1];
    return shuffle(questions.filter(question => {
      const topicQuestions = questions.filter(candidate => candidate.t === question.t);
      const rank = topicQuestions.findIndex(candidate => candidate.id === question.id) / topicQuestions.length;
      return rank >= level.minRank && rank < level.maxRank;
    })).slice(0, 15);
  }
  if (examModels[mode]) {
    const questionById = new Map(questions.map(question => [question.id, question]));
    return shuffle(examModels[mode].questionIds.map(id => questionById.get(id)));
  }
  if (mode.startsWith("topic:")) {
    const topicIndex = Number(mode.split(":")[1]);
    return prioritizeMistakes(questions.filter(question => question.t === topicIndex));
  }
  if (mode === "mistakes") {
    const failedIds = savedMistakeIds();
    const failed = questions.filter(question => failedIds.has(question.id));
    return shuffle(failed.length ? failed : questions).slice(0, failed.length || 20);
  }
  if (mode === "full") return prioritizeMistakes(questions);
  return prioritizeMistakes(questions, mode === "express" ? 10 : 20);
}

function startQuiz(mode = els.modeSelect.value) {
  activeMode = mode;
  activeGameLevel = isGameLevel(mode) ? gameLevelNumber(mode) : null;
  deck = buildDeck(mode);
  current = 0;
  score = 0;
  streak = 0;
  lives = allowedMistakes(deck.length);
  correct = 0;
  answered = false;
  mistakes = [];
  setScreen(els.quizScreen);
  renderQuestion();
}

function returnToStart() {
  lives = 0;
  streak = 0;
  answered = false;
  activeMode = null;
  activeGameLevel = null;
  els.progressBar.style.width = "0%";
  els.questionCounter.textContent = "Elegí un modo para empezar";
  setScreen(els.startScreen);
  renderHud();
}

function renderHud() {
  els.scoreValue.textContent = score;
  els.streakValue.textContent = streak;
  els.levelValue.textContent = activeGameLevel || Math.max(1, Math.floor(correct / 5) + 1);
  els.livesValue.textContent = lives;
  els.bestScore.textContent = `Mejor: ${localStorage.getItem("programmingBest") || 0}`;
}

function renderQuestion() {
  const question = deck[current];
  answered = false;
  els.nextButton.disabled = true;
  els.nextButton.textContent = "Siguiente";
  els.feedbackBox.hidden = true;
  els.feedbackBox.className = "feedback-box";
  els.unitBadge.textContent = activeGameLevel ? `Nivel ${activeGameLevel}` : `Tema ${question.t + 1}`;
  els.difficultyBadge.textContent = question.topic;
  els.questionText.innerHTML = formatText(question.q);
  els.questionCounter.textContent = `Pregunta ${current + 1} de ${deck.length}`;
  els.progressBar.style.width = `${(current / deck.length) * 100}%`;
  const shuffledOptions = shuffle(question.o.map((option, optionIndex) => ({ option, optionIndex })));
  els.answersList.innerHTML = shuffledOptions.map(({ option, optionIndex }, displayIndex) => `
    <button type="button" class="answer-button" data-answer="${optionIndex}">
      <span class="answer-key">${String.fromCharCode(65 + displayIndex)}</span><span class="answer-text">${formatText(option)}</span><span class="answer-state" aria-hidden="true"></span>
    </button>`).join("");
  els.answersList.querySelectorAll("[data-answer]").forEach(button => {
    button.addEventListener("click", () => answerQuestion(Number(button.dataset.answer)));
  });
  renderHud();
}

function answerQuestion(choice) {
  if (answered) return;
  answered = true;
  const question = deck[current];
  const isCorrect = choice === question.c;
  els.answersList.querySelectorAll("[data-answer]").forEach(button => {
    const optionIndex = Number(button.dataset.answer);
    button.disabled = true;
    if (optionIndex === question.c) button.classList.add("correct");
    if (optionIndex === choice && !isCorrect) button.classList.add("wrong");
  });
  if (isCorrect) {
    streak += 1;
    correct += 1;
    score += 100 + Math.min(streak * 10, 100);
  } else {
    streak = 0;
    mistakes.push(question);
    lives = Math.max(0, allowedMistakes(deck.length) - mistakes.length);
  }
  els.feedbackBox.hidden = false;
  els.feedbackBox.classList.add(isCorrect ? "success" : "incorrect");
  const canStillPass = mistakes.length <= allowedMistakes(deck.length);
  const lifeMessage = !isCorrect && !canStillPass
    ? ` Superaste el margen de ${allowedMistakes(deck.length)} error${allowedMistakes(deck.length) === 1 ? "" : "es"} para aprobar con ${MINIMUM_GRADE}.`
    : !isCorrect && lives === 0
      ? ` Ya usaste el margen de errores: necesitás acertar las restantes para llegar a ${MINIMUM_GRADE}.`
      : "";
  els.feedbackBox.innerHTML = `<strong>${isCorrect ? "Correcto" : `La respuesta correcta es ${String.fromCharCode(65 + question.c)}`}</strong><p>${formatText(question.e)}${lifeMessage}</p>`;
  els.nextButton.disabled = false;
  els.nextButton.textContent = !canStillPass || current === deck.length - 1 ? "Ver resultado" : "Siguiente";
  renderHud();
}

function nextQuestion() {
  if (!answered) return;
  if (mistakes.length <= allowedMistakes(deck.length) && current < deck.length - 1) {
    current += 1;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const answeredQuestions = current + 1;
  const attemptedQuestions = deck.slice(0, answeredQuestions);
  const accuracy = Math.round((correct / answeredQuestions) * 100);
  const grade = correct * 10 / deck.length;
  const passed = correct >= requiredCorrectAnswers(deck.length);
  const exhaustedMargin = mistakes.length > allowedMistakes(deck.length);
  const gameLevel = activeGameLevel ? gameLevels[activeGameLevel - 1] : null;
  const wasUnlocked = gameLevel ? unlockedGameLevel() : 0;
  const unlockedNextLevel = Boolean(gameLevel && passed && activeGameLevel === wasUnlocked && activeGameLevel < gameLevels.length);
  if (unlockedNextLevel) localStorage.setItem("programmingUnlockedLevel", String(activeGameLevel + 1));
  const priorBest = Number(localStorage.getItem("programmingBest") || 0);
  localStorage.setItem("programmingBest", Math.max(priorBest, score));
  const storedMistakes = new Set(JSON.parse(localStorage.getItem("programmingMistakes") || "[]"));
  mistakes.forEach(question => storedMistakes.add(question.id));
  attemptedQuestions.filter(question => !mistakes.includes(question)).forEach(question => storedMistakes.delete(question.id));
  localStorage.setItem("programmingMistakes", JSON.stringify([...storedMistakes]));
  els.resultTitle.textContent = exhaustedMargin ? "No llegaste al 6" : passed && gameLevel ? `¡Nivel ${activeGameLevel} superado!` : passed ? "Aprobaste el bloque" : "Conviene repasar";
  els.resultText.textContent = exhaustedMargin
    ? `La ronda terminó porque superaste el margen de errores. Para aprobar necesitás ${requiredCorrectAnswers(deck.length)} de ${deck.length} respuestas correctas.`
    : passed && gameLevel
      ? unlockedNextLevel
        ? `¡Buen trabajo! Desbloqueaste el Nivel ${activeGameLevel + 1}: ${gameLevels[activeGameLevel].name}.`
        : activeGameLevel === gameLevels.length
          ? "¡Completaste todos los niveles! Ya estás listo para volver a desafiarte con los simulacros."
          : `Nivel completado. Podés repetirlo para mejorar tu puntaje o avanzar al siguiente.`
      : passed
      ? `Completaste el bloque con la nota mínima de aprobación (${MINIMUM_GRADE}) o más.`
      : `Para aprobar necesitás ${requiredCorrectAnswers(deck.length)} de ${deck.length} respuestas correctas.`;
  els.finalScore.textContent = score;
  els.accuracyText.textContent = `Nota estimada: ${grade.toLocaleString("es-AR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} · ${accuracy}% · ${correct} de ${answeredQuestions} correctas`;
  els.mistakesBox.innerHTML = mistakes.length
    ? `<h3>Para volver a mirar</h3>${mistakes.map(question => `<p><strong>${formatText(question.topic)}:</strong> ${formatText(question.q)}</p>`).join("")}`
    : "<h3>Sin errores en esta ronda</h3><p>Probá otro tema o el modo completo.</p>";
  els.celebration.hidden = !(gameLevel && passed);
  els.celebration.innerHTML = gameLevel && passed ? `<span>🎉</span><span>⭐</span><span>🏆</span><p>${unlockedNextLevel ? "¡Nuevo nivel desbloqueado!" : "¡Misión cumplida!"}</p>` : "";
  els.retryButton.hidden = !gameLevel || passed;
  els.againButton.textContent = gameLevel ? "Volver a niveles" : "Jugar de nuevo";
  if (gameLevel) renderGameLevels();
  els.progressBar.style.width = "100%";
  setScreen(els.endScreen);
  renderHud();
}

els.startButton.addEventListener("click", () => startQuiz());
els.nextButton.addEventListener("click", nextQuestion);
els.againButton.addEventListener("click", returnToStart);
els.retryButton.addEventListener("click", () => startQuiz(activeMode));
els.restartButton.addEventListener("click", returnToStart);

renderStudyContent();
renderHud();
