import {
    AcademicCapIcon,
    ArrowDownTrayIcon,
    BugAntIcon,
    CloudIcon,
    CodeBracketIcon,
    CommandLineIcon,
    ComputerDesktopIcon,
    CpuChipIcon,
    EnvelopeIcon,
    PhoneIcon,
    ShieldCheckIcon,
    SparklesIcon,
    TrophyIcon,
} from "@heroicons/react/24/outline";

export const certifications = [
    {
        title: "Fortinet Certified Associate in Cybersecurity",
        issuer: "Fortinet",
        file: "/certificates/Fortinet%20Associate%20in%20Cybersecurity%20Cert.pdf",
    },
    {
        title: "Cisco Networking Academy – Ethical Hacker",
        issuer: "Cisco Networking Academy",
        file: "/certificates/Ethical_Hacker_cert_Cisco.pdf.pdf",
    },
    {
        title: "Fortinet Certified Fundamentals – Cybersecurity",
        issuer: "Fortinet NSE Fundamentals Track",
        file: "/certificates/Fortinet%20Certified%20Fundamentals%20in%20Cybersecurity.pdf",
    },
    {
        title: "Getting Started in Cybersecurity 3.0",
        issuer: "Fortinet Training",
        file: "/certificates/Fortinet%20NSE%201.pdf",
    },
    {
        title: "Technical Introduction to Cybersecurity 3.0",
        issuer: "Fortinet Training",
        file: "/certificates/Tech-Intro-Fortinet-Cert.pdf",
    },
    {
        title: "FortiGate 7.6 Operator Certification",
        issuer: "Fortinet",
        file: "/certificates/FortGATE%207.6%20Opreator%20Cert.pdf",
    },
    {
        title: "Website Development from 5G Technology",
        issuer: "5G Technology",
        file: "/certificates/Certificate%20Website%205G.pdf",
    },
    {
        title: "HP LIFE – Marketing Benefits vs. Product Features",
        issuer: "HP LIFE",
        file: "/certificates/HP%20LIFE%20%E2%80%93%20Marketing%20Benefits%20vs.%20Product%20Features.pdf",
    },
    {
        title: "HP LIFE – Data Presentation",
        issuer: "HP LIFE",
        file: "/certificates/HP%20LIFE%20%E2%80%93%20Data%20Presentation.pdf",
    },
    {
        title: "HP LIFE – Effective Website Design",
        issuer: "HP LIFE",
        file: "/certificates/HP%20LIFE%20%E2%80%93%20Effective%20Website%20Design.pdf",
    },
    {
        title: "Cisco – Cyber Threat Management",
        issuer: "Cisco Networking Academy",
        file: "/certificates/Cisco_Cyber_Threat_Management_cert.pdf",
    },
    {
        title: "Cisco – Network Defense",
        issuer: "Cisco Networking Academy",
        file: "/certificates/Cisco_Network_Defense_cert.pdf",
    },
];

export const badges = [
    {
        title: "Associate Cybersecurity",
        image: "/Badges/Associate-Cybersecurity.png",
    },
    {
        title: "Ethical Hacker",
        image: "/Badges/Ethical-Hacker.png",
    },
    {
        title: "FortiGate Operator",
        image: "/Badges/FortiGate-Operator.png",
    },
    {
        title: "ISC2 Candidate",
        image: "/Badges/ISC2-Candidate.png",
    },
    {
        title: "Cyber Threat Management",
        image: "/Badges/Cyber Threat Management.png",
    },
    {
        title: "Network Defense",
        image: "/Badges/Network Defense.png",
    },
];

export const copy = {
    en: {
        navLinks: [
            { label: "About", href: "#about" },
            { label: "Education", href: "#education" },
            { label: "Certifications", href: "#certifications" },
            { label: "Badges", href: "#badges" },
            { label: "Skills", href: "#skills" },
            { label: "Experience", href: "#experience" },
            { label: "Languages", href: "#languages" },
            { label: "Contact", href: "#contact" },
        ],
        hero: {
            kicker: "Cybersecurity Portfolio",
            title: "Cybersecurity Engineer & Security Analyst",
            summary:
                "Specializing in offensive security, vulnerability assessment, and building resilient defense systems. Bridging the gap between attacking assumptions and securing critical infrastructure.",
            typewriter:
                "Analyzing threats. Fortifying networks. Securing the future.",
            ctaDownload: "Download CV",
            ctaContact: "Contact Me",
        },
        profile: {
            title: "Profile Snapshot",
            paragraphs: [
                "Aspiring Cybersecurity Engineer and SOC Analyst with hands-on experience in penetration testing, vulnerability assessment, and security operations.",
                "Founder of EvoTech, leading client security initiatives and mitigating real-world phishing threats.",
                "Actively pursuing CompTIA Security+ (SY0-701) and ISC2 certifications to validate advanced security expertise.",
            ],
            tags: ["Red Team", "SOC Analyst", "Vulnerability Assessment", "Cloud Security"],
        },
        about: {
            title: "About Me",
            body:
                "I am a Cybersecurity Engineering student and security practitioner passionate about offensive security and defensive architecture. My journey involves rigorous lab simulations in Kali Linux, practical web vulnerability analysis, and delivering security-first IT solutions through EvoTech. I aim to leverage my technical foundation in network security, OSINT, and automation to protect organizational assets as a Cybersecurity Engineer or SOC Analyst.",
            focusLabel: "Core Competencies",
        },
        education: {
            title: "Education",
            degree: "Bachelor of Computer Science (Hons.) – Cybersecurity",
            school: "Multimedia University (MMU), Malaysia | 2023 – Present",
            award: "Dean's List Award – 2025",
            focusLabel: "Academic Focus",
        },
        certifications: {
            title: "Certifications",
            description:
                "Verified credentials demonstrating technical proficiency in cybersecurity and network defense.",
            view: "View Certificate",
            download: "Download",
            inProgress:
                "Currently pursuing: CompTIA Security+ (SY0-701) & ISC2 Certified in Cybersecurity (CC).",
        },
        badges: {
            title: "Badges & Achievements",
            description: "Digital badges earned through rigorous assessments and practical exams.",
        },
        skills: {
            title: "Technical Arsenal",
            groups: [
                {
                    title: "Offensive Security",
                    icon: BugAntIcon,
                    skills: [
                        "Penetration Testing",
                        "Red Team Operations",
                        "Vulnerability Assessment",
                        "Privilege Escalation",
                        "Social Engineering",
                        "Credential Harvesting",
                    ],
                },
                {
                    title: "Defensive Security",
                    icon: ShieldCheckIcon,
                    skills: [
                        "SOC Monitoring",
                        "SIEM Analysis",
                        "Endpoint Hardening",
                        "Threat Intelligence",
                        "Access Control Policies",
                    ],
                },
                {
                    title: "Security Tools",
                    icon: CommandLineIcon,
                    skills: [
                        "Kali Linux Suite",
                        "Burp Suite / OWASP ZAP",
                        "Nmap",
                        "Wireshark",
                        "Metasploit",
                        "Splunk",
                        "QRadar",
                    ],
                },
                {
                    title: "Programming & Automation",
                    icon: CodeBracketIcon,
                    skills: [
                        "Python (Security Automation)",
                        "Bash Scripting",
                        "C / C++",
                        "SQL / NoSQL",
                        "Assembly (Basic)",
                    ],
                },
                {
                    title: "Cloud & DevOps",
                    icon: CloudIcon,
                    skills: [
                        "AWS Fundamentals",
                        "Docker Containers",
                        "Git Version Control",
                        "CI/CD Concepts",
                    ],
                },
                {
                    title: "Operating Systems",
                    icon: ComputerDesktopIcon,
                    skills: ["Linux (Debian/RedHat)", "Windows Server", "Active Directory"],
                },
            ],
        },
        experience: {
            title: "Experience & Projects",
            items: [
                {
                    title: "CyberGuardX — Project Lead & Developer (2026)",
                    description:
                        "Developed web-based security assessment platform simulating real-world penetration testing workflows.",
                    highlights: [
                        "Built Email Breach Detection module cross-referencing compromised credential datasets.",
                        "Implemented Machine Learning-based Phishing URL Detection system.",
                        "Designed Password Strength Analyzer using entropy-based risk scoring.",
                        "Created automated OWASP Top 10 vulnerability scanner with risk prioritization and remediation guidance.",
                        "Generated structured security reports aligned with industry best practices.",
                    ],
                },
                {
                    title: "EvoTech — Founder & Technical Lead (2024)",
                    description:
                        "Delivered secure web applications and IT infrastructure to 50+ clients.",
                    highlights: [
                        "Reduced vulnerability exposure through secure SDLC and security hardening practices.",
                        "Detected and mitigated phishing campaigns and social engineering threats.",
                        "Managed remote cross-functional technical teams and project deployments.",
                    ],
                },
                {
                    title: "Fawrico Platform — Cybersecurity Consultant & QA (2026)",
                    description:
                        "Cybersecurity Consultant & Quality Assurance — Conducted security assessments and QA on platform features.",
                    highlights: [
                        "Conducted security assessments and vulnerability analysis on platform features.",
                        "Identified and reported security flaws and misconfigurations.",
                        "Collaborated with developers to improve secure coding practices.",
                        "Performed QA testing to ensure platform stability, functionality, and security compliance.",
                        "Contributed to improving overall system reliability and user data protection.",
                    ],
                },
                {
                    title: "Security Research & Lab Simulation (2025 – Present)",
                    description:
                        "Conducted simulated penetration testing in controlled lab environments.",
                    highlights: [
                        "Performed network traffic analysis and anomaly detection using Wireshark.",
                        "Executed vulnerability scanning and exploitation using Metasploit framework.",
                        "Practiced OSINT investigations and attack surface mapping techniques.",
                    ],
                },
                {
                    title: "CyberThreatX (v1.0) — SOC-in-a-Box Platform (2026)",
                    description:
                        "Engineered lightweight SOC platform with real-time log ingestion, Sigma-based detection, and ML anomaly scoring.",
                    highlights: [
                        "Built Flask dashboard with alert triage, RBAC, correlation engine, and threat intelligence enrichment.",
                        "Implemented Sigma-based detection pipeline with real-time log analysis and ML-driven anomaly scoring.",
                        "Containerized the platform using Docker for scalable and production-ready deployment.",
                    ],
                },
                {
                    title: "ReconMaster — Advanced Reconnaissance Framework (2026)",
                    description:
                        "Developed modular automated reconnaissance framework with parallel subdomain enumeration and service discovery.",
                    highlights: [
                        "Integrated Nmap scanning, HTTP service detection, and cloud bucket enumeration with structured reporting.",
                        "Designed scalable async architecture using FastAPI, Asyncio, and Playwright with stealth controls.",
                        "Implemented proxy rotation, rate limiting, and evasion techniques for reliable large-scale reconnaissance.",
                    ],
                },
            ],
        },
        languages: {
            title: "Languages & Soft Skills",
            languagesLabel: "Languages",
            softSkillsLabel: "Professional Competencies",
            list: [
                { label: "Arabic", level: "Native" },
                { label: "English", level: "Fluent (Professional)" },
                { label: "Spanish", level: "Beginner" },
            ],
            softSkills: [
                "Analytical Problem Solving",
                "Strategic Risk Assessment",
                "Technical Documentation",
                "Team Leadership",
                "Effective Communication",
            ],
        },
        objective: {
            title: "Career Objective",
            text: "Bringing hands-on lab experience and practical security engineering skills to strengthen organizational defense.",
        },
        contact: {
            title: "Contact",
            intro:
                "Open to opportunities in Cybersecurity Engineering, SOC Analysis, and Security Research. Let's secure the future together.",
            focusLabel: "Current Focus",
            currentFocus:
                "Actively engineering CyberGuard's advanced threat heuristics, scaling CyberThreatX into a production-grade SOC platform with real-time detection, and expanding ReconMaster's offensive reconnaissance capabilities — while pursuing CompTIA Security+ certification to validate industry-standard expertise.",
        },
        focusAreas: [
            "Network Security",
            "Threat Analysis",
            "Security Auditing",
            "Incident Response",
        ],
    },
    ar: {
        navLinks: [
            { label: "نبذة عني", href: "#about" },
            { label: "التعليم", href: "#education" },
            { label: "الشهادات", href: "#certifications" },
            { label: "الشارات", href: "#badges" },
            { label: "المهارات", href: "#skills" },
            { label: "الخبرة", href: "#experience" },
            { label: "اللغات", href: "#languages" },
            { label: "التواصل", href: "#contact" },
        ],
        hero: {
            kicker: "محفظة الأمن السيبراني",
            title: "مهندس أمن سيبراني ومحلل أمن معلومات",
            summary:
                "متخصص في الأمن الهجومي، وتقييم الثغرات، وبناء أنظمة دفاعية مرنة. أعمل على سد الفجوة بين اختبار الأنظمة وحماية البنية التحتية الحيوية.",
            typewriter: "تحليل التهديدات. تحصين الشبكات. تأمين المستقبل.",
            ctaDownload: "تحميل السيرة الذاتية",
            ctaContact: "تواصل معي",
        },
        profile: {
            title: "لمحة مهنية",
            paragraphs: [
                "مهندس أمن سيبراني ومحلل SOC طموح بخبرة عملية في اختبار الاختراق وتقييم الثغرات والعمليات الأمنية.",
                "مؤسس EvoTech، أقود مبادرات أمنية للعملاء وأعمل على التخفيف من مخاطر التصيد الاحتيالي الواقعية.",
                "أسعى حاليًا للحصول على شهادات CompTIA Security+ (SY0-701) و ISC2 لتوثيق الخبرات الأمنية المتقدمة.",
            ],
            tags: ["الفريق الأحمر", "محلل SOC", "تقييم الثغرات", "أمن السحابة"],
        },
        about: {
            title: "نبذة عني",
            body:
                "أنا طالب هندسة أمن سيبراني وممارس شغوف بالأمن الهجومي والهندسة الدفاعية. تتضمن رحلتي محاكاة مختبرات صارمة في Kali Linux، وتحليل عملي لثغرات الويب، وتقديم حلول تقنية تعطي الأولوية للأمن عبر EvoTech. أهدف إلى استغلال أساسي التقني في أمن الشبكات والاستخبارات مفتوحة المصدر (OSINT) والأتمتة لحماية أصول المؤسسات كمهندس أمن سيبراني أو محلل مركز عمليات أمنية (SOC).",
            focusLabel: "الكفاءات الأساسية",
        },
        education: {
            title: "التعليم",
            degree: "بكالوريوس علوم الحاسب (مع مرتبة الشرف) – الأمن السيبراني",
            school: "جامعة الوسائط المتعددة (MMU)، ماليزيا | 2023 – حتى الآن",
            award: "قائمة العميد – 2025",
            focusLabel: "التركيز الأكاديمي",
        },
        certifications: {
            title: "الشهادات",
            description:
                "اعتمادات موثقة تظهر الكفاءة التقنية في الأمن السيبراني والدفاع عن الشبكات.",
            view: "عرض الشهادة",
            download: "تنزيل",
            inProgress:
                "قيد التنفيذ: CompTIA Security+ (SY0-701) وشهادة ISC2 المعتمدة في الأمن السيبراني (CC).",
        },
        badges: {
            title: "الشارات والإنجازات",
            description: "شارات رقمية تم الحصول عليها من خلال اختبارات صارمة وتقييمات عملية.",
        },
        skills: {
            title: "الترسانة التقنية",
            groups: [
                {
                    title: "الأمن الهجومي",
                    icon: BugAntIcon,
                    skills: [
                        "اختبار الاختراق",
                        "عمليات الفريق الأحمر",
                        "تقييم الثغرات",
                        "تصعيد الامتيازات",
                        "الهندسة الاجتماعية",
                        "جمع بيانات الاعتماد",
                    ],
                },
                {
                    title: "الأمن الدفاعي",
                    icon: ShieldCheckIcon,
                    skills: [
                        "مراقبة SOC",
                        "تحليل SIEM",
                        "تقوية الأنظمة الطرفية",
                        "استخبارات التهديدات",
                        "سياسات التحكم في الوصول",
                    ],
                },
                {
                    title: "أدوات الأمن",
                    icon: CommandLineIcon,
                    skills: [
                        "مجموعة Kali Linux",
                        "Burp Suite / OWASP ZAP",
                        "Nmap",
                        "Wireshark",
                        "Metasploit",
                        "Splunk",
                        "QRadar",
                    ],
                },
                {
                    title: "البرمجة والأتمتة",
                    icon: CodeBracketIcon,
                    skills: [
                        "Python (الأتمتة الأمنية)",
                        "Bash Scripting",
                        "C / C++",
                        "SQL / NoSQL",
                        "Assembly (أساسيات)",
                    ],
                },
                {
                    title: "السحابة وDevOps",
                    icon: CloudIcon,
                    skills: [
                        "أساسيات AWS",
                        "حاويات Docker",
                        "إدارة النسخ Git",
                        "مفاهيم CI/CD",
                    ],
                },
                {
                    title: "أنظمة التشغيل",
                    icon: ComputerDesktopIcon,
                    skills: ["Linux (Debian/RedHat)", "Windows Server", "Active Directory"],
                },
            ],
        },
        experience: {
            title: "الخبرات والمشاريع",
            items: [
                {
                    title: "CyberGuardX — قائد المشروع والمطور (2026)",
                    description:
                        "تطوير منصة تقييم أمان الويب القائمة على الويب التي تحاكي سير عمل اختبار الاختراق في العالم الحقيقي.",
                    highlights: [
                        "بناء وحدة الكشف عن اختراق البريد الإلكتروني مع مرجعية لقواعد بيانات البيانات المخترقة.",
                        "تنفيذ نظام الكشف عن عناوين URL للتصيد باستخدام التعلم الآلي.",
                        "تصميم محلل قوة كلمات المرور باستخدام حساب الإنتروبيا وتقييم المخاطر.",
                        "إنشاء ماسح ضوئي لثغرات OWASP Top 10 بشكل آلي مع توجيهات للمعالجة.",
                        "إصدار تقارير أمان منظمة تتماشى مع أفضل الممارسات في الصناعة.",
                    ],
                },
                {
                    title: "EvoTech — المؤسس والقائد التقني (2024)",
                    description:
                        "تقديم تطبيقات ويب آمنة وبنية تحتية لتقنية المعلومات لأكثر من 50 عميلًا.",
                    highlights: [
                        "تقليص التعرض للثغرات من خلال ممارسات SDLC الآمنة وتعزيز الأمان.",
                        "الكشف عن حملات التصيد وهجمات الهندسة الاجتماعية والتخفيف من حدتها.",
                        "إدارة فرق تقنية متعددة الوظائف عن بعد ونشر المشاريع.",
                    ],
                },
                {
                    title: "الأبحاث الأمنية ومحاكاة المختبرات (2025 – حتى الآن)",
                    description:
                        "إجراء اختبارات اختراق محاكاة في بيئات معملية خاضعة للرقابة.",
                    highlights: [
                        "تحليل حركة مرور الشبكة والكشف عن الشذوذ باستخدام Wireshark.",
                        "تنفيذ استغلال الثغرات والمسح باستخدام إطار عمل Metasploit.",
                        "ممارسة تحقيقات OSINT وتقنيات رسم خرائط سطح الهجوم.",
                    ],
                },
                {
                    title: "CyberThreatX (v1.0) — منصة SOC متكاملة (2026)",
                    description:
                        "تطوير منصة SOC خفيفة مع استيعاب السجلات في الوقت الفعلي والكشف القائم على Sigma وتسجيل الشذوذ بالتعلم الآلي.",
                    highlights: [
                        "بناء لوحة معلومات Flask مع فرز التنبيهات و RBAC ومحرك الارتباط وإثراء استخبارات التهديدات.",
                        "تنفيذ خط أنابيب الكشف القائم على Sigma مع تحليل السجلات في الوقت الفعلي.",
                        "حاوية المنصة باستخدام Docker للنشر القابل للتوسع والجاهز للإنتاج.",
                    ],
                },
                {
                    title: "ReconMaster — إطار استطلاع متقدم (2026)",
                    description:
                        "تطوير إطار استطلاع آلي نمطي مع تعداد النطاقات الفرعية المتوازي واكتشاف الخدمات.",
                    highlights: [
                        "دمج مسح Nmap واكتشاف خدمات HTTP وتعداد حاويات السحابة مع تقارير منظمة.",
                        "تصميم بنية غير متزامنة قابلة للتوسع باستخدام FastAPI و Asyncio و Playwright.",
                        "تنفيذ تدوير البروكسي وتحديد المعدل وتقنيات التهرب للاستطلاع واسع النطاق.",
                    ],
                },
            ],
        },
        languages: {
            title: "اللغات والكفاءات",
            languagesLabel: "اللغات",
            softSkillsLabel: "الكفاءات المهنية",
            list: [
                { label: "العربية", level: "لغة أم" },
                { label: "الإنجليزية", level: "طلاقة (مستوى مهني)" },
                { label: "الإسبانية", level: "مبتدئ" },
            ],
            softSkills: [
                "حل المشكلات التحليلي",
                "تقييم المخاطر الاستراتيجي",
                "التوثيق التقني",
                "قيادة الفريق",
                "التواصل الفعال",
            ],
        },
        objective: {
            title: "الهدف المهني",
            text: "مهندس أمن سيبراني طموح أبحث عن دور مليء بالتحديات في العمليات الأمنية (SOC)، أو اختبار الاختراق، أو هندسة الأمن. ملتزم بتطبيق المعرفة الأكاديمية الصارمة والخبرة المعملية العملية لتعزيز الوضع الأمني للمؤسسات والدفاع ضد التهديدات السيبرانية المتطورة.",
        },
        contact: {
            title: "التواصل",
            intro:
                "منفتح للفرص في هندسة الأمن السيبراني، تحليل SOC، والبحث الأمني. دعنا نؤمن المستقبل معًا.",
            focusLabel: "التركيز الحالي",
            currentFocus:
                "تطوير تقنيات الكشف المتقدمة في CyberGuard، وتوسيع CyberThreatX إلى منصة SOC جاهزة للإنتاج، وتعزيز قدرات الاستطلاع الهجومي في ReconMaster — مع السعي للحصول على شهادة CompTIA Security+ للتحقق من الخبرة وفق المعايير الصناعية.",
        },
        focusAreas: [
            "أمن الشبكات",
            "تحليل التهديدات",
            "التدقيق الأمني",
            "الاستجابة للحوادث",
        ],
    },
} as const;
