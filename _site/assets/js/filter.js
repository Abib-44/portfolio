const buttons = document.querySelectorAll('[data-filter]');
const skills = document.querySelectorAll('[data-category]');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filterValue = btn.dataset.filter;

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    console.log(btn.dataset.filter);

    skills.forEach(element => {
      element.style.display = 'block';

      if (filterValue !== "all") {
        // prendi tutte le categorie dell'elemento e crea un array
        const categories = element.dataset.category.split(',').map(c => c.trim());
        // se l'array non include il filtro, nascondi
        if (!categories.includes(filterValue)) {
          element.style.display = 'none';
        }
      }
    });
  });
});
