const headerToggle = document.querySelector(".header__toggle");
const headerMenu = document.querySelector(".header-menu");

const expandClass = "is-expand";

headerToggle.addEventListener("click", function () {
  headerMenu.classList.add(expandClass);
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.matches(".shadow")) {
    headerMenu.classList.remove(expandClass);
  }
});
