document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".general__card");

  cards.forEach((card) => {
    const button = card.querySelector(".general__content__plus");
    const modal = card.nextElementSibling;
    if (!button || !modal) return;

    button.addEventListener("click", () => {
      modal.classList.add("active-modal");
      document.body.style.overflow = "hidden";

      modal.querySelector(".general__modal__plus__title").textContent = card.querySelector(".general__card__title").textContent;
      modal.querySelector(".general__modal__plus__description").textContent = card.dataset.fullDescription;
    });

    const closeBtn = modal.querySelector(".general__modal__plus__close");

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active-modal");
      document.body.style.overflow = "";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active-modal");
        document.body.style.overflow = "";
      }
    });
  });
});
