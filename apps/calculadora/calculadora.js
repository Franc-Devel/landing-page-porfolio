// ==========================================
// 1. Funciones Matemáticas Fundamentales
// ==========================================

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: División por cero";
  }
  return a / b;
}

// ==========================================
// 2. Controlador de la Calculadora Web Pro
// ==========================================

(function initCalculator() {
  const expressionView = document.getElementById("expressionView");
  const resultView = document.getElementById("resultView");
  const historyList = document.getElementById("historyList");
  const btnClear = document.getElementById("btnClear");
  const btnBack = document.getElementById("btnBack");
  const btnPercent = document.getElementById("btnPercent");
  const btnSign = document.getElementById("btnSign");
  const btnEquals = document.getElementById("btnEquals");
  const btnClearHistory = document.getElementById("btnClearHistory");

  let currentVal = "0";
  let prevVal = null;
  let operation = null;
  let resetNext = false;
  let history = [];

  function updateDisplay() {
    resultView.textContent = currentVal;
    if (operation !== null && prevVal !== null) {
      const opSymbol = operation === "*" ? "×" : operation === "/" ? "÷" : operation;
      expressionView.textContent = `${prevVal} ${opSymbol}`;
    } else {
      expressionView.textContent = "";
    }
  }

  function appendNumber(num) {
    if (resetNext) {
      currentVal = num === "." ? "0." : num;
      resetNext = false;
    } else {
      if (num === ".") {
        if (!currentVal.includes(".")) {
          currentVal += ".";
        }
      } else {
        currentVal = currentVal === "0" ? num : currentVal + num;
      }
    }
    updateDisplay();
  }

  function setOperation(op) {
    if (operation !== null && !resetNext) {
      calculate();
    }
    prevVal = currentVal;
    operation = op;
    resetNext = true;
    updateDisplay();
  }

  function calculate() {
    if (operation === null || prevVal === null) return;

    const a = parseFloat(prevVal);
    const b = parseFloat(currentVal);
    let res;

    switch (operation) {
      case "+":
        res = sumar(a, b);
        break;
      case "-":
        res = restar(a, b);
        break;
      case "*":
        res = multiplicar(a, b);
        break;
      case "/":
        res = dividir(a, b);
        break;
      default:
        return;
    }

    if (typeof res === "number") {
      // Formatear decimales limpios
      res = Math.round(res * 1e10) / 1e10;
    }

    const opSymbol = operation === "*" ? "×" : operation === "/" ? "÷" : operation;
    addHistory(`${prevVal} ${opSymbol} ${currentVal} = ${res}`);

    currentVal = res.toString();
    operation = null;
    prevVal = null;
    resetNext = true;
    updateDisplay();
  }

  function addHistory(entry) {
    history.unshift(entry);
    if (history.length > 8) history.pop();
    renderHistory();
  }

  function renderHistory() {
    if (history.length === 0) {
      historyList.innerHTML = `<div style="color: #64748b; font-size: 0.75rem;">Sin operaciones recientes</div>`;
      return;
    }
    historyList.innerHTML = history
      .map(
        (item) => `
        <div class="history-item" onclick="navigator.clipboard && navigator.clipboard.writeText('${item.split("=")[1].trim()}')">
          <span>${item.split("=")[0].trim()}</span>
          <strong>= ${item.split("=")[1].trim()}</strong>
        </div>
      `
      )
      .join("");
  }

  // Event Listeners
  document.querySelectorAll("[data-num]").forEach((btn) => {
    btn.addEventListener("click", () => appendNumber(btn.dataset.num));
  });

  document.querySelectorAll("[data-op]").forEach((btn) => {
    btn.addEventListener("click", () => setOperation(btn.dataset.op));
  });

  btnClear.addEventListener("click", () => {
    currentVal = "0";
    prevVal = null;
    operation = null;
    resetNext = false;
    updateDisplay();
  });

  btnBack.addEventListener("click", () => {
    if (resetNext) return;
    if (currentVal.length > 1) {
      currentVal = currentVal.slice(0, -1);
    } else {
      currentVal = "0";
    }
    updateDisplay();
  });

  btnPercent.addEventListener("click", () => {
    const val = parseFloat(currentVal);
    currentVal = (val / 100).toString();
    updateDisplay();
  });

  btnSign.addEventListener("click", () => {
    if (currentVal === "0") return;
    currentVal = currentVal.startsWith("-") ? currentVal.slice(1) : "-" + currentVal;
    updateDisplay();
  });

  btnEquals.addEventListener("click", calculate);

  btnClearHistory.addEventListener("click", () => {
    history = [];
    renderHistory();
  });

  // Soporte de teclado
  window.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") appendNumber(e.key);
    if (e.key === ".") appendNumber(".");
    if (e.key === "+") setOperation("+");
    if (e.key === "-") setOperation("-");
    if (e.key === "*") setOperation("*");
    if (e.key === "/") {
      e.preventDefault();
      setOperation("/");
    }
    if (e.key === "Enter" || e.key === "=") {
      e.preventDefault();
      calculate();
    }
    if (e.key === "Backspace") btnBack.click();
    if (e.key === "Escape") btnClear.click();
  });

  updateDisplay();
})();
