
const link = document.querySelector(".search-button");
const popup = document.querySelector(".search-form-container");

link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add(".modal-hide");
});

