// -------------------- LOAD PARTIALS --------------------
async function loadPartial(id, file) {
  const currentUrl = new URL(window.location.href);
  let path;

  if (currentUrl.protocol === "https:") {
    path = `/portfolio/assets/partials/${file}`;
  } else {
    path = `/assets/partials/${file}`;
  }

  const response = await fetch(path);
  if (!response.ok) throw new Error(`Failed to fetch: ${path}`);

  const html = await response.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const placeholder = document.getElementById(id);

  doc.body.childNodes.forEach(n => placeholder.appendChild(n));
}

// -------------------- REPLACE NAV LINKS --------------------
function replaceNavLinks() {
  const navLinks = document.querySelectorAll('.nav__link');
  console.log('Nav links trovati:', navLinks.length);

  navLinks.forEach((link, i) => {
    const href = link.getAttribute('href');
    console.log(`Link ${i} prima:`, href);

    if (!href) return;

    if (href.includes('index.html')) {
      link.setAttribute('href', '/portfolio/');
    } else if (href.includes('competences.html')) {
      link.setAttribute('href', '/portfolio/pages/competences.html');
    } else if (href.includes('projects.html')) {
      link.setAttribute('href', '/portfolio/pages/projects.html');
    } else if (href.includes('contact.html')) {
      link.setAttribute('href', '/portfolio/pages/contact.html');
    } else if (href.includes('hobbies.html')) {
      link.setAttribute('href', '/portfolio/pages/hobbies.html');
    }

    console.log(`Link ${i} dopo:`, link.getAttribute('href'));
  });

  // -------------------- MODIFICA AVATAR --------------------
  const avatar = document.querySelector('img.avatar');
  if (avatar) {
    avatar.src = '/portfolio/assets/img/avatar.jpeg';
    console.log("Avatar aggiornato:", avatar.src);
  }
}

// -------------------- DARK/LIGHT TOGGLE --------------------
function setupDarkMode() {
  const themeButton = document.getElementById("theme-button");
  const darkTheme = "dark-theme";

  if (!themeButton) return;

  const selectedTheme = localStorage.getItem("selected-theme"); // "dark" o "light"
  const selectedIcon = localStorage.getItem("selected-icon");   // "uil-moon" o "uil-sun"

  console.log("Tema da localStorage:", selectedTheme);
  console.log("Icona da localStorage:", selectedIcon);

  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);

    themeButton.classList.add(selectedIcon);
    themeButton.classList.remove(selectedIcon === "uil-moon" ? "uil-sun" : "uil-moon");
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle("uil-sun");
    themeButton.classList.toggle("uil-moon");

    console.log("CLICK DARK MODE");
    console.log("Body classList:", document.body.className);
    console.log("Pulsante classList:", themeButton.className);

    const currentTheme = document.body.classList.contains(darkTheme) ? "dark" : "light";
    const currentIcon = themeButton.classList.contains("uil-moon") ? "uil-moon" : "uil-sun";

    localStorage.setItem("selected-theme", currentTheme);
    localStorage.setItem("selected-icon", currentIcon);

    console.log("Tema salvato su localStorage:", localStorage.getItem("selected-theme"));
    console.log("Icona salvata su localStorage:", localStorage.getItem("selected-icon"));
  });
}

// -------------------- DOM CONTENT LOADED --------------------
document.addEventListener('DOMContentLoaded', async () => {
  await loadPartial('navbar-placeholder', 'navbar.html');
  await loadPartial('footer-placeholder', 'footer.html');

  if (window.location.protocol === "https:") {
    replaceNavLinks();
  }
  
  setupDarkMode();
});
