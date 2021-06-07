const headerToggle = document.querySelector(".header__toggle");
const headerMenu = document.querySelector(".header-menu");

const expandClass = "is-expand";

headerToggle.addEventListener("click", function () {
  headerMenu.classList.add(expandClass);
});

window.addEventListener("click", function (e) {
  if (!headerMenu.contains(e.target) && !e.target.matches(".header__toggle")) {
    headerMenu.classList.remove(expandClass);
  }
});
