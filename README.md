# Abdullah Portfolio — React.js

A modern, advanced portfolio website built with React.js.

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── components/             # One file per section
│   │   ├── Cursor.jsx          # Custom animated cursor
│   │   ├── ParticleCanvas.jsx  # Animated particle network background
│   │   ├── Navbar.jsx          # Fixed navigation bar
│   │   ├── Hero.jsx            # Landing / hero section
│   │   ├── About.jsx           # About me section
│   │   ├── Skills.jsx          # Skills with animated bars
│   │   ├── Projects.jsx        # Project cards grid
│   │   ├── Experience.jsx      # Timeline (education + milestones)
│   │   ├── Courses.jsx         # Current university courses
│   │   ├── Contact.jsx         # Contact form + links
│   │   └── Footer.jsx          # Footer
│   ├── styles/                 # One CSS file per component
│   │   ├── global.css          # CSS variables, resets, shared classes
│   │   ├── Cursor.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Experience.css
│   │   ├── Courses.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── data/
│   │   └── portfolioData.js    # ⭐ ALL your content lives here
│   ├── hooks/
│   │   └── usePortfolio.js     # Custom hooks (cursor, typewriter, scroll)
│   ├── App.jsx                 # Root component
│   └── index.js                # ReactDOM entry
└── package.json
```

## 🚀 How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production
npm run build
```

## ✏️ How to Customize

### Update Personal Info
Open `src/data/portfolioData.js` — **everything is here**:
- `personalInfo` → name, email, links, roles
- `skillCategories` → add/edit skills and percentages
- `projects` → add new projects
- `timeline` → education and experience
- `courses` → current courses

### Change Colors / Fonts
Open `src/styles/global.css` and edit the `:root` CSS variables:
```css
--cyan: #00e5ff;   /* Main accent color */
--bg:   #050a0f;   /* Background color  */
```

### Add a New Section
1. Create `src/components/NewSection.jsx`
2. Create `src/styles/NewSection.css`
3. Import and add it in `src/App.jsx`

## 🌐 Deploy to Vercel (Free)
```bash
npm run build
# Upload the /build folder to Vercel or Netlify
```
