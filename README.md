# ✚ Health360 - Comprehensive Healthcare Analytics & Risk Intelligence

> **Understand health risks. Discover meaningful patterns.**  
> An interactive healthcare intelligence and chronic disease analytics platform powered by Tableau Public and modern web technologies.

---

## 🌟 Key Features & Redesigned UI

- **Modern Glassmorphic UI**: Built with responsive CSS Grid, high-contrast typography (`Plus Jakarta Sans`), sleek dark/light accents, and smooth animations.
- **Live Cardiac HUD**: Animated ECG waveform telemetry display and vital signs monitor right on the hero section.
- **Interactive Risk Screening Simulator**: Adjust age, systolic blood pressure, fasting glucose, BMI, and lifestyle habits to see real-time estimated chronic risk index scores.
- **Embedded Tableau Public Visualizations**:
  - **Dashboard**: Multi-variable patient distribution, chronic condition prevalence (Heart Disease, Diabetes, Stroke), and age-stratified heatmaps.
  - **Story**: Step-by-step guided visual narrative walking through clinical findings and correlations.
- **Interactive FAQ Accordion**: Real-time keyword search filter and expandable answers.
- **Dual Deployment Ready**:
  - **Python Flask Application**: Fully templated backend with `Procfile` ready for Render / Heroku / Railway.
  - **Node.js Server**: Built-in zero-dependency `server.js`.
  - **Static Site Build**: Ready-to-browse `static_site/` directory for GitHub Pages or instant client-side viewing.

---

## 📁 Repository Structure

```
├── app.py                     # Python Flask application entrypoint
├── requirements.txt           # Python dependencies (Flask, Gunicorn)
├── Procfile                   # Cloud deployment command (Render / Heroku)
├── server.js                  # Lightweight Node.js local server
├── .gitignore                 # Standard ignore file
├── README.md                  # Documentation
│
├── static/                    # Flask static assets
│   ├── style.css              # Modern responsive CSS design system
│   └── script.js              # Interactive client simulator & accordion
│
├── templates/                 # Jinja2 templates for Flask
│   ├── base.html              # Core layout, navigation & footer
│   ├── index.html             # Homepage with Hero, ECG HUD & Risk Simulator
│   ├── about.html             # Project vision, objectives, tech stack & limitations
│   ├── dashboard.html         # Embedded Tableau Public dashboard & insight cards
│   ├── story.html             # Embedded Tableau Public story narrative
│   └── faq.html               # Searchable FAQ accordion
│
└── static_site/               # Standalone static version (GitHub Pages ready)
    ├── index.html
    ├── about.html
    ├── dashboard.html
    ├── story.html
    ├── faq.html
    ├── style.css
    └── script.js
```

---

## 🚀 Getting Started

### Option 1: Python Flask (Recommended for Render)
```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run the application
python app.py
```
Open [http://localhost:5000](http://localhost:5000) in your web browser.

### Option 2: Node.js Server
```bash
node server.js
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Option 3: Direct Browser Viewing (Static)
Simply open `static_site/index.html` directly in any web browser!

---

## ☁️ Deployment on Render

1. Create a new **Web Service** on [Render.com](https://render.com).
2. Connect your GitHub repository.
3. Set the following build & start parameters:
   - **Environment**: `Python`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`

---

## ⚖️ Analytical Disclaimer

This project presents descriptive population trends and statistical associations for educational and analytical purposes. It is **not** validated for individual clinical prediction or diagnosis.
