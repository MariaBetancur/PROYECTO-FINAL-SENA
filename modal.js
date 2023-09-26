const openModalButton = document.getElementById("open-modal-button");
const modal = document.getElementById("modal");

// Agrega un evento de clic al botón para mostrar la ventana modal
openModalButton.addEventListener("click", () => {
  modal.classList.remove("is-hidden");
});

// Agrega un evento de clic al botón de cierre de la ventana modal para ocultarla
const closeModalButton = modal.querySelector(".modal__close-btn");
closeModalButton.addEventListener("click", () => {
  modal.classList.add("is-hidden");
});
