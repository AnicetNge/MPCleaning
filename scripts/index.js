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

// Témoignages - carrousel automatique
let index = 0;
const slides = document.querySelectorAll(".testimonial-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(i) {
  slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
  dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});

setInterval(nextSlide, 5000); // changement auto toutes les 5 secondes
