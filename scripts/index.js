// Menu mobile
const toggle = document.getElementById("menu-toggle");
const nav_mobile = document.querySelector("div.nav_mobile");
toggle.addEventListener("click", () => {
  nav_mobile.classList.toggle("active");
});
