// Menu mobile
const toggle = document.getElementById("menu-toggle");
const nav_mobile = document.querySelector("div.nav_mobile");
toggle.addEventListener("click", () => {
  nav_mobile.classList.toggle("active");
});

// Apparition progressive des sections
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
