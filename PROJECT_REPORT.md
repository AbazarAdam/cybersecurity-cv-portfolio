# Project Report: Cybersecurity Portfolio Website

## 1. Project Overview
**Project Name**: Cybersecurity Portfolio & CV Website
**Owner**: Abazar Adam
**Role**: Cybersecurity Engineer & Security Analyst

**Purpose**:
To provide a centralized, professional platform for hiring managers and technical recruiters to evaluate my cybersecurity skills, certifications, and project experience. The website acts as a dynamic CV, demonstrating both technical proficiency in web development (Next.js) and domain expertise in security.

**Target Audience**:
- Cybersecurity Recruiters & HR
- SOC Managers & Team Leads
- Technical Interviewers

## 2. Features & Modules

### Core Modules
- **Interactive Hero Section**: Immediate value proposition with "View CV" call-to-action, animated planet background, and professional summary.
- **Infinite Scroll Certificates**: A premium, dual-row carousel showcasing authentic certifications (Fortinet, Cisco).
    - *Impact*: Demonstrates continuous learning and verified credentials in an engaging way.
- **Digital Badges Gallery**: Visual representation of achievements (Ethical Hacker, FortiGate Operator).
- **Project Showcase**: Detailed breakdown of major security projects:
    - **CyberGuardX**: AI-driven web security assessment platform with ML phishing detection, OWASP scanner, and breach detection.
    - **CyberThreatX (v1.0)**: SOC-in-a-Box platform with real-time log ingestion, Sigma-based detection, ML anomaly scoring, and Docker deployment.
    - **ReconMaster**: Advanced automated reconnaissance framework with parallel subdomain enumeration, Nmap scanning, stealth controls, and structured reporting.
    - *Impact*: Proves ability to build and secure complex offensive and defensive systems.
- **Premium Header**: Scroll-aware sticky navigation with backdrop blur, animated link underlines, and spring-animated mobile Sheet menu.
- **Multi-Language Support**: Seamless toggling between English and Arabic.
    - *Impact*: Highlights bilingual communication skills suitable for global and regional roles.

### Technical Sections
- **Skills Matrix**: Categorized view of Offensive Security, Defensive Security, Tools, and Programming skills.
- **Experience Timeline**: Chronological display of roles at EvoTech, CyberGuardX, CyberThreatX, ReconMaster, and academic achievements.

## 3. Technical Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | Next.js 16 (React 19) | Performance, SEO, and Component-based architecture. |
| **Styling** | Tailwind CSS v4 | Rapid, utility-first styling with custom configuration. |
| **Language** | TypeScript | Type safety and code maintainability. |
| **Icons** | Heroicons + Lucide React | Consistent, lightweight SVG iconography. |
| **UI Components** | shadcn-style (CVA + Radix) | Reusable Button and Sheet primitives. |
| **Animation** | Framer Motion + CSS Keyframes | Hardware-accelerated animations and spring transitions. |
| **Localization** | Custom React State | Managing English/Arabic content states. |

## 4. Experience & Projects Summary

### **EvoTech (Founder & Tech Lead)**
- Leading a tech services firm delivering secure web solutions to 50+ clients.
- **Impact**: Mitigated active phishing campaigns for clients and managed cross-functional teams.

### **CyberGuardX (Project Lead)**
- Developed an intelligent web security assessment platform.
- **Key Features**:
    - Email Breach Detection (Leaked DB cross-referencing).
    - ML-based Phishing URL Detection.
    - Automated OWASP Top 10 Vulnerability Scanner.

### **CyberThreatX v1.0 (SOC-in-a-Box Platform)**
- Engineered lightweight SOC platform with real-time log ingestion and Sigma-based detection.
- **Key Features**:
    - Flask dashboard with alert triage, RBAC, and correlation engine.
    - ML-driven anomaly scoring and threat intelligence enrichment.
    - Containerized deployment using Docker.

### **ReconMaster (Advanced Reconnaissance Framework)**
- Developed modular automated reconnaissance framework.
- **Key Features**:
    - Parallel subdomain enumeration and Nmap service discovery.
    - Cloud bucket enumeration with structured reporting.
    - Scalable async architecture using FastAPI, Asyncio, and Playwright with stealth controls.

### **Lab Simulations & Research**
- Intensive hands-on experience with **Kali Linux**, **Metasploit**, and **Wireshark**.
- Conducted simulated penetration tests and network traffic analysis.

## 5. Languages, Skills & Badges

### **Professional Competencies**
- **Languages**: Arabic (Native), English (Fluent), Spanish (Beginner).
- **Soft Skills**: Strategic Risk Assessment, Team Leadership, Technical Documentation.

### **Certifications & Badges**
- Fortinet Certified Associate (FCA)
- Cisco Ethical Hacker
- ISC2 Candidate
- FortiGate Operator

## 6. Enhancements & Future Work
- **Advanced Threat Dashboard**: Integrating a real-time threat map into the CyberThreatX section.
- **Blog Integration**: Adding a technical blog to share write-ups on CTF challenges and recent CVEs.
- **Dark/Light Mode Refinement**: Further polishing the light mode experience.

## 7. Folder Structure Overview

```
/app
├── components/          # Reusable UI components
│   ├── CertificatesCarousel.tsx  # Infinite scroll logic
│   ├── Navbar.tsx                # Navigation & State
│   ├── HeroBackground.tsx        # Gradient mesh background
│   ├── ScrollToTop.tsx           # Scroll-to-top button
│   ├── ui/                       # shadcn-style primitives
│   │   ├── button.tsx
│   │   └── sheet.tsx
│   └── ...
├── data/
│   └── content.ts       # Text content & translations
├── globals.css          # Global styles & animations
├── layout.tsx           # Root layout structure
└── page.tsx             # Main application entry point
/lib
└── utils.ts             # Utility functions (cn)
/public
├── certificates/        # PDF assets (CV, certifications)
└── Badges/              # Badge images
```

## 8. Summary
This project represents a synthesis of modern web engineering and cybersecurity expertise. It is designed to be scalable, maintainable, and visually impactful. By adhering to clean code practices and a user-centric design, it effectively communicates readiness for high-level security roles.

The inclusion of dual-language support, interactive elements like the infinite certificate scroll, and detailed project showcases for CyberGuardX, CyberThreatX, and ReconMaster reflects a commitment to quality and attention to detail—core attributes of a successful security professional.
