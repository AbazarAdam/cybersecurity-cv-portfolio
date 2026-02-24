# Cybersecurity Portfolio Website — Professional CV & Security Projects

## 🛡️ Project Overview
This is a professional cybersecurity portfolio website designed to showcase technical expertise, certifications, and security projects. It serves as an interactive CV for a Cybersecurity Engineer and Security Analyst, featuring a modern, responsive design with dual-language support (English and Arabic).

The platform highlights offensive and defensive security skills, hands-on lab simulations, and major projects including **CyberGuardX**, **CyberThreatX**, **ReconMaster**, and **EvoTech**.

## ✨ Key Features
- **Professional CV Integration**: "View CV" functionality with direct PDF access.
- **Certificates Carousel**: A premium, seamless infinite-scrolling carousel displaying professional certifications (Fortinet, Cisco, etc.).
- **Dual-Language Support**: Full English and Arabic localization with RTL layout support.
- **Cybersecurity Projects**: Detailed showcase of security initiatives, including:
    - **CyberGuardX**: AI-driven web security assessment platform with ML phishing detection and OWASP scanner.
    - **CyberThreatX (v1.0)**: SOC-in-a-Box platform with real-time log ingestion, Sigma-based detection, and ML anomaly scoring.
    - **ReconMaster**: Advanced automated reconnaissance framework with parallel enumeration and stealth controls.
    - **EvoTech**: Security-focused tech services firm delivering secure solutions to 50+ clients.
- **Digital Badges**: Interactive gallery of earned badges (Ethical Hacker, ISC2 Candidate, FortiGate Operator).
- **Technical Skills**: Categorized display of tools (Kali Linux, Metasploit, Burp Suite) and domains (Offensive/Defensive Security).
- **Premium Header**: Scroll-aware sticky header with backdrop blur, animated hover underlines, and spring-animated mobile menu.
- **Interactive UI**: Glassmorphism design, neon glow effects, and smooth animations with dark/light mode support.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.

## 🛠️ Technologies Used
- **Frontend Framework**: [Next.js 16](https://nextjs.org/) (React 19, App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript
- **UI Components**: Custom shadcn-style components (Button, Sheet) with `class-variance-authority` and `@radix-ui/react-slot`
- **Icons**: Heroicons + Lucide React
- **Animations**: Framer Motion + CSS Keyframes (hardware-accelerated)
- **Design System**: Custom "Luxury Dark Purple" theme with CSS variables and glassmorphism utilities.

## 📂 Structure & Components
The project follows a modular Next.js App Router structure:

- **`app/page.tsx`**: Main landing page combining all sections (Hero, About, Education, etc.).
- **`app/components/`**: Reusable UI components.
    - `CertificatesCarousel.tsx`: Infinite scrolling certificate display.
    - `Navbar.tsx`: Responsive navigation with scroll-aware blur, language and theme toggles.
    - `SectionReveal.tsx`: Scroll animation wrapper.
    - `ScrollToTop.tsx`: Floating scroll-to-top button.
    - `CyberBackground.tsx` & `EarthPlanet.tsx`: Visual background elements.
    - `HeroBackground.tsx`: Animated gradient mesh with glow orbs (alternative hero background).
    - `ThemeToggle.tsx`: Dark/light mode toggle.
- **`app/components/ui/`**: shadcn-style primitives (Button, Sheet).
- **`app/data/content.ts`**: Centralized content management for text and translations (EN/AR).
- **`app/globals.css`**: Global styles, Tailwind directives, and custom animations.
- **`lib/utils.ts`**: Utility functions (`cn()` for class merging).

## 🚀 Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AbazarAdam/cybersecurity-cv-portfolio.git
    cd cybersecurity-cv-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Visit `http://localhost:3000` in your browser.

## 🧭 Usage & Navigation
- **Navigation Bar**: Use links to jump to specific sections (About, Certifications, Experience).
- **Language Toggle**: Click the language button (EN/AR) in the header to switch locales.
- **Theme Toggle**: Switch between dark and light mode using the toggle in the header.
- **Certificates**: Hover over the moving certificate rows to pause the animation and view details. Click "View Certificate" to open the PDF.
- **Contact**: Use the contact section or header icons to reach out via email or phone.

## 🤝 Contribution & Notes
This project is maintained by **Abazar Adam**.
- **Security Disclaimer**: The security tools mentioned (e.g., Phishing Detection, Vulnerability Scanner, SOC Platform) are for educational and defensive purposes only. Always obtain authorization before testing any system.
- Suggestions and pull requests are welcome!

---
*Built with ❤️ and 🔒 by Abazar Adam.*
