document.addEventListener("DOMContentLoaded", () => {
  // Seleziona tutti i pulsanti "Voir les détails"
  const detailButtons = document.querySelectorAll(".general__content__plus");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".qualification__card");
      if (!card) return;

      const modal = card.querySelector(".services__modal, .general__modal__plus");
      if (!modal) return;

      modal.classList.add("active-modal");
      document.body.style.overflow = "hidden";
    });
  });

  const allModals = document.querySelectorAll(".services__modal, .general__modal__plus");
  allModals.forEach((modal) => {
    const closeBtn = modal.querySelector(".services__modal-close, .skills__icon, .general__modal__plus__close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active-modal");
        document.body.style.overflow = "";
      });
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active-modal");
        document.body.style.overflow = "";
      }
    });
  });
});
