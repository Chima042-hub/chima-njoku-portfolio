# 🔗 How to Link Your Real Projects to Portfolio

## 📦 **For Your Parcel Force Tracking Project**

### **Step 1: Upload to GitHub**

1. **Navigate to your project folder:**
   ```powershell
   cd "C:\path\to\your\parcel-force-project"
   ```

2. **Initialize Git (if not already done):**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Parcel Force Real-Time Tracking System"
   ```

3. **Create GitHub Repository:**
   - Go to: https://github.com/new
   - Repository name: `parcel-force-tracking`
   - Description: "Real-time parcel tracking web application"
   - Make it **Public** ✅
   - Click "Create repository"

4. **Push your code:**
   ```powershell
   git remote add origin https://github.com/Chima042-hub/parcel-force-tracking.git
   git branch -M main
   git push -u origin main
   ```

---

### **Step 2: Update Portfolio Link**

Once uploaded to GitHub, update your `index.html` file.

**Find this code (around line 470):**
```html
<div class="project-links">
  <a href="https://github.com/Chima042-hub" target="_blank" class="btn-github" title="GitHub repository coming soon - visit my profile">
    <i class="fas fa-user"></i> GitHub Profile
  </a>
</div>
```

**Replace with:**
```html
<div class="project-links">
  <a href="https://github.com/Chima042-hub/parcel-force-tracking" target="_blank" class="btn-github">
    <i class="fab fa-github"></i> GitHub
  </a>
  <a href="https://chima042-hub.github.io/parcel-force-tracking/" target="_blank" class="btn-live">
    <i class="fas fa-external-link-alt"></i> Live Demo
  </a>
</div>
```

---

### **Step 3: Deploy Live Demo (Optional but Recommended)**

**GitHub Pages Deployment:**

1. **In your project repository on GitHub:**
   - Go to Settings → Pages
   - Under "Source", select: `main` branch
   - Click "Save"
   - Wait 2-3 minutes
   - Your site will be live at: `https://chima042-hub.github.io/parcel-force-tracking/`

2. **Make sure your project has:**
   - An `index.html` file in the root folder
   - All CSS/JS files linked correctly

---

## 🎯 **Quick Update Template**

When you have a new project on GitHub, use this template:

### **For Projects WITH Live Demo:**
```html
<div class="project-card">
  <div class="project-header">
    <h3>🎯 Your Project Name</h3>
  </div>
  <p class="project-description">Description of what your project does...</p>
  <div class="project-tags">
    <span class="tag">HTML</span>
    <span class="tag">CSS</span>
    <span class="tag">JavaScript</span>
  </div>
  <div class="project-links">
    <a href="https://github.com/Chima042-hub/your-repo-name" target="_blank" class="btn-github">
      <i class="fab fa-github"></i> GitHub
    </a>
    <a href="https://chima042-hub.github.io/your-repo-name/" target="_blank" class="btn-live">
      <i class="fas fa-external-link-alt"></i> Live Demo
    </a>
  </div>
</div>
```

### **For Projects WITHOUT Live Demo:**
```html
<div class="project-card">
  <div class="project-header">
    <h3>🎯 Your Project Name</h3>
  </div>
  <p class="project-description">Description of what your project does...</p>
  <div class="project-tags">
    <span class="tag">Python</span>
    <span class="tag">Automation</span>
  </div>
  <div class="project-links">
    <a href="https://github.com/Chima042-hub/your-repo-name" target="_blank" class="btn-github">
      <i class="fab fa-github"></i> GitHub
    </a>
  </div>
</div>
```

---

## 📝 **Current Project Status**

Update these as you upload projects to GitHub:

### ✅ **Already Linked:**
- Cat Photo App: https://github.com/Chima042-hub/cat-photo-app
- Survey Form: https://github.com/Chima042-hub/survey-form (+ Live Demo)
- Travel Page: https://github.com/Chima042-hub/travel-page
- Finance Loan Website: https://github.com/Chima042-hub/loan-website

### 🚧 **Need to Upload:**
- Parcel Force Real-Time Tracking → **Upload this first!**

---

## 💡 **Pro Tips for GitHub Projects**

### **1. Always Include a README.md:**
```markdown
# Parcel Force Real-Time Tracking System

Real-time parcel tracking web application built with HTML, CSS, and JavaScript.

## Features
- Track parcels by tracking number
- Real-time status updates
- Responsive design
- User-friendly interface

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Live Demo
[View Live Demo](https://chima042-hub.github.io/parcel-force-tracking/)

## Installation
1. Clone the repository
2. Open index.html in your browser

## Author
Joseph Chimakpa Njoku
```

### **2. Add Screenshots:**
- Take screenshots of your project
- Add them to your GitHub repo
- Include in README.md

### **3. Make Your Code Clean:**
- Add comments to complex sections
- Use proper indentation
- Remove any console.log() debugging code

---

## 🔄 **To Update Portfolio After Uploading Project**

**Run these commands in VS Code terminal:**

```powershell
# Navigate to portfolio folder
cd "C:\Users\user\OneDrive\Documents\chima-njoku-portfolio\my-portfolio"

# Add changes
git add index.html

# Commit
git commit -m "Update: Added Parcel Force project GitHub link"

# Push to GitHub
git push origin main
```

Your portfolio website will update automatically within 1-2 minutes!

---

## ❓ **Common Issues & Solutions**

### **Issue: "Project files are on my computer, not online"**
**Solution:** Upload to GitHub first (see Step 1)

### **Issue: "Live demo shows 404 error"**
**Solution:** 
- Make sure your main HTML file is named `index.html`
- Check GitHub Pages settings are correct
- Wait 2-3 minutes after enabling GitHub Pages

### **Issue: "CSS/Images not loading on live demo"**
**Solution:** 
- Use relative paths: `./style.css` not `C:\Users\...\style.css`
- Check file names match exactly (case-sensitive)

---

## ✅ **Ready to Update Portfolio?**

Once you've uploaded your Parcel Force project to GitHub, let me know and I'll update the portfolio link for you! Just provide:

1. ✅ GitHub repository URL
2. ✅ Live demo URL (if you deploy to GitHub Pages)

Then I'll update your portfolio code automatically!
