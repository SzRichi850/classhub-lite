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

const whitePos = document.querySelector("#theme_default");
const darkPos = document.querySelector("#theme_dark");
const neonPos = document.querySelector("#theme_neon");
const retroPos = document.querySelector("#theme_retro");
const matrixPos = document.querySelector("#theme_matrix");
const arcticPos = document.querySelector("#theme_arctic");

function updateSwitchPos(newPosX, newPosY){
  switchHighlight.style.left = newPosX+"px";
  switchHighlight.style.top = newPosY+"px";
}

let themes = [whitePos, darkPos, neonPos, retroPos, matrixPos, arcticPos];
themes.forEach(element => {
  element.addEventListener("click", (e) => {
    let pos = element.getBoundingClientRect();
    document.body.className = ""; // empty all themes from body
    document.body.classList.add(element.id);
    updateSwitchPos(pos.left-5, pos.top);
  });
});

updateSwitchPos(whitePos.left, whitePos.top);