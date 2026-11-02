(function () {
  "use strict";

  // Theme toggle (persisted, defaults to system preference)
  var root = document.documentElement;
  var stored = localStorage.getItem("theme");
  if (stored) root.setAttribute("data-theme", stored);

  function currentTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setToggleLabel(btn) {
    var theme = currentTheme();
    btn.textContent = theme === "dark" ? "☀" : "☽";
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      setToggleLabel(toggle);
      toggle.addEventListener("click", function () {
        var next = currentTheme() === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        setToggleLabel(toggle);
        if (window.__updateWaveColors) window.__updateWaveColors();
      });
    }

    // Mobile nav toggle
    var navToggle = document.querySelector("[data-nav-toggle]");
    var navLinks = document.querySelector("[data-nav-links]");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("open");
        var expanded = navLinks.classList.contains("open");
        navToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      });
      navLinks.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          navLinks.classList.remove("open");
        });
      });
    }

    // Expandable project cards
    document.querySelectorAll("[data-project-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var project = btn.closest(".project");
        var wasOpen = project.classList.contains("open");
        document.querySelectorAll(".project.open").forEach(function (p) {
          if (p !== project) p.classList.remove("open");
        });
        project.classList.toggle("open", !wasOpen);
      });
    });

    initHeroWave();
  });

  // Blue/teal wavy hero visual, disrupted by mouse movement
  function initHeroWave() {
    var canvas = document.getElementById("wave-canvas");
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var container = canvas.parentElement;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var width = 0;
    var height = 0;
    var dpr = window.devicePixelRatio || 1;
    var mouse = { x: -9999, y: -9999 };
    var targetMouse = { x: -9999, y: -9999 };
    var colors = readColors();

    function readColors() {
      var cs = getComputedStyle(document.documentElement);
      return {
        accent: cs.getPropertyValue("--accent").trim() || "#0a6cff",
        accent2: cs.getPropertyValue("--accent-2").trim() || "#06b6d4",
      };
    }

    window.__updateWaveColors = function () {
      colors = readColors();
      layers[0].color = colors.accent;
      layers[1].color = colors.accent2;
      layers[2].color = colors.accent;
    };

    var layers = [
      { amp: 22, freq: 0.01, speed: 0.013, phase: 0, baseY: 0.62, color: colors.accent, alpha: 0.5 },
      { amp: 30, freq: 0.007, speed: 0.009, phase: 2, baseY: 0.76, color: colors.accent2, alpha: 0.38 },
      { amp: 16, freq: 0.014, speed: 0.017, phase: 4, baseY: 0.9, color: colors.accent, alpha: 0.26 },
    ];

    function resize() {
      dpr = window.devicePixelRatio || 1;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = Math.max(1, width * dpr);
      canvas.height = Math.max(1, height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // Tracked on document (not just the canvas's container) so crossing over a
    // sibling element — like the skills marquee right below the hero — doesn't
    // freeze tracking until the cursor re-enters the container.
    document.addEventListener("mousemove", function (e) {
      var rect = container.getBoundingClientRect();
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = e.clientY - rect.top;
    });
    document.addEventListener(
      "touchmove",
      function (e) {
        if (!e.touches || !e.touches[0]) return;
        var rect = container.getBoundingClientRect();
        targetMouse.x = e.touches[0].clientX - rect.left;
        targetMouse.y = e.touches[0].clientY - rect.top;
      },
      { passive: true }
    );

    var t = 0;

    function draw() {
      if (!width || !height) return;

      ctx.clearRect(0, 0, width, height);

      layers.forEach(function (layer) {
        var baseY = height * layer.baseY;
        ctx.beginPath();
        for (var x = 0; x <= width; x += 8) {
          var y = baseY + Math.sin(x * layer.freq + t * layer.speed + layer.phase) * layer.amp;
          var dx = x - mouse.x;
          var dy = baseY - mouse.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          var influence = Math.max(0, 1 - dist / 170);
          y -= influence * influence * 60;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = layer.color;
        ctx.globalAlpha = layer.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    function frame() {
      t += 1;
      mouse.x += (targetMouse.x - mouse.x) * 0.22;
      mouse.y += (targetMouse.y - mouse.y) * 0.22;
      draw();
      requestAnimationFrame(frame);
    }

    if (reduceMotion) {
      // Static wave, still responds to pointer, but no continuous animation loop.
      draw();
      document.addEventListener("mousemove", function () {
        mouse.x = targetMouse.x;
        mouse.y = targetMouse.y;
        draw();
      });
    } else {
      requestAnimationFrame(frame);
    }
  }
})();
