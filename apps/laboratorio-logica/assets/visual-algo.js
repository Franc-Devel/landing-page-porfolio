/* ==========================================================================
   ALGORITHM VISUALIZER ENGINE (SORTING & METRICS)
   Author: Francisco Agustín Delgado
   ========================================================================== */

class SortingVisualizer {
  constructor() {
    this.stage = document.getElementById("sortStage");
    this.barCount = 35;
    this.array = [];
    this.isSorting = false;
    this.speed = 30; // ms
    this.comparisons = 0;
    this.swaps = 0;

    this.initAudio();
    this.resetArray();
    this.bindDOM();
  }

  initAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      this.audioCtx = new AudioContext();
    }
  }

  playTone(val) {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.frequency.setValueAtTime(150 + val * 6, this.audioCtx.currentTime);
    gain.gain.setValueAtTime(0.02, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.05);
  }

  resetArray() {
    if (this.isSorting) return;
    this.array = [];
    this.comparisons = 0;
    this.swaps = 0;
    this.updateCounters();

    for (let i = 0; i < this.barCount; i++) {
      this.array.push(Math.floor(Math.random() * 85) + 10);
    }
    this.render();
  }

  render() {
    if (!this.stage) return;
    this.stage.innerHTML = this.array.map((val, idx) => `
      <div class="sort-bar" id="bar-${idx}" style="height: ${val}%;"></div>
    `).join('');
  }

  updateCounters() {
    const compEl = document.getElementById("compCount");
    const swapEl = document.getElementById("swapCount");
    if (compEl) compEl.textContent = this.comparisons;
    if (swapEl) swapEl.textContent = this.swaps;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async bubbleSort() {
    if (this.isSorting) return;
    this.isSorting = true;
    const n = this.array.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!this.isSorting) return;

        const b1 = document.getElementById(`bar-${j}`);
        const b2 = document.getElementById(`bar-${j + 1}`);

        if (b1) b1.classList.add("comparing");
        if (b2) b2.classList.add("comparing");

        this.comparisons++;
        this.updateCounters();
        this.playTone(this.array[j]);
        await this.sleep(this.speed);

        if (this.array[j] > this.array[j + 1]) {
          if (b1) b1.classList.add("swapping");
          if (b2) b2.classList.add("swapping");

          const temp = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = temp;

          if (b1) b1.style.height = `${this.array[j]}%`;
          if (b2) b2.style.height = `${this.array[j + 1]}%`;

          this.swaps++;
          this.updateCounters();
          await this.sleep(this.speed);
        }

        if (b1) b1.className = "sort-bar";
        if (b2) b2.className = "sort-bar";
      }
      const sortedBar = document.getElementById(`bar-${n - 1 - i}`);
      if (sortedBar) sortedBar.classList.add("sorted");
    }

    const firstBar = document.getElementById("bar-0");
    if (firstBar) firstBar.classList.add("sorted");
    this.isSorting = false;
  }

  async selectionSort() {
    if (this.isSorting) return;
    this.isSorting = true;
    const n = this.array.length;

    for (let i = 0; i < n; i++) {
      let minIdx = i;
      const bMin = document.getElementById(`bar-${minIdx}`);
      if (bMin) bMin.classList.add("comparing");

      for (let j = i + 1; j < n; j++) {
        if (!this.isSorting) return;
        const bCurrent = document.getElementById(`bar-${j}`);
        if (bCurrent) bCurrent.classList.add("comparing");

        this.comparisons++;
        this.updateCounters();
        this.playTone(this.array[j]);
        await this.sleep(this.speed);

        if (this.array[j] < this.array[minIdx]) {
          const oldMin = document.getElementById(`bar-${minIdx}`);
          if (oldMin && minIdx !== i) oldMin.className = "sort-bar";
          minIdx = j;
        } else {
          if (bCurrent) bCurrent.className = "sort-bar";
        }
      }

      if (minIdx !== i) {
        const bi = document.getElementById(`bar-${i}`);
        const bm = document.getElementById(`bar-${minIdx}`);

        const temp = this.array[i];
        this.array[i] = this.array[minIdx];
        this.array[minIdx] = temp;

        if (bi) bi.style.height = `${this.array[i]}%`;
        if (bm) bm.style.height = `${this.array[minIdx]}%`;

        this.swaps++;
        this.updateCounters();
        await this.sleep(this.speed);
      }

      const bi = document.getElementById(`bar-${i}`);
      if (bi) bi.className = "sort-bar sorted";
    }
    this.isSorting = false;
  }

  bindDOM() {
    document.getElementById("btnShuffle")?.addEventListener("click", () => this.resetArray());
    document.getElementById("btnBubbleSort")?.addEventListener("click", () => this.bubbleSort());
    document.getElementById("btnSelectionSort")?.addEventListener("click", () => this.selectionSort());

    document.getElementById("speedSlider")?.addEventListener("input", (e) => {
      this.speed = 105 - parseInt(e.target.value, 10);
    });

    // Tab switcher
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const tab = btn.dataset.tab;
        document.getElementById("panel-algo").style.display = tab === "algo" ? "block" : "none";
        document.getElementById("panel-exercises").style.display = tab === "exercises" ? "block" : "none";
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.sortVisualizer = new SortingVisualizer();
});
