function includeHTML(id, url) {
  return fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error(`Error loading ${url}:`, err));
}

// Usa path relativi
Promise.all([
  includeHTML("navbar-placeholder", "assets/partials/navbar.html"),
  includeHTML("footer-placeholder", "assets/partials/footer.html")
]).then(() => {
  const path = window.location.pathname;
  const page = path.split("/").pop().replace(".html", "");

  const titles = {
    "index": "Benaboud | Accueil",
    "competences": "Compétences",
    "projects": "Projets",
    "contact": "Contactez-moi",
    "hobbies": "Loisirs"
  };

  document.title = titles[page] || "Benaboud";
});
