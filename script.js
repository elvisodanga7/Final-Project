// Mobile navigation toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("main-nav");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Slider
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

prevBtn?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Contact form validation
document.getElementById("contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  e.target.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
