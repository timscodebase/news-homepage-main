const openButton = document.querySelector('.nav-open-button');
const closeButton = document.querySelector('.nav-close-button');
const menu = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');

openButton.addEventListener("click", function () {
  console.log("The menu button was clicked.");
	menu.classList.toggle("menu-open");
	overlay.classList.toggle("overlay-open");
});

closeButton.addEventListener("click", function () {
  console.log("The menu button was clicked.");
	menu.classList.toggle("menu-open");
	overlay.classList.toggle("overlay-open");
});