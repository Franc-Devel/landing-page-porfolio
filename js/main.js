/**
 * main.js - Francisco Agustín Delgado Portfolio
 * Arquitectura limpia, enfocada y sin sobreinformación.
 * Gestión de los 6 proyectos fijados en GitHub, Sandbox Runner y Ficha Técnica.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initStatsCounter();
  initProjectGrid();
  initSandboxModal();
  initCaseStudyModal();
});

/* ==========================================================================
   1. NAVEGACIÓN Y SCROLL SUAVE
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  let isScrolled = false;
  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 30;
          if (scrolled !== isScrolled) {
            isScrolled = scrolled;
            if (header) {
              header.classList.toggle("scrolled", isScrolled);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const href = link.getAttribute("href");
              if (href === `#${id}`) {
                link.classList.add("active");
              } else if (href && href.startsWith("#")) {
                link.classList.remove("active");
              }
            });
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }
}

/* ==========================================================================
   2. CONTADOR DE PROYECTOS FIJADOS
   ========================================================================== */
function initStatsCounter() {
  const statElements = document.querySelectorAll(".stat-number[data-target]");
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          statElements.forEach((el) => {
            const target = parseInt(el.getAttribute("data-target"), 10);
            const suffix = el.getAttribute("data-suffix") || "";
            let count = 0;
            const timer = setInterval(() => {
              count++;
              if (count >= target) {
                el.textContent = `${target}${suffix}`;
                clearInterval(timer);
              } else {
                el.textContent = `${count}${suffix}`;
              }
            }, 60);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsSection = document.querySelector(".hero-stats");
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* ==========================================================================
   3. RENDERIZADO DE LOS 6 PROYECTOS FIJADOS EN GITHUB
   ========================================================================== */
function projectVisual(project, index = 0, total = 6) {
  const num = String(index + 1).padStart(2, "0");
  const tot = String(total).padStart(2, "0");

  if (project.image) {
    return `
      <div class="project-visual-wrapper">
        <img
          src="${project.image}"
          alt="Vista previa de ${project.title}"
          class="project-banner-img"
          loading="lazy"
        />
        <div class="project-banner-overlay">
          <span class="project-order-tag">${num} / ${tot}</span>
          <span class="project-domain-tag">${project.categoryLabel}</span>
        </div>
      </div>
    `;
  }

  const categoryLabels = {
    "automation": "Automatización & IA",
    "python-data": "Python · Data Analytics",
    "fullstack": "Fullstack · ERP & Gestión",
    "frontend": "Frontend · React & Web",
    "ecommerce": "E-Commerce · Gaming"
  };

  const shortSnippet = project.tags.slice(0, 3).join(" · ");

  return `
    <div class="project-visual" aria-hidden="true">
      <div class="visual-topline">
        <span>${categoryLabels[project.category] || project.categoryLabel}</span>
        <span>${num} / ${tot}</span>
      </div>
      <div class="visual-brand">${project.title}</div>
      <div class="visual-metric">${shortSnippet}</div>
      <div class="visual-ui"><span></span><span></span><span></span><span></span><span></span></div>
    </div>
  `;
}

function initProjectGrid() {
  const gridContainer = document.getElementById("projectsGrid");
  if (!gridContainer) return;

  gridContainer.innerHTML = PROJECTS_DATA.map((proj, idx) => {
    // Botón principal
    const primaryAction = proj.localAppUrl
      ? `<button class="btn-card btn-card-primary btn-sandbox" data-app-url="${proj.localAppUrl}" data-app-title="${proj.title}" title="Probar app interactiva">
          ▶ Probar Demo
        </button>`
      : proj.liveUrl && !proj.liveUrl.includes("github.com") && !proj.liveUrl.startsWith("#")
      ? `<a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-primary" title="Abrir app en vivo">
          ↗ Ver en Vercel
        </a>`
      : `<a href="${proj.repository}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-primary" title="Ver código en GitHub">
          🐙 Ver en GitHub
        </a>`;

    // Botón de repositorio (si no es ya el principal)
    const repoAction = proj.repository && (proj.localAppUrl || (proj.liveUrl && !proj.liveUrl.includes("github.com")))
      ? `<a href="${proj.repository}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-secondary" title="Ver código fuente en GitHub">
          🐙 GitHub Repo
        </a>`
      : "";

    // Botón de ficha técnica / detalles
    const detailsAction = `<button class="btn-card btn-card-secondary btn-case-study" data-project-id="${proj.id}" title="Ver ficha técnica">
        ℹ Ficha Técnica
      </button>`;

    return `
      <article class="project-card" data-id="${proj.id}" data-category="${proj.category}">
        ${projectVisual(proj, idx, PROJECTS_DATA.length)}
        
        <div class="project-card-header">
          <span class="pin-badge">Fijado en GitHub</span>
          <span class="project-category-badge">${proj.categoryLabel}</span>
        </div>

        <h3 class="project-title">${proj.title}</h3>
        <div class="project-subtitle">${proj.subtitle}</div>
        <p class="project-description">${proj.description}</p>

        <div class="project-tags">
          ${proj.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>

        <div class="project-actions">
          ${primaryAction}
          ${repoAction}
          ${detailsAction}
        </div>
      </article>
    `;
  }).join("");

  bindCardInteractions();
}

function bindCardInteractions() {
  document.querySelectorAll(".btn-sandbox").forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-app-url");
      const title = btn.getAttribute("data-app-title");
      if (window.openSandbox) window.openSandbox(url, title);
    });
  });

  document.querySelectorAll(".btn-case-study").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pid = btn.getAttribute("data-project-id");
      if (window.openCaseStudy) window.openCaseStudy(pid);
    });
  });
}

/* ==========================================================================
   4. MODAL SANDBOX RUNNER
   ========================================================================== */
function initSandboxModal() {
  const modal = document.getElementById("sandboxModal");
  const iframe = document.getElementById("sandboxIframe");
  const modalTitle = document.getElementById("sandboxModalTitle");
  const externalLink = document.getElementById("sandboxExternalLink");
  const reloadBtn = document.getElementById("sandboxReloadBtn");
  const closeBtn = document.getElementById("sandboxCloseBtn");
  const deviceButtons = document.querySelectorAll(".device-btn");
  const iframeContainer = document.querySelector(".modal-iframe-container");

  if (!modal || !iframe) return;

  let currentSandboxUrl = "";

  window.openSandbox = function (url, title) {
    currentSandboxUrl = url;
    modalTitle.textContent = title;
    const isHttp = window.location.protocol.startsWith("http");
    const cacheBuster = isHttp ? ((url.includes("?") ? "&" : "?") + "t=" + Date.now()) : "";
    iframe.src = url + cacheBuster;
    if (externalLink) {
      externalLink.href = url;
      externalLink.setAttribute("target", "_blank");
      externalLink.setAttribute("rel", "noopener noreferrer");
    }
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function closeSandbox() {
    modal.classList.remove("active");
    iframe.src = "about:blank";
    currentSandboxUrl = "";
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeSandbox);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeSandbox();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeSandbox();
    }
  });

  if (reloadBtn) {
    reloadBtn.addEventListener("click", () => {
      const isHttp = window.location.protocol.startsWith("http");
      const cacheBuster = isHttp ? ((currentSandboxUrl.includes("?") ? "&" : "?") + "t=" + Date.now()) : "";
      iframe.src = (currentSandboxUrl || iframe.src.split("?")[0]) + cacheBuster;
    });
  }

  deviceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      deviceButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const device = btn.getAttribute("data-device");
      if (iframeContainer) {
        iframeContainer.className = `modal-iframe-container ${device}`;
      }
    });
  });
}

/* ==========================================================================
   5. MODAL DE FICHA TÉCNICA
   ========================================================================== */
function initCaseStudyModal() {
  const modal = document.getElementById("caseStudyModal");
  const modalContent = document.getElementById("caseStudyContent");
  const closeBtn = document.getElementById("caseStudyCloseBtn");

  if (!modal || !modalContent) return;

  window.openCaseStudy = function (projectId) {
    const p = PROJECTS_DATA.find((item) => item.id === projectId);
    if (!p) return;

    modalContent.innerHTML = `
      <div style="border-bottom: 1px solid var(--bg-glass-border); padding-bottom: 18px; margin-bottom: 22px;">
        <span class="project-category-badge" style="display: block; margin-bottom: 6px;">${p.categoryLabel}</span>
        <h2 style="font-family: var(--font-heading); font-size: 1.75rem; color: #fff; margin-bottom: 6px;">${p.title}</h2>
        <p style="color: var(--accent-cyan); font-weight: 500; font-size: 0.95rem;">${p.subtitle}</p>
      </div>

      ${p.image ? `
        <div style="border-radius: 14px; overflow: hidden; margin-bottom: 22px; border: 1px solid var(--bg-glass-border); background: #090e1a;">
          <img src="${p.image}" alt="${p.title}" class="case-study-hero-image" style="margin-bottom: 0;" />
        </div>
      ` : ""}

      <div style="display: flex; flex-direction: column; gap: 22px;">
        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1.05rem; color: #fff; margin-bottom: 8px;">1. Propósito & Problema Resuelto</h4>
          <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem;">${p.description}</p>
        </div>

        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1.05rem; color: #fff; margin-bottom: 10px;">2. Aspectos Destacados de Implementación</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
            ${p.highlights
              .map(
                (h) => `
              <li style="color: var(--text-secondary); display: flex; align-items: flex-start; gap: 10px; font-size: 0.92rem;">
                <span style="color: var(--accent-emerald); font-weight: bold;">✓</span>
                <span>${h}</span>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>

        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1.05rem; color: #fff; margin-bottom: 10px;">3. Decisiones Técnicas & Stack</h4>
          <div style="background: rgba(10, 15, 25, 0.7); border: 1px solid var(--bg-glass-border); border-radius: 12px; padding: 18px; display: grid; gap: 10px;">
            ${Object.entries(p.architecture)
              .map(
                ([key, val]) => `
              <div>
                <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--accent-cyan); text-transform: uppercase;">${key}:</span>
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 2px;">${val}</p>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <div>
          <h4 style="font-family: var(--font-heading); font-size: 1.05rem; color: #fff; margin-bottom: 12px;">4. Enlaces Directos</h4>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            ${
              p.localAppUrl
                ? `<a href="${p.localAppUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 10px 18px; font-size: 0.85rem;">
                    ↗ Abrir Demo en Pestaña Nueva
                  </a>`
                : ""
            }
            ${
              p.liveUrl && !p.liveUrl.includes("github.com") && !p.liveUrl.startsWith("#")
                ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 10px 18px; font-size: 0.85rem;">
                    ⚡ Ver en Vercel
                  </a>`
                : ""
            }
            ${
              p.repository
                ? `<a href="${p.repository}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding: 10px 18px; font-size: 0.85rem;">
                    🐙 Ver Repositorio en GitHub
                  </a>`
                : ""
            }
          </div>
        </div>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function closeCaseStudy() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeCaseStudy);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeCaseStudy();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeCaseStudy();
    }
  });
}
