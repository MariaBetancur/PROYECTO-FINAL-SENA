// (() => {
//   const refs = {
//     openModalBtns: document.querySelectorAll("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtns.forEach((button) => {
//     button.addEventListener("click", toggleModal);
//   });

//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

// (() => {
//   const refs = {
//     openModalBtns: document.querySelectorAll("[data-modal-open-lc]"),
//     closeModalBtn: document.querySelector("[data-modal-close-lc]"),
//     modal: document.querySelector("[data-modal-lc]"),
//   };

//   refs.openModalBtns.forEach((button) => {
//     button.addEventListener("click", toggleModal);
//   });

//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

// Obtén el botón y la ventana modal por su ID
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
