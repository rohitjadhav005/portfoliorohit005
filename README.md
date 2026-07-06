# Rohit Jadhav | AI & Data Engineer Portfolio

Welcome to the source code of my personal portfolio website. This is a modern, responsive, and highly interactive portfolio built to showcase my skills, projects, and passion for Artificial Intelligence, Data Science, and Full-Stack Web Development.

---

## 🚀 Live Demo & Links
- **GitHub Profile**: [github.com/rohitjadhav005](https://github.com/rohitjadhav005)
- **GeoLet Repository**: [github.com/rohitjadhav005/GeoLet](https://github.com/rohitjadhav005/GeoLet)
- **Vitality-AI Repository**: [github.com/rohitjadhav005/Vitality-AI](https://github.com/rohitjadhav005/Vitality-AI)

---

## 🎨 Design & Features

This portfolio is designed to look premium, immersive, and visually stunning, featuring:
* **Interactive 3D Animations**: Implements tilt effects and perspective transforms using Framer Motion.
* **Scroll-based Skill Stack**: An interactive stacked card layout (`ScrollStack`) that dynamically translates, scales, and blurs based on scroll depth on mobile and desktop.
* **Custom Interactive Cursor**: A dynamic custom cursor that adapts to light/dark themes.
* **Seamless Theme Toggle**: Smooth transition between a premium Dark mode and light mode, persisting preferences using LocalStorage.
* **Responsive Layouts**: Fully responsive experience across mobile, tablet, and desktop screens.
* **Web3Forms Contact Integration**: A fully functional, direct contact form that accepts user submissions securely.
* **Rich Custom SVG Vector**: A unique, detailed, and animated developer setup vector on the hero section.

---

## 🛠️ Tech Stack & Architecture

The application is built using the following modern web technologies:

* **Framework**: [React 19](https://react.dev/)
* **Bundler & Build Tool**: [Vite 8](https://vite.dev/)
* **Language**: [TypeScript](https://www.typescriptlang.org/) for static type safety.
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for fluid styling and utility classes.
* **Animations**: [Framer Motion](https://www.framer.com/motion/) for micro-interactions, layout transitions, and scroll animations.
* **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/) for natural feeling, smooth page inertia.
* **Icons**: [Phosphor Icons](https://phosphoricons.com/) (`@phosphor-icons/react`) for clean, cohesive iconography.
* **Linter**: [Oxlint](https://github.com/oxc-project/oxc) for extremely fast linting.

---

## 📂 Project Structure

```text
portfoliorohit/
├── public/                # Static public assets (logos, icons)
├── src/
│   ├── assets/            # Project images and screenshots (GeoLet, Vitality-AI)
│   ├── components/        # Reusable UI sections
│   │   ├── Navbar.tsx     # Theme toggler & navigation links
│   │   ├── Hero.tsx       # Landing area with custom animated developer SVG
│   │   ├── About.tsx      # Bio & philosophy cards
│   │   ├── Projects.tsx   # Parallax-scrolling featured work
│   │   ├── Expertise.tsx  # Skill cards (Data Science, Backend, Frontend)
│   │   ├── ScrollStack.tsx# Specialized custom scroll transition effect
│   │   ├── Cursor.tsx     # Floating custom cursor tracker
│   │   └── Contact.tsx    # Form submission via Web3Forms API
│   ├── App.tsx            # Main layout and state (theme management)
│   ├── App.css            # Component-level animations and helpers
│   ├── index.css          # Base Tailwind imports & design system tokens
│   └── main.tsx           # React DOM root initialization
├── index.html             # HTML entry point with modern web fonts
├── package.json           # Project metadata & dependencies
└── tsconfig.json          # TypeScript compiler configuration
```

---

## ⚡ Featured Projects

### 📡 1. GeoLet
* **Description**: A modern, real-time geopolitical dashboard designed to monitor global energy supplies, pipeline statuses, geopolitical conflicts, and market pricing.
* **Technologies**: JavaScript, Web APIs, Data Visualization.
* **Source**: [GeoLet GitHub](https://github.com/rohitjadhav005/GeoLet)

### 🧠 2. Vitality-AI
* **Description**: AI-powered health analytics that predicts energy and productivity based on custom health metrics, helping users optimize their daily routines.
* **Technologies**: Machine Learning, Python, JavaScript.
* **Source**: [Vitality-AI GitHub](https://github.com/rohitjadhav005/Vitality-AI)

---

## 🧪 Expertise & Skills

### 📊 Data Science & Machine Learning
* Python, NumPy, Pandas, Scikit-learn, Matplotlib.

### 🔌 Backend & Database APIs
* FastAPI, Java, SQL, SQLite, REST APIs.

### 💻 Frontend & Tools
* JavaScript, React, Git, GitHub, Terminal.

---

## ⚙️ Development Setup

To run or build this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone the repository
```bash
git clone https://github.com/rohitjadhav005/Rohitsportfolio.git
cd Rohitsportfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To build a highly optimized distribution bundle:
```bash
npm run build
```
The output files will be generated in the `dist/` directory, ready to be deployed.

### 5. Lint the project
Run Oxlint to perform lightning-fast linting checks:
```bash
npm run lint
```

---

## 📜 License
This project is private. Feel free to explore the code to learn how the animations, `ScrollStack`, and Framer Motion layouts are integrated.
