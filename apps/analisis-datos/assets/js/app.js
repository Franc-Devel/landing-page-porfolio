// Configuración y datos principales
const data = (typeof ANALYSIS_DATA !== "undefined") ? ANALYSIS_DATA : { materia: "Análisis de Datos", temas: [], resumenes: [], preguntas: [] };

const elementIds = [
  "restartButton", "scoreValue", "streakValue", "levelValue", "livesValue",
  "questionCounter", "bestScore", "progressBar", "startScreen", "quizScreen",
  "endScreen", "modeSelect", "startButton", "studyGuide", "modulePlan", "levelPlan",
  "unitBadge", "difficultyBadge", "questionText", "answersList", "feedbackBox",
  "nextButton", "resultTitle", "resultText", "finalScore", "accuracyText",
  "mistakesBox", "celebration", "againButton", "retryButton"
];

const els = Object.fromEntries(elementIds.map(id => [id, document.getElementById(id)]));

const topics = Array.isArray(data.temas) ? data.temas : [];
const questions = (Array.isArray(data.preguntas) ? data.preguntas : []).map(q => ({
  ...q,
  topic: (topics[q.t] !== undefined) ? topics[q.t] : "General"
}));

const topicSummaries = (Array.isArray(data.resumenes) && data.resumenes.length > 0)
  ? data.resumenes
  : topics.map((t, idx) => [t, `Estudio temático del módulo ${idx + 1}.`, "Conceptos y aplicaciones prácticas."]);

const MINIMUM_GRADE = 6;

const gameLevels = [
  { name: "Fundamentos", description: "Conceptos iniciales, tipos de variables y definiciones esenciales.", minRank: 0, maxRank: 0.35 },
  { name: "Construcción", description: "Limpieza, preparación y transformaciones de datos.", minRank: 0.35, maxRank: 0.6 },
  { name: "Aplicación", description: "Estadística descriptiva, análisis exploratorio y métricas.", minRank: 0.6, maxRank: 0.8 },
  { name: "Desafío final", description: "Visualización, interpretación avanzada y casos prácticos.", minRank: 0.8, maxRank: 1.01 }
];

let deck = [];
let current = 0;
let score = 0;
let streak = 0;
let lives = 0;
let correct = 0;
let answered = false;
let mistakes = [];
let activeMode = null;
let activeGameLevel = null;

const shuffle = list => [...list].sort(() => Math.random() - 0.5);
const escapeHtml = text => String(text).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const formatText = text => escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\n/g, "<br>");

const requiredCorrectAnswers = total => Math.ceil(total * MINIMUM_GRADE / 10);
const allowedMistakes = total => Math.max(0, total - requiredCorrectAnswers(total));

const unlockedGameLevel = () => Math.min(gameLevels.length, Math.max(1, Number(localStorage.getItem("dataAnalysisUnlockedLevel") || 1)));
const isGameLevel = mode => typeof mode === "string" && mode.startsWith("level:");
const gameLevelNumber = mode => Number(mode.split(":")[1]);

function savedMistakeIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem("dataAnalysisMistakes") || "[]"));
  } catch (e) {
    return new Set();
  }
}

function prioritizeMistakes(pool, limit = pool.length) {
  const failedIds = savedMistakeIds();
  const failed = pool.filter(q => failedIds.has(q.id));
  const newQuestions = pool.filter(q => !failedIds.has(q.id));
  return [...shuffle(failed), ...shuffle(newQuestions)].slice(0, limit);
}

function setScreen(active) {
  [els.startScreen, els.quizScreen, els.endScreen].forEach(screen => {
    if (screen) screen.classList.toggle("active", screen === active);
  });
}

function countQuestions(topicIndex) {
  return questions.filter(q => q.t === topicIndex).length;
}

function renderStudyContent() {
  if (topics.length === 0 && questions.length === 0) {
    els.studyGuide.innerHTML = `
      <div class="empty-state-card" style="grid-column: 1 / -1;">
        <h4>Banco de estudio listo para cargar</h4>
        <p>Aún no hay temas registrados. Colocá tus temas y preguntas en <code>assets/js/analysis-data.js</code> o dejá tu apunte en la carpeta <code>docs/</code>.</p>
      </div>`;
    els.modulePlan.innerHTML = `
      <div class="empty-state-card" style="grid-column: 1 / -1;">
        <h4>Plan de práctica pendiente</h4>
        <p>Una vez cargadas las preguntas en <code>assets/js/analysis-data.js</code>, podrás practicar cada tema de forma individual.</p>
      </div>`;
    renderGameLevels();
    return;
  }

  els.studyGuide.innerHTML = topicSummaries.map((topic, topicIndex) => `
    <article class="summary-card">
      <div class="summary-card-head">
        <span>Tema ${topicIndex + 1}</span>
        <strong>${countQuestions(topicIndex)} preguntas</strong>
      </div>
      <h4>${formatText(topic[0])}</h4>
      <ul>${topic.slice(1).map(point => `<li>${formatText(point)}</li>`).join("")}</ul>
    </article>`).join("");

  els.modulePlan.innerHTML = topics.map((title, topicIndex) => {
    const qCount = countQuestions(topicIndex);
    return `
      <article class="module-card">
        <header>
          <div>
            <small>Tema ${topicIndex + 1}</small>
            <h4>${formatText(title)}</h4>
          </div>
          <div class="question-count">
            <strong>${qCount}</strong>
            <span>preguntas</span>
          </div>
        </header>
        <button class="module-button" type="button" data-topic="${topicIndex}" ${qCount === 0 ? "disabled" : ""}>
          ${qCount === 0 ? "Sin preguntas" : "Practicar tema"}
        </button>
      </article>`;
  }).join("");

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
    const levelQuestionsCount = Math.min(15, Math.max(1, questions.length));
    const passTarget = requiredCorrectAnswers(levelQuestionsCount);

    return `<article class="level-card ${isUnlocked ? "unlocked" : "locked"}">
      <div class="level-card-head">
        <span>Nivel ${number}</span>
        <strong>${isUnlocked ? (isCurrent ? "Disponible" : "Superado") : "Bloqueado"}</strong>
      </div>
      <h4>${level.name}</h4>
      <p>${level.description}</p>
      <small>${levelQuestionsCount} preguntas · ${passTarget} aciertos para aprobar</small>
      <button class="level-button" type="button" data-level="${number}" ${isUnlocked && questions.length > 0 ? "" : "disabled"}>
        ${!questions.length ? "Esperando datos" : isUnlocked ? "Jugar nivel" : "🔒 Bloqueado"}
      </button>
    </article>`;
  }).join("");

  els.levelPlan.querySelectorAll("[data-level]").forEach(button => {
    button.addEventListener("click", () => startQuiz(`level:${button.dataset.level}`));
  });
}

function buildDeck(mode) {
  if (questions.length === 0) return [];

  if (isGameLevel(mode)) {
    const level = gameLevels[gameLevelNumber(mode) - 1];
    let pool = questions.filter(question => {
      const topicQuestions = questions.filter(candidate => candidate.t === question.t);
      if (topicQuestions.length === 0) return true;
      const rank = topicQuestions.findIndex(candidate => candidate.id === question.id) / topicQuestions.length;
      return rank >= level.minRank && rank < level.maxRank;
    });

    if (pool.length < 5) pool = questions;
    const count = Math.min(15, pool.length);
    return shuffle(pool).slice(0, count);
  }

  if (mode.startsWith("topic:")) {
    const topicIndex = Number(mode.split(":")[1]);
    const topicPool = questions.filter(q => q.t === topicIndex);
    return prioritizeMistakes(topicPool.length ? topicPool : questions);
  }

  if (mode === "mistakes") {
    const failedIds = savedMistakeIds();
    const failed = questions.filter(q => failedIds.has(q.id));
    return shuffle(failed.length ? failed : questions).slice(0, failed.length || Math.min(20, questions.length));
  }

  if (mode === "express") {
    return prioritizeMistakes(questions, Math.min(10, questions.length));
  }

  if (mode === "exam") {
    return prioritizeMistakes(questions, Math.min(30, questions.length));
  }

  if (mode === "full") {
    return prioritizeMistakes(questions);
  }

  // Modo normal por defecto
  return prioritizeMistakes(questions, Math.min(20, questions.length));
}

function startQuiz(mode = els.modeSelect.value) {
  if (questions.length === 0) {
    alert("Todavía no hay preguntas cargadas en assets/js/analysis-data.js. Agregá tus preguntas para comenzar.");
    return;
  }

  activeMode = mode;
  activeGameLevel = isGameLevel(mode) ? gameLevelNumber(mode) : null;
  deck = buildDeck(mode);

  if (deck.length === 0) {
    alert("No se encontraron preguntas para este modo.");
    return;
  }

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
  els.bestScore.textContent = `Mejor: ${localStorage.getItem("dataAnalysisBest") || 0}`;
}

function renderQuestion() {
  if (!deck[current]) return;

  const question = deck[current];
  answered = false;
  els.nextButton.disabled = true;
  els.nextButton.textContent = "Siguiente";
  els.feedbackBox.hidden = true;
  els.feedbackBox.className = "feedback-box";

  els.unitBadge.textContent = activeGameLevel ? `Nivel ${activeGameLevel}` : `Tema ${(question.t !== undefined ? question.t + 1 : "1")}`;
  els.difficultyBadge.textContent = question.topic || "Análisis de Datos";
  els.questionText.innerHTML = formatText(question.q);
  els.questionCounter.textContent = `Pregunta ${current + 1} de ${deck.length}`;
  els.progressBar.style.width = `${(current / deck.length) * 100}%`;

  const shuffledOptions = shuffle(question.o.map((option, optionIndex) => ({ option, optionIndex })));

  els.answersList.innerHTML = shuffledOptions.map(({ option, optionIndex }, displayIndex) => `
    <button type="button" class="answer-button" data-answer="${optionIndex}" data-key="${String.fromCharCode(65 + displayIndex)}">
      <span class="answer-key">${String.fromCharCode(65 + displayIndex)}</span>
      <span class="answer-text">${formatText(option)}</span>
      <span class="answer-state" aria-hidden="true"></span>
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
  els.feedbackBox.className = `feedback-box ${isCorrect ? "success" : "incorrect"}`;

  const canStillPass = mistakes.length <= allowedMistakes(deck.length);
  const lifeMessage = !isCorrect && !canStillPass
    ? ` Superaste el margen de ${allowedMistakes(deck.length)} error${allowedMistakes(deck.length) === 1 ? "" : "es"} para aprobar con ${MINIMUM_GRADE}.`
    : !isCorrect && lives === 0
      ? ` Ya usaste el margen de errores: necesitás acertar las restantes para llegar a ${MINIMUM_GRADE}.`
      : "";

  els.feedbackBox.innerHTML = `
    <strong>${isCorrect ? "¡Correcto!" : `Respuesta correcta: ${question.o[question.c]}`}</strong>
    <p>${formatText(question.e)}${lifeMessage}</p>`;

  els.nextButton.disabled = false;
  els.nextButton.textContent = (!canStillPass || current === deck.length - 1) ? "Ver resultado" : "Siguiente";

  renderHud();
}

function nextQuestion() {
  if (!answered) return;

  const canStillPass = mistakes.length <= allowedMistakes(deck.length);
  if (canStillPass && current < deck.length - 1) {
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

  if (unlockedNextLevel) {
    localStorage.setItem("dataAnalysisUnlockedLevel", String(activeGameLevel + 1));
  }

  const priorBest = Number(localStorage.getItem("dataAnalysisBest") || 0);
  localStorage.setItem("dataAnalysisBest", Math.max(priorBest, score));

  const storedMistakes = savedMistakeIds();
  mistakes.forEach(q => storedMistakes.add(q.id));
  attemptedQuestions.filter(q => !mistakes.includes(q)).forEach(q => storedMistakes.delete(q.id));
  localStorage.setItem("dataAnalysisMistakes", JSON.stringify([...storedMistakes]));

  els.resultTitle.textContent = exhaustedMargin
    ? "No llegaste al 6"
    : passed && gameLevel
      ? `¡Nivel ${activeGameLevel} superado!`
      : passed
        ? "¡Aprobaste el bloque!"
        : "Conviene repasar";

  els.resultText.textContent = exhaustedMargin
    ? `La ronda terminó porque superaste el margen de errores permitidos. Para aprobar necesitás ${requiredCorrectAnswers(deck.length)} de ${deck.length} respuestas correctas.`
    : passed && gameLevel
      ? unlockedNextLevel
        ? `¡Excelente trabajo! Desbloqueaste el Nivel ${activeGameLevel + 1}: ${gameLevels[activeGameLevel].name}.`
        : activeGameLevel === gameLevels.length
          ? "¡Completaste todos los niveles de la materia! Estás listo para el parcial."
          : `Nivel completado. Podés repetirlo para mejorar tu puntaje o avanzar al siguiente.`
      : passed
        ? `Completaste el bloque con nota mínima de aprobación (${MINIMUM_GRADE}) o superior.`
        : `Para aprobar se requieren al menos ${requiredCorrectAnswers(deck.length)} de ${deck.length} respuestas correctas.`;

  els.finalScore.textContent = score;
  els.accuracyText.textContent = `Nota estimada: ${grade.toLocaleString("es-AR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} · ${accuracy}% · ${correct} de ${answeredQuestions} correctas`;

  els.mistakesBox.innerHTML = mistakes.length
    ? `<h3>Para volver a repasar (${mistakes.length})</h3>${mistakes.map(q => `<p><strong>${formatText(q.topic)}:</strong> ${formatText(q.q)}</p>`).join("")}`
    : `<h3>¡Sin errores en esta ronda!</h3><p>Excelente precisión. Probá con un nivel superior o simulacro completo.</p>`;

  els.celebration.hidden = !(gameLevel && passed);
  els.celebration.innerHTML = gameLevel && passed
    ? `<span>🎉</span><span>⭐</span><span>🏆</span><p>${unlockedNextLevel ? "¡Nuevo nivel desbloqueado!" : "¡Nivel completado!"}</p>`
    : "";

  els.retryButton.hidden = !gameLevel || passed;
  els.againButton.textContent = gameLevel ? "Volver a niveles" : "Jugar de nuevo";

  if (gameLevel) renderGameLevels();

  els.progressBar.style.width = "100%";
  setScreen(els.endScreen);
  renderHud();
}

// Event Listeners
els.startButton.addEventListener("click", () => startQuiz());
els.nextButton.addEventListener("click", nextQuestion);
els.againButton.addEventListener("click", returnToStart);
els.retryButton.addEventListener("click", () => startQuiz(activeMode));
els.restartButton.addEventListener("click", returnToStart);

// Atajos de teclado para responder cómodamente
window.addEventListener("keydown", (e) => {
  if (els.quizScreen.classList.contains("active")) {
    const key = e.key.toUpperCase();
    if (["A", "B", "C", "D"].includes(key)) {
      const button = els.answersList.querySelector(`[data-key="${key}"]`);
      if (button && !button.disabled) {
        button.click();
      }
    } else if (e.key === "Enter" || e.key === " ") {
      if (!els.nextButton.disabled) {
        e.preventDefault();
        els.nextButton.click();
      }
    }
  }
});

// Inicialización inicial
renderStudyContent();
renderHud();
