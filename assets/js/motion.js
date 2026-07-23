/* ============================================================
   AmarasApps — motion.js
   Rich scroll/motion, ENTIRELY gated behind prefers-reduced-motion.
   If the user prefers reduced motion, we do nothing: CSS renders
   the site fully static and legible.
   ============================================================ */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Nav: condense/blur once past the fold (cheap; runs even w/ reduced motion
  // because it's a state change, not an animation — but keep it subtle).
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScrollNav = function () {
      if (window.scrollY > 24) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScrollNav();
    window.addEventListener("scroll", onScrollNav, { passive: true });
  }

  if (reduce) return; // ← everything below is decorative motion only

  // Scroll-progress bar
  var bar = document.querySelector(".progress");
  if (bar) {
    var onScrollBar = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    onScrollBar();
    window.addEventListener("scroll", onScrollBar, { passive: true });
  }

  // Reveal on scroll (fade + rise), with IntersectionObserver
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // Hero parallax on glow orbs (transform only; rAF-throttled)
  var glows = document.querySelectorAll(".hero .glow");
  if (glows.length) {
    var ticking = false;
    var applyParallax = function () {
      var y = window.scrollY;
      glows.forEach(function (g, i) {
        var factor = (i + 1) * 0.06;
        g.style.transform = "translate3d(0," + (y * factor).toFixed(1) + "px,0)";
      });
      ticking = false;
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(applyParallax); ticking = true; }
    }, { passive: true });
  }

  // Count-up for [data-count] stats when they enter view
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var dur = 1100, start = null;
        var step = function (ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) window.requestAnimationFrame(step);
          else el.textContent = target + suffix;
        };
        window.requestAnimationFrame(step);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }
})();
