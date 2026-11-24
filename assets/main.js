(function () {
  "use strict";

  var header = document.getElementById("header");
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("nav");
  var year = document.getElementById("year");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Header state */
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile navigation */
  var closeNav = function () {
    if (!header || !toggle) return;
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };

  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var open = !header.classList.contains("nav-open");
      header.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    if (nav) {
      nav.addEventListener("click", function (event) {
        if (event.target.closest("a")) closeNav();
      });
    }

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });
  }

  /* Footer year */
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  /* Cursor spotlight on cards */
  if (!reduced && window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".card").forEach(function (card) {
      var frame = null;

      card.addEventListener("pointermove", function (event) {
        if (frame) return;
        frame = window.requestAnimationFrame(function () {
          frame = null;
          var rect = card.getBoundingClientRect();
          card.style.setProperty("--mx", ((event.clientX - rect.left) / rect.width) * 100 + "%");
          card.style.setProperty("--my", ((event.clientY - rect.top) / rect.height) * 100 + "%");
        });
      });
    });
  }

  /* Reveal on scroll */
  var items = document.querySelectorAll(".reveal");

  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.1 }
  );

  items.forEach(function (el, index) {
    el.style.transitionDelay = Math.min(index % 4, 3) * 80 + "ms";
    observer.observe(el);
  });
})();
