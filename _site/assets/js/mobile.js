document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById('nav-menu');
  const navOpen = document.getElementById('nav-open');
  const navClose = document.getElementById('nav-close');
  const userButton = document.getElementById('user-btn'); 

  function isMobile() {
    return window.innerWidth < 768;
  }

  function openMenu() {
    if (!isMobile()) return;
    navMenu.classList.add('show-menu');
    navOpen.style.display = 'none';
    navClose.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!isMobile()) return;
    navMenu.classList.remove('show-menu');
    navOpen.style.display = 'block';
    navClose.style.display = 'none';
    document.body.style.overflow = ''; 
  }

  navOpen.addEventListener('click', openMenu);
  navClose.addEventListener('click', closeMenu);

  if (userButton) {
    userButton.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
    });
  }

  if (isMobile()) {
    navOpen.style.display = 'block';
    navClose.style.display = 'none';
  } else {
    navOpen.style.display = 'none';
    navClose.style.display = 'none';
  }

  window.addEventListener('resize', () => {
    if (!isMobile()) {
      navMenu.classList.remove('show-menu');
      navOpen.style.display = 'none';
      navClose.style.display = 'none';
      document.body.style.overflow = '';
    } else {
      navOpen.style.display = 'block';
    }
  });
});
