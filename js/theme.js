// const darkModeBtn = document.getElementById('darkModeBtn');
// darkModeBtn.addEventListener('click', () => {
//   document.body.classList.toggle("dark-mode");
//   const isDark = document.body.classList.contains('dark');

//   const ripple = document.createElement('div');
//   ripple.className = 'mode-ripple';
//   ripple.style.background = isDark ? '#f4f1eb' : '#1a1814';

//   const rect = darkModeBtn.getBoundingClientRect();
//   ripple.style.top = rect.top + rect.height / 2 + 'px';
//   ripple.style.left = rect.left + rect.width / 2 + 'px';

//   document.body.appendChild(ripple);
//   document.body.classList.toggle('dark');

//   setTimeout(() => ripple.remove(), 650);
// });

const themesContainer = document.querySelector("#theme_container");
const switchHighlight = document.querySelector("#slider_highlight");

const white = document.querySelector("#theme_default");
const dark = document.querySelector("#theme_dark");
const neon = document.querySelector("#theme_neon");
const retro = document.querySelector("#theme_retro");
const matrix = document.querySelector("#theme_matrix");
const arctic = document.querySelector("#theme_arctic");

function updateSwitchPos(currentElement) {
  currentSelected = currentElement;
  let pos = currentElement.getBoundingClientRect();

  switchHighlight.style.left = pos.left + "px";
  switchHighlight.style.top = pos.top + "px";
}

let themes = [white, dark, neon, retro, matrix, arctic];
let currentSelected;

themes.forEach(element => {
  element.addEventListener("click", (e) => {

    document.body.className = ""; // empty all themes from body
    document.body.classList.add(element.id);
    updateSwitchPos(element);
  });
});

window.addEventListener("resize", () => {
  updateSwitchPos(currentSelected);
});

updateSwitchPos(white);

//--------------------------------------------------------------------
// does nothing

// for (var i = 0; i < themes.length; i++) {
//   (function (el) {
//     if (!el) return;

//     el.addEventListener("click", function () {
//       applyTheme(el);
//     });
//   })(themes[i]);
// }

// not needed
// var container = document.getElementById("groovycontainer");

var img = document.createElement("img");

img.src = "./css/groovy.png";
img.alt = "groovy image";
img.className = "groovy-image";

// set these in css
// img.style.width = "300px";
// img.style.borderRadius = "10px";

document.body.appendChild(img);


// duplicate
// var img = document.createElement("img");
// img.src = "./css/groovy.png";
// img.className = "img-logo";
// zIndex = "-1";

var x = 100;
var y = 100;

// depends on display resolution, bad solution
// var dx = 1.2;
// var dy = 1.0;

function animateimg() {
  var w = window.innerWidth;
  var h = window.innerHeight;

  x += dx;
  y += dy;

  if (x <= 0 || x + 120 >= w) dx *= -1;
  if (y <= 0 || y + 60 >= h) dy *= -1;

  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.position = "fixed";
  img.style.width = "120px";
  img.style.zIndex = "9999";

  requestAnimationFrame(animateimg);
}

animateimg();