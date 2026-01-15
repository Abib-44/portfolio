function includeHTML(id, url) {
  return fetch(url)
    .then(r => r.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

Promise.all([
  includeHTML("navbar-placeholder", "/assets/partials/navbar.html"),
  includeHTML("footer-placeholder", "/assets/partials/footer.html")
]).then(() => {
  const page = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  const titles = {
    index: "Benaboud | Accueil",
    competences: "Compétences",
    projects: "Projets",
    contact: "Contactez-moi",
    hobbies: "Loisirs"
  };

  document.title = titles[page] ?? "Benaboud";
});
