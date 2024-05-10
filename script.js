const hamburger = document.querySelector(".hamburger");
const closeBurger = document.querySelector(".close-burger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
  closeBurger.style.display = "block"; // Show close button when hamburger is clicked
});

closeBurger.addEventListener("click", () => {
  menu.classList.remove("open");
  closeBurger.style.display = "none"; // Hide close button when close button is clicked
});
