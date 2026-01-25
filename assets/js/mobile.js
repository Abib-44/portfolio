document.addEventListener("DOMContentLoaded", () => {
const navMenu = document.getElementById('nav-menu');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');

function isMobile() {
  return window.innerWidth < 768; // mobile se <768px
}

function openMenu() {
  if (!isMobile()) return; // non fare nulla su desktop
  navMenu.classList.add('show-menu');
  navOpen.style.display = 'none';
  navClose.style.display = 'block';
}

function closeMenu() {
  if (!isMobile()) return; // non fare nulla su desktop
  navMenu.classList.remove('show-menu');
  navOpen.style.display = 'block';
  navClose.style.display = 'none';
}

// Eventi
navOpen.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);

// Inizializzazione: mostra solo open su mobile
if (isMobile()) {
  navOpen.style.display = 'block';
  navClose.style.display = 'none';
} else {
  navOpen.style.display = 'none';
  navClose.style.display = 'none';
}

// Aggiorna se ridimensioni finestra
window.addEventListener('resize', () => {
  if (!isMobile()) {
    navMenu.classList.remove('show-menu');
    navOpen.style.display = 'none';
    navClose.style.display = 'none';
  } else {
    navOpen.style.display = 'block';
  }
});

});