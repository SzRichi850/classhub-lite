const mediaQuery = window.matchMedia('(max-width: 768px)');
const fomenu = document.querySelector('.fomenu');
const button = document.querySelector('.button');

function KepernyoValtozas(e) {
  if (e.matches) {
    console.log("📱 FIXEN MŰKÖDIK: Mobil nézetre váltottunk! (768px alatt)");
    fomenu.style.display = 'none';
    button.style.display = '';
    
  } else {
    console.log("💻 FIXEN MŰKÖDIK: Asztali nézetre váltottunk! (768px felett)");
    fomenu.style.display = '';
    button.style.display = 'none';
  }
}

KepernyoValtozas(mediaQuery); 
mediaQuery.addEventListener('change', KepernyoValtozas); 