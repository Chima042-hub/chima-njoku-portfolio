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

// Enhanced form feedback with validation
const form = document.querySelector("form");
const message = document.getElementById("formMessage");
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener("submit", function (e) {
  // Disable submit button to prevent double submission
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  
  // Show success message after form submission
  setTimeout(() => {
    message.style.display = "block";
    submitButton.textContent = "Send Message";
    submitButton.disabled = false;
  }, 1000);
});

// Dark mode toggle with localStorage persistence
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
  document.getElementById("darkToggle").textContent = isDarkMode ? "☀️ Toggle Light Mode" : "🌙 Toggle Dark Mode";
}

// Load saved dark mode preference
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  document.querySelector("header").classList.add("dark-mode");
  document.getElementById("darkToggle").textContent = "☀️ Toggle Light Mode";
}

document.getElementById("darkToggle").onclick = toggleDarkMode;

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

