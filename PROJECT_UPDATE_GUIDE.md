# 🔄 Project Update & Link Guide

## 📂 **Your Current Projects Found:**

### OneDrive\Documents Folders:
1. **NovaBank-Online**
2. **Novabanking-site** 
3. **Parcel--Force New**
4. **Parcel-Force website PF**
5. **parcelforce-site**
6. **ParcelForcePro**
7. **Survey-Form**
8. **Travel-page**

---

## 🎯 **Step-by-Step Update Process**

### **STEP 1: Update Your Existing GitHub Repos**

For each project that already has a GitHub repo:

```powershell
# Example for Survey-Form
cd "C:\Users\user\OneDrive\Documents\Survey-Form"

# Check git status
git status

# Add all new/updated files
git add .

# Commit your updates
git commit -m "Update: Latest version with improvements"

# Push to GitHub
git push origin main
```

If you get errors about remote, reconnect:
```powershell
git remote -v
# If nothing shows, add your repo:
git remote add origin https://github.com/Chima042-hub/survey-form.git
git push -u origin main
```

---

### **STEP 2: Decide Which Parcel Force Project to Use**

You have **4 different Parcel Force folders**! Choose your best/latest version:
- ✅ **Parcel--Force New** (newest?)
- ✅ **Parcel-Force website PF**
- ✅ **parcelforce-site**
- ✅ **ParcelForcePro**

**Recommendation:** Use the one with the most recent updates.

---

### **STEP 3: Upload/Update Each Project**

#### **Project 1: Survey Form**
```powershell
cd "C:\Users\user\OneDrive\Documents\Survey-Form"
git status
git add .
git commit -m "Update: Latest survey form version"
git push origin main
```
**GitHub Repo:** https://github.com/Chima042-hub/survey-form
**Live Demo:** https://chima042-hub.github.io/survey-form/

---

#### **Project 2: Travel Page**
```powershell
cd "C:\Users\user\OneDrive\Documents\Travel-page"
git status
git add .
git commit -m "Update: Latest travel page design"
git push origin main
```
**GitHub Repo:** https://github.com/Chima042-hub/travel-page

---

#### **Project 3: Parcel Force (Choose Your Best Version)**
```powershell
# Replace with your chosen folder
cd "C:\Users\user\OneDrive\Documents\ParcelForcePro"

# If NOT connected to GitHub yet:
git init
git add .
git commit -m "Initial commit: Parcel Force Tracking System"

# Create new repo on GitHub first, then:
git remote add origin https://github.com/Chima042-hub/parcel-force-tracking.git
git branch -M main
git push -u origin main
```

---

#### **Project 4: NovaBank**
```powershell
# Check which folder is the main one (NovaBank-Online or Novabanking-site)
cd "C:\Users\user\OneDrive\Documents\NovaBank-Online"

git init
git add .
git commit -m "Initial commit: NovaBank Online Banking System"

# Create repo on GitHub, then:
git remote add origin https://github.com/Chima042-hub/novabank-online.git
git branch -M main
git push -u origin main
```

---

### **STEP 4: Update Portfolio Links**

Once projects are updated on GitHub, update your portfolio `index.html`:

#### **Current Projects Section:**
```html
<div class="project-card" style="border: 2px solid #0077cc;">
  <div class="project-header">
    <h3>📦 Parcel Force Real-Time Tracking System</h3>
  </div>
  <p class="project-description">A full-featured parcel tracking web application with real-time status updates, tracking number search, and responsive design. Built to demonstrate practical web development skills for logistics and delivery services.</p>
  <div class="project-tags">
    <span class="tag">HTML</span>
    <span class="tag">CSS</span>
    <span class="tag">JavaScript</span>
    <span class="tag">Real-Time</span>
  </div>
  <div class="project-links">
    <a href="https://github.com/Chima042-hub/parcel-force-tracking" target="_blank" class="btn-github">
      <i class="fab fa-github"></i> GitHub
    </a>
    <a href="https://chima042-hub.github.io/parcel-force-tracking/" target="_blank" class="btn-live">
      <i class="fas fa-external-link-alt"></i> Live Demo
    </a>
  </div>
</div>
```

#### **Add NovaBank Project:**
```html
<div class="project-card">
  <div class="project-header">
    <h3>🏦 NovaBank Online Banking System</h3>
  </div>
  <p class="project-description">Modern online banking interface with account management, transaction tracking, and secure authentication. Demonstrates professional web design for financial services.</p>
  <div class="project-tags">
    <span class="tag">HTML</span>
    <span class="tag">CSS</span>
    <span class="tag">JavaScript</span>
    <span class="tag">Finance</span>
  </div>
  <div class="project-links">
    <a href="https://github.com/Chima042-hub/novabank-online" target="_blank" class="btn-github">
      <i class="fab fa-github"></i> GitHub
    </a>
    <a href="https://chima042-hub.github.io/novabank-online/" target="_blank" class="btn-live">
      <i class="fas fa-external-link-alt"></i> Live Demo
    </a>
  </div>
</div>
```

---

## 🚀 **Quick Workflow for Each Project:**

### **If Repo Already Exists (Survey Form, Travel Page, etc.):**
1. ✅ Navigate to project folder
2. ✅ Run: `git add .`
3. ✅ Run: `git commit -m "Update: Latest version"`
4. ✅ Run: `git push origin main`
5. ✅ Check GitHub - refresh to see updates

### **If Creating New Repo (Parcel Force, NovaBank):**
1. ✅ Navigate to project folder
2. ✅ Run: `git init`
3. ✅ Create repo on GitHub.com
4. ✅ Run: `git remote add origin [URL]`
5. ✅ Run: `git add .`
6. ✅ Run: `git commit -m "Initial commit"`
7. ✅ Run: `git push -u origin main`

---

## ⚡ **Enable GitHub Pages for Live Demos:**

For EVERY project on GitHub:
1. Go to repo → **Settings** → **Pages**
2. Under "Source": Select **main** branch
3. Click **Save**
4. Wait 2-3 minutes
5. Your site is live at: `https://chima042-hub.github.io/repo-name/`

---

## 📝 **Checklist - Complete This:**

### Survey Form:
- [ ] Navigate to folder
- [ ] Update files if needed
- [ ] `git add .` → `git commit` → `git push`
- [ ] Verify on GitHub
- [ ] Enable GitHub Pages
- [ ] Update portfolio link ✅ (already correct)

### Travel Page:
- [ ] Navigate to folder
- [ ] Update files if needed
- [ ] `git add .` → `git commit` → `git push`
- [ ] Verify on GitHub
- [ ] Enable GitHub Pages
- [ ] Add live demo link to portfolio

### Cat Photo App:
- [ ] Navigate to folder (if you have it)
- [ ] Update files if needed
- [ ] `git add .` → `git commit` → `git push`
- [ ] Verify on GitHub

### Finance Loan Website:
- [ ] Find/update local files
- [ ] Push to GitHub
- [ ] Enable GitHub Pages

### Parcel Force (Choose best version):
- [ ] Decide which folder to use
- [ ] Create new GitHub repo
- [ ] Push code
- [ ] Enable GitHub Pages
- [ ] Update portfolio link

### NovaBank:
- [ ] Choose between NovaBank-Online vs Novabanking-site
- [ ] Create new GitHub repo
- [ ] Push code
- [ ] Enable GitHub Pages
- [ ] Add to portfolio

---

## 🎯 **Need Help?**

Tell me:
1. **Which Parcel Force folder** is your latest/best version?
2. **Which NovaBank folder** is your main one?
3. Do you want me to **add NovaBank to your portfolio** projects section?

I can then:
- Update your portfolio HTML with correct links
- Guide you through the git commands
- Add new project cards for NovaBank/Parcel Force

---

## 💡 **Pro Tip:**

Update projects in this order:
1. **Survey Form** (easiest - already has repo)
2. **Travel Page** (already has repo)
3. **Parcel Force** (new repo - your main showcase project)
4. **NovaBank** (new repo - additional impressive project)

This way your portfolio will have **6 solid projects** instead of 4! 🚀
