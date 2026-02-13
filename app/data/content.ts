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
                        "Security Monitoring (SIEM)",
                        "Endpoint Hardening",
                        "Incident Response",
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
                        "Nmap / Wireshark",
                        "Metasploit Framework",
                        "Splunk / QRadar",
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
                    skills: ["AWS Fundamentals", "Docker Containers", "Git Version Control", "CI/CD Concepts"],
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
                    title: "CyberGuardX – Project Lead & Developer",
                    description:
                        "Intelligent Web Security Assessment Platform designed to simulate real-world security audits and compliance checks.",
                    highlights: [
                        "Developed an Email Breach Detection module cross-referencing known leak datasets.",
                        "Implemented ML-based Phishing URL Detection to identify malicious links in real-time.",
                        "Engineered a Password Strength Analyzer with entropy calculation and breach database integration.",
                        "Built a Website Security Scanner for OWASP Top 10 vulnerabilities with automated risk scoring.",
                        "Integrated comprehensive reporting and clean remediation guidance for non-technical users.",
                    ],
                },
                {
                    title: "EvoTech – Founder & Technical Lead",
                    description:
                        "Founded and scaled a tech services firm delivering secure web solutions and IT infrastructure to over 50 clients.",
                    highlights: [
                        "Directed security-focused development lifecycles, reducing client vulnerability exposure.",
                        "Mitigated active phishing campaigns and social engineering attacks for business clients.",
                        "Managed cross-functional remote teams to deliver projects on time and within budget.",
                    ],
                },
                {
                    title: "AI Assistant Development – EvoTech",
                    description:
                        "Architected an internal AI-driven automation tool to streamline technical support and operational workflows.",
                    highlights: [
                        "Engineered automated response workflows, reducing manual support ticket resolution time by 40%.",
                        "Integrated secure API endpoints to ensure data privacy and system integrity.",
                    ],
                },
                {
                    title: "Security Research & Lab Simulation",
                    description:
                        "Continuous engagement in advanced security simulations, CTFs, and Red Team exercises.",
                    highlights: [
                        "Conducted simulated penetration tests on controlled environments using Metasploit and Burp Suite.",
                        "Analyzed network traffic patterns using Wireshark to detect anomalous behavior.",
                        "Performed OSINT investigations to map attack surfaces and identify information leaks.",
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
                "Enhancing CyberGuardX with advanced threat heuristics and preparing for the CompTIA Security+ certification to further validate industry-standard expertise.",
        },
        focusAreas: [
            "Penetration Testing",
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
                        "المراقبة الأمنية (SIEM)",
                        "تقوية الأنظمة الطرفية",
                        "الاستجابة للحوادث",
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
                        "Nmap / Wireshark",
                        "Metasploit Framework",
                        "Splunk / QRadar",
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
                    skills: ["أساسيات AWS", "حاويات Docker", "إدارة النسخ Git", "مفاهيم CI/CD"],
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
                    title: "CyberGuardX – قائد المشروع والمطور",
                    description:
                        "منصة ذكية لتقييم أمن الويب مصممة لمحاكاة التدقيقات الأمنية الواقعية وفحوصات الامتثال.",
                    highlights: [
                        "تطوير وحدة للكشف عن اختراق البريد الإلكتروني عبر مقارنة قواعد بيانات التسريب المعروفة.",
                        "تنفيذ كشف عناوين URL للتصيد باستخدام التعلم الآلي لتحديد الروابط الضارة في الوقت الفعلي.",
                        "هندسة محلل قوة كلمات المرور مع حساب الإنتروبيا والتكامل مع قواعد بيانات الاختراق.",
                        "بناء ماسح أمني للمواقع لثغرات OWASP Top 10 مع تسجيل آلي للمخاطر.",
                        "تكامل تقارير شاملة وإرشادات معالجة واضحة للمستخدمين غير التقنيين.",
                    ],
                },
                {
                    title: "EvoTech – المؤسس والقائد التقني",
                    description:
                        "تأسيس وتوسيع شركة خدمات تقنية تقدم حلول ويب آمنة وبنية تحتية لتقنية المعلومات لأكثر من 50 عميلًا.",
                    highlights: [
                        "توجيه دورات حياة التطوير التي تركز على الأمن، مما قلل من تعرض العملاء للثغرات.",
                        "التخفيف من حملات التصيد النشطة وهجمات الهندسة الاجتماعية لعملاء الأعمال.",
                        "إدارة فرق عمل عن بعد متعددة الوظائف لتسليم المشاريع في الوقت المحدد وضمن الميزانية.",
                    ],
                },
                {
                    title: "تطوير مساعد ذكاء اصطناعي – EvoTech",
                    description:
                        "هندسة أداة أتمتة مدعومة بالذكاء الاصطناعي لتبسيط الدعم الفني وسير العمل التشغيلي.",
                    highlights: [
                        "هندسة سير عمل الاستجابة الآلية، مما قلل وقت حل تذاكر الدعم اليدوية بنسبة 40%.",
                        "دمج نقاط اتصال API آمنة لضمان خصوصية البيانات وسلامة النظام.",
                    ],
                },
                {
                    title: "البحث الأمني والمحاكاة المختبرية",
                    description:
                        "انخراط مستمر في عمليات محاكاة أمنية متقدمة، مسابقات CTF، وتمارين الفريق الأحمر.",
                    highlights: [
                        "إجراء اختبارات اختراق محاكاة على بيئات خاضعة للرقابة باستخدام Metasploit و Burp Suite.",
                        "تحليل أنماط حركة الشبكة باستخدام Wireshark للكشف عن السلوك الشاذ.",
                        "تنفيذ تحقيقات OSINT لرسم خرائط أسطح الهجوم وتحديد تسرب المعلومات.",
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
                "تعزيز CyberGuardX بتقنيات كشف تهديد متقدمة والتحضير لشهادة CompTIA Security+ للتحقق من الخبرة وفق المعايير الصناعية.",
        },
        focusAreas: [
            "اختبار الاختراق",
            "أمن الشبكات",
            "تحليل التهديدات",
            "التدقيق الأمني",
            "الاستجابة للحوادث",
        ],
    },
} as const;
