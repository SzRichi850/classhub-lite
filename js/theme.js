document.addEventListener("DOMContentLoaded", function () {

  var themesContainer = document.querySelector("#theme_container");
  var switchHighlight = document.querySelector("#slider_highlight");

  var themes = [
    document.querySelector("#theme_default"),
    document.querySelector("#theme_dark"),
    document.querySelector("#theme_neon"),
    document.querySelector("#theme_retro"),
    document.querySelector("#theme_matrix"),
    document.querySelector("#theme_arctic")
  ];

  var themeClassList = [
    "theme_default",
    "theme_dark",
    "theme_neon",
    "theme_retro",
    "theme_matrix",
    "theme_arctic"
  ];

  function updateSwitchPos(el) {
    if (!themesContainer || !switchHighlight || !el) return;

    var containerRect = themesContainer.getBoundingClientRect();
    var pos = el.getBoundingClientRect();

    switchHighlight.style.left = (pos.left - containerRect.left) + "px";
    switchHighlight.style.top = (pos.top - containerRect.top) + "px";
  }

  function applyTheme(el) {
    if (!el) return;

    document.body.classList.remove.apply(document.body.classList, themeClassList);
    document.body.classList.add(el.id);

    updateSwitchPos(el);
  }

  for (var i = 0; i < themes.length; i++) {
    (function (el) {
      if (!el) return;

      el.addEventListener("click", function () {
        applyTheme(el);
      });
    })(themes[i]);
  }

  var defaultEl = document.querySelector("#theme_default");
  updateSwitchPos(defaultEl);

  var container = document.getElementById("groovycontainer");

  if (container) {
    var img = document.createElement("img");

    img.src = "./css/groovy.png";
    img.alt = "groovy image";
    img.style.width = "300px";
    img.style.borderRadius = "10px";
    img.className = "groovy-image";

    container.appendChild(img);
  }

  var dvd = document.createElement("img");
  dvd.src = "./css/groovy.png";
  dvd.className = "dvd-logo";
  zIndex = "-1";

  document.body.appendChild(dvd);

  var x = 100;
  var y = 100;
  var dx = 1.2;
  var dy = 1.0;

  function animateDVD() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    x += dx;
    y += dy;

    if (x <= 0 || x + 120 >= w) dx *= -1;
    if (y <= 0 || y + 60 >= h) dy *= -1;

    dvd.style.left = x + "px";
    dvd.style.top = y + "px";
    dvd.style.position = "fixed";
    dvd.style.width = "120px";
    dvd.style.zIndex = "9999";

    requestAnimationFrame(animateDVD);
  }

  animateDVD();

});