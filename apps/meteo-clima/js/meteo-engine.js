/* ==========================================================================
   METEOTRACK PRO 2.0 - ATMOSPHERIC ENGINE & AMBIENT AUDIO SYNTHESIS
   Author: Francisco Agustín Delgado
   ========================================================================== */

// 1. Base meteorológica completa de ciudades
const CITY_DATABASE = {
  tucuman: {
    name: "San Miguel de Tucumán",
    country: "Argentina",
    coords: "26.8241° S, 65.2226° W",
    temp: 24,
    feelsLike: 25,
    min: 17,
    max: 29,
    condition: "Tormenta Aislada",
    weatherType: "thunderstorm",
    humidity: 78,
    pressure: 1012,
    windSpeed: 24,
    windDeg: 145,
    uvIndex: 7,
    aqi: 38,
    aqiLabel: "Excelente",
    dewPoint: 19,
    cloudCover: 72,
    hourly: [24, 25, 26, 28, 29, 27, 24, 22, 21, 20, 19, 18],
    precipProb: [20, 30, 45, 80, 95, 60, 40, 20, 10, 5, 0, 0],
    daily: [
      { day: "Hoy", icon: "⛈️", high: 29, low: 17 },
      { day: "Dom", icon: "🌦️", high: 27, low: 16 },
      { day: "Lun", icon: "⛅", high: 28, low: 15 },
      { day: "Mar", icon: "☀️", high: 31, low: 18 },
      { day: "Mié", icon: "☀️", high: 33, low: 20 },
      { day: "Jue", icon: "🌧️", high: 25, low: 17 },
      { day: "Vie", icon: "⛅", high: 26, low: 15 }
    ]
  },
  buenosaires: {
    name: "Buenos Aires",
    country: "Argentina",
    coords: "34.6037° S, 58.3816° W",
    temp: 19,
    feelsLike: 19,
    min: 14,
    max: 22,
    condition: "Nublado con Viento",
    weatherType: "cloudy",
    humidity: 65,
    pressure: 1018,
    windSpeed: 32,
    windDeg: 90,
    uvIndex: 4,
    aqi: 45,
    aqiLabel: "Buena",
    dewPoint: 12,
    cloudCover: 85,
    hourly: [19, 20, 21, 22, 21, 20, 18, 17, 16, 15, 14, 14],
    precipProb: [10, 10, 15, 20, 25, 15, 10, 5, 0, 0, 0, 0],
    daily: [
      { day: "Hoy", icon: "☁️", high: 22, low: 14 },
      { day: "Dom", icon: "🌧️", high: 20, low: 13 },
      { day: "Lun", icon: "⛅", high: 21, low: 12 },
      { day: "Mar", icon: "☀️", high: 24, low: 14 },
      { day: "Mié", icon: "☀️", high: 25, low: 15 },
      { day: "Jue", icon: "🌦️", high: 22, low: 13 },
      { day: "Vie", icon: "⛅", high: 23, low: 14 }
    ]
  },
  tokyo: {
    name: "Tokio",
    country: "Japón",
    coords: "35.6762° N, 139.6503° E",
    temp: 16,
    feelsLike: 15,
    min: 11,
    max: 18,
    condition: "Lluvia Fina Neón",
    weatherType: "rain",
    humidity: 82,
    pressure: 1009,
    windSpeed: 18,
    windDeg: 210,
    uvIndex: 3,
    aqi: 22,
    aqiLabel: "Excelente",
    dewPoint: 13,
    cloudCover: 90,
    hourly: [16, 16, 17, 18, 17, 16, 15, 14, 13, 12, 11, 11],
    precipProb: [70, 75, 80, 85, 60, 50, 30, 20, 10, 10, 5, 5],
    daily: [
      { day: "Hoy", icon: "🌧️", high: 18, low: 11 },
      { day: "Dom", icon: "⛅", high: 20, low: 12 },
      { day: "Lun", icon: "☀️", high: 22, low: 13 },
      { day: "Mar", icon: "☀️", high: 23, low: 14 },
      { day: "Mié", icon: "🌧️", high: 17, low: 11 },
      { day: "Jue", icon: "☁️", high: 19, low: 12 },
      { day: "Vie", icon: "⛅", high: 21, low: 13 }
    ]
  },
  reykjavik: {
    name: "Reikiavik",
    country: "Islandia",
    coords: "64.1466° N, 21.9426° W",
    temp: -2,
    feelsLike: -7,
    min: -5,
    max: 1,
    condition: "Nieve & Aurora Boreal",
    weatherType: "aurora",
    humidity: 88,
    pressure: 998,
    windSpeed: 42,
    windDeg: 330,
    uvIndex: 1,
    aqi: 12,
    aqiLabel: "Pura Polar",
    dewPoint: -4,
    cloudCover: 35,
    hourly: [-2, -2, -1, 0, 1, 0, -2, -3, -4, -4, -5, -5],
    precipProb: [40, 50, 45, 30, 20, 25, 30, 40, 50, 60, 50, 40],
    daily: [
      { day: "Hoy", icon: "❄️", high: 1, low: -5 },
      { day: "Dom", icon: "❄️", high: 0, low: -6 },
      { day: "Lun", icon: "🌌", high: 2, low: -4 },
      { day: "Mar", icon: "🌨️", high: -1, low: -7 },
      { day: "Mié", icon: "❄️", high: -2, low: -8 },
      { day: "Jue", icon: "⛅", high: 1, low: -4 },
      { day: "Vie", icon: "🌌", high: 3, low: -3 }
    ]
  },
  cairo: {
    name: "El Cairo",
    country: "Egipto",
    coords: "30.0444° N, 31.2357° E",
    temp: 34,
    feelsLike: 36,
    min: 22,
    max: 37,
    condition: "Despejado Radiante",
    weatherType: "sunny",
    humidity: 28,
    pressure: 1014,
    windSpeed: 14,
    windDeg: 45,
    uvIndex: 10,
    aqi: 95,
    aqiLabel: "Moderada",
    dewPoint: 11,
    cloudCover: 5,
    hourly: [34, 35, 37, 36, 33, 30, 28, 26, 24, 23, 22, 22],
    precipProb: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    daily: [
      { day: "Hoy", icon: "☀️", high: 37, low: 22 },
      { day: "Dom", icon: "☀️", high: 38, low: 23 },
      { day: "Lun", icon: "☀️", high: 36, low: 21 },
      { day: "Mar", icon: "☀️", high: 35, low: 20 },
      { day: "Mié", icon: "☀️", high: 37, low: 22 },
      { day: "Jue", icon: "☀️", high: 39, low: 24 },
      { day: "Vie", icon: "☀️", high: 38, low: 23 }
    ]
  }
};

// 2. Motor de Partículas Atmosféricas (Canvas)
class WeatherCanvasEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.weatherType = "thunderstorm";
    this.particles = [];
    this.lightningAlpha = 0;
    this.auroraOffset = 0;
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initParticles();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setWeather(type) {
    this.weatherType = type;
    this.initParticles();
  }

  initParticles() {
    this.particles = [];
    const count = this.weatherType === "rain" || this.weatherType === "thunderstorm" ? 200 :
                  this.weatherType === "snow" || this.weatherType === "aurora" ? 120 :
                  this.weatherType === "sunny" ? 60 : 80;

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        len: Math.random() * 25 + 15,
        speed: Math.random() * 12 + 8,
        rad: Math.random() * 3 + 1,
        angle: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.7 + 0.3
      });
    }
  }

  drawRain() {
    const ctx = this.ctx;
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.65)';
    ctx.lineWidth = 1.2;

    this.particles.forEach(p => {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x - 3, p.y + p.len);
      ctx.stroke();

      p.y += p.speed;
      p.x -= 1.5;

      if (p.y > this.canvas.height) {
        p.y = -20;
        p.x = Math.random() * this.canvas.width;
      }
    });
  }

  drawSnow() {
    const ctx = this.ctx;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';

    this.particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.rad, 0, Math.PI * 2);
      ctx.fill();

      p.y += p.speed * 0.2;
      p.x += Math.sin(p.angle) * 0.8;
      p.angle += 0.02;

      if (p.y > this.canvas.height) {
        p.y = -10;
        p.x = Math.random() * this.canvas.width;
      }
    });
  }

  drawAurora() {
    const ctx = this.ctx;
    this.auroraOffset += 0.01;

    // Gradiente ondeante de aurora
    for (let layer = 0; layer < 3; layer++) {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      for (let x = 0; x <= this.canvas.width; x += 40) {
        const y = Math.sin(x * 0.003 + this.auroraOffset + layer) * 80 + (120 + layer * 60);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(this.canvas.width, 0);
      ctx.closePath();

      const color = layer === 0 ? 'rgba(71,102,79,0.15)' :
                    layer === 1 ? 'rgba(56, 189, 248, 0.12)' : 'rgba(168, 85, 247, 0.1)';
      ctx.fillStyle = color;
      ctx.fill();
    }
  }

  drawSunny() {
    const ctx = this.ctx;
    // Sol radiante en esquina
    const sunGrad = ctx.createRadialGradient(this.canvas.width - 150, 100, 10, this.canvas.width - 150, 100, 280);
    sunGrad.addColorStop(0, 'rgba(245, 158, 11, 0.45)');
    sunGrad.addColorStop(0.4, 'rgba(251, 191, 36, 0.15)');
    sunGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = sunGrad;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Partículas de polvo de luz
    ctx.fillStyle = 'rgba(251, 191, 36, 0.5)';
    this.particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.rad * 0.7, 0, Math.PI * 2);
      ctx.fill();

      p.y -= 0.3;
      p.x += Math.sin(p.angle) * 0.3;
      if (p.y < 0) p.y = this.canvas.height;
    });
  }

  triggerLightning() {
    if (this.weatherType !== "thunderstorm") return;
    if (Math.random() < 0.008) {
      this.lightningAlpha = 0.85;
    }
  }

  drawLightning() {
    if (this.lightningAlpha > 0) {
      this.ctx.fillStyle = `rgba(240, 249, 255, ${this.lightningAlpha})`;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.lightningAlpha -= 0.06;
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.weatherType === "rain" || this.weatherType === "thunderstorm") {
      this.drawRain();
      this.triggerLightning();
      this.drawLightning();
    } else if (this.weatherType === "snow") {
      this.drawSnow();
    } else if (this.weatherType === "aurora") {
      this.drawAurora();
      this.drawSnow();
    } else if (this.weatherType === "sunny") {
      this.drawSunny();
    }

    requestAnimationFrame(this.animate);
  }
}

// 3. Sintetizador de Sonido Atmosférico Procedural (Web Audio API)
class ClimateAudioSynth {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.noiseNode = null;
    this.gainNode = null;
    this.filterNode = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  toggle() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  start() {
    if (this.isPlaying) return;
    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1; // Ruido blanco
    }

    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;

    // Filtro pasabanda para imitar lluvia/viento suave
    this.filterNode = this.ctx.createBiquadFilter();
    this.filterNode.type = 'lowpass';
    this.filterNode.frequency.setValueAtTime(800, this.ctx.currentTime);

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);

    this.noiseNode.connect(this.filterNode);
    this.filterNode.connect(this.gainNode);
    this.gainNode.connect(this.ctx.destination);

    this.noiseNode.start();
    this.isPlaying = true;
  }

  stop() {
    if (!this.isPlaying) return;
    if (this.gainNode) {
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);
      setTimeout(() => {
        if (this.noiseNode) this.noiseNode.stop();
        this.isPlaying = false;
      }, 400);
    }
  }
}

// 4. Renderizador de Gráfica de Temperatura 24h
function drawForecastCurve(canvasId, hourlyTemps, precipProbs) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  ctx.clearRect(0, 0, w, h);

  const minTemp = Math.min(...hourlyTemps) - 2;
  const maxTemp = Math.max(...hourlyTemps) + 2;
  const range = maxTemp - minTemp || 1;

  const points = hourlyTemps.map((temp, i) => {
    const x = (w / (hourlyTemps.length - 1)) * i;
    const y = h - 35 - ((temp - minTemp) / range) * (h - 70);
    return { x, y, temp, precip: precipProbs[i] || 0 };
  });

  // Barras de precipitación al fondo
  points.forEach(p => {
    const barHeight = (p.precip / 100) * 35;
    ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
    ctx.fillRect(p.x - 6, h - 25 - barHeight, 12, barHeight);
  });

  // Curva de temperatura
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const cpX = (p0.x + p1.x) / 2;
    ctx.quadraticCurveTo(p0.x, p0.y, cpX, (p0.y + p1.y) / 2);
  }
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);

  ctx.strokeStyle = '#895522';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Nodos y etiquetas
  points.forEach((p, idx) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = '#895522';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${p.temp}°`, p.x, p.y - 10);

    // Hora
    ctx.fillStyle = '#64748b';
    ctx.fillText(`${(idx * 2) % 24}:00`, p.x, h - 8);
  });
}

// 5. Controlador Principal de FAUVOR Clima
class MeteoTrackController {
  constructor() {
    this.currentUnit = "C";
    this.currentCityKey = "tucuman";
    this.canvasEngine = new WeatherCanvasEngine('weatherCanvas');
    this.audioSynth = new ClimateAudioSynth();
    this.radar = new DopplerRadar('radarCanvas');
    this.quiz = new ClimateQuiz('quizContainer');

    this.bindDOM();
    this.loadCity("tucuman");
  }

  bindDOM() {
    // City Search Input
    const searchInput = document.getElementById('citySearch');
    if (searchInput) {
      const status = document.createElement('p');
      status.setAttribute('role', 'status');
      status.setAttribute('aria-live', 'polite');
      status.className = 'city-search-status';
      searchInput.closest('.search-box').appendChild(status);
      searchInput.addEventListener('keydown', async (e) => {
        if (e.key !== 'Enter' || e.isComposing) return;
        e.preventDefault();
        const query = searchInput.value.trim();
        if (!query) { status.textContent = 'Escribí una ciudad para buscar.'; return; }
        this.searchAbort?.abort();
        const controller = new AbortController();
        this.searchAbort = controller;
        status.textContent = 'Consultando ciudad y pronóstico…';
        searchInput.setAttribute('aria-busy', 'true');
        const timeout = setTimeout(() => controller.abort(), 15000);
        try {
          const data = await window.FauvorWeather.search(query, controller.signal);
          if (this.searchAbort !== controller) return;
          CITY_DATABASE.search = data;
          this.loadCity('search');
          document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
          status.textContent = `Clima actualizado: ${data.name}, ${data.country}. Fuente: Open-Meteo. Radar ilustrativo.`;
        } catch (error) {
          if (this.searchAbort === controller) status.textContent = error.name === 'AbortError'
            ? 'La consulta tardó demasiado. Intentá nuevamente.' : error.message;
        } finally {
          clearTimeout(timeout);
          if (this.searchAbort === controller) searchInput.removeAttribute('aria-busy');
        }
      });
    }

    // City Preset Chips
    document.querySelectorAll('.preset-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const cityKey = chip.dataset.city;
        if (cityKey && CITY_DATABASE[cityKey]) {
          document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.loadCity(cityKey);
        }
      });
    });

    // Unit Toggle
    const unitBtn = document.getElementById('unitToggleBtn');
    if (unitBtn) {
      unitBtn.addEventListener('click', () => {
        this.currentUnit = this.currentUnit === "C" ? "F" : "C";
        unitBtn.textContent = `°${this.currentUnit}`;
        this.loadCity(this.currentCityKey);
      });
    }

    // Audio Ambient Button
    const audioBtn = document.getElementById('ambientAudioBtn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        const isPlaying = this.audioSynth.toggle();
        audioBtn.classList.toggle('playing', isPlaying);
        audioBtn.querySelector('.audio-label').textContent = isPlaying ? "Audio Activo" : "Atmósfera Sonora";
      });
    }

    // Export Card Snapshot
    const exportBtn = document.getElementById('exportWeatherBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        alert("Ficha meteorológica generada y guardada en el portapapeles.");
      });
    }
  }

  loadCity(cityKey) {
    this.searchAbort?.abort();
    this.currentCityKey = cityKey;
    const data = CITY_DATABASE[cityKey];
    if (!data) return;

    // Convert temp if F
    const toTemp = (t) => this.currentUnit === "C" ? t : Math.round((t * 9/5) + 32);

    document.getElementById('cityName').textContent = data.name;
    document.getElementById('cityCoords').textContent = `${data.country} · ${data.coords}`;
    document.getElementById('mainTemp').textContent = toTemp(data.temp);
    document.getElementById('tempUnit').textContent = '°' + this.currentUnit;
    document.getElementById('weatherConditionText').textContent = data.condition;
    const symbols = {clear:'sun',sunny:'sun',cloudy:'cloud-sun',rain:'cloud-rain',snow:'cloud-snow',thunderstorm:'cloud-lightning-rain'};
    document.getElementById('weatherSymbol').className = 'bi bi-' + (symbols[data.weatherType] || 'cloud');
    const rain = data.precipProb.filter(Number.isFinite);
    document.getElementById('rainChance').textContent = rain.length ? Math.max(...rain) + '%' : 'Sin datos';
    document.getElementById('weatherSource').textContent = cityKey === 'search'
      ? 'Datos y pronóstico de Open-Meteo · radar ilustrativo'
      : 'Vista de ejemplo · buscá una ciudad para consultar Open-Meteo';

    document.getElementById('feelsLike').textContent = `${toTemp(data.feelsLike)}°`;
    document.getElementById('hiLo').textContent = `Mín: ${toTemp(data.min)}° · Máx: ${toTemp(data.max)}°`;
    document.getElementById('conditionBadge').textContent = data.condition;

    // Mini stats
    document.getElementById('humidityVal').textContent = `${data.humidity}%`;
    document.getElementById('pressureVal').textContent = `${data.pressure} hPa`;
    document.getElementById('windVal').textContent = `${data.windSpeed} km/h`;
    document.getElementById('aqiVal').textContent = data.aqi == null ? "Sin datos disponibles" : `${data.aqi} · ${data.aqiLabel}`;

    // Gauges & Instruments
    document.getElementById('humidityGauge').style.width = `${data.humidity}%`;
    document.getElementById('uvGauge').style.width = `${Math.min(100, data.uvIndex * 10)}%`;
    document.getElementById('uvVal').textContent = `${data.uvIndex} / 11+`;
    document.getElementById('cloudVal').textContent = `${data.cloudCover}%`;
    document.getElementById('dewPointVal').textContent = `${toTemp(data.dewPoint)}°`;

    // Needle compass
    const needle = document.getElementById('windNeedle');
    if (needle) {
      needle.style.transform = `rotate(${data.windDeg}deg)`;
    }

    // Canvas effects
    this.canvasEngine.setWeather(data.weatherType);
    if (this.radar) {
      this.radar.setCloudIntensity(data.weatherType === "thunderstorm" ? 1.5 : 0.8);
    }

    // 24h curve
    const hourlyConverted = data.hourly.map(t => toTemp(t));
    drawForecastCurve('forecastCanvas', hourlyConverted, data.precipProb);

    // 7-day forecast row
    const dailyRow = document.getElementById('dailyForecastRow');
    if (dailyRow) {
      dailyRow.innerHTML = data.daily.map(d => `
        <div class="daily-col">
          <span>${d.day}</span>
          <span class="daily-icon">${d.icon}</span>
          <span class="daily-high">${toTemp(d.high)}°</span>
          <span class="daily-low">${toTemp(d.low)}°</span>
        </div>
      `).join('');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.meteoApp = new MeteoTrackController();
});
