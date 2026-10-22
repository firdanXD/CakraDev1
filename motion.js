/* =========================================================
   CAKRADEV — motion.js
   Scroll reveal, word reveal, count-up, gauge sweep,
   bar growth, dan marquee testimoni.
   ========================================================= */
(function () {
  "use strict";

  var root = document.documentElement;
  if (!root.classList.contains("js")) return; // reduced motion -> tanpa animasi

  /* ---------- 1. Scroll reveal ---------- */
  var targets = [
    ".statement .dot-icon", ".dashboard-preview", ".stats li",
    ".finance .dot-icon", ".finance .section-title", ".finance .lead", ".card-w", ".finance > .btn",
    ".bento .section-title", ".bento .lead", ".bento > .btn", ".bento__card",
    ".pricing .tag", ".pricing .section-title", ".pricing .lead", ".plan",
    ".discover .section-title", ".discover .lead", ".post",
    ".cta .dot-icon", ".cta .section-title", ".cta .lead", ".cta > .btn",
    ".footer__top > *", ".wordmark"
  ].join(",");

  var perParent = new Map();
  document.querySelectorAll(targets).forEach(function (el) {
    var i = perParent.get(el.parentNode) || 0;
    perParent.set(el.parentNode, i + 1);
    el.classList.add("reveal");
    if (el.classList.contains("wordmark")) el.classList.add("reveal--rise");
    el.style.setProperty("--d", (i % 5) * 0.1 + "s");
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      io.unobserve(el);
      el.classList.add("in");
      // setelah selesai, lepas class agar hover transition normal kembali
      setTimeout(function () {
        el.classList.remove("reveal", "reveal--rise", "in");
      }, 1600);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });

  document.querySelectorAll(".reveal").forEach(function (el) {
    io.observe(el);
  });

  /* ---------- 2. Gauge sweep & bar growth ---------- */
  var viz = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        viz.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll(".gauge, .bars").forEach(function (el) {
    viz.observe(el);
  });

  document.querySelectorAll(".bars").forEach(function (b) {
    Array.prototype.forEach.call(b.children, function (c, i) {
      c.style.setProperty("--i", i);
    });
  });

  /* ---------- 3. Count-up angka (50+, 99.8%, 100%, 85%) ---------- */
  var re = /^(\D*)(\d+(?:\.\d+)?)(\D*)$/;
  var counters = [];
  document.querySelectorAll(".stats strong, .mock__big").forEach(function (el) {
    var node = el.firstChild;
    if (!node || node.nodeType !== 3) return;
    var m = node.textContent.trim().match(re);
    if (m) {
      counters.push({
        node: node,
        pre: m[1],
        val: parseFloat(m[2]),
        dec: (m[2].split(".")[1] || "").length,
        post: m[3],
        el: el
      });
    }
  });

  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      var c = counters.filter(function (x) { return x.el === e.target; })[0];
      if (!c) return;
      var t0 = performance.now(), dur = 1600;
      (function tick(t) {
        var p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 3);
        c.node.textContent = c.pre + (c.val * eased).toFixed(c.dec) + c.post;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.6 });

  counters.forEach(function (c) {
    c.node.textContent = c.pre + "0" + c.post;
    cio.observe(c.el);
  });

  /* ---------- 4. Word-by-word reveal pada kalimat statement ---------- */
  var st = document.querySelector(".statement__text");
  if (st) {
    var words = [];
    (function split(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (t) {
            if (!t.trim()) {
              frag.appendChild(document.createTextNode(t));
              return;
            }
            var s = document.createElement("span");
            s.className = "w";
            s.textContent = t;
            frag.appendChild(s);
            words.push(s);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1 && !n.classList.contains("faded")) {
          split(n);
        }
      });
    })(st);

    var ticking = false;
    var update = function () {
      ticking = false;
      var r = st.getBoundingClientRect(), vh = window.innerHeight;
      var p = (vh * 0.85 - r.top) / (r.height + vh * 0.3);
      p = Math.min(1, Math.max(0, p));
      words.forEach(function (w, i) {
        var t = Math.min(1, Math.max(0, (p * words.length * 1.4 - i) / 3));
        w.style.opacity = (0.15 + 0.85 * t).toFixed(3);
      });
    };

    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

})();