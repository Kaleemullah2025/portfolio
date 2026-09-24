# Kaleemullah Khan - Cybersecurity Portfolio Website

A modern, professional portfolio website for an aspiring cybersecurity professional. Built with HTML5, CSS3, and vanilla JavaScript—ready to deploy on GitHub Pages for free.

---

## 📁 Folder Structure

Here's how your project should be organized:

```
kaleemullah-portfolio/
│
├── index.html          (Main HTML file - the website)
├── style.css           (All styling)
├── script.js           (JavaScript for interactions)
├── README.md           (This file)
│
└── (future assets folder for images, if needed)
    └── images/
        └── profile.jpg (when you add a profile photo)
```

---

## 🚀 Quick Start

### Step 1: Create Your Project Folder

Open your terminal (Command Prompt, PowerShell, Terminal, or Git Bash) and run:

```bash
# Create a new folder for your portfolio
mkdir kaleemullah-portfolio
cd kaleemullah-portfolio
```

### Step 2: Add the Files

1. **Open VS Code** in this folder:
   ```bash
   code .
   ```

2. **Create three new files** (or copy-paste the content):
   - `index.html`
   - `style.css`
   - `script.js`

3. **Copy the complete code** from each file into VS Code and save.

**Make sure the filenames are exactly as shown** (lowercase, no spaces).

### Step 3: Test Locally

1. Right-click on `index.html` in VS Code
2. Select **"Open with Live Server"** (if you have the extension installed)
   - Or install the "Live Server" extension from VS Code marketplace
   - Or simply double-click `index.html` to open it in your browser

3. The website should open in your browser. Test:
   - Click navigation links → sections should scroll smoothly
   - Mobile menu on phone size → hamburger icon should appear
   - Hover effects on cards and buttons
   - All links work

---

## 🎨 Customization Guide

### 1. Change Your Name, Title, or Contact Info

**File:** `index.html`

Find and replace these sections:

```html
<!-- In Hero Section -->
<h1 class="hero-title">Kaleemullah Khan</h1>
<p class="hero-subtitle">Aspiring Cybersecurity Professional</p>

<!-- In About Section -->
<p>I'm a <strong>BS Cyber Security student at COMSATS University Islamabad</strong>...</p>

<!-- In Contact Section -->
<a href="mailto:kaleemkhani0543@gmail.com">kaleemkhani0543@gmail.com</a>
<a href="tel:+923009061337">+92 300 9061337</a>

<!-- In Footer -->
<h4>Kaleemullah Khan</h4>
<p>Aspiring Cybersecurity Professional | Blue Team & Web Security</p>
```

### 2. Update Your GitHub and LinkedIn Links

**File:** `index.html`

Replace these with your real links:

```html
<!-- Hero Social Links -->
<a href="https://github.com/Kaleemullah2025" target="_blank">
<!-- Change the URL to your GitHub profile -->

<!-- Contact Section -->
<a href="https://www.linkedin.com" target="_blank">
<!-- Change to your LinkedIn profile URL -->

<!-- Footer Links -->
<a href="https://github.com/Kaleemullah2025" target="_blank">
```

Example:
- GitHub: `https://github.com/YOUR-USERNAME`
- LinkedIn: `https://www.linkedin.com/in/your-profile`

### 3. Update Your Skills

**File:** `index.html`

In the Skills section, find skill categories and edit:

```html
<div class="skill-category">
    <h3 class="skill-category-title">Programming Languages</h3>
    <div class="skill-tags">
        <span class="skill-tag">Java</span>
        <span class="skill-tag">Python</span>
        <!-- Add or remove skill tags here -->
    </div>
</div>
```

To add a new skill: `<span class="skill-tag">New Skill</span>`
To remove: Delete the entire `<span>` line.

### 4. Update Your Projects

**File:** `index.html`

Each project is a `project-card`. To edit:

```html
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">Your Project Name</h3>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
    </div>
    <p class="project-description">
        Your project description goes here.
    </p>
    <div class="project-highlights">
        <div class="highlight">✓ Feature 1</div>
        <div class="highlight">✓ Feature 2</div>
    </div>
    <div class="project-footer">
        <a href="https://github.com/YOUR-REPO-URL" target="_blank" class="project-link">View on GitHub</a>
    </div>
</div>
```

### 5. Update Your Certifications

**File:** `index.html`

In the Certifications section:

```html
<div class="cert-card">
    <div class="cert-icon">
        <!-- Icon SVG - you can keep this -->
    </div>
    <h3 class="cert-title">Your Certification Name</h3>
    <p class="cert-issuer">Issuing Organization</p>
    <p class="cert-date">Month Year</p>
    <a href="https://your-credential-url" class="cert-link">View Credential</a>
</div>
```

### 6. Update Your Education

**File:** `index.html`

In the Education section:

```html
<div class="education-item">
    <div class="education-marker"></div>
    <div class="education-content">
        <h3 class="education-title">Your Degree/Program</h3>
        <p class="education-institution">Your University Name</p>
        <p class="education-dates">Start Year – End Year</p>
        <p class="education-meta">GPA or Marks</p>
    </div>
</div>
```

### 7. Change Colors (Optional)

**File:** `style.css` (top of file)

The design uses CSS variables. Change these to customize colors:

```css
:root {
    /* Primary color (currently cyan/blue) */
    --primary: #00d4ff;           /* Main accent color */
    --primary-dark: #00a8cc;      /* Darker shade */
    --primary-light: #33e5ff;     /* Lighter shade */
    
    /* Background */
    --bg-dark: #0a0e27;           /* Main background */
    --bg-darker: #050812;         /* Very dark background */
    
    /* Text */
    --text-primary: #e0e6ff;      /* Main text */
    --text-secondary: #a0aac3;    /* Secondary text */
}
```

To change the primary color from cyan to another color:
1. Pick a hex color (e.g., `#ff00ff` for magenta)
2. Replace all instances of `--primary: #00d4ff` with your color
3. Save and test

### 8. Add a Profile Photo

1. **Create an `images` folder** in your project directory
2. **Add your profile photo** (e.g., `profile.jpg`)
3. **Optional:** Add an image to the About section:

In `index.html`, after the About text, add:

```html
<div class="about-photo">
    <img src="images/profile.jpg" alt="Kaleemullah Khan">
</div>
```

4. **In `style.css`**, add this styling:

```css
.about-photo {
    text-align: center;
}

.about-photo img {
    width: 250px;
    height: 250px;
    border-radius: 12px;
    border: 2px solid var(--primary);
    object-fit: cover;
}
```

### 9. Update the Meta Description (for SEO)

**File:** `index.html` (in `<head>`)

```html
<meta name="description" content="Your short bio here - will appear in Google search results">
```

### 10. Add More Projects or Sections

To add another project, simply duplicate a `project-card` block and change the content.

To add a new section, follow this pattern:
1. Add the HTML section with a unique ID
2. Add CSS styling
3. Add a nav link

---

## 📱 Testing on Different Devices

### Desktop
- Open in Chrome, Firefox, Safari, Edge
- Test full width at 1920px, 1440px, 1024px

### Tablet
- Open DevTools (F12)
- Click the device toggle (mobile icon)
- Select iPad or similar

### Mobile
- Use the mobile device toggle in DevTools
- Test on actual iPhone/Android if possible
- Check that hamburger menu appears below 768px

**All elements should be readable and clickable without zooming.**

---

## 🐛 Troubleshooting

### Issue: Links don't scroll to sections
**Solution:** Make sure each section has a matching ID in HTML:
```html
<section id="about">
```
And nav links point to it:
```html
<a href="#about">
```

### Issue: Mobile menu doesn't close
**Solution:** Make sure `script.js` is linked in your HTML:
```html
<script src="script.js"></script>
```

### Issue: Styles not loading
**Solution:** Check that `style.css` is in the same folder and linked correctly:
```html
<link rel="stylesheet" href="style.css">
```

### Issue: Mobile menu hamburger not appearing
**Solution:** Check your browser's zoom level (should be 100%). Press Ctrl+0 (or Cmd+0 on Mac) to reset.

### Issue: Colors look different on mobile
**Solution:** This is usually your phone's display settings. The CSS should render consistently.

---

## 🌐 Deploy to GitHub Pages (FREE!)

### Prerequisites
1. A GitHub account (free at github.com)
2. Git installed on your computer (git-scm.com)

### Step 1: Create a GitHub Repository

1. Go to **github.com** and log in
2. Click **"+" → "New repository"**
3. Name it: `kaleemullah-portfolio`
4. Add description: "Cybersecurity portfolio website"
5. Choose **"Public"**
6. Click **"Create repository"**

### Step 2: Initialize Git Locally

In your project folder terminal:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit"

# Add the GitHub remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/kaleemullah-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**If you get an authentication error:**
- Generate a Personal Access Token on GitHub
- Use it as your password, or set up SSH keys

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (gear icon, top right)
3. Scroll down to **"GitHub Pages"**
4. Under "Branch", select **"main"** (or "master")
5. Leave the folder as **"/ (root)"**
6. Click **"Save"**

GitHub will show you:
```
Your site is published at: https://USERNAME.github.io/kaleemullah-portfolio/
```

### Step 4: View Your Live Website

Wait 1-2 minutes, then visit:
```
https://USERNAME.github.io/kaleemullah-portfolio/
```

✅ **Your portfolio is now live!**

---

## 📤 Updating Your Website

After you've deployed to GitHub Pages, to make changes:

### 1. Edit files locally (on your computer)

### 2. Commit and push to GitHub

```bash
git add .
git commit -m "Update [what you changed]"
git push
```

### 3. Your website updates automatically in 1-2 minutes

---

## 🎯 Custom Domain (Optional)

If you want a custom domain (e.g., `kaleemullah.com`):

1. Buy a domain from GoDaddy, Namecheap, or similar
2. In GitHub repository Settings → Pages
3. Under "Custom domain", enter your domain
4. Add the DNS records (instructions vary by registrar)

---

## 📋 Pre-Launch Checklist

Before sharing your portfolio:

- [ ] All text is accurate and proofread
- [ ] All links work (GitHub, LinkedIn, email, project repos)
- [ ] Name and contact info are correct
- [ ] Skills match your actual knowledge
- [ ] Projects are accurately described
- [ ] No broken images
- [ ] Mobile menu works
- [ ] Website loads on mobile without horizontal scroll
- [ ] Colors look professional
- [ ] GitHub Pages is enabled and live
- [ ] You've tested on at least 2 browsers

---

## 💡 Next Steps & Ideas

1. **Add more projects** as you build them
2. **Add blog posts** section (optional, requires more setup)
3. **Add actual certifications** as you earn them
4. **Update CGPA** when you complete new semesters
5. **Add a testimonials** section later
6. **Track views** with Google Analytics (optional)
7. **Integrate a contact form** with Formspree or similar (optional)

---

## 📚 Resources

- **HTML Guide:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS Guide:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript Guide:** https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **GitHub Pages:** https://pages.github.com/
- **Git Basics:** https://git-scm.com/book/en/v2

---

## 🤝 Support

- **Can't deploy?** Check GitHub Pages troubleshooting docs
- **Styling issues?** Use Chrome DevTools (F12) to inspect elements
- **JavaScript errors?** Open browser console (F12 → Console tab)

---

## 📄 License

This portfolio template is yours to use freely. Customize it however you like!

---

## ✨ Good Luck!

Your portfolio is a direct reflection of your professionalism. Keep it updated as you learn and grow in cybersecurity.

**You've got this! 💻🔐**

---

**Last Updated:** September 2026
**Portfolio Version:** 1.0
**Responsive:** Yes (Mobile, Tablet, Desktop)
**Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)
