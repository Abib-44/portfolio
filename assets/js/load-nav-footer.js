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

document.addEventListener('DOMContentLoaded', async () => {
  await loadPartial('navbar-placeholder', 'navbar.html');
  await loadPartial('footer-placeholder', 'footer.html');

  // if (window.location.protocol === "https:") {
  //   replaceNavLinks();
  // }
});


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

    const avatar = document.querySelector('img.avatar');

    if (!avatar) return;

    avatar.src = '/portfolio/assets/img/avatar.jpeg';

    console.log(`Link ${i} dopo:`, link.getAttribute('href'));
  });
}