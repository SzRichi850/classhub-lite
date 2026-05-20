const mediaQuery = window.matchMedia('(max-width: 768px)');
const fomenu = document.querySelector('.navbar ul');
const button = document.querySelector('#hamburger'); 
const navbar = document.querySelector('.navbar');
const DarkB = document.querySelector('.darkModeBtn')
const h1 = document.querySelector('.h1')

let isMenuOpen = false;

button.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  
  if (isMenuOpen) {
    fomenu.style.maxHeight = '500px'; 
    fomenu.style.opacity = '1'; 
  } else {
    fomenu.style.maxHeight = '0px';
    fomenu.style.opacity = '0';
  }
});

function KepernyoValtozas(e) {
  if (e.matches) {
    console.log("📱 FIXEN MŰKÖDIK: Mobil nézetre váltottunk! (768px alatt)");
    
    navbar.style.position = 'relative';
    navbar.style.minHeight = '60px';     
    
    button.style.display = '';
    button.style.position = 'absolute';
    button.style.left = '15px';
    button.style.top = '15px';
  
    if (h1) {
      h1.style.display = 'none';
    }
    
    fomenu.style.display = 'flex';
    fomenu.style.flexDirection = 'column';
    fomenu.style.width = '100%';
    fomenu.style.paddingTop = '0px'; 
    fomenu.style.textAlign = 'left';  
    fomenu.style.maxHeight = '0px';    
    fomenu.style.opacity = '0';
    fomenu.style.overflow = 'hidden';  
    isMenuOpen = false;
    
  } else {
    console.log("💻 FIXEN MŰKÖDIK: Asztali nézetre váltottunk! (768px felett)");
    
    navbar.style.position = '';
    navbar.style.minHeight = '';
    
    button.style.display = 'none';
    button.style.position = '';
    button.style.left = '';
    button.style.top = '';
  
    
    if (h1) {
      h1.style.display = '';
    }
    
    fomenu.style.display = '';
    fomenu.style.flexDirection = ''; 
    fomenu.style.width = '';
    fomenu.style.paddingTop = '';
    fomenu.style.textAlign = '';
    fomenu.style.maxHeight = '';
    fomenu.style.opacity = '';
    fomenu.style.overflow = '';
  }
}

KepernyoValtozas(mediaQuery); 
mediaQuery.addEventListener('change', KepernyoValtozas);