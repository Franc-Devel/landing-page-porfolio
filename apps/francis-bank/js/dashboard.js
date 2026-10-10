/* ==========================================================================
   FRANCIS BANK - NEO-BANKING DASHBOARD CONTROLLER & 3D CARD ENGINE
   Author: Francisco Agustín Delgado
   ========================================================================== */

class FrancisBankDashboard {
  constructor() {
    this.balanceARS = 4850240.50;
    this.balanceUSD = 3250.00;
    this.isPrivate = false;
    this.isCardFrozen = false;
    this.cvvCountdown = 60;
    this.cvvCode = "842";
    
    this.transactions = [
      { id: "TX-9481", desc: "Infraestructura Cloud AWS", cat: "Tech", amount: -48200.00, date: "Hoy, 10:45", icon: "bi-hdd-network" },
      { id: "TX-9480", desc: "Rendimientos Fondo Cuántico", cat: "Inversión", amount: 15420.30, date: "Hoy, 08:00", icon: "bi-graph-up-arrow" },
      { id: "TX-9479", desc: "Honorarios Desarrollo Fullstack", cat: "Ingreso", amount: 650000.00, date: "Ayer, 18:20", icon: "bi-cash-coin" },
      { id: "TX-9478", desc: "Starlink Global Communications", cat: "Servicios", amount: -38000.00, date: "08 Oct, 14:10", icon: "bi-broadcast-pin" }
    ];

    this.bindCard3D();
    this.initCVVTimer();
    this.drawAnalyticsChart();
    this.bindTransferFlow();
    this.bindPrivacyToggle();
    this.bindInvestmentSimulator();
    this.updateDisplay();
  }

  // 1. 3D Card Tilt & Flip
  bindCard3D() {
    const card = document.getElementById("holoCard");
    const container = document.getElementById("cardStage");
    if (!card || !container) return;

    container.addEventListener("mousemove", (e) => {
      if (card.classList.contains("is-flipped")) return;
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 22;
      const rotateY = (x / rect.width) * 22;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    container.addEventListener("mouseleave", () => {
      if (!card.classList.contains("is-flipped")) {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
      }
    });

    const flipBtn = document.getElementById("flipCardBtn");
    if (flipBtn) {
      flipBtn.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
        flipBtn.innerHTML = card.classList.contains("is-flipped")
          ? `<i class="bi bi-arrow-repeat"></i> Ver Frente`
          : `<i class="bi bi-arrow-repeat"></i> Girar / Ver CVV`;
      });
    }

    const freezeBtn = document.getElementById("freezeCardBtn");
    if (freezeBtn) {
      freezeBtn.addEventListener("click", () => {
        this.isCardFrozen = !this.isCardFrozen;
        freezeBtn.innerHTML = this.isCardFrozen
          ? `<i class="bi bi-shield-check"></i> Descongelar`
          : `<i class="bi bi-snow"></i> Congelar`;
        freezeBtn.style.borderColor = this.isCardFrozen ? "var(--rose-neon)" : "var(--teal-neon)";
        alert(this.isCardFrozen ? "Tarjeta temporalmente pausada para compras." : "Tarjeta reactivada con éxito.");
      });
    }
  }

  // 2. Dynamic CVV with 60s countdown
  initCVVTimer() {
    const cvvEl = document.getElementById("cvvDisplay");
    const timerEl = document.getElementById("cvvTimer");

    setInterval(() => {
      this.cvvCountdown--;
      if (this.cvvCountdown <= 0) {
        this.cvvCountdown = 60;
        this.cvvCode = Math.floor(100 + Math.random() * 900).toString();
      }
      if (cvvEl) cvvEl.textContent = this.cvvCode;
      if (timerEl) timerEl.textContent = `Renueva en ${this.cvvCountdown}s`;
    }, 1000);
  }

  // 3. Privacy Toggle
  bindPrivacyToggle() {
    const btn = document.getElementById("privacyToggleBtn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      this.isPrivate = !this.isPrivate;
      btn.innerHTML = this.isPrivate ? `<i class="bi bi-eye-slash-fill"></i> Revelar` : `<i class="bi bi-eye-fill"></i> Ocultar`;
      this.updateDisplay();
    });
  }

  updateDisplay() {
    const arsEl = document.getElementById("balanceARS");
    const usdEl = document.getElementById("balanceUSD");

    if (arsEl) {
      arsEl.textContent = this.isPrivate
        ? "$ ••••••••••"
        : `$ ${this.balanceARS.toLocaleString("es-AR", { minimumFractionDigits: 2 })}`;
    }
    if (usdEl) {
      usdEl.textContent = this.isPrivate
        ? "USD ••••"
        : `USD ${this.balanceUSD.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
    }

    this.renderTransactions();
  }

  renderTransactions() {
    const list = document.getElementById("transactionsList");
    if (!list) return;

    list.innerHTML = this.transactions.map(tx => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 14px; background: rgba(15,23,42,0.5); border: 1px solid var(--border-subtle); border-radius: 14px; margin-bottom: 8px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 36px; height: 36px; border-radius: 10px; background: rgba(45,212,191,0.12); color: var(--teal-neon); display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
            <i class="bi ${tx.icon}"></i>
          </div>
          <div>
            <div style="font-weight: 600; font-size: 0.9rem; color: #fff;">${tx.desc}</div>
            <div style="font-family: var(--font-hud); font-size: 0.72rem; color: var(--text-dim);">${tx.date} · ${tx.cat}</div>
          </div>
        </div>
        <div style="font-family: var(--font-hud); font-weight: 700; font-size: 0.92rem; color: ${tx.amount > 0 ? 'var(--emerald-neon)' : '#fff'};">
          ${tx.amount > 0 ? '+' : ''}$ ${Math.abs(tx.amount).toLocaleString('es-AR', { minimumFractionDigits: 2 })}
        </div>
      </div>
    `).join('');
  }

  // 4. Transfer Flow with Biometric Simulation
  bindTransferFlow() {
    const form = document.getElementById("transferForm");
    const modal = document.getElementById("biometricModal");
    const receiptBox = document.getElementById("receiptModal");

    if (!form || !modal) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const alias = document.getElementById("transferAlias").value.trim();
      const amount = parseFloat(document.getElementById("transferAmount").value);

      if (!alias || isNaN(amount) || amount <= 0) {
        alert("Por favor ingrese un destinatario y un monto válido.");
        return;
      }

      if (amount > this.balanceARS) {
        alert("Saldo insuficiente en cuenta en Pesos.");
        return;
      }

      // Disparar modal biométrico
      modal.style.display = "flex";
      const statusText = document.getElementById("biometricStatus");
      statusText.textContent = "Escaneando Face ID / Sensor Biométrico...";

      setTimeout(() => {
        statusText.textContent = "Autenticación Criptográfica Exitosa ✓";
        setTimeout(() => {
          modal.style.display = "none";
          this.executeTransfer(alias, amount);
        }, 800);
      }, 1600);
    });
  }

  executeTransfer(alias, amount) {
    this.balanceARS -= amount;
    const newTx = {
      id: "TX-" + Math.floor(1000 + Math.random() * 9000),
      desc: `Transferencia a ${alias}`,
      cat: "Transferencia",
      amount: -amount,
      date: "Hoy, recién",
      icon: "bi-arrow-up-right-circle"
    };
    this.transactions.unshift(newTx);
    this.updateDisplay();

    // Mostrar comprobante
    const receipt = document.getElementById("receiptModal");
    if (receipt) {
      document.getElementById("receiptAlias").textContent = alias;
      document.getElementById("receiptAmount").textContent = `$ ${amount.toLocaleString('es-AR', { minimumFractionDigits: 2 })}`;
      document.getElementById("receiptId").textContent = newTx.id;
      document.getElementById("receiptDate").textContent = new Date().toLocaleString();
      receipt.style.display = "flex";
    }
  }

  // 5. Live Analytics Chart (Canvas)
  drawAnalyticsChart() {
    const canvas = document.getElementById("analyticsCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    const data = [1.2, 1.8, 1.5, 2.4, 2.1, 3.2]; // en millones
    const max = 3.5;
    const stepX = w / (data.length - 1);

    // Gradiente de relleno
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, "rgba(45, 212, 191, 0.35)");
    grad.addColorStop(1, "rgba(45, 212, 191, 0.0)");

    ctx.beginPath();
    ctx.moveTo(0, h - (data[0] / max) * (h - 20));
    data.forEach((val, idx) => {
      const x = idx * stepX;
      const y = h - (val / max) * (h - 20);
      ctx.lineTo(x, y);
    });
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Línea de tendencia
    ctx.beginPath();
    data.forEach((val, idx) => {
      const x = idx * stepX;
      const y = h - (val / max) * (h - 20);
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = "#2dd4bf";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Puntos y meses
    const months = ["May", "Jun", "Jul", "Ago", "Sep", "Oct"];
    data.forEach((val, idx) => {
      const x = idx * stepX;
      const y = h - (val / max) * (h - 20);

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.strokeStyle = "#2dd4bf";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#64748b";
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = "center";
      ctx.fillText(months[idx], x, h - 4);
    });
  }

  // 6. Investment Simulator
  bindInvestmentSimulator() {
    const slider = document.getElementById("investSlider");
    const display = document.getElementById("investAmountDisplay");
    const profit = document.getElementById("investProfitDisplay");
    if (!slider || !display || !profit) return;

    slider.addEventListener("input", () => {
      const val = parseInt(slider.value, 10);
      display.textContent = `$ ${val.toLocaleString('es-AR')}`;
      const monthlyProfit = (val * 0.42) / 12; // 42% TNA simulada
      profit.textContent = `+$ ${monthlyProfit.toLocaleString('es-AR', { maximumFractionDigits: 0 })} / mes`;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.bankDash = new FrancisBankDashboard();
});
