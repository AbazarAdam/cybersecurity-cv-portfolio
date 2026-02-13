# Cybersecurity Portfolio Website — Professional CV & Security Projects

## 🛡️ Project Overview
This is a professional cybersecurity portfolio website designed to showcase technical expertise, certifications, and security projects. It serves as an interactive CV for a Cybersecurity Engineer and Security Analyst, featuring a modern, responsive design with dual-language support (English and Arabic).

The platform highlights offensive and defensive security skills, hands-on lab simulations, and major projects like **CyberGuardX** and **EvoTech**.

## ✨ Key Features
- **Professional CV Integration**: "View CV" functionality with direct PDF access.
- **Certificates Carousel**: A premium, seamless infinite-scrolling carousel displaying professional certifications (Fortinet, Cisco, etc.).
- **Dual-Language Support**: Full English and Arabic localization with RTL layout support.
- **Cybersecurity Projects**: Detailed showcase of security initiatives, including:
    - **CyberGuardX**: AI-driven web security assessment platform.
    - **EvoTech**: Security-focused tech services firm.
- **Digital Badges**: Interactive gallery of earned badges (Ethical Hacker, ISC2 Candidate).
- **Technical Skills**: Categorized display of tools (Kali Linux, Metasploit, Burp Suite) and domains (Offensive/Defensive Security).
- **Interactive UI**: Glassmorphism design, neon glow effects, and smooth animations.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.

## 🛠️ Technologies Used
- **Frontend Framework**: [Next.js 15](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: TypeScript
- **Icons**: Heroicons
- **Design System**: Custom "Cyberpunk/Neon" theme with CSS variables and glassmorphism utilities.
- **Animations**: CSS Keyframes (`scrollLeft`, `scrollRight`) for infinite loops.

## 📂 Structure & Components
The project follows a modular Next.js App Router structure:

- **`app/page.tsx`**: Main landing page combining all sections (Hero, About, Education, etc.).
- **`app/components/`**: Reusable UI components.
    - `CertificatesCarousel.tsx`: Infinite scrolling certificate display.
    - `Navbar.tsx`: Responsive navigation with language and theme toggles.
    - `SectionReveal.tsx`: Scroll animation wrapper.
    - `CyberBackground.tsx` & `EarthPlanet.tsx`: Visual background elements.
- **`app/data/content.ts`**: Centralized content management for text and translations (EN/AR).
- **`app/globals.css`**: Global styles, Tailwind directives, and custom animations.

## 🚀 Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/cybersecurity-portfolio.git
    cd cybersecurity-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
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
- **Certificates**: Hover over the moving certificate rows to pause the animation and view details. Click "View Certificate" to open the PDF.
- **Contact**: Use the contact section or header icons to reach out via email or phone.

## 🤝 Contribution & Notes
This project is maintained by **Abazar Adam**.
- **CyberGuardX Disclaimer**: The security tools mentioned (e.g., Phishing Detection, Vulnerability Scanner) are for educational and defensive purposes only. Always obtain authorization before testing any system.
- Suggestions and pull requests are welcome!

---
*Built with ❤️ and 🔒 by Abazar Adam.*
