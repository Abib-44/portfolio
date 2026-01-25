// Seleziona gli elementi
const navMenu = document.getElementById('nav-menu');
const navOpen = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');

// Funzione per aprire il menu
navOpen.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
  navOpen.style.display = 'none';
  navClose.style.display = 'inline-block';
});

// Funzione per chiudere il menu
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
  navOpen.style.display = 'inline-block';
  navClose.style.display = 'none';
});

// Nascondi il close all'inizio
navClose.style.display = 'none';
