(function () {
  var key = "analyzex_font_scale";
  var min = 0.85;
  var max = 1.35;
  var step = 0.05;

  function clamp(v) {
    return Math.min(max, Math.max(min, v));
  }

  function getScale() {
    var saved = parseFloat(localStorage.getItem(key));
    if (!isFinite(saved)) return 1;
    return clamp(saved);
  }

  function setScale(v) {
    var s = clamp(v);
    document.documentElement.style.setProperty("--font-scale", String(s));
    localStorage.setItem(key, String(s));
  }

  function onReady(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  onReady(function () {
    setScale(getScale());

    var inc = document.getElementById("font-inc");
    var dec = document.getElementById("font-dec");

    if (inc)
      inc.addEventListener("click", function () {
        setScale(getScale() + step);
      });
    if (dec)
      dec.addEventListener("click", function () {
        setScale(getScale() - step);
      });
  });
})();
