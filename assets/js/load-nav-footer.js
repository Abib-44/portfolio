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
  const navLinks = document.querySelectorAll('.deploy_link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    let newHref = href.replace(/^\/?portfolio\//, '');

    if (newHref === 'index.html') {
      newHref = '/';
    }

    link.setAttribute('href', newHref);
  });
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


