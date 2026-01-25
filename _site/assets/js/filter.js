const buttons = document.querySelectorAll('[data-filter]')
const skills = document.querySelectorAll('[data-category]')

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filterValue = btn.dataset.filter

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    skills.forEach(element => {
      element.style.display = 'block';
      if (filterValue !== "all") {
        if (element.dataset.category !== filterValue) {
          element.style.display = 'none';
        }
      }
    });
  })
})
