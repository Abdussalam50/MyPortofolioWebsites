# 🚀 Abdussalam Aswin Hadist — Personal Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Abdussalam%20Aswin%20Hadist-Full%20Stack%20Developer-7b2fff?style=for-the-badge&logo=code&logoColor=white)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat-square&logo=font-awesome&logoColor=white)](https://fontawesome.com/)

> A modern, dark-themed single-page portfolio website built with pure HTML, Vanilla JavaScript, and Tailwind CSS CDN.  
> Showcasing projects, skills, and experience as a Full Stack Developer.

**🌐 [Live Demo](#)** · **📂 [Source Code](https://github.com/Abdussalam50)**

</div>

---

## 📸 Preview

> Dark-mode first design with glassmorphism cards, animated particle background, and smooth scroll reveal animations.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎨 **Dark Mode Design** | Deep dark theme (`#0a0b10`) with glassmorphism card components |
| 💫 **Particle Background** | Animated canvas-based floating particles in the hero section |
| ✍️ **Typing Animation** | Role-switching text effect cycling through developer titles |
| 📊 **Skill Bars** | Animated progress bars triggered on scroll for each skill category |
| 🗂️ **Project Filter** | Dynamic filter buttons (All / Full Stack / API / Web App) to sort project cards |
| 🎥 **Video Modal** | Embedded YouTube or local video player in a full-screen modal overlay |
| 📈 **Stats Counter** | Animated counters for Years of Experience, Projects, and Tech stack numbers |
| 🌗 **Theme Toggle** | Dark/Light mode switch stored in session |
| 📜 **Scroll Progress Bar** | Fixed top progress indicator showing page scroll percentage |
| ⬆️ **Back to Top Button** | Appears after scrolling 500px, smooth-scrolls back to hero |
| 📱 **Responsive Layout** | Mobile hamburger menu with full-screen nav overlay |
| 📧 **Contact Form** | Functional contact form powered by [Web3Forms](https://web3forms.com/) |
| 🔍 **SEO Ready** | Proper `<title>` and `<meta description>` tags included |

---

## 🗂️ Project Structure

```
Portofolio/
├── index.html        # Main single-page application (HTML + Tailwind CDN + embedded styles)
├── js/
│   └── main.js       # All interactive JavaScript logic (~350 lines)
├── css/
│   └── (empty)       # Reserved for custom stylesheets
└── README.md         # Project documentation
```

---

## 🛠️ Tech Stack

### Core
- **HTML5** — Semantic page structure
- **Vanilla JavaScript (ES6+)** — All interactivity with no framework
- **Tailwind CSS (CDN v3)** — Utility-first styling with custom config

### External Libraries (CDN)
| Library | Purpose |
|---|---|
| [Tailwind CSS](https://cdn.tailwindcss.com) | Utility-first CSS framework |
| [Font Awesome 6.5](https://cdnjs.cloudflare.com) | Icon set for all UI icons |
| [Google Fonts](https://fonts.google.com) | `Inter` (body) + `Fira Code` (logo/code text) |
| [Web3Forms](https://web3forms.com) | Serverless contact form submission |

### Custom Tailwind Config (inline)
```js
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7b2fff',    // Purple
        secondary: '#00d4ff',  // Cyan
        accent: '#ff2d87',     // Pink
        dark: { DEFAULT: '#0a0b10', card: '#151921' }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        fira: ['Fira Code', 'monospace'],
      }
    }
  }
}
```

---

## 📄 Page Sections

```
index.html
├── 🏠 #home         — Hero section with particle canvas, typing animation, and floating tech badges
├── 👤 #about        — Bio, stat counters, and full tech stack tag cloud
├── 🧠 #skills       — Animated skill bars: Frontend | Backend | DevOps
├── 💼 #projects     — Filterable project cards with video demo modal
├── 🧭 #experience   — Timeline of work experience and education
└── 📬 #contact      — Contact info and Web3Forms-powered message form
```

---

## ⚙️ JavaScript Modules (`js/main.js`)

| Module | Description |
|---|---|
| **Mobile Menu** | Hamburger toggle with full-screen nav overlay |
| **Scroll Effects** | Navbar state update + scroll progress bar |
| **Typing Animation** | Character-by-character type/delete effect cycling roles |
| **Scroll Reveal** | IntersectionObserver-style scroll reveal for `.reveal` elements |
| **Stats Counter** | Animated number increment using `requestAnimationFrame` |
| **Particles** | Canvas-based floating dots using a `Particle` class |
| **Project Filters** | Filter project cards by `data-category` attribute |
| **Contact Form** | Async `fetch()` POST to Web3Forms API with success/error feedback |
| **Theme Toggle** | Dark/Light mode switch via `data-theme` attribute on `<body>` |
| **Back to Top** | Scroll-triggered visibility + smooth scroll to top |
| **Video Modal** | Dynamic iframe/video injection with YouTube autoplay support + ESC close |

---

## 🚀 Getting Started

This is a **pure static website** — no build tools or package manager required.

### Option 1: Open directly
```bash
# Just double-click the file, or drag it into your browser:
index.html
```

### Option 2: Serve with Laragon (recommended)
1. Place the `Portofolio/` folder inside `C:\laragon\www\`
2. Start Laragon and visit: `http://portofolio.test` or `http://localhost/Portofolio`

### Option 3: Serve with VS Code Live Server
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → **Open with Live Server**

---

## 🎯 Featured Projects

| # | Project | Stack | Status |
|---|---|---|---|
| 1 | **Race To SKD** | Laravel, React, MySQL, Midtrans, Gemini API, Docker | 🟡 In Development |
| 2 | **Pro2LMS** | Laravel, Livewire, Filament, Python, Claude API, Docker | ✅ Complete |
| 3 | **Vice Agent** | React, Python, FastAPI, PostgreSQL, Gemini API, Docker | ✅ Complete |
| 4 | **KostKito.com** | Laravel, TailwindCSS, MySQL | ✅ Complete |
| 5 | **Steze Hotel & Guest House MGMT** | PHP Native, Bootstrap, MySQL | ✅ Complete |
| 6 | **Fish Dryer Environment MGMT** | PHP Native, JavaScript, REST API (IoT), MySQL | ✅ Complete |
| 7 | **Health Diagnose System** | PHP Native, JavaScript, REST API (IoT), MySQL | ✅ Complete |
| 8 | **Let's Make It Gym** | PHP Native, Bootstrap, MySQL | ✅ Complete |

---

## 📬 Contact & Integration

The contact form uses **[Web3Forms](https://web3forms.com/)** — a free, serverless email service:

- **Access Key**: Configured in `index.html` hidden input (`name="access_key"`)
- **Endpoint**: `https://api.web3forms.com/submit`
- **Method**: `fetch()` POST with JSON body
- **UX**: Loading spinner → success/error banner → auto-hide after 5s

To use your own form, replace the `access_key` value with your own key from [web3forms.com](https://web3forms.com/).

---

## 👨‍💻 About the Developer

| | |
|---|---|
| **Name** | Abdussalam Aswin Hadist |
| **Role** | Full Stack Developer |
| **Location** | Indonesia 🇮🇩 |
| **Email** | abdussalamhadist50@gmail.com |
| **GitHub** | [github.com/Abdussalam50](https://github.com/Abdussalam50?tab=repositories) |
| **LinkedIn** | [linkedin.com/in/abdussalam-hadist](https://www.linkedin.com/in/abdussalam-hadist-02067b287/) |
| **WhatsApp** | [+62 822-8216-9581](https://wa.me/6282282169581) |
| **Availability** | Mon–Fri, 09.00–18.00 WIB |

---

## 📝 License

This project is open-source and available for personal inspiration.  
Please do not clone and publish as your own without attribution.

---

<div align="center">

Built with ❤️ by **Abdussalam Aswin Hadist** · © 2026 AWH · All rights reserved.

</div>
