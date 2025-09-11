// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Form feedback
const form = document.querySelector("form");
const message = document.getElementById("formMessage");
form.addEventListener("submit", function () {
  setTimeout(() => {
    message.style.display = "block";
  }, 1000);
});

// Dark mode toggle
document.getElementById("darkToggle").onclick = function () {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
};

// Fade-in animations
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
faders.forEach(el => observer.observe(el));

// Hide loader on page load
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

