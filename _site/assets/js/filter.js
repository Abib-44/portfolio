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
        const categories = element.dataset.category.split(',').map(c => c.trim());

        if (!categories.includes(filterValue)) {
          element.style.display = 'none';
        }
      }
    });
  });
});
