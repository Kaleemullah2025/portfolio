# Quick Customization Reference

Keep this file handy for quick edits. All file references are to `index.html` unless stated otherwise.

---

## 🔧 Most Common Changes

### Change Your Email
**Location:** Multiple places in HTML
**Search for:** `kaleemkhani0543@gmail.com`
**Replace with:** Your email

### Change Your Phone Number
**Location:** Contact Section
**Search for:** `+923009061337`
**Replace with:** Your phone number

### Change GitHub Link
**Location:** Multiple places (hero, footer, projects, contact)
**Search for:** `https://github.com/Kaleemullah2025`
**Replace with:** `https://github.com/YOUR-USERNAME`

### Change LinkedIn Link
**Location:** Multiple places (hero, footer, contact)
**Search for:** `https://www.linkedin.com`
**Replace with:** `https://www.linkedin.com/in/YOUR-PROFILE`

---

## 📝 Edit Content by Section

### HERO SECTION (First thing people see)
```
Line 1: <h1 class="hero-title">Kaleemullah Khan</h1>
Line 2: <p class="hero-subtitle">Aspiring Cybersecurity Professional</p>
Line 3: <p class="hero-description">Blue Team & Web Application Security...</p>
```
**File:** `index.html` around line 100-120

---

### ABOUT SECTION
**Find:** `<section id="about" class="about">`

- **Edit text paragraphs** in `<div class="about-text">`
- **Edit stats** (3.18, 2, 5, 2) in `<div class="stat-card">`

---

### SKILLS SECTION
**Find:** `<section id="skills" class="skills">`

To **add a skill**: Find a skill tag and add a new line:
```html
<span class="skill-tag">Your New Skill</span>
```

To **remove a skill**: Delete the entire `<span class="skill-tag">` line

To **add a new skill category**:
```html
<div class="skill-category">
    <h3 class="skill-category-title">Your Category</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

---

### PROJECTS SECTION
**Find:** `<section id="projects" class="projects">`

**Each project has:**
- Title: `<h3 class="project-title">`
- Tags: `<span class="tag">`
- Description: `<p class="project-description">`
- Features: `<div class="highlight">`
- Link: `<a href="..."`

To add a new project, copy an entire `<div class="project-card">` block and modify.

---

### CERTIFICATIONS SECTION
**Find:** `<section id="certifications" class="certifications">`

For each cert:
- Title: `<h3 class="cert-title">`
- Issuer: `<p class="cert-issuer">`
- Date: `<p class="cert-date">`
- Link: `<a href="..." class="cert-link">`

---

### EDUCATION SECTION
**Find:** `<section id="education" class="education">`

For each education item:
- Title: `<h3 class="education-title">`
- Institution: `<p class="education-institution">`
- Dates: `<p class="education-dates">`
- Details: `<p class="education-meta">`

---

### CONTACT SECTION
**Find:** `<section id="contact" class="contact">`

**Email:**
```html
<a href="mailto:kaleemkhani0543@gmail.com">kaleemkhani0543@gmail.com</a>
```

**Phone:**
```html
<a href="tel:+923009061337">+92 300 9061337</a>
```

**Location:**
```html
<p>Islamabad, Pakistan</p>
```

**Social Links:** Update GitHub and LinkedIn URLs

---

### FOOTER
**Find:** `<footer class="footer">`

- Name: `<h4>Kaleemullah Khan</h4>`
- Tagline: `<p>Aspiring Cybersecurity Professional...</p>`
- Links: Update all `href` attributes

---

## 🎨 Style Changes (File: `style.css`)

### Change Primary Color
**Find:** Line ~8
```css
--primary: #00d4ff;
```

Replace `#00d4ff` with your color hex code:
- Red: `#ff0000`
- Green: `#00ff00`
- Purple: `#9400d3`
- Orange: `#ff8800`

---

### Change Background Color
**Find:** Line ~11-12
```css
--bg-dark: #0a0e27;
--bg-darker: #050812;
```

---

### Change Font
**Find:** Line ~18
```css
--font-main: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...
```

Replace with your font (e.g., Arial, Georgia, Courier New)

---

### Adjust Spacing
**Find:** Lines 22-28 (spacing variables)
- `--spacing-sm`: 1rem (increase for more space)
- `--spacing-md`: 1.5rem
- `--spacing-lg`: 2rem
- `--spacing-xl`: 3rem

---

## 🔗 All Links to Update

Search and Replace these throughout `index.html`:

| Find | Replace With |
|------|--------------|
| `kaleemkhani0543@gmail.com` | Your email |
| `+923009061337` | Your phone |
| `https://github.com/Kaleemullah2025` | Your GitHub URL |
| `https://www.linkedin.com` | Your LinkedIn URL |
| `Kaleemullah Khan` | Your name (3+ occurrences) |
| `Islamabad, Pakistan` | Your location |

---

## ✅ Validation Checklist

After editing:

- [ ] All links point to correct URLs
- [ ] All emails have `mailto:` prefix
- [ ] All phone numbers have `tel:` prefix
- [ ] No placeholder text like `[YOUR EMAIL]`
- [ ] All social icons have correct links
- [ ] Saved all files (Ctrl+S)
- [ ] Tested website in browser
- [ ] Tested on mobile
- [ ] No broken images or styling

---

## 🚨 Common Mistakes to Avoid

1. **Forgetting quotes on HTML attributes**
   - ❌ Wrong: `href=https://github.com`
   - ✅ Right: `href="https://github.com"`

2. **Forgetting the `http://` or `https://` in links**
   - ❌ Wrong: `href="github.com/username"`
   - ✅ Right: `href="https://github.com/username"`

3. **Forgetting `mailto:` for email links**
   - ❌ Wrong: `href="email@gmail.com"`
   - ✅ Right: `href="mailto:email@gmail.com"`

4. **Forgetting `tel:` for phone links**
   - ❌ Wrong: `href="+923009061337"`
   - ✅ Right: `href="tel:+923009061337"`

5. **Changing file names**
   - ❌ Don't rename `style.css` to `styles.css`
   - ✅ Keep exact names as provided

6. **Deleting closing tags**
   - ❌ Wrong: `<h1>Title</h2>` (mismatched)
   - ✅ Right: `<h1>Title</h1>` (matched)

---

## 💾 Saving & Testing Workflow

1. Edit file in VS Code
2. Press `Ctrl+S` to save
3. Refresh browser (F5 or Cmd+R on Mac)
4. Check if change appears
5. Test on mobile (DevTools)

---

## 🆘 If Something Breaks

1. **Undo in VS Code**: Press `Ctrl+Z` (or `Cmd+Z` on Mac)
2. **Check Console Errors**: Press F12 → Console tab
3. **Re-read the exact syntax** in this guide
4. **Compare with original files** if needed
5. **Save and refresh** browser

---

## 📍 File Locations Quick Reference

- **All HTML content & structure**: `index.html`
- **All styling & colors**: `style.css`
- **All interactions & animations**: `script.js`
- **Setup instructions**: `README.md`
- **This reference**: `CUSTOMIZATION_QUICK_REFERENCE.md`

---

## 🎯 Next Customizations (Advanced)

These require more changes but are doable:

1. **Add a profile photo**
   - Create `images/` folder
   - Add photo
   - Add `<img>` tag to HTML

2. **Change layout/design**
   - Modify CSS grid values
   - Adjust `grid-template-columns`
   - Add/remove sections

3. **Add animations**
   - Edit `@keyframes` in CSS
   - Add `animation:` properties

4. **Add contact form**
   - Use Formspree.io
   - Update form `action` attribute

---

## 📞 Quick Reference Card

**Keep this bookmarked for fast edits:**

| Change | Where | What to Search |
|--------|-------|-----------------|
| Email | Everywhere | `kaleemkhani0543@gmail.com` |
| Phone | Contact section | `+923009061337` |
| GitHub | 4 places | `Kaleemullah2025` |
| LinkedIn | 2 places | `linkedin.com` |
| Name | Hero + Footer | `Kaleemullah Khan` |
| Title | Hero | `Aspiring Cybersecurity` |
| Colors | CSS | `--primary: #00d4ff` |

---

**Print this page or bookmark it for easy reference!**

Last updated: September 2026
