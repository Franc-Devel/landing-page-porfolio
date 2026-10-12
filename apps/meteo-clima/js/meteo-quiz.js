/* ==========================================================================
   METEOTRACK PRO 2.0 - CLIMATE KNOWLEDGE & INTERACTIVE GRAPHICAL QUIZ
   Author: Francisco Agustín Delgado
   ========================================================================== */

const CLIMATE_QUESTIONS = [
  {
    id: 1,
    title: "Interpretación de Reflectividad Doppler",
    question: "En una pantalla de radar meteorológico, ¿qué indica un eco con nivel de reflectividad superior a 55 dBZ (color rojo intenso/púrpura)?",
    diagramSvg: `
      <svg viewBox="0 0 300 100" width="100%" height="100%">
        <defs>
          <linearGradient id="dbzGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#895522"/>
            <stop offset="40%" stop-color="#47664F"/>
            <stop offset="70%" stop-color="#f59e0b"/>
            <stop offset="100%" stop-color="#f43f5e"/>
          </linearGradient>
        </defs>
        <rect x="20" y="30" width="260" height="20" rx="10" fill="url(#dbzGrad)"/>
        <circle cx="270" cy="40" r="14" fill="#f43f5e" stroke="#fff" stroke-width="2"/>
        <text x="20" y="70" fill="#94a3b8" font-size="11" font-family="JetBrains Mono">15 dBZ (Brizna)</text>
        <text x="200" y="70" fill="#f43f5e" font-size="11" font-family="JetBrains Mono">>55 dBZ (?)</text>
      </svg>
    `,
    options: [
      { text: "Llovizna estratiforme muy ligera", correct: false },
      { text: "Tormenta convectiva severa con probable granizo", correct: true },
      { text: "Inversión térmica sin precipitación", correct: false },
      { text: "Baja humedad relativa en altura", correct: false }
    ],
    explanation: "Ecos superiores a 55 dBZ señalan núcleos de tormentas severas (Cumulonimbus) con precipitaciones torrenciales y alta probabilidad de granizo destructivo."
  },
  {
    id: 2,
    title: "Dinámica de Presión e Isóbaras",
    question: "¿Hacia qué sentido giran los vientos alrededor de un centro de Baja Presión (Ciclón) en el Hemisferio Sur?",
    diagramSvg: `
      <svg viewBox="0 0 300 100" width="100%" height="100%">
        <circle cx="150" cy="50" r="35" fill="none" stroke="#895522" stroke-dasharray="4" stroke-width="1.5"/>
        <circle cx="150" cy="50" r="20" fill="none" stroke="#895522" stroke-width="1.5"/>
        <text x="150" y="55" fill="#f43f5e" font-size="16" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">B</text>
        <!-- Flecha horaria -->
        <path d="M 150 15 A 35 35 0 0 1 185 50" fill="none" stroke="#47664F" stroke-width="2.5" marker-end="url(#arrow)"/>
        <text x="210" y="45" fill="#47664F" font-size="11" font-family="JetBrains Mono">Fuerza de Coriolis</text>
      </svg>
    `,
    options: [
      { text: "Sentido Horario (en el sentido de las agujas del reloj)", correct: true },
      { text: "Sentido Antihorario", correct: false },
      { text: "En línea recta radial hacia afuera", correct: false },
      { text: "Depende exclusivamente de la altitud", correct: false }
    ],
    explanation: "Debido a la aceleración de Coriolis, en el Hemisferio Sur el aire que converge hacia una baja presión se desvía hacia la izquierda, generando circulación horaria."
  },
  {
    id: 3,
    title: "Morfología de Nubes y Frentes Fríos",
    question: "Al aproximarse un frente frío activo, ¿cuál es la estructura de nubes de gran desarrollo vertical típica que provoca ráfagas violentas?",
    diagramSvg: `
      <svg viewBox="0 0 300 100" width="100%" height="100%">
        <!-- Cuña de aire frío -->
        <polygon points="20,80 180,80 120,40" fill="rgba(56,189,248,0.2)" stroke="#895522" stroke-width="1.5"/>
        <text x="50" y="70" fill="#895522" font-size="11" font-family="JetBrains Mono">Aire Frío denso</text>
        <!-- Nube Yunque -->
        <path d="M 120 40 Q 150 10 200 15 Q 260 20 280 25 L 210 50 Z" fill="rgba(255,255,255,0.25)" stroke="#fff"/>
        <text x="210" y="30" fill="#f59e0b" font-size="11" font-family="JetBrains Mono">Yunque</text>
      </svg>
    `,
    options: [
      { text: "Cirrostratus (nubes altas delgadas)", correct: false },
      { text: "Cumulonimbus incus (torre convectiva con yunque)", correct: true },
      { text: "Stratocumulus estratiformes bajos", correct: false },
      { text: "Altocumulus lenticulares", correct: false }
    ],
    explanation: "La masa de aire frío actúa como cuña elevando bruscamente el aire cálido e inestable, disparando gigantescos Cumulonimbus de hasta 15 km de altura."
  },
  {
    id: 4,
    title: "Índice de Calidad del Aire (AQI) y Partículas",
    question: "¿Qué contaminante atmosférico representa mayor riesgo para los alvéolos pulmonares por su tamaño inferior a 2.5 micrómetros?",
    diagramSvg: `
      <svg viewBox="0 0 300 100" width="100%" height="100%">
        <circle cx="70" cy="50" r="30" fill="rgba(148,163,184,0.3)" stroke="#94a3b8"/>
        <text x="70" y="54" fill="#94a3b8" font-size="10" text-anchor="middle">Cabello ~70µm</text>
        <circle cx="170" cy="50" r="14" fill="rgba(56,189,248,0.4)" stroke="#895522"/>
        <text x="170" y="54" fill="#895522" font-size="9" text-anchor="middle">PM10</text>
        <circle cx="240" cy="50" r="5" fill="#f43f5e"/>
        <text x="240" y="40" fill="#f43f5e" font-size="10" font-weight="bold" text-anchor="middle">PM2.5</text>
      </svg>
    `,
    options: [
      { text: "Dióxido de Carbono (CO2)", correct: false },
      { text: "Material Particulado Fino (PM2.5)", correct: true },
      { text: "Nitrógeno diatómico (N2)", correct: false },
      { text: "Ozono estratosférico puro", correct: false }
    ],
    explanation: "Las partículas PM2.5 penetran profundamente hasta los alvéolos pulmonares y el torrente sanguíneo, siendo el principal indicador de alerta de salud."
  }
];

class ClimateQuiz {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentIdx = 0;
    this.score = 0;
    this.answered = false;
    this.render();
  }

  render() {
    if (!this.container) return;
    const q = CLIMATE_QUESTIONS[this.currentIdx];

    this.container.innerHTML = `
      <div class="quiz-header">
        <span class="panel-title">
          <i class="bi bi-patch-question-fill"></i> ${q.title}
        </span>
        <span class="quiz-score-pill">Puntaje: ${this.score} / ${CLIMATE_QUESTIONS.length}</span>
      </div>

      <div class="quiz-visual-diagram">
        ${q.diagramSvg}
      </div>

      <div class="quiz-question-box">
        <p class="quiz-q-text">${q.question}</p>
      </div>

      <div class="quiz-options-list">
        ${q.options.map((opt, i) => `
          <button class="quiz-opt-btn" data-index="${i}">
            <span>${String.fromCharCode(65 + i)}) ${opt.text}</span>
            <span class="opt-status-icon"></span>
          </button>
        `).join('')}
      </div>

      <div class="quiz-feedback" id="quizFeedback" style="display: none; margin-top: 14px; padding: 12px; border-radius: 12px; background: rgba(15,23,42,0.8); border: 1px solid var(--border-subtle); font-size: 0.85rem; line-height: 1.4;">
      </div>

      <div class="quiz-footer">
        <span>Pregunta ${this.currentIdx + 1} de ${CLIMATE_QUESTIONS.length}</span>
        <button class="hud-btn" id="nextQuizBtn" style="display: none;">
          Siguiente Desafío ↗
        </button>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const buttons = this.container.querySelectorAll('.quiz-opt-btn');
    const feedbackBox = this.container.querySelector('#quizFeedback');
    const nextBtn = this.container.querySelector('#nextQuizBtn');
    const q = CLIMATE_QUESTIONS[this.currentIdx];

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.answered) return;
        this.answered = true;
        const idx = parseInt(btn.dataset.index, 10);
        const isCorrect = q.options[idx].correct;

        if (isCorrect) {
          this.score++;
          btn.classList.add('correct');
          btn.querySelector('.opt-status-icon').textContent = '✓ Correcto';
        } else {
          btn.classList.add('wrong');
          btn.querySelector('.opt-status-icon').textContent = '✕ Incorrecto';
          buttons.forEach((b, i) => {
            if (q.options[i].correct) b.classList.add('correct');
          });
        }

        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = `
          <strong style="color: ${isCorrect ? 'var(--neon-emerald)' : 'var(--neon-rose)'}; display: block; margin-bottom: 4px;">
            ${isCorrect ? '¡Excelente deducción meteorológica!' : 'Explicación Física:'}
          </strong>
          <span style="color: var(--text-muted);">${q.explanation}</span>
        `;

        this.container.querySelector('.quiz-score-pill').textContent = `Puntaje: ${this.score} / ${CLIMATE_QUESTIONS.length}`;
        nextBtn.style.display = 'inline-flex';
      });
    });

    nextBtn.addEventListener('click', () => {
      this.currentIdx = (this.currentIdx + 1) % CLIMATE_QUESTIONS.length;
      this.answered = false;
      this.render();
    });
  }
}

window.ClimateQuiz = ClimateQuiz;
