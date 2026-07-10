/* Micro-animations d'apparition au scroll.
   Le site est 100 % fonctionnel sans ce fichier.
   Respecte prefers-reduced-motion (aucune animation si réduit). */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });
})();
