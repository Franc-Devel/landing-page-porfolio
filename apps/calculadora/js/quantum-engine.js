/* ==========================================================================
   SUPER CALCULADORA CIENTÍFICA CUÁNTICA - ENGINE & SUITE
   Author: Francisco Agustín Delgado
   ========================================================================== */

class QuantumCalculator {
  constructor() {
    this.expression = "";
    this.result = "0";
    this.angleMode = "DEG"; // DEG or RAD
    this.history = [];
    this.bitValue = 42;
    this.audioEnabled = true;
    this.activeTab = "graph"; // graph, prog, convert, stats, finance, solver

    this.initAudio();
    this.bindDOM();
    this.initGrapher();
    this.updateBitwiseDisplay();
    this.updateScreen();
  }

  // 1. Audio Haptic Click
  initAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.audioCtx = new AudioContext();
    }
  }

  playClick() {
    if (!this.audioEnabled || !this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.audioCtx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.04);
  }

  // 2. Screen Display Update
  updateScreen() {
    const expEl = document.getElementById("screenExpression");
    const resEl = document.getElementById("screenResult");
    if (expEl) expEl.textContent = this.expression || "";
    if (resEl) resEl.textContent = this.result;
  }

  // 3. Mathematical Evaluation Engine
  append(val) {
    this.playClick();
    this.expression += val;
    this.updateScreen();
  }

  clearAll() {
    this.playClick();
    this.expression = "";
    this.result = "0";
    this.updateScreen();
  }

  deleteLast() {
    this.playClick();
    this.expression = this.expression.slice(0, -1);
    this.updateScreen();
  }

  toggleAngleMode() {
    this.playClick();
    this.angleMode = this.angleMode === "DEG" ? "RAD" : "DEG";
    const el = document.getElementById("angleModeBtn");
    if (el) el.textContent = this.angleMode;
  }

  evaluate() {
    this.playClick();
    if (!this.expression) return;

    try {
      // Reemplazos de funciones para Math JS
      let expr = this.expression
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/π/g, "Math.PI")
        .replace(/e(?![a-zA-Z])/g, "Math.E")
        .replace(/\^/g, "**")
        .replace(/√\(([^)]+)\)/g, "Math.sqrt($1)")
        .replace(/√([0-9.]+)/g, "Math.sqrt($1)")
        .replace(/ln\(/g, "Math.log(")
        .replace(/log\(/g, "Math.log10(");

      // Tratamiento trigonométrico según DEG o RAD
      const degFactor = this.angleMode === "DEG" ? "* (Math.PI / 180)" : "";
      expr = expr
        .replace(/sin\(([^)]+)\)/g, `Math.sin(($1) ${degFactor})`)
        .replace(/cos\(([^)]+)\)/g, `Math.cos(($1) ${degFactor})`)
        .replace(/tan\(([^)]+)\)/g, `Math.tan(($1) ${degFactor})`);

      // Manejo de factoriales (ej: 5!)
      expr = expr.replace(/(\d+)!/g, (match, n) => {
        let f = 1;
        for (let i = 2; i <= parseInt(n, 10); i++) f *= i;
        return f;
      });

      // Sanitización segura con Function
      // eslint-disable-next-line no-new-func
      const calcResult = Function(`"use strict"; return (${expr})`)();

      if (Number.isFinite(calcResult)) {
        // Redondear a 10 decimales para evitar imprecisión de punto flotante
        this.result = String(Math.round(calcResult * 1e10) / 1e10);
        this.addToHistory(this.expression, this.result);
        
        // Sincronizar con bitwise
        const intVal = parseInt(calcResult, 10);
        if (!isNaN(intVal)) {
          this.bitValue = intVal >>> 0;
          this.updateBitwiseDisplay();
        }
      } else {
        this.result = "Error Matemático";
      }
    } catch (e) {
      this.result = "Sintaxis Inválida";
    }

    this.updateScreen();
  }

  addToHistory(exp, res) {
    this.history.unshift({ exp, res, time: new Date().toLocaleTimeString() });
    if (this.history.length > 20) this.history.pop();
    this.renderHistory();
  }

  renderHistory() {
    const list = document.getElementById("historyList");
    if (!list) return;

    list.innerHTML = this.history.map(item => `
      <div class="history-item" onclick="window.quantumCalc.recallHistory('${item.res}')">
        <span class="history-exp">${item.exp} =</span>
        <span class="history-res">${item.res}</span>
      </div>
    `).join('');
  }

  recallHistory(val) {
    this.expression = val;
    this.result = val;
    this.updateScreen();
  }

  // 4. Programmer & Bitwise Module
  updateBitwiseDisplay() {
    const decEl = document.getElementById("bitDec");
    const hexEl = document.getElementById("bitHex");
    const binEl = document.getElementById("bitBin");
    const octEl = document.getElementById("bitOct");

    if (decEl) decEl.textContent = this.bitValue.toString(10);
    if (hexEl) hexEl.textContent = "0x" + this.bitValue.toString(16).toUpperCase();
    if (binEl) binEl.textContent = this.bitValue.toString(2).padStart(32, "0");
    if (octEl) octEl.textContent = "0o" + this.bitValue.toString(8);

    // Renderizar matriz de 32 bits
    const grid = document.getElementById("bitsGrid");
    if (!grid) return;

    const binStr = (this.bitValue >>> 0).toString(2).padStart(32, "0");
    grid.innerHTML = binStr.split('').map((bit, idx) => `
      <button class="bit-btn ${bit === '1' ? 'active' : ''}" data-bit="${31 - idx}">
        ${bit}
      </button>
    `).join('');

    grid.querySelectorAll('.bit-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const bitIdx = parseInt(btn.dataset.bit, 10);
        this.bitValue ^= (1 << bitIdx);
        this.bitValue = this.bitValue >>> 0;
        this.result = String(this.bitValue);
        this.updateBitwiseDisplay();
        this.updateScreen();
      });
    });
  }

  // 5. 2D Interactive Function Grapher (Canvas)
  initGrapher() {
    this.graphCanvas = document.getElementById("graphCanvas");
    if (!this.graphCanvas) return;
    this.graphCtx = this.graphCanvas.getContext("2d");

    const plotBtn = document.getElementById("plotFunctionBtn");
    const input = document.getElementById("graphFnInput");

    if (plotBtn && input) {
      plotBtn.addEventListener("click", () => {
        this.plotFunction(input.value || "Math.sin(x)");
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") this.plotFunction(input.value || "Math.sin(x)");
      });
    }

    this.plotFunction("Math.sin(x)");
  }

  plotFunction(fnStr) {
    const canvas = this.graphCanvas;
    const ctx = this.graphCtx;
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    const originX = w / 2;
    const originY = h / 2;
    const scale = 30; // 30 px por unidad

    // Cuadrícula y Ejes
    ctx.strokeStyle = "rgba(56, 189, 248, 0.15)";
    ctx.lineWidth = 1;

    for (let x = originX % scale; x < w; x += scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = originY % scale; y < h; y += scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Eje principal X e Y
    ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(w, originY);
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, h);
    ctx.stroke();

    // Trazar curva f(x)
    try {
      // Reemplazos de ayuda: sin -> Math.sin, etc
      let cleanFn = fnStr
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/\^/g, "**");

      // eslint-disable-next-line no-new-func
      const f = new Function("x", `"use strict"; return (${cleanFn});`);

      ctx.beginPath();
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 2.5;

      let first = true;
      for (let px = 0; px < w; px += 2) {
        const x = (px - originX) / scale;
        try {
          const y = f(x);
          const py = originY - y * scale;
          if (Number.isFinite(py)) {
            if (first) {
              ctx.moveTo(px, py);
              first = false;
            } else {
              ctx.lineTo(px, py);
            }
          }
        } catch (err) {
          // Saltear singularidades
        }
      }
      ctx.stroke();
    } catch (e) {
      ctx.fillStyle = "#f43f5e";
      ctx.font = "12px monospace";
      ctx.fillText("Error en función: " + e.message, 10, 20);
    }
  }

  // 6. DOM Bindings & Keyboard
  bindDOM() {
    // Mode Tabs
    document.querySelectorAll(".mode-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".mode-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeTab = btn.dataset.tab;

        document.querySelectorAll(".tab-view-panel").forEach(panel => {
          panel.style.display = panel.id === `tab-${this.activeTab}` ? "block" : "none";
        });

        if (this.activeTab === "graph") {
          setTimeout(() => this.plotFunction(document.getElementById("graphFnInput")?.value || "Math.sin(x)"), 50);
        }
      });
    });

    // Angle mode button
    const angleBtn = document.getElementById("angleModeBtn");
    if (angleBtn) {
      angleBtn.addEventListener("click", () => this.toggleAngleMode());
    }

    // Physical Keyboard Listener
    window.addEventListener("keydown", (e) => {
      if (document.activeElement?.tagName === "INPUT") return;

      if (!isNaN(e.key) || ['+', '-', '*', '/', '.', '(', ')', '^'].includes(e.key)) {
        this.append(e.key);
      } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        this.evaluate();
      } else if (e.key === "Backspace") {
        this.deleteLast();
      } else if (e.key === "Escape") {
        this.clearAll();
      }
    });

    // Quadratic Solver Listener
    const solveBtn = document.getElementById("solveQuadBtn");
    if (solveBtn) {
      solveBtn.addEventListener("click", () => {
        const a = parseFloat(document.getElementById("quadA").value) || 0;
        const b = parseFloat(document.getElementById("quadB").value) || 0;
        const c = parseFloat(document.getElementById("quadC").value) || 0;
        const resBox = document.getElementById("quadResult");

        if (a === 0) {
          resBox.innerHTML = "No es cuadrática (a = 0)";
          return;
        }

        const disc = b * b - 4 * a * c;
        if (disc > 0) {
          const x1 = (-b + Math.sqrt(disc)) / (2 * a);
          const x2 = (-b - Math.sqrt(disc)) / (2 * a);
          resBox.innerHTML = `Δ = ${disc}<br><strong>x₁ = ${x1.toFixed(4)}</strong><br><strong>x₂ = ${x2.toFixed(4)}</strong>`;
        } else if (disc === 0) {
          const x = -b / (2 * a);
          resBox.innerHTML = `Δ = 0 (Raíz doble)<br><strong>x = ${x.toFixed(4)}</strong>`;
        } else {
          const real = (-b / (2 * a)).toFixed(4);
          const imag = (Math.sqrt(-disc) / (2 * a)).toFixed(4);
          resBox.innerHTML = `Δ = ${disc} (Raíces Complejas)<br><strong>x₁ = ${real} + ${imag}i</strong><br><strong>x₂ = ${real} - ${imag}i</strong>`;
        }
      });
    }

    // Stats Calculator Listener
    const calcStatsBtn = document.getElementById("calcStatsBtn");
    if (calcStatsBtn) {
      calcStatsBtn.addEventListener("click", () => {
        const input = document.getElementById("statsDataInput").value;
        const nums = input.split(/[\s,]+/).map(Number).filter(n => !isNaN(n));
        const resBox = document.getElementById("statsResultBox");

        if (nums.length === 0) {
          resBox.innerHTML = "Ingresa al menos un número.";
          return;
        }

        const n = nums.length;
        const sum = nums.reduce((a, b) => a + b, 0);
        const mean = sum / n;
        const sorted = [...nums].sort((a, b) => a - b);
        const median = n % 2 === 0 ? (sorted[n/2 - 1] + sorted[n/2]) / 2 : sorted[Math.floor(n/2)];
        const variance = nums.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
        const stdDev = Math.sqrt(variance);

        resBox.innerHTML = `
          Muestras: <strong>${n}</strong> · Suma: <strong>${sum.toFixed(2)}</strong><br>
          Media (Promedio): <strong>${mean.toFixed(4)}</strong><br>
          Mediana: <strong>${median.toFixed(4)}</strong><br>
          Desvío Estándar (σ): <strong>${stdDev.toFixed(4)}</strong><br>
          Varianza: <strong>${variance.toFixed(4)}</strong><br>
          Mín: <strong>${sorted[0]}</strong> · Máx: <strong>${sorted[n - 1]}</strong>
        `;
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.quantumCalc = new QuantumCalculator();
});
