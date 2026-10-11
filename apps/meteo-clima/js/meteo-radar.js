/* ==========================================================================
   METEOTRACK PRO 2.0 - TACTICAL DOPPLER RADAR SIMULATOR
   Author: Francisco Agustín Delgado
   ========================================================================== */

class DopplerRadar {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.angle = 0;
    this.isSweeping = true;
    this.clouds = [];
    this.initClouds();
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * window.devicePixelRatio;
    this.canvas.height = rect.height * window.devicePixelRatio;
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.radius = Math.min(this.centerX, this.centerY) * 0.9;
  }

  initClouds() {
    this.clouds = [
      { r: 0.35, theta: 0.8, size: 45, intensity: 55 },
      { r: 0.6, theta: 2.2, size: 70, intensity: 40 },
      { r: 0.75, theta: 4.1, size: 90, intensity: 65 },
      { r: 0.45, theta: 5.3, size: 50, intensity: 30 }
    ];
  }

  setCloudIntensity(intensityMultiplier = 1) {
    this.clouds.forEach(c => {
      c.intensity = Math.min(75, Math.max(15, c.intensity * intensityMultiplier));
    });
  }

  drawGrid() {
    const ctx = this.ctx;
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
    ctx.lineWidth = 1;

    // Range rings (50km, 100km, 150km, 200km)
    for (let i = 1; i <= 4; i++) {
      const ringRadius = (this.radius / 4) * i;
      ctx.beginPath();
      ctx.arc(this.centerX, this.centerY, ringRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Ring distance labels
      ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillText(`${i * 50}km`, this.centerX + 4, this.centerY - ringRadius + 10);
    }

    // Crosshairs
    ctx.beginPath();
    ctx.moveTo(this.centerX - this.radius, this.centerY);
    ctx.lineTo(this.centerX + this.radius, this.centerY);
    ctx.moveTo(this.centerX, this.centerY - this.radius);
    ctx.lineTo(this.centerX, this.centerY + this.radius);
    ctx.stroke();

    // Compass headings
    ctx.fillStyle = '#38bdf8';
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('N', this.centerX, this.centerY - this.radius - 4);
    ctx.fillText('S', this.centerX, this.centerY + this.radius + 12);
    ctx.fillText('E', this.centerX + this.radius + 12, this.centerY + 3);
    ctx.fillText('W', this.centerX - this.radius - 12, this.centerY + 3);
  }

  drawReflectivity() {
    const ctx = this.ctx;
    this.clouds.forEach(cloud => {
      const x = this.centerX + Math.cos(cloud.theta) * (cloud.r * this.radius);
      const y = this.centerY + Math.sin(cloud.theta) * (cloud.r * this.radius);

      const grad = ctx.createRadialGradient(x, y, 2, x, y, cloud.size);
      if (cloud.intensity > 55) {
        // Severe (Red/Orange)
        grad.addColorStop(0, 'rgba(239, 68, 68, 0.6)');
        grad.addColorStop(0.5, 'rgba(245, 158, 11, 0.4)');
        grad.addColorStop(1, 'transparent');
      } else if (cloud.intensity > 35) {
        // Moderate (Green/Yellow)
        grad.addColorStop(0, 'rgba(16, 185, 129, 0.55)');
        grad.addColorStop(0.6, 'rgba(56, 189, 248, 0.3)');
        grad.addColorStop(1, 'transparent');
      } else {
        // Light (Cyan)
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
        grad.addColorStop(1, 'transparent');
      }

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, cloud.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  drawSweepBeam() {
    const ctx = this.ctx;
    const sweepLength = this.radius;
    const sweepAngle = 0.35; // radians spread

    ctx.save();
    ctx.translate(this.centerX, this.centerY);

    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, sweepLength);
    grad.addColorStop(0, 'rgba(56, 189, 248, 0.6)');
    grad.addColorStop(1, 'rgba(56, 189, 248, 0.05)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, sweepLength, this.angle - sweepAngle, this.angle, false);
    ctx.closePath();
    ctx.fill();

    // Leading ray
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(this.angle) * sweepLength, Math.sin(this.angle) * sweepLength);
    ctx.stroke();

    ctx.restore();
  }

  animate() {
    if (!this.canvas) return;
    this.ctx.fillStyle = '#020617';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawGrid();
    this.drawReflectivity();
    if (this.isSweeping) {
      this.drawSweepBeam();
      this.angle = (this.angle + 0.035) % (Math.PI * 2);
    }

    requestAnimationFrame(this.animate);
  }
}

window.DopplerRadar = DopplerRadar;
