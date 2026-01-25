document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".home__projects__container");
  const next = document.getElementById("nextProject");
  const prev = document.getElementById("prevProject");

  if (!container || !next || !prev) return;

  const scrollAmount = 320;

  next.addEventListener("click", () => {
    
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    console.log(next);
  });

  prev.addEventListener("click", () => {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    console.log(container);
  });
});
