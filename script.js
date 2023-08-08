"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");
const hidden = document.querySelector(".hidden");

// console.log(overlay);
// console.log(modal);
// console.log(btnShowModal);
// console.log(btnCloseModal);
// console.log(hidden);

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openModal);
}

// Hiding the modal when clicking the close btn.
btnCloseModal.addEventListener("click", closeModal);

// Hiding the modal when clicking the overlay.
overlay.addEventListener("click", closeModal);
