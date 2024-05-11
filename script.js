const hamburger = document.querySelector(".hamburger");
const closeBurger = document.querySelector(".close-burger");
const menu = document.querySelector(".menu");

// Hide the close-burger icon when the page loads
closeBurger.style.display = "none";

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    closeBurger.style.display = "block";
  } else {
    closeBurger.style.display = "none";
  }
});

closeBurger.addEventListener("click", () => {
  menu.classList.remove("open");
  closeBurger.style.display = "none";
});
