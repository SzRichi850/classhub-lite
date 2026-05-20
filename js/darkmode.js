const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
},80);

const btn = document.getElementById('darkModeBtn');

btn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');

  const ripple = document.createElement('div');
  ripple.className = 'mode-ripple';
  ripple.style.background = isDark ? '#f4f1eb' : '#1a1814';

  const rect = btn.getBoundingClientRect();
  ripple.style.top = rect.top + rect.height / 2 + 'px';
  ripple.style.left = rect.left + rect.width / 2 + 'px';

  document.body.appendChild(ripple);
  document.body.classList.toggle('dark');

  setTimeout(() => ripple.remove(), 650);
});