function loadPartial(id, path) {
  fetch(path)
    .then(r => {
      if (!r.ok) throw new Error(`Errore nel caricamento: ${r.status}`);
      return r.text();
    })
    .then(html => {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      const placeholder = document.querySelector(`#${id}`);
      if (!placeholder) return;
      doc.body.childNodes.forEach(node => placeholder.append(node));
    })
    .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', () => {
  const currentUrl = new URL(window.location.href);
  let navPath, footerPath;

  if (currentUrl.protocol == "https:") {
    if (currentUrl.pathname === '/' || currentUrl.pathname.endsWith('/index.html')) {
      navPath = '../assets/partials/navbar.html';
      footerPath = '../assets/partials/footer.html';
    } else {
      navPath = '../../assets/partials/navbar.html';
      footerPath = '../../assets/partials/footer.html';
    }
  }

  if (currentUrl.pathname === '/' || currentUrl.pathname.endsWith('/index.html')) {
    navPath = './assets/partials/navbar.html';
    footerPath = './assets/partials/footer.html';
  } else {
    navPath = '../assets/partials/navbar.html';
    footerPath = '../assets/partials/footer.html';
  }

  loadPartial('navbar-placeholder', navPath);
  loadPartial('footer-placeholder', footerPath);
});


const fs = require('fs');
const path = require('path');

function printTree(dir, prefix = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach(item => {
    console.log(prefix + item.name);
    if (item.isDirectory()) {
      printTree(path.join(dir, item.name), prefix + '  ');
    }
  });
}

printTree(__dirname); // stampa tutto il tree della cartella corrente
