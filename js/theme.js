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

// hook for groovy
let isRetro = false;

function updateSwitchPos(currentElement) {
	currentSelected = currentElement;
	let pos = currentElement.getBoundingClientRect();

	// hook for groovy
	if (currentElement.id == "theme_retro") {
		isRetro = true;
		groovyGen();
	} else {
    isRetro = false;
  }

	switchHighlight.style.left = pos.left + "px";
	switchHighlight.style.top = pos.top + "px";
}

let themes = [white, dark, neon, retro, matrix, arctic];
let currentSelected;

themes.forEach((element) => {
	element.addEventListener("click", (e) => {
		document.body.className = ""; // empty all themes from body
		document.body.classList.add(element.id);
		updateSwitchPos(element);
	});
});

window.addEventListener("resize", () => {
	updateSwitchPos(currentSelected);

	// updating screen size for groovy
	pageWidth = window.screen.availWidth;
	pageHeight = window.screen.availHeight;
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

let img; // init groovy
let pageWidth = window.screen.availWidth;
let pageHeight = window.screen.availHeight;

function groovyGen() {
	if (document.querySelector("#groovy-image") != null) {
		// only one groovy
		return 0;
	}

	img = document.createElement("img");

	img.src = "./css/groovy.png";
	img.alt = "groovy image";
	img.id = "groovy-image"; // there should only be one groovy [class --> id]

	// get size
	imageWidth = img.width;
	imageHeight = img.height;

	// initial position
	img.style.left = (pageWidth / 2 - imageWidth / 2) + "px";
	img.style.top = (pageHeight / 2 - imageHeight / 2) + "px";

	document.body.appendChild(img);

	//first animation frame
	animateimg();
}

// not needed
// img.style.width = "300px";
// img.style.borderRadius = "10px";

// duplicate
// var img = document.createElement("img");
// img.src = "./css/groovy.png";
// img.className = "img-logo";
// zIndex = "-1";

// not what we need
// var x = 100;
// var y = 100;

// -------------------------------------------------------
// source: https://github.com/MicahThePro/DVD-Bounce/

// step distance on axis
let dx = 1.2;
let dy = 1.0;

// image size

function animateimg() {
  // remove groovy, stop animation
	if (!isRetro) { 
    document.getElementById("groovy-image").outerHTML = "";
    return;
	}
  let imageLeft = parseInt(img.style.left);
  let imageTop = parseInt(img.style.top);

  // animation step
  imageLeft += dx;
  imageTop += dy;


  // OoB(Out of Bounds) detection
  if (imageLeft <= 0 || imageLeft + imageWidth >= pageWidth) dx = -dx;
  if (imageTop <= 0 || imageTop + imageHeight >= pageHeight) dy = -dy;

	img.style.left = imageLeft + "px";
	img.style.top = imageTop + "px";

	// set in css instead, not needed every frame
	// img.style.position = "fixed";
	// img.style.width = "120px";
	// img.style.zIndex = "9999";

	requestAnimationFrame(animateimg);
}
