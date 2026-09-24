# GitHub Pages Deployment - Step-by-Step Visual Guide

Follow these exact steps to make your portfolio live on the internet for FREE.

---

## 📊 Overview

```
Your Computer              GitHub              Internet
    ↓                        ↓                    ↓
  Files            Push via Git          Live Website
(HTML/CSS/JS) ──────────────→ (Remote) ───────────→ (Public URL)
```

---

## ✅ Step-by-Step Process

### PART 1: Prepare Your Local Files

#### Step 1.1: Create Project Folder

**On Windows (Command Prompt or PowerShell):**
```
mkdir kaleemullah-portfolio
cd kaleemullah-portfolio
```

**On Mac/Linux (Terminal):**
```
mkdir kaleemullah-portfolio
cd kaleemullah-portfolio
```

**Result:** You now have an empty folder called `kaleemullah-portfolio`

---

#### Step 1.2: Add Files to Your Folder

**Option A: Copy-Paste Method**
1. Open VS Code
2. Click **File → Open Folder** → Select `kaleemullah-portfolio`
3. Right-click in the file explorer → **New File**
4. Create `index.html` and paste the HTML code
5. Create `style.css` and paste the CSS code
6. Create `script.js` and paste the JavaScript code
7. Create `README.md` and paste the README content

**Result:** Your folder now contains:
```
kaleemullah-portfolio/
├── index.html
├── style.css
├── script.js
└── README.md
```

**Option B: Download Method**
- If files are downloaded, move them to `kaleemullah-portfolio` folder

---

#### Step 1.3: Test Locally

1. **Open VS Code** in your project folder
   ```
   code .
   ```

2. **Install Live Server Extension** (if not already installed)
   - Click Extensions icon (left sidebar)
   - Search "Live Server"
   - Click "Install"

3. **Right-click `index.html`**
   - Select "Open with Live Server"
   - Your website opens in browser at `http://localhost:5500`

4. **Test everything works:**
   - Navigation scrolls smoothly
   - Mobile menu appears when screen is small
   - Links don't have errors
   - Styling looks professional

**Result:** Your website works on your computer

---

### PART 2: Create GitHub Account & Repository

#### Step 2.1: Create GitHub Account (if you don't have one)

1. Go to **github.com**
2. Click **"Sign up"**
3. Enter your email
4. Create password
5. Choose username (e.g., `kaleemullah2025` or similar)
6. Complete verification
7. Click **"Create account"**

**Result:** You now have a GitHub account

---

#### Step 2.2: Create a New Repository

1. **Log in to GitHub**
2. Click the **"+" icon** (top right)
3. Select **"New repository"**

**Fill in the form:**
- **Repository name:** `kaleemullah-portfolio` (exactly this)
- **Description:** `Cybersecurity portfolio website`
- **Visibility:** Select **"Public"** (important!)
- **Initialize repository:** Uncheck "Add a README file" (you have one)

4. Click **"Create repository"**

**Result:** GitHub shows you a new repository page with commands

---

### PART 3: Upload Your Files to GitHub

#### Step 3.1: Install Git (if you don't have it)

**Windows:**
1. Go to **git-scm.com**
2. Download the Windows installer
3. Run it and follow instructions
4. Open Command Prompt and type:
   ```
   git --version
   ```
   (If it shows a version, it's installed)

**Mac:**
1. Open Terminal
2. Type: `git --version`
   - If you don't have it, Mac will prompt you to install
   - Follow the prompts

**Linux:**
```
sudo apt install git
```

**Result:** Git is installed on your computer

---

#### Step 3.2: Initialize Git in Your Folder

**Open Terminal/Command Prompt** in your `kaleemullah-portfolio` folder:

```bash
# Initialize git repository
git init

# Configure your Git (one time only)
git config --global user.name "Your Name"
git config --global user.email "your-email@gmail.com"
```

**Result:** Git is initialized in your project folder (you'll see a `.git` folder)

---

#### Step 3.3: Add & Commit Files

**Still in Terminal:**

```bash
# Add all files to staging area
git add .

# Commit (save) the files
git commit -m "Initial portfolio commit - Add HTML, CSS, and JavaScript files"
```

**Result:** Your files are staged and committed locally

---

#### Step 3.4: Connect to GitHub

**Go back to GitHub** (the repository page you created)

You'll see a section that says "...or push an existing repository from the command line"

**Copy the commands** that look like:
```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kaleemullah-portfolio.git
git push -u origin main
```

**Paste them into your Terminal** (replace YOUR-USERNAME with your actual GitHub username)

**You may be prompted for:**
- **Username:** Your GitHub username
- **Password:** Your GitHub password (or Personal Access Token if using modern auth)

**Result:** Your files are now uploaded to GitHub!

---

### PART 4: Enable GitHub Pages

#### Step 4.1: Access Repository Settings

1. **Go to your GitHub repository**
   - URL: `github.com/YOUR-USERNAME/kaleemullah-portfolio`

2. Click **"Settings"** tab (gear icon, right side)

3. Scroll down to **"GitHub Pages"** section (left sidebar)

---

#### Step 4.2: Configure GitHub Pages

1. **Under "Build and deployment"**
2. **Source:** Select **"Deploy from a branch"**
3. **Branch:** Select **"main"** (or "master")
4. **Folder:** Select **"/ (root)"**
5. Click **"Save"**

**GitHub displays:**
```
Your site is live at: https://YOUR-USERNAME.github.io/kaleemullah-portfolio/
```

**Important:** Wait 1-2 minutes for the site to build and deploy

**Result:** Your website is now LIVE on the internet! ✨

---

### PART 5: Verify Your Live Website

1. **Visit your GitHub Pages URL:**
   ```
   https://YOUR-USERNAME.github.io/kaleemullah-portfolio/
   ```
   *(Replace YOUR-USERNAME with your actual GitHub username)*

2. **Test everything:**
   - Does it load?
   - Do all sections display correctly?
   - Do links work?
   - Does mobile menu work?

3. **Share your URL!** You now have a live cybersecurity portfolio

---

## 🔄 Making Updates Later

After your website is live, to make changes:

### Update Workflow:

```bash
# 1. Edit files in VS Code
# 2. Save files (Ctrl+S)
# 3. Test locally with Live Server

# 4. Open Terminal in your project folder
git add .
git commit -m "Update [describe what changed]"
git push

# 5. Wait 1-2 minutes
# 6. Your live website updates automatically
```

---

## 🎯 Common Errors & Fixes

### Error: "Repository not found"
**Cause:** Wrong username or repository name
**Fix:** Double-check the GitHub repository URL

---

### Error: "fatal: Permission denied"
**Cause:** GitHub authentication failed
**Fix:** 
- Generate a Personal Access Token on GitHub
  - Settings → Developer Settings → Personal Access Tokens
  - Create token with `repo` scope
  - Use token instead of password when prompted

---

### Error: "Site not found" at GitHub Pages URL
**Cause:** Settings not saved or branch is wrong
**Fix:**
1. Go to repository Settings
2. Check that Source is set to "main" branch
3. Wait 5 minutes and refresh
4. Check that `index.html` is in the root folder

---

### Error: "Styles not loading" (website looks broken)
**Cause:** File paths are wrong
**Fix:**
1. Make sure `style.css` and `script.js` are in the same folder as `index.html`
2. In HTML, check links are:
   ```html
   <link rel="stylesheet" href="style.css">
   <script src="script.js"></script>
   ```
   (NOT `./style.css` - that can cause issues)

---

### Website shows old version
**Cause:** Browser cache
**Fix:**
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Or open website in Private/Incognito mode

---

## 📋 Quick Command Reference

**Initial Setup (one time):**
```bash
git init
git config --global user.name "Your Name"
git config --global user.email "your-email@gmail.com"
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/kaleemullah-portfolio.git
git push -u origin main
```

**Regular Updates (after changes):**
```bash
git add .
git commit -m "Update [description]"
git push
```

**Check Status:**
```bash
git status
```

**View Commit History:**
```bash
git log
```

---

## 🎓 Understanding the Process

```
1. LOCAL DEVELOPMENT          2. GIT VERSION CONTROL         3. GITHUB HOSTING
   (Your Computer)               (Tracking Changes)            (Internet)
        ↓                              ↓                            ↓
   Edit files in          Git tracks all versions     GitHub serves files
   VS Code                of your code                to the public
        ↓                              ↓                            ↓
   Save locally      Commit tells Git              Push uploads to
        ↓            "these changes matter"         GitHub's server
   Test in browser          ↓                            ↓
        ↓           git add .                   Public URL created
   Everything        git commit -m "..."         www gets deployed
   works?                   ↓
        ↓            git push (upload)
       YES!
        ↓
     DEPLOY
```

---

## ✨ Your Portfolio is Now Live!

### Congratulations! 🎉

You now have:
- ✅ A professional portfolio website
- ✅ Hosted for FREE on GitHub Pages
- ✅ A public URL to share with recruiters
- ✅ Version control with Git
- ✅ Easy updates process

### Next Steps:
1. Share your URL: `https://USERNAME.github.io/kaleemullah-portfolio/`
2. Update as you gain new skills/projects
3. Use in internship applications
4. Showcase to potential employers

---

## 📞 Help & Resources

- **GitHub Pages Docs:** https://pages.github.com/
- **Git Documentation:** https://git-scm.com/doc
- **Troubleshooting:** Check repository Settings > Pages for any error messages
- **Personal Access Token:** https://github.com/settings/tokens

---

**Your cybersecurity portfolio is ready to impress! 🔐💻**

Good luck with your career journey!
