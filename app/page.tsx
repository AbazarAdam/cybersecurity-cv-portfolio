"use client";

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
import Image from "next/image";
import { useState } from "react";
import CyberBackground from "./components/CyberBackground";
import EarthPlanet from "./components/EarthPlanet";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import SectionReveal from "./components/SectionReveal";
import CertificatesCarousel from "./components/CertificatesCarousel";

import { badges, certifications, copy } from "./data/content";
export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const isArabic = lang === "ar";
  const t = copy[lang];
  const sectionTitleClass = `section-title ${isArabic ? "tracking-normal" : ""
    }`;

  return (
    <div
      id="top"
      dir={isArabic ? "rtl" : "ltr"}
      className={`min-h-screen overflow-x-hidden ${isArabic ? "text-right font-arabic" : "text-left"}`}
    >
      <CyberBackground />
      <ScrollProgress />
      <Navbar
        links={t.navLinks}
        languageLabel={isArabic ? "EN" : "AR"}
        onLanguageToggle={() => setLang(isArabic ? "en" : "ar")}
      />

      <main className="relative overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative w-full max-w-[100vw] overflow-hidden pb-10 pt-8 sm:pb-12 sm:pt-16">
          <EarthPlanet />
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 relative z-10">
            <SectionReveal className={`space-y-3 sm:space-y-6 text-center ${isArabic ? "lg:text-right" : "lg:text-left"} items-center ${isArabic ? "lg:items-end" : "lg:items-start"} flex flex-col w-full`}>
              <p
                className={`text-[10px] sm:text-xs font-bold uppercase text-neon-blue w-full break-words ${isArabic ? "tracking-normal" : "tracking-wider sm:tracking-[0.5em]"
                  }`}
              >
                {t.hero.kicker}
              </p>
              <div className="space-y-2 sm:space-y-3 w-full">
                <h1 className="font-display text-2xl font-black leading-tight text-foreground sm:text-4xl md:text-5xl">
                  {isArabic ? "اباذر ادم" : "Abazar Adam"}
                </h1>
                <p className="text-sm font-semibold text-neon-blue sm:text-lg">{t.hero.title}</p>
              </div>
              <p className="relative z-10 w-full max-w-[calc(100vw-2.5rem)] break-words text-xs sm:text-sm leading-relaxed text-foreground-secondary sm:text-base px-1">
                {t.hero.summary}
              </p>
              <div className="max-w-full overflow-hidden text-[10px] sm:text-sm w-full">
                <span
                  className={`typewriter ${isArabic ? "typewriter-rtl" : ""} inline-block max-w-full break-words whitespace-pre-wrap`}
                >
                  {t.hero.typewriter}
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4 w-full justify-center lg:justify-start">
                <a
                  className="btn-primary inline-flex items-center justify-center gap-2 text-xs sm:text-sm w-auto min-w-[120px] px-6"
                  href="/certificates/mycv.pdf"
                  target="_blank"
                >
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  {isArabic ? "عرض السيرة الذاتية" : "View CV"}
                </a>
                <a
                  className="btn-secondary inline-flex items-center justify-center gap-2 text-xs sm:text-sm w-auto min-w-[120px] px-6"
                  href="#contact"
                >
                  <EnvelopeIcon className="h-4 w-4" />
                  {t.hero.ctaContact}
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 text-xs text-foreground-secondary sm:flex-row sm:flex-wrap sm:gap-4 sm:text-sm w-full justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-neon-blue/20 bg-glass px-3 py-2 backdrop-blur-sm sm:px-4">
                  <EnvelopeIcon className="h-4 w-4 text-neon-blue" />
                  abazeradamwork@gmail.com
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-neon-blue/20 bg-glass px-3 py-2 backdrop-blur-sm sm:px-4">
                  <PhoneIcon className="h-4 w-4 text-neon-blue" />
                  <span dir="ltr">+60 11-2888 5466</span>
                </span>
              </div>
            </SectionReveal>

            <SectionReveal className="glass-card float-slow self-center lg:self-start rounded-2xl border border-neon-blue/20 p-5 sm:rounded-3xl sm:p-6 w-full max-w-sm lg:max-w-none">
              <div className={`flex items-center gap-3 text-neon-blue justify-center ${isArabic ? "lg:justify-start" : "lg:justify-start"}`}>
                <CpuChipIcon className="h-5 w-5" />
                <p
                  className={`font-display text-xs font-bold uppercase sm:text-sm ${isArabic ? "tracking-normal" : "tracking-[0.15em] sm:tracking-[0.2em]"
                    }`}
                >
                  {t.profile.title}
                </p>
              </div>
              <div className={`mt-5 space-y-3 text-xs text-foreground-secondary sm:mt-6 sm:space-y-4 sm:text-sm text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}>
                {t.profile.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className={`mt-5 flex flex-wrap gap-2 sm:mt-6 justify-center ${isArabic ? "lg:justify-start" : "lg:justify-start"}`}>
                {t.profile.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-10 sm:py-12">
          <SectionReveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="flex items-center justify-center gap-3 text-neon-blue lg:justify-start">
              <SparklesIcon className="h-6 w-6" />
              <p className={sectionTitleClass}>{t.about.title}</p>
            </div>
            <div className={`mt-5 grid gap-6 sm:mt-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}>
              <p className="text-sm leading-relaxed text-foreground-secondary sm:text-base">
                {t.about.body}
              </p>
              <div className="glass-card rounded-xl p-5 sm:rounded-2xl sm:p-6">
                <p
                  className={`font-display text-xs font-bold uppercase text-neon-blue sm:text-sm ${isArabic ? "tracking-normal" : "tracking-[0.15em] sm:tracking-[0.2em]"
                    }`}
                >
                  {t.about.focusLabel}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                  {t.focusAreas.map((focus) => (
                    <span key={focus} className="tag">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* Education Section */}
        <section id="education" className="py-10 sm:py-12">
          <SectionReveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="flex items-center justify-center gap-3 text-neon-blue lg:justify-start">
              <AcademicCapIcon className="h-6 w-6" />
              <p className={sectionTitleClass}>{t.education.title}</p>
            </div>
            <div className="mt-5 grid gap-4 sm:mt-6 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className={`glass-card rounded-xl p-5 sm:rounded-2xl sm:p-6 text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}>
                <h3 className="font-display text-base font-bold text-foreground sm:text-xl">
                  {t.education.degree}
                </h3>
                <p className="mt-2 text-xs text-foreground-secondary sm:text-sm">
                  {t.education.school}
                </p>
                <p className="mt-3 text-xs font-semibold text-neon-blue sm:mt-4 sm:text-sm">
                  {t.education.award}
                </p>
              </div>
              <div className={`glass-card rounded-xl p-5 sm:rounded-2xl sm:p-6 text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}>
                <p
                  className={`font-display text-xs font-bold uppercase text-neon-blue sm:text-sm ${isArabic ? "tracking-normal" : "tracking-[0.15em] sm:tracking-[0.2em]"
                    }`}
                >
                  {t.education.focusLabel}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                  {t.focusAreas.map((focus) => (
                    <span key={focus} className="tag">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-10 sm:py-12">
          <SectionReveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="flex items-center justify-center gap-3 text-neon-blue lg:justify-start">
              <ShieldCheckIcon className="h-6 w-6" />
              <p className={sectionTitleClass}>{t.certifications.title}</p>
            </div>
            <p className={`mt-3 max-w-3xl text-xs text-foreground-secondary sm:mt-4 sm:text-sm text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}>
              {t.certifications.description}
            </p>
            <div className="mt-8" dir="ltr">
              <CertificatesCarousel />
            </div>
            <p className={`mt-4 text-xs text-foreground-secondary sm:mt-6 sm:text-sm text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}>
              {t.certifications.inProgress}
            </p>
          </SectionReveal>
        </section>

        {/* Badges Section */}
        <section id="badges" className="py-10 sm:py-12">
          <SectionReveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="flex items-center justify-center gap-3 text-neon-blue lg:justify-start">
              <TrophyIcon className="h-6 w-6" />
              <p className={sectionTitleClass}>{t.badges.title}</p>
            </div>
            <p className={`mt-3 max-w-3xl text-xs text-foreground-secondary sm:mt-4 sm:text-sm text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}>
              {t.badges.description}
            </p>

            {/* Badges Gallery */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {badges.map((badge) => (
                <div
                  key={badge.title}
                  className="glass-card rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center group badge-item"
                >
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28">
                    <Image
                      src={badge.image}
                      alt={badge.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 text-[10px] sm:text-xs text-center font-medium text-foreground-secondary group-hover:text-neon-blue transition-colors">
                    {badge.title}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-10 sm:py-12">
          <SectionReveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="flex items-center justify-center gap-3 text-neon-blue lg:justify-start">
              <CpuChipIcon className="h-6 w-6" />
              <p className={sectionTitleClass}>{t.skills.title}</p>
            </div>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">
              {t.skills.groups.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title}
                    className={`glass-card rounded-xl p-5 transition-all hover:-translate-y-1 hover:border-neon-blue/40 sm:rounded-2xl sm:p-6 text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}
                  >
                    <div className={`flex items-center gap-3 text-neon-blue justify-center ${isArabic ? "lg:justify-start" : "lg:justify-start"}`}>
                      <Icon className="h-5 w-5" />
                      <h3 className="font-display text-sm font-bold text-foreground sm:text-base">
                        {group.title}
                      </h3>
                    </div>
                    <div className={`mt-3 flex flex-wrap gap-2 sm:mt-4 justify-center ${isArabic ? "lg:justify-start" : "lg:justify-start"}`}>
                      {group.skills.map((skill) => (
                        <span key={skill} className="tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionReveal>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-10 sm:py-12">
          <SectionReveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="flex items-center justify-center gap-3 text-neon-blue lg:justify-start">
              <CommandLineIcon className="h-6 w-6" />
              <p className={sectionTitleClass}>{t.experience.title}</p>
            </div>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.experience.items.map((exp) => (
                <div
                  key={exp.title}
                  className="glass-card flex h-full flex-col rounded-xl p-5 transition-all hover:-translate-y-1 hover:border-neon-blue/40 sm:rounded-2xl sm:p-6"
                >
                  <h3 className="font-display text-sm font-bold text-foreground sm:text-lg">
                    {exp.title}
                  </h3>
                  <p className="mt-2 text-xs text-foreground-secondary sm:mt-3 sm:text-sm">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-col gap-1.5 text-xs text-foreground-secondary sm:mt-4 sm:gap-2">
                    {exp.highlights.map((highlight) => (
                      <span key={highlight} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neon-blue" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </section>

        {/* Languages Section */}
        <section id="languages" className="py-10 sm:py-12">
          <SectionReveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="flex items-center justify-center gap-3 text-neon-blue lg:justify-start">
              <SparklesIcon className="h-6 w-6" />
              <p className={sectionTitleClass}>{t.languages.title}</p>
            </div>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="glass-card rounded-xl p-5 sm:rounded-2xl sm:p-6">
                <p
                  className={`font-display text-xs font-bold uppercase text-neon-blue sm:text-sm ${isArabic ? "tracking-normal" : "tracking-[0.15em] sm:tracking-[0.2em]"
                    }`}
                >
                  {t.languages.languagesLabel}
                </p>
                <div className="mt-3 space-y-2 text-xs text-foreground-secondary sm:mt-4 sm:space-y-3 sm:text-sm">
                  {t.languages.list.map((language) => (
                    <div
                      key={language.label}
                      className="flex items-center justify-between"
                    >
                      <span className="font-medium">{language.label}</span>
                      <span className="text-muted">{language.level}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-xl p-5 sm:rounded-2xl sm:p-6">
                <p
                  className={`font-display text-xs font-bold uppercase text-neon-blue sm:text-sm ${isArabic ? "tracking-normal" : "tracking-[0.15em] sm:tracking-[0.2em]"
                    }`}
                >
                  {t.languages.softSkillsLabel}
                </p>
                <div className={`mt-3 flex flex-wrap gap-2 sm:mt-4 justify-center ${isArabic ? "lg:justify-start" : "lg:justify-start"}`}>
                  {t.languages.softSkills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* Objective Section */}
        <section id="objective" className="py-10 sm:py-12">
          <SectionReveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="glass-card scan-line rounded-2xl p-6 text-center sm:rounded-3xl sm:p-8">
              <p
                className={`font-display text-xs font-bold uppercase text-neon-blue sm:text-sm ${isArabic ? "tracking-normal" : "tracking-[0.2em] sm:tracking-[0.3em]"
                  }`}
              >
                {t.objective.title}
              </p>
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-foreground-secondary sm:mt-4 sm:text-lg">
                {t.objective.text}
              </p>
            </div>
          </SectionReveal>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-10 pb-16 sm:py-12 sm:pb-20">
          <SectionReveal className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className={`flex items-center justify-center gap-3 text-neon-blue lg:justify-start`}>
              <EnvelopeIcon className="h-6 w-6" />
              <p className={sectionTitleClass}>{t.contact.title}</p>
            </div>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className={`glass-card rounded-xl p-5 sm:rounded-2xl sm:p-6 text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}>
                <p className="text-sm text-foreground-secondary sm:text-base">{t.contact.intro}</p>
                <div className={`mt-4 space-y-2 text-xs text-foreground-secondary sm:mt-6 sm:space-y-3 sm:text-sm flex flex-col items-center ${isArabic ? "lg:items-start" : "lg:items-start"}`}>
                  <a
                    href="mailto:abazeradamwork@gmail.com"
                    className="flex items-center gap-3 rounded-lg p-2 transition-all hover:bg-neon-blue/10 hover:text-neon-blue"
                  >
                    <EnvelopeIcon className="h-5 w-5 text-neon-blue" />
                    abazeradamwork@gmail.com
                  </a>
                  <a
                    href="tel:+601128885466"
                    className="flex items-center gap-3 rounded-lg p-2 transition-all hover:bg-neon-blue/10 hover:text-neon-blue"
                  >
                    <PhoneIcon className="h-5 w-5 text-neon-blue" />
                    <span dir="ltr">+60 11-2888 5466</span>
                  </a>
                </div>
              </div>
              <div className={`glass-card rounded-xl p-5 sm:rounded-2xl sm:p-6 text-center ${isArabic ? "lg:text-right" : "lg:text-left"}`}>
                <p
                  className={`font-display text-xs font-bold uppercase text-neon-blue sm:text-sm ${isArabic ? "tracking-normal" : "tracking-[0.15em] sm:tracking-[0.2em]"
                    }`}
                >
                  {t.contact.focusLabel}
                </p>
                <p className="mt-3 text-xs text-foreground-secondary sm:mt-4 sm:text-sm">
                  {t.contact.currentFocus}
                </p>
              </div>
            </div>
          </SectionReveal>
        </section>
      </main>
    </div>
  );
}
