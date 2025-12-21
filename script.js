// Scroll-to-top button with progress indicator
const scrollBtn = document.getElementById("scrollTopBtn");
const progressCircle = document.querySelector(".progress-ring-circle");
const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
progressCircle.style.strokeDashoffset = circumference;

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;
  const offset = circumference - (scrollPercent * circumference);
  
  progressCircle.style.strokeDashoffset = offset;
  scrollBtn.style.display = scrollTop > 300 ? "flex" : "none";
}

window.addEventListener("scroll", updateScrollProgress);

scrollBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Logo animation on scroll
const logo = document.querySelector('.logo-svg');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  
  // Add slight rotation based on scroll
  if (logo) {
    const rotation = Math.min(scrolled / 20, 360);
    logo.style.transform = `rotate(${rotation}deg)`;
  }
  
  // Add shadow to navbar when scrolled
  if (scrolled > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  }
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Download CV functionality
const downloadCVBtn = document.getElementById("downloadCV");
if (downloadCVBtn) {
  downloadCVBtn.addEventListener("click", function(e) {
    e.preventDefault();
    
    // Create and trigger download
    const link = document.createElement('a');
    link.href = 'Joseph_Njoku_IT_Support_CV.pdf';
    link.download = 'Joseph_Njoku_IT_Support_CV.pdf';
    link.target = '_blank'; // Also open in new tab as fallback
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message
    const originalContent = this.innerHTML;
    this.innerHTML = '<i class="fas fa-check"></i><span>Opening CV...</span>';
    this.style.pointerEvents = 'none';
    
    // Reset after 2 seconds
    setTimeout(() => {
      this.innerHTML = originalContent;
      this.style.pointerEvents = 'auto';
    }, 2000);
  });
}

// Form validation and feedback
const form = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formMessage");
const submitBtn = document.querySelector(".submit-btn");
const btnText = document.querySelector(".btn-text");
const btnLoading = document.querySelector(".btn-loading");

// Validation functions
function validateName() {
  const nameError = document.getElementById("nameError");
  const value = nameInput.value.trim();
  
  if (value.length === 0) {
    nameError.textContent = "Name is required";
    nameInput.classList.remove("valid");
    nameInput.classList.add("invalid");
    return false;
  } else if (value.length < 2) {
    nameError.textContent = "Name must be at least 2 characters";
    nameInput.classList.remove("valid");
    nameInput.classList.add("invalid");
    return false;
  } else {
    nameError.textContent = "";
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
    return true;
  }
}

function validateEmail() {
  const emailError = document.getElementById("emailError");
  const value = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (value.length === 0) {
    emailError.textContent = "Email is required";
    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid");
    return false;
  } else if (!emailRegex.test(value)) {
    emailError.textContent = "Please enter a valid email address";
    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid");
    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
    return true;
  }
}

function validateMessage() {
  const messageError = document.getElementById("messageError");
  const value = messageInput.value.trim();
  
  if (value.length === 0) {
    messageError.textContent = "Message is required";
    messageInput.classList.add("invalid");
    return false;
  } else if (value.length < 10) {
    messageError.textContent = "Message must be at least 10 characters";
    messageInput.classList.add("invalid");
    return false;
  } else if (value.length > 1000) {
    messageError.textContent = "Message must not exceed 1000 characters";
    messageInput.classList.add("invalid");
    return false;
  } else {
    messageError.textContent = "";
    messageInput.classList.remove("invalid");
    return true;
  }
}

// Character counter for message
messageInput.addEventListener("input", function() {
  const charCount = document.getElementById("charCount");
  const charCountContainer = document.querySelector(".char-count");
  const length = this.value.length;
  charCount.textContent = length;
  
  if (length > 900) {
    charCountContainer.classList.add("warning");
  } else {
    charCountContainer.classList.remove("warning");
  }
});

// Real-time validation
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
messageInput.addEventListener("blur", validateMessage);

nameInput.addEventListener("input", function() {
  if (this.classList.contains("invalid")) {
    validateName();
  }
});

emailInput.addEventListener("input", function() {
  if (this.classList.contains("invalid")) {
    validateEmail();
  }
});

messageInput.addEventListener("input", function() {
  if (this.classList.contains("invalid")) {
    validateMessage();
  }
});

// Form submission
form.addEventListener("submit", async function(e) {
  e.preventDefault();
  
  // Validate all fields
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();
  
  if (!isNameValid || !isEmailValid || !isMessageValid) {
    formMessage.style.display = "block";
    formMessage.className = "form-feedback error";
    formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please fix the errors above';
    return;
  }
  
  // Show loading state
  submitBtn.disabled = true;
  btnText.style.display = "none";
  btnLoading.style.display = "inline";
  formMessage.style.display = "none";
  
  try {
    // Submit form
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      formMessage.style.display = "block";
      formMessage.className = "form-feedback success";
      formMessage.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully.';
      form.reset();
      document.getElementById("charCount").textContent = "0";
      nameInput.classList.remove("valid", "invalid");
      emailInput.classList.remove("valid", "invalid");
      messageInput.classList.remove("valid", "invalid");
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    formMessage.style.display = "block";
    formMessage.className = "form-feedback error";
    formMessage.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Oops! Something went wrong. Please try again.';
  } finally {
    submitBtn.disabled = false;
    btnText.style.display = "inline";
    btnLoading.style.display = "none";
  }
});

// Dark mode toggle
document.getElementById("darkToggle").onclick = function () {
  document.body.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  
  // Save dark mode preference
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
};

// Load dark mode preference
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  document.querySelector("header").classList.add("dark-mode");
}

// Enhanced scroll animations with different effects
const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right, .scale-up');

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Don't unobserve so animations can repeat on scroll back up if desired
      // Uncomment next line to animate only once
      // animationObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

animatedElements.forEach(el => animationObserver.observe(el));

// Animated Statistics Counter
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60fps
  let current = 0;
  
  const updateCounter = () => {
    current += increment;
    
    if (current < target) {
      element.textContent = Math.floor(current);
      element.classList.add('counting');
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
      element.classList.remove('counting');
    }
  };
  
  updateCounter();
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      hasAnimated = true;
      statNumbers.forEach((stat, index) => {
        setTimeout(() => {
          animateCounter(stat);
        }, index * 100);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Timeline animations
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
});

timelineItems.forEach(item => timelineObserver.observe(item));

// Tech stack animations
const techCategories = document.querySelectorAll('.tech-category-section');

const techObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

techCategories.forEach(category => techObserver.observe(category));

// Staggered animations for child elements
const staggerContainers = document.querySelectorAll('.skills-container, .certifications-container, .projects-container, .blog-container, .testimonials-container');

const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add stagger effect to immediate children
      const items = entry.target.querySelectorAll('.skill-category, .cert-card, .project-card, .blog-card, .testimonial-card');
      items.forEach((item, index) => {
        if (!item.classList.contains('stagger-item')) {
          item.classList.add('stagger-item');
          item.style.setProperty('--stagger-delay', `${index * 0.1}s`);
        }
      });
      
      staggerObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

staggerContainers.forEach(container => staggerObserver.observe(container));

// Hide loader and skeleton on page load
const loaderHide = () => {
  const loader = document.getElementById("loader");
  const skeleton = document.getElementById("skeletonLoader");
  
  // Hide spinner immediately
  loader.style.display = "none";
  
  // Fade out skeleton after a short delay
  setTimeout(() => {
    skeleton.classList.add("hidden");
    setTimeout(() => {
      skeleton.style.display = "none";
    }, 300);
  }, 100);
};
window.addEventListener("load", loaderHide);

// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Highlight active section in navigation
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBar = entry.target;
      const progress = progressBar.getAttribute('data-progress');
      progressBar.style.setProperty('--progress', progress + '%');
      progressBar.classList.add('animated');
      progressBar.style.width = progress + '%';
      skillObserver.unobserve(progressBar);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// Typing Animation
const dynamicText = document.querySelector('.dynamic-text');

// Initialize with English texts (will be updated by language switcher)
window.typingTexts = [
  'Aspiring Cybersecurity Analyst',
  'Google IT Support Certified',
  'FreeCodeCamp Student',
  'Python Learner',
  'Problem Solver'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let typingTimeout;

function typeText() {
  const currentText = window.typingTexts[textIndex];
  
  if (isDeleting) {
    dynamicText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 50;
  } else {
    dynamicText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 100;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    // Pause at end of text
    typingDelay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % window.typingTexts.length;
    typingDelay = 500;
  }
  
  typingTimeout = setTimeout(typeText, typingDelay);
}

// Function to start typing animation
function startTypingAnimation() {
  textIndex = 0;
  charIndex = 0;
  isDeleting = false;
  if (typingTimeout) clearTimeout(typingTimeout);
  typeText();
}

// Start typing animation after page load
window.addEventListener('load', () => {
  setTimeout(startTypingAnimation, 1000);
});

// Lazy Loading Images
const lazyImages = document.querySelectorAll('.lazy-image');

// Check if browser supports native lazy loading
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading supported
  lazyImages.forEach(img => {
    img.addEventListener('load', function() {
      this.classList.add('loaded');
    });
    
    // Handle already cached images
    if (img.complete) {
      img.classList.add('loaded');
    }
  });
} else {
  // Fallback: Use Intersection Observer for older browsers
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.addEventListener('load', function() {
          this.classList.add('loaded');
        });
        
        if (img.complete) {
          img.classList.add('loaded');
        }
        
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px'
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
}

// Search Functionality
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const searchResultsInfo = document.getElementById('searchResultsInfo');
const projectsContainer = document.querySelector('.projects-container');
const blogContainer = document.querySelector('.blog-container');

let allProjects = [];
let allBlogPosts = [];

// Initialize search - gather all searchable content
function initializeSearch() {
  // Get all project cards
  const projectCards = document.querySelectorAll('.project-card');
  allProjects = Array.from(projectCards).map(card => {
    const title = card.querySelector('.project-header h3')?.textContent || '';
    const description = card.querySelector('.project-description')?.textContent || '';
    const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent);
    return {
      element: card,
      title: title.toLowerCase(),
      description: description.toLowerCase(),
      tags: tags.map(t => t.toLowerCase()),
      searchText: `${title} ${description} ${tags.join(' ')}`.toLowerCase()
    };
  });

  // Get all blog cards
  const blogCards = document.querySelectorAll('.blog-card');
  allBlogPosts = Array.from(blogCards).map(card => {
    const title = card.querySelector('h3')?.textContent || '';
    const excerpt = card.querySelector('.blog-excerpt')?.textContent || '';
    const category = card.querySelector('.blog-category')?.textContent || '';
    const tags = Array.from(card.querySelectorAll('.blog-tag')).map(tag => tag.textContent);
    return {
      element: card,
      title: title.toLowerCase(),
      excerpt: excerpt.toLowerCase(),
      category: category.toLowerCase(),
      tags: tags.map(t => t.toLowerCase()),
      searchText: `${title} ${excerpt} ${category} ${tags.join(' ')}`.toLowerCase()
    };
  });
}

// Perform search
function performSearch(query) {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) {
    // Show all items when search is empty
    resetSearch();
    return;
  }

  // Filter projects
  let visibleProjects = 0;
  allProjects.forEach(project => {
    if (project.searchText.includes(searchTerm)) {
      project.element.style.display = 'flex';
      project.element.classList.add('stagger-item');
      visibleProjects++;
    } else {
      project.element.style.display = 'none';
    }
  });

  // Filter blog posts
  let visiblePosts = 0;
  allBlogPosts.forEach(post => {
    if (post.searchText.includes(searchTerm)) {
      post.element.style.display = 'block';
      post.element.classList.add('stagger-item');
      visiblePosts++;
    } else {
      post.element.style.display = 'none';
    }
  });

  // Update results info
  const totalResults = visibleProjects + visiblePosts;
  if (totalResults === 0) {
    searchResultsInfo.textContent = `No results found for "${query}"`;
    searchResultsInfo.style.display = 'block';
    
    // Show no results message in sections
    showNoResultsMessage();
  } else {
    const projectText = visibleProjects === 1 ? 'project' : 'projects';
    const postText = visiblePosts === 1 ? 'post' : 'posts';
    const results = [];
    
    if (visibleProjects > 0) results.push(`${visibleProjects} ${projectText}`);
    if (visiblePosts > 0) results.push(`${visiblePosts} blog ${postText}`);
    
    searchResultsInfo.textContent = `Found ${results.join(' and ')} matching "${query}"`;
    searchResultsInfo.style.display = 'block';
    
    // Hide no results message
    hideNoResultsMessage();
  }

  // Show clear button
  clearSearchBtn.style.display = 'flex';
}

// Reset search
function resetSearch() {
  allProjects.forEach(project => {
    project.element.style.display = 'flex';
  });
  
  allBlogPosts.forEach(post => {
    post.element.style.display = 'block';
  });
  
  searchResultsInfo.style.display = 'none';
  clearSearchBtn.style.display = 'none';
  hideNoResultsMessage();
}

// Show no results message
function showNoResultsMessage() {
  // Check if messages already exist
  if (!document.querySelector('.no-results-projects')) {
    const projectsSection = document.getElementById('projects');
    const noResultsProjects = document.createElement('div');
    noResultsProjects.className = 'no-results no-results-projects';
    noResultsProjects.innerHTML = '<i class="fas fa-search" style="font-size: 3em; opacity: 0.3; margin-bottom: 0.5em;"></i><p>No projects found</p>';
    projectsSection.querySelector('.projects-container').parentElement.insertBefore(noResultsProjects, projectsSection.querySelector('.projects-container').nextSibling);
  }
  
  if (!document.querySelector('.no-results-blog')) {
    const blogSection = document.getElementById('blog');
    const noResultsBlog = document.createElement('div');
    noResultsBlog.className = 'no-results no-results-blog';
    noResultsBlog.innerHTML = '<i class="fas fa-search" style="font-size: 3em; opacity: 0.3; margin-bottom: 0.5em;"></i><p>No blog posts found</p>';
    blogSection.querySelector('.blog-container').parentElement.insertBefore(noResultsBlog, blogSection.querySelector('.blog-container').nextSibling);
  }
  
  document.querySelectorAll('.no-results').forEach(el => el.classList.add('active'));
}

// Hide no results message
function hideNoResultsMessage() {
  document.querySelectorAll('.no-results').forEach(el => el.classList.remove('active'));
}

// Event listeners
searchInput.addEventListener('input', (e) => {
  performSearch(e.target.value);
});

searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    searchInput.value = '';
    resetSearch();
  }
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  resetSearch();
});

// Initialize search on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeSearch();
});

// Availability Status Toggle
const availabilityToggle = document.getElementById('availabilityToggle');
const availabilityBadge = document.getElementById('availabilityBadge');
const navAvailability = document.getElementById('navAvailability');
const statusIndicator = document.getElementById('statusIndicator');
const availabilityTitle = document.getElementById('availabilityTitle');
const availabilityMessage = document.getElementById('availabilityMessage');

// Load saved availability status from localStorage
const savedStatus = localStorage.getItem('availabilityStatus');
if (savedStatus === 'unavailable') {
  availabilityToggle.checked = false;
  updateAvailabilityStatus(false);
} else {
  availabilityToggle.checked = true;
  updateAvailabilityStatus(true);
}

// Toggle availability status
availabilityToggle.addEventListener('change', function() {
  const isAvailable = this.checked;
  updateAvailabilityStatus(isAvailable);
  
  // Save status to localStorage
  localStorage.setItem('availabilityStatus', isAvailable ? 'available' : 'unavailable');
  
  // Show confirmation animation
  const toggleLabel = this.closest('.toggle-label');
  toggleLabel.style.transform = 'scale(0.95)';
  setTimeout(() => {
    toggleLabel.style.transform = 'scale(1)';
  }, 200);
});

// Update all availability indicators
function updateAvailabilityStatus(isAvailable) {
  if (isAvailable) {
    // Set to Available
    availabilityBadge.classList.remove('unavailable');
    navAvailability.classList.remove('unavailable');
    statusIndicator.classList.remove('unavailable');
    availabilityTitle.classList.remove('unavailable');
    
    availabilityBadge.querySelector('.status-text').textContent = 'Available for Work';
    navAvailability.querySelector('.nav-status-text').textContent = 'Available';
    availabilityTitle.textContent = 'Currently Available';
    availabilityMessage.textContent = 'Open to new opportunities, freelance projects, and full-time positions';
  } else {
    // Set to Unavailable
    availabilityBadge.classList.add('unavailable');
    navAvailability.classList.add('unavailable');
    statusIndicator.classList.add('unavailable');
    availabilityTitle.classList.add('unavailable');
    
    availabilityBadge.querySelector('.status-text').textContent = 'Currently Unavailable';
    navAvailability.querySelector('.nav-status-text').textContent = 'Unavailable';
    availabilityTitle.textContent = 'Currently Unavailable';
    availabilityMessage.textContent = 'Not accepting new projects at the moment. Feel free to reach out for future opportunities';
  }
}

// Newsletter Subscription
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterMessage = document.getElementById('newsletterMessage');
const newsletterBtn = newsletterForm.querySelector('.newsletter-btn');
const newsletterBtnText = newsletterForm.querySelector('.newsletter-btn-text');
const newsletterBtnLoading = newsletterForm.querySelector('.newsletter-btn-loading');

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Handle newsletter submission
newsletterForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const email = newsletterEmail.value.trim();
  
  // Validate email
  if (!email) {
    showNewsletterMessage('Please enter your email address', 'error');
    return;
  }
  
  if (!validateEmail(email)) {
    showNewsletterMessage('Please enter a valid email address', 'error');
    return;
  }
  
  // Check if already subscribed
  const subscribers = getSubscribers();
  if (subscribers.includes(email.toLowerCase())) {
    showNewsletterMessage('You\'re already subscribed! 🎉', 'success');
    newsletterEmail.value = '';
    return;
  }
  
  // Show loading state
  newsletterBtn.disabled = true;
  newsletterBtnText.style.display = 'none';
  newsletterBtnLoading.style.display = 'inline-block';
  
  // Simulate API call (replace with actual newsletter service like Mailchimp, ConvertKit, etc.)
  setTimeout(() => {
    // Save to localStorage (in production, send to newsletter service)
    saveSubscriber(email.toLowerCase());
    
    // Show success message
    showNewsletterMessage('🎉 Success! Thank you for subscribing to my newsletter!', 'success');
    newsletterEmail.value = '';
    
    // Reset button
    newsletterBtn.disabled = false;
    newsletterBtnText.style.display = 'inline';
    newsletterBtnLoading.style.display = 'none';
    
    // Add confetti effect
    createConfetti();
  }, 1500);
  
  /* 
  // For production, use actual newsletter service:
  try {
    const response = await fetch('YOUR_NEWSLETTER_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email })
    });
    
    if (response.ok) {
      showNewsletterMessage('🎉 Success! Thank you for subscribing!', 'success');
      newsletterEmail.value = '';
      saveSubscriber(email.toLowerCase());
    } else {
      throw new Error('Subscription failed');
    }
  } catch (error) {
    showNewsletterMessage('Oops! Something went wrong. Please try again.', 'error');
  } finally {
    newsletterBtn.disabled = false;
    newsletterBtnText.style.display = 'inline';
    newsletterBtnLoading.style.display = 'none';
  }
  */
});

// Show newsletter message
function showNewsletterMessage(message, type) {
  newsletterMessage.textContent = message;
  newsletterMessage.className = `newsletter-feedback ${type}`;
  newsletterMessage.style.display = 'block';
  
  setTimeout(() => {
    newsletterMessage.style.display = 'none';
  }, 5000);
}

// Get subscribers from localStorage
function getSubscribers() {
  const subscribers = localStorage.getItem('newsletterSubscribers');
  return subscribers ? JSON.parse(subscribers) : [];
}

// Save subscriber to localStorage
function saveSubscriber(email) {
  const subscribers = getSubscribers();
  subscribers.push(email);
  localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
}

// Create confetti effect
function createConfetti() {
  const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.opacity = '1';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    
    document.body.appendChild(confetti);
    
    const fall = confetti.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
      { transform: `translateY(${window.innerHeight + 20}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: Math.random() * 3000 + 2000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    fall.onfinish = () => confetti.remove();
  }
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all FAQ items
    faqItems.forEach(faqItem => {
      faqItem.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
      
      // Scroll to the item if needed (for mobile)
      if (window.innerWidth < 768) {
        setTimeout(() => {
          const itemTop = item.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({
            top: itemTop,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });
  
  // Keyboard accessibility
  question.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      question.click();
    }
  });
});

// Add ARIA attributes for accessibility
faqItems.forEach((item, index) => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  
  question.setAttribute('aria-expanded', 'false');
  question.setAttribute('aria-controls', `faq-answer-${index}`);
  answer.setAttribute('id', `faq-answer-${index}`);
  
  // Update aria-expanded when item is toggled
  const observer = new MutationObserver(() => {
    const isActive = item.classList.contains('active');
    question.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });
  
  observer.observe(item, { attributes: true, attributeFilter: ['class'] });
});

// Language Switcher with Multi-language Support
const translations = {
  en: {
    hire_me: "Hire Me",
    download_cv: "Download CV",
    available_work: "Available for Work",
    unavailable_work: "Currently Unavailable",
    im_a: "I'm a ",
    typing_texts: [
      "IT Support Specialist",
      "Cybersecurity Enthusiast",
      "Python Developer",
      "Problem Solver",
      "Tech Enthusiast"
    ]
  },
  es: {
    hire_me: "Contrátame",
    download_cv: "Descargar CV",
    available_work: "Disponible para Trabajar",
    unavailable_work: "Actualmente No Disponible",
    im_a: "Soy un ",
    typing_texts: [
      "Especialista en Soporte IT",
      "Entusiasta de Ciberseguridad",
      "Desarrollador Python",
      "Solucionador de Problemas",
      "Entusiasta Tecnológico"
    ]
  },
  fr: {
    hire_me: "Engagez-moi",
    download_cv: "Télécharger CV",
    available_work: "Disponible pour Travailler",
    unavailable_work: "Actuellement Indisponible",
    im_a: "Je suis un ",
    typing_texts: [
      "Spécialiste Support IT",
      "Passionné de Cybersécurité",
      "Développeur Python",
      "Résolveur de Problèmes",
      "Passionné de Tech"
    ]
  },
  de: {
    hire_me: "Stellen Sie mich ein",
    download_cv: "Lebenslauf herunterladen",
    available_work: "Verfügbar für Arbeit",
    unavailable_work: "Derzeit Nicht Verfügbar",
    im_a: "Ich bin ein ",
    typing_texts: [
      "IT-Support-Spezialist",
      "Cybersicherheit-Enthusiast",
      "Python-Entwickler",
      "Problemlöser",
      "Tech-Enthusiast"
    ]
  },
  pt: {
    hire_me: "Contrate-me",
    download_cv: "Baixar CV",
    available_work: "Disponível para Trabalho",
    unavailable_work: "Atualmente Indisponível",
    im_a: "Eu sou um ",
    typing_texts: [
      "Especialista em Suporte de TI",
      "Entusiasta de Cibersegurança",
      "Desenvolvedor Python",
      "Solucionador de Problemas",
      "Entusiasta de Tecnologia"
    ]
  }
};

// Language state
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
const languageToggle = document.getElementById('languageToggle');
const languageDropdown = document.getElementById('languageDropdown');
const currentLangSpan = document.querySelector('.current-lang');
const langOptions = document.querySelectorAll('.lang-option');

// Initialize language
function initializeLanguage() {
  updateLanguage(currentLanguage);
  updateActiveLanguage(currentLanguage);
}

// Toggle language dropdown
languageToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  languageDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!languageToggle.contains(e.target) && !languageDropdown.contains(e.target)) {
    languageDropdown.classList.remove('active');
  }
});

// Handle language selection
langOptions.forEach(option => {
  option.addEventListener('click', () => {
    const selectedLang = option.getAttribute('data-lang');
    currentLanguage = selectedLang;
    
    // Save preference
    localStorage.setItem('preferredLanguage', selectedLang);
    
    // Update UI
    updateLanguage(selectedLang);
    updateActiveLanguage(selectedLang);
    
    // Close dropdown
    languageDropdown.classList.remove('active');
    
    // Show confirmation animation
    showLanguageChangeNotification(selectedLang);
    
    // Restart typing animation with new language
    restartTypingAnimation();
  });
});

// Update all translatable elements
function updateLanguage(lang) {
  const langData = translations[lang];
  
  // Update current language display
  currentLangSpan.textContent = lang.toUpperCase();
  
  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    if (langData[key]) {
      element.textContent = langData[key];
    }
  });
  
  // Update typing animation texts
  if (typeof window.typingTexts !== 'undefined') {
    window.typingTexts = langData.typing_texts;
  }
  
  // Update availability status if unavailable
  const availabilityBadge = document.getElementById('availabilityBadge');
  const navAvailability = document.getElementById('navAvailability');
  
  if (availabilityBadge && availabilityBadge.classList.contains('unavailable')) {
    availabilityBadge.querySelector('.status-text').textContent = langData.unavailable_work;
  }
  
  if (navAvailability && navAvailability.classList.contains('unavailable')) {
    navAvailability.querySelector('.nav-status-text').textContent = langData.unavailable_work.split(' ')[0];
  }
}

// Update active language in dropdown
function updateActiveLanguage(lang) {
  langOptions.forEach(option => {
    if (option.getAttribute('data-lang') === lang) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
}

// Show language change notification
function showLanguageChangeNotification(lang) {
  const notification = document.createElement('div');
  notification.className = 'language-notification';
  
  const langNames = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
    pt: 'Português'
  };
  
  notification.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>Language changed to ${langNames[lang]}</span>
  `;
  
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: linear-gradient(135deg, #22c55e, #16a34a);
    color: white;
    padding: 1em 1.5em;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(34, 197, 94, 0.4);
    display: flex;
    align-items: center;
    gap: 0.8em;
    font-weight: 600;
    z-index: 10000;
    animation: slideInRight 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Restart typing animation with new language
function restartTypingAnimation() {
  const dynamicText = document.querySelector('.dynamic-text');
  if (dynamicText && window.typingTexts) {
    // Reset typing animation
    dynamicText.textContent = '';
    if (window.typingInterval) {
      clearInterval(window.typingInterval);
    }
    if (window.deletingInterval) {
      clearInterval(window.deletingInterval);
    }
    
    // Restart with a slight delay
    setTimeout(() => {
      startTypingAnimation();
    }, 500);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeLanguage();
});

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Make all "coming soon" resource buttons look professional without alerts
document.addEventListener('DOMContentLoaded', function() {
  // Update all resource download buttons that show alerts
  const resourceButtons = document.querySelectorAll('.btn-resource-download[onclick*="alert"]');
  resourceButtons.forEach(button => {
    button.removeAttribute('onclick');
    button.href = '#resources';
    button.style.opacity = '0.7';
    button.style.cursor = 'not-allowed';
    button.style.pointerEvents = 'none';
    button.style.background = '#ccc';
    button.title = 'Resource in development';
    button.innerHTML = '<i class="fas fa-clock"></i> In Development';
  });
  
  // Update blog links that have alerts
  const blogLinks = document.querySelectorAll('.blog-link[onclick*="alert"]');
  blogLinks.forEach(link => {
    link.removeAttribute('onclick');
    link.href = '#blog';
    link.style.opacity = '0.6';
    link.style.cursor = 'not-allowed';
    link.style.pointerEvents = 'none';
    link.style.background = '#e0e0e0';
    link.style.color = '#666';
    link.title = 'Article in development';
    link.innerHTML = '<i class="fas fa-pencil-alt" style="margin-right: 0.5em;"></i>Article Coming Soon';
  });
});

