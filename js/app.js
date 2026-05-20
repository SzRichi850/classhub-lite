const mediaQuery = window.matchMedia('(max-width: 768px)');
const fomenu = document.querySelector('.fomenu');
const button = document.querySelector('.button');
const navbar = document.querySelector('.navbar');


let isMenuOpen = false;

button.addEventListener('click', () => {

  isMenuOpen = !isMenuOpen;
  
  if (isMenuOpen) {

    fomenu.style.display = 'flex';
    fomenu.style.flexDirection = 'column';
    
    fomenu.style.opacity = '1'; 
  } else {
    fomenu.style.display = 'none';
  }
});
function KepernyoValtozas(e) {
  if (e.matches) {
    console.log("📱 FIXEN MŰKÖDIK: Mobil nézetre váltottunk! (768px alatt)");
    fomenu.style.display = 'none';
    button.style.display = '';
    
    navbar.style.flexDirection = 'column'; 
    
    isMenuOpen = false;
    
  } else {
    console.log("💻 FIXEN MŰKÖDIK: Asztali nézetre váltottunk! (768px felett)");

    fomenu.style.display = '';
    fomenu.style.flexDirection = ''; 
    button.style.display = 'none';
  }
}

KepernyoValtozas(mediaQuery); 
mediaQuery.addEventListener('change', KepernyoValtozas);