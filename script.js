// Products Data
const products = [
  {
    id: 1,
    name: "Imprimante Multifonction Pro",
    category: "Imprimantes",
    description:
      "Impression haute qualité, scan, copie. Idéal pour les bureaux modernes.",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&q=80",
    features: [
      "Impression laser couleur",
      "Recto-verso automatique",
      "WiFi intégré",
    ],
  },
  {
    id: 2,
    name: "Station de Travail Elite",
    category: "Ordinateurs",
    description: "Performance optimale pour tous vos besoins professionnels.",
    image:
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80",
    features: ["Intel Core i7", "16GB RAM", "SSD 512GB"],
  },
  {
    id: 3,
    name: "Moniteur 4K Ultra HD",
    category: "Écrans",
    description: "Clarté exceptionnelle pour une productivité maximale.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
    features: ["Résolution 4K", "27 pouces IPS", "Réglable en hauteur"],
  },
  {
    id: 4,
    name: "Imprimante Jet d'Encre",
    category: "Imprimantes",
    description: "Qualité photo professionnelle pour tous vos documents.",
    image:
      "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=600&q=80",
    features: ["6 couleurs", "Format A3+", "Économique"],
  },
  {
    id: 5,
    name: "PC All-in-One",
    category: "Ordinateurs",
    description: "Design épuré, performance intégrée pour votre bureau.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    features: ['Écran 24" FHD', "Webcam intégrée", "Design compact"],
  },
  {
    id: 6,
    name: "Scanner Professionnel",
    category: "Scanners",
    description: "Numérisation rapide et précise de tous vos documents.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80",
    features: ["1200 DPI", "Chargeur auto", "Compact"],
  },
];

// Header Scroll Effect
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuIcon.textContent = mobileMenu.classList.contains("active") ? "✕" : "☰";
});

// Close mobile menu on link click
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuIcon.textContent = "☰";
  });
});

// Products Carousel
let currentPage = 0;
const productsPerPage = 3;
const totalPages = Math.ceil(products.length / productsPerPage);

function renderProducts() {
  const productsGrid = document.getElementById("productsGrid");
  const start = currentPage * productsPerPage;
  const end = start + productsPerPage;
  const currentProducts = products.slice(start, end);

  productsGrid.innerHTML = currentProducts
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <span class="product-category">${product.category}</span>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-features">
                    ${product.features
                      .map((f) => `<span class="product-feature">${f}</span>`)
                      .join("")}
                </div>
                <a href__="https://wa.me/237600000000" target="_blank" class="product-btn">
                    <i class="fa-solid fa-comment-dots"></i> Demander Info
                </a>
            </div>
        </div>
    `
    )
    .join("");
}

function renderDots() {
  const navDots = document.getElementById("navDots");
  navDots.innerHTML = Array.from({ length: totalPages })
    .map(
      (_, i) =>
        `<button class="nav-dot ${
          i === currentPage ? "active" : ""
        }" onclick="goToPage(${i})"></button>`
    )
    .join("");
}

function updateNavButtons() {
  document.getElementById("prevBtn").disabled = currentPage === 0;
  document.getElementById("nextBtn").disabled = currentPage === totalPages - 1;
}

function goToPage(page) {
  currentPage = page;
  renderProducts();
  renderDots();
  updateNavButtons();
}

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 0) goToPage(currentPage - 1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < totalPages - 1) goToPage(currentPage + 1);
});

// Initialize products
renderProducts();
renderDots();
updateNavButtons();

// Comparison Slider
const slider = document.getElementById("comparisonSlider");
const handle = document.getElementById("sliderHandle");
const beforeContainer = document.getElementById("beforeContainer");
let isDragging = false;

function updateSlider(clientX) {
  const rect = slider.getBoundingClientRect();
  const x = clientX - rect.left;
  const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

  handle.style.left = percentage + "%";
  beforeContainer.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
}

slider.addEventListener("mousedown", () => {
  isDragging = true;
});

slider.addEventListener("mousemove", (e) => {
  if (isDragging) {
    updateSlider(e.clientX);
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

slider.addEventListener("touchstart", () => {
  isDragging = true;
});

slider.addEventListener("touchmove", (e) => {
  if (isDragging) {
    updateSlider(e.touches[0].clientX);
  }
});

document.addEventListener("touchend", () => {
  isDragging = false;
});

// Initialize slider at 50%
handle.style.left = "50%";
beforeContainer.style.clipPath = "inset(0 50% 0 0)";

// Form Submission
const quoteForm = document.getElementById("quoteForm");
const successMessage = document.getElementById("successMessage");

quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide form and show success message
  quoteForm.style.display = "none";
  successMessage.classList.add("active");

  // Reset after 3 seconds
  setTimeout(() => {
    quoteForm.style.display = "block";
    successMessage.classList.remove("active");
    quoteForm.reset();
  }, 3000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
