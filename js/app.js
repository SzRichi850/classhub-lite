const mediaQuery = window.matchMedia('(max-width: 768px)');
const fomenu = document.querySelector('.fomenu')

function KepernyoValtozas(e) {
  if (e.matches) {
    console.log("📱 FIXEN MŰKÖDIK: Mobil nézetre váltottunk! (768px alatt)");
    fomenu.style.display = 'none';
  } else {
    console.log("💻 FIXEN MŰKÖDIK: Asztali nézetre váltottunk! (768px felett)");
    fomenu.style.display = '';
  }
}

KepernyoValtozas(mediaQuery); 
mediaQuery.addEventListener('change', KepernyoValtozas); 