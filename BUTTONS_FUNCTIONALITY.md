# Portfolio Button Functionality Guide

## ✅ Working Buttons and Links

### Navigation
- All nav menu items scroll to their section: Home, About, Skills, Certifications, Projects, Lab Notes, Resume, Testimonials, Contact.
- Mobile menu toggle opens/closes correctly.
- Dark mode toggle works and persists.

### Hero Section
- Internship CTA (`Internship Opportunity`) scrolls to Contact.
- Resume CTA (`Download Resume (PDF)`) opens/downloads `Joseph_Njoku_IT_Support_CV.pdf`.

### Availability Section
- Availability switch updates status text and visual state.

### Projects Section
- `Cybersecurity Toolkit` GitHub and ZIP links work.
- `Security Training Platform` GitHub and ZIP links work.
- `Portfolio Backend API`:
  - `Documentation` opens local `PROJECT_README.md`.
  - `GitHub Profile` opens `https://github.com/Chima042-hub` (repo upload pending).
- Front-end projects (Parcel Force, NovaBank, Cat Photo App, Survey Form, Travel Page, Finance Loan) open configured GitHub/demo links.

### Resume Section
- `Download Resume (PDF)` works.
- `View Online` opens the same PDF in a new tab.

### FAQ + Contact
- FAQ accordion expands/collapses.
- `Contact Me Directly` jumps to contact section.
- Contact form posts to Formspree endpoint.
- Social icons (LinkedIn, GitHub, Email) work.

---

## ❌ Removed from Current UI

These are intentionally removed to keep the portfolio clean:
- Newsletter section/buttons
- Resources section/buttons
- “Coming soon” article/button behavior

---

## 🔧 Remaining Follow-up

### 1) Publish missing backend repository
- Create and publish: `https://github.com/Chima042-hub/portfolio-backend`
- After publishing, update the project card in `index.html`:
  - Change `GitHub Profile` link to the repo URL
  - (Optional) keep `Documentation` as local `PROJECT_README.md` or point to repo README

### 2) Manual QA pass before sharing
- Click every project button once (desktop + mobile).
- Submit a contact form test.
- Confirm resume opens/downloads on phone and desktop.

---

## Current Status
Portfolio CTAs are functional and recruiter-safe. The only intentional workaround is the backend project GitHub button, which currently points to your profile until that specific repo is public.
