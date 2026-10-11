const topicSummaries = [
  ["Fundamentos, problema y objetivos", "Un proyecto es temporal, tiene objetivos, recursos limitados y un resultado único.", "El problema de DYM es centralizar y actualizar información para reducir errores y mejorar el control.", "SMART expresa resultados verificables; CRUD describe funcionalidades."],
  ["Interesados, alcance y aceptación", "Identificá quién usa, decide, supervisa, desarrolla o se beneficia del proyecto.", "Inclusiones son entregables; exclusiones dejan explícito lo que no se desarrollará.", "Los criterios de aceptación verifican los objetivos con métricas concretas."],
  ["Condiciones y control del proyecto", "Supuesto: se da por verdadero para planificar. Restricción: límite real. Riesgo: situación incierta.", "Los cambios de alcance se revisan por impacto en esfuerzo, duración, costo y responsabilidades.", "Los datos iniciales incompletos y la disponibilidad del equipo son riesgos del proyecto."],
  ["WBS, PERT y analogía", "La WBS descompone el alcance hasta tareas estimables.", "PERT usa Optimista, Más probable y Pesimista: (O + 4M + P) / 6.", "La analogía compara con un antecedente: 89 HU, 303 SP y 400 horas."],
  ["Números y defensa de Lubricentro DYM", "Referencia: 409 h de esfuerzo, 45 h/semana de equipo, 9,1 semanas y $1.500.000 ARS.", "Registro <15 s; precisión ≥98%; consulta <10 s; reposición ≥90%.", "Esfuerzo no es duración ni costo; el cono de incertidumbre disminuye al obtener información real." ],
];

const elementIds = ["restartButton", "scoreValue", "streakValue", "levelValue", "livesValue", "questionCounter", "bestScore", "progressBar", "startScreen", "quizScreen", "endScreen", "modeSelect", "startButton", "studyGuide", "modulePlan", "unitBadge", "difficultyBadge", "questionText", "answersList", "feedbackBox", "nextButton", "resultTitle", "resultText", "finalScore", "accuracyText", "mistakesBox", "againButton"];
const els = Object.fromEntries(elementIds.map(id => [id, document.getElementById(id)]));
const questions = GESTION_DATA.preguntas.map(question => ({ ...question, topic: GESTION_DATA.temas[question.t] }));

let deck = [];
let current = 0;
let score = 0;
let streak = 0;
let lives = 3;
let correct = 0;
let answered = false;
let mistakes = [];

const shuffle = list => [...list].sort(() => Math.random() - 0.5);
const escapeHtml = text => String(text).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const formatText = text => escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\n/g, "<br>");

function savedMistakeIds() {
  return new Set(JSON.parse(localStorage.getItem("gestionSoftwareMistakes") || "[]"));
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

  els.modulePlan.innerHTML = GESTION_DATA.temas.map((title, topicIndex) => `
    <article class="module-card">
      <header><div><small>Tema ${topicIndex + 1}</small><h4>${formatText(title)}</h4></div>
      <div class="question-count"><strong>${countQuestions(topicIndex)}</strong><span>preguntas</span></div></header>
      <button class="module-button" type="button" data-topic="${topicIndex}">Practicar tema</button>
    </article>`).join("");

  els.modulePlan.querySelectorAll("[data-topic]").forEach(button => {
    button.addEventListener("click", () => startQuiz(`topic:${button.dataset.topic}`));
  });
}

function buildDeck(mode) {
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
  deck = buildDeck(mode);
  current = 0;
  score = 0;
  streak = 0;
  lives = 3;
  correct = 0;
  answered = false;
  mistakes = [];
  setScreen(els.quizScreen);
  renderQuestion();
}

function returnToStart() {
  lives = 3;
  streak = 0;
  answered = false;
  els.progressBar.style.width = "0%";
  els.questionCounter.textContent = "Elegí un modo para empezar";
  setScreen(els.startScreen);
  renderHud();
}

function renderHud() {
  els.scoreValue.textContent = score;
  els.streakValue.textContent = streak;
  els.levelValue.textContent = Math.max(1, Math.floor(correct / 5) + 1);
  els.livesValue.textContent = `${"♥ ".repeat(lives)}${"♡ ".repeat(3 - lives)}`.trim();
  els.bestScore.textContent = `Mejor: ${localStorage.getItem("gestionSoftwareBest") || 0}`;
}

function renderQuestion() {
  const question = deck[current];
  answered = false;
  els.nextButton.disabled = true;
  els.nextButton.textContent = "Siguiente";
  els.feedbackBox.hidden = true;
  els.feedbackBox.className = "feedback-box";
  els.unitBadge.textContent = `Tema ${question.t + 1}`;
  els.difficultyBadge.textContent = question.topic;
  els.questionText.innerHTML = formatText(question.q);
  els.questionCounter.textContent = `Pregunta ${current + 1} de ${deck.length}`;
  els.progressBar.style.width = `${(current / deck.length) * 100}%`;
  els.answersList.innerHTML = question.o.map((option, optionIndex) => `
    <button type="button" class="answer-button" data-answer="${optionIndex}">
      <span class="answer-key">${String.fromCharCode(65 + optionIndex)}</span><span class="answer-text">${formatText(option)}</span><span class="answer-state" aria-hidden="true"></span>
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
    lives = Math.max(0, lives - 1);
    mistakes.push(question);
  }
  els.feedbackBox.hidden = false;
  els.feedbackBox.classList.add(isCorrect ? "success" : "incorrect");
  const lifeMessage = !isCorrect && lives === 0 ? " Te quedaste sin vidas: esta ronda termina acá." : "";
  els.feedbackBox.innerHTML = `<strong>${isCorrect ? "Correcto" : `La respuesta correcta es ${String.fromCharCode(65 + question.c)}`}</strong><p>${formatText(question.e)}${lifeMessage}</p>`;
  els.nextButton.disabled = false;
  els.nextButton.textContent = lives === 0 || current === deck.length - 1 ? "Ver resultado" : "Siguiente";
  renderHud();
}

function nextQuestion() {
  if (!answered) return;
  if (lives > 0 && current < deck.length - 1) {
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
  const priorBest = Number(localStorage.getItem("gestionSoftwareBest") || 0);
  localStorage.setItem("gestionSoftwareBest", Math.max(priorBest, score));
  const storedMistakes = new Set(JSON.parse(localStorage.getItem("gestionSoftwareMistakes") || "[]"));
  mistakes.forEach(question => storedMistakes.add(question.id));
  attemptedQuestions.filter(question => !mistakes.includes(question)).forEach(question => storedMistakes.delete(question.id));
  localStorage.setItem("gestionSoftwareMistakes", JSON.stringify([...storedMistakes]));
  els.resultTitle.textContent = lives === 0 ? "Te quedaste sin vidas" : accuracy >= 85 ? "Tema afianzado" : accuracy >= 70 ? "Vas bien, falta una vuelta" : "Conviene repasar";
  els.resultText.textContent = lives === 0
    ? "La ronda terminó después de tres respuestas incorrectas. Repasá las explicaciones y volvé a intentarlo."
    : accuracy >= 85 ? "Alcanzaste la meta sugerida. Repetí más adelante para comprobar retención." : "Repasá los errores y repetí el tema hasta sostener al menos 85% de aciertos.";
  els.finalScore.textContent = score;
  els.accuracyText.textContent = `${accuracy}% · ${correct} de ${answeredQuestions} correctas`;
  els.mistakesBox.innerHTML = mistakes.length
    ? `<h3>Para volver a mirar</h3>${mistakes.map(question => `<p><strong>${formatText(question.topic)}:</strong> ${formatText(question.q)}</p>`).join("")}`
    : "<h3>Sin errores en esta ronda</h3><p>Probá otro tema o el modo completo.</p>";
  els.progressBar.style.width = "100%";
  setScreen(els.endScreen);
  renderHud();
}

els.startButton.addEventListener("click", () => startQuiz());
els.nextButton.addEventListener("click", nextQuestion);
els.againButton.addEventListener("click", returnToStart);
els.restartButton.addEventListener("click", returnToStart);

renderStudyContent();
renderHud();
