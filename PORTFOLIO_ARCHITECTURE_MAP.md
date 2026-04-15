# Portfolio Architecture Map

## Purpose
Quick maintenance map for where content, styling, and behavior live in the portfolio.

## Core Frontend Files
- `index.html` — Single-page structure and all public-facing content.
- `style.css` — Visual styling, dark mode rules, and responsive behavior (including 768/480/360/320 tuning).
- `script.js` — Interactive behavior (navigation, search, animations, dark mode persistence, availability toggle, language switching, FAQ, form UX).

## Active Page Sections (`index.html`)
1. Header / Hero (`#home`)
2. Stats
3. Availability
4. About (`#about`)
5. Skills (`#skills`)
6. Certifications (`#certifications`)
7. Search (`#search`)
8. Projects (`#projects`)
9. Lab Notes (`#blog` section id retained for anchor compatibility)
10. Resume (`#resume`)
11. Testimonials (`#testimonials`)
12. FAQ (`#faq`)
13. Contact (`#contact`)

## Removed Sections (intentional)
- Newsletter
- Resources
- Placeholder “coming soon” article/button flows

## JavaScript Feature Map (`script.js`)
- Mobile nav toggle with body scroll lock
- Active nav highlighting on scroll
- Typing headline animation
- Section reveal/stagger animations
- Stats counter animation
- Skill bar animation
- Search filtering for projects/lab notes
- FAQ accordion + keyboard accessibility
- Contact form validation + Formspree submit handling
- Dark mode, language, and availability status persistence

## Styling Notes (`style.css`)
- Global gradients, cards, and typography
- Section-specific UI blocks (availability, projects, lab notes, testimonials, FAQ, contact, resume)
- `body.dark-mode` variants across components
- Responsive breakpoints include:
  - `@media (max-width: 768px)`
  - `@media (max-width: 480px)`
  - `@media (max-width: 360px)`
  - `@media (max-width: 320px)`

## Key Assets
- `Joseph_Njoku_SOC_Analyst_Resume.pdf` — Resume file used by hero and resume section CTAs
- `profile.jpg` — Main hero/profile image

## Project/Backend Files
- `portfolio_backend.py` (Flask backend)
- `requirements.txt`
- Security and lab scripts: `security_toolkit.py`, `interactive_security.py`, `security_demo.py`, `cybersecurity.py`, `security_log_generator.py`
- Data artifacts: `portfolio_data.json`, `security_logs.json`, `security_logs.csv`

## Current External Link Status (March 2026)
- `cybersecurity-toolkit` repo: live
- `security-training-platform` repo: live
- `portfolio-backend` repo: not yet public (project card currently routes GitHub button to profile to avoid 404)

## Common Update Targets
- Edit portfolio copy/links/cards: `index.html`
- Change layout/spacing/responsive behavior: `style.css`
- Change interactions/logic/translations: `script.js`
- Update resume asset: `Joseph_Njoku_SOC_Analyst_Resume.pdf`
