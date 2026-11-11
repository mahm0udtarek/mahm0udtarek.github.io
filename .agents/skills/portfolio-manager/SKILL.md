---
name: portfolio-manager
description: >-
  Specialized skill for reading, modifying, adding, and updating sections, content, and media
  in Mahmoud Tarek's Portfolio and CV website (My_Protofolio). Use whenever reading profile
  information, editing sections (Summary, Experience, Skills, Education, Labs, Contact),
  adjusting typography or styles, or updating scripts and navigation.
---

# Portfolio Manager Skill

This skill provides the structure, conventions, and operational procedures for maintaining, updating, and extending Mahmoud Tarek's personal portfolio website.

---

## 1. Project Architecture & File Map

The portfolio is a high-performance, single-page application built with HTML5, Tailwind CSS (via CDN), custom CSS, and vanilla JavaScript.

```text
My_Protofolio/
├── index.html          # Main HTML structure, meta tags, and section containers
├── script.js           # Single Source of Truth data (profileData) and UI renderers
├── style.css           # Glassmorphism, animations, gradients, and custom utility classes
├── images/             # Media assets, book covers, and lab topology screenshots
└── .agents/skills/     # Custom workspace skills (including portfolio-manager)
```

### Core Files Responsibility

| File | Primary Purpose | Key Elements |
| :--- | :--- | :--- |
| `script.js` | **Data & Render Logic** | `const profileData = { ... }`, DOM renderers (`renderExperience`, `renderLabCards`, `renderCards`, `setHTML`, `setText`) |
| `index.html` | **Markup & Shell** | Navigation headers, section anchors (`#hero`, `#about`, `#experience`, `#skills`, `#projects`, `#books`, `#contact`), CDN dependencies |
| `style.css` | **Styling & Effects** | `.glass-card`, `.reveal`, `.section-separator`, `.tech-grid-bg`, scrollbar styling |

---

## 2. Profile Data Model (`script.js`)

All dynamic content is organized in the `const profileData` object at the top of `script.js`:

```javascript
const profileData = {
    showDemoLabel: true,
    name: "Mahmoud Tarek",
    title: "Network and Security Engineer",
    email: "mahmoud.tariek7@gmail.com",
    linkedin: "https://www.linkedin.com/in/mahm0udtarek/",
    github: "https://github.com/houda71",
    location: "Egypt",
    tagline: "...",
    summary: `<p>...</p>`,      // Formatted HTML paragraphs
    experience: [ ... ],        // Roles, companies, responsibilities, skills
    skills: [ ... ],            // Categorized technical expertise cards
    educationAndCourses: [ ... ],// Education and certification timeline
    books: [ ... ],             // Guide books cards
    labs: [ ... ]               // Interactive lab entries with gallery & highlights
};
```

---

## 3. Standard Procedures for Updating Sections

### Procedure A: Editing Existing Section Content

1. **Locate the data in `profileData` (`script.js`)**:
   - **Summary**: `profileData.summary` (use formatted `<p>` tags and `<strong class="text-white font-semibold">` highlights).
   - **Experience**: `profileData.experience` array (role, company, period, responsibilities, skills).
   - **Skills / Expertise**: `profileData.skills` array (categories, SVG icons, bullet lists).
   - **Education & Certifications**: `profileData.educationAndCourses` array (year, title, institution, details).
   - **Labs**: `profileData.labs` array (title, type, tags, highlights, gallery images).

2. **Ensure proper rendering helper**:
   - For plain text: `setText(id, text)` (`el.textContent = text`).
   - For rich HTML (tags, bolding, paragraphs): `setHTML(id, html)` (`el.innerHTML = html`).

3. **Validate syntax**:
   ```powershell
   node -c script.js
   ```

4. **Cache-busting**:
   Always bump the script version parameter in `index.html` whenever `script.js` is modified:
   ```html
   <script src="script.js?v=N"></script>
   ```

---

### Procedure B: Adding a New Section

Follow this checklist to ensure complete integration:

1. **Add Data**: Define the data structure inside `profileData` in `script.js`.
2. **Add Renderer**: Add a dedicated renderer in `script.js` that maps over the data and populates the container:
   ```javascript
   const container = document.getElementById('<new-section>-container');
   if (container && profileData.<newSection>) {
       container.innerHTML = profileData.<newSection>.map(item => `...`).join('');
   }
   ```
3. **Add HTML Section**: Insert `<section id="<new-section>" class="py-16 md:py-24">` in `index.html` with:
   - Section header:
     ```html
     <div class="text-center mb-16 reveal">
         <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">Section Title</h3>
         <div class="section-separator mx-auto"></div>
     </div>
     ```
   - Target container: `<div class="max-w-4xl mx-auto px-4" id="<new-section>-container"></div>`
4. **Update Navigation**:
   - Add `<a href="#<new-section>" class="text-gray-300 hover:text-sky-400 transition-colors">Section Title</a>` in both:
     - Desktop navbar: `<div class="space-x-8 hidden md:flex font-medium text-sm">`
     - Mobile drawer: `<div id="mobile-menu" class="mobile-menu ...">`
5. **Bump Cache Version** in `index.html` (`script.js?v=N`).

---

## 4. Design Guidelines & UI Conventions

- **Cards**: Use class `glass-card` with `rounded-2xl`, `border border-gray-800`, and `hover:border-sky-500/40`.
- **Accent Colors**: Primary accent is Sky (`#0ea5e9` / `text-sky-400` / `bg-sky-600`), secondary is Indigo (`#6366f1`).
- **Typography**: Font family is Inter. Titles should use `text-white font-bold`, body text `text-gray-300` or `text-gray-400`.
- **Badges**: Use pill shapes (`rounded-full px-3 py-1 text-xs font-semibold`). Active/current status uses `text-green-400 bg-green-950/60 border border-green-800/60` with a pulsating dot (`animate-pulse`).
- **Animations**: Add class `reveal` to any new section elements to trigger the `IntersectionObserver` scroll fade-in effect.

---

## 5. Local Server & Testing

> [!IMPORTANT]
> On Windows, a local web server must be run with `BypassSandbox: true` and `IsDaemon: true` so the host browser can access it without encountering `ERR_EMPTY_RESPONSE`:
> ```powershell
> python -m http.server 8000 --directory "c:\Users\hp\Desktop\antigravity projects\My_Protofolio"
> ```
> Local URL: `http://localhost:8000` (or `http://127.0.0.1:8000`).

---

## 6. Git Deployment Workflow

When pushing updates to GitHub Pages:
```powershell
Set-Location "c:\Users\hp\Desktop\antigravity projects\My_Protofolio"
git status
git add index.html script.js style.css images/
git commit -m "Descriptive message"
git fetch origin main
git rebase origin/main
git push origin main
```
