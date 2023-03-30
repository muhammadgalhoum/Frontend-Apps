let menu = document.getElementById("menu");

function openMenu() {
  menu.classList.add("open");
}

function closeMenu() {
  menu.classList.remove("open");
}

document.onkeyup = function (e) {
  if (e.key === 'Escape') {
    menu.classList.remove("open");
  }
}