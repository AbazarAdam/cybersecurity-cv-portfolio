"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

type NavLink = {
  readonly label: string;
  readonly href: string;
};

type NavbarProps = {
  links: readonly NavLink[];
  languageLabel: string;
  onLanguageToggle: () => void;
};

export default function Navbar({
  links,
  languageLabel,
  onLanguageToggle,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neon-blue/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="#top"
          className="font-display text-base font-bold tracking-[0.25em] text-neon-blue transition-all hover:text-neon-blue-bright sm:text-lg"
        >
          AA
        </Link>

        <nav className="hidden items-center gap-4 text-sm text-foreground-secondary lg:flex xl:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-hover font-medium transition-colors hover:text-neon-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <button
            type="button"
            className="hidden rounded-full border-2 border-neon-blue/40 px-4 py-2 text-xs font-bold text-neon-blue transition-all hover:border-neon-blue hover:bg-neon-blue/10 lg:inline-flex"
            onClick={onLanguageToggle}
            aria-label="Toggle language"
          >
            {languageLabel}
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neon-blue/20 bg-glass text-foreground-secondary backdrop-blur-md transition-all hover:border-neon-blue/40 hover:text-neon-blue lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        {open && (
          <div className="border-t border-neon-blue/10 bg-background/95 px-4 py-4 backdrop-blur-xl sm:px-6">
            <nav className="flex flex-col gap-3 text-sm text-foreground-secondary">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 font-medium transition-colors hover:bg-neon-blue/10 hover:text-neon-blue"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full border-2 border-neon-blue/40 px-4 py-2.5 text-xs font-bold text-neon-blue transition-all hover:border-neon-blue hover:bg-neon-blue/10"
                onClick={() => {
                  onLanguageToggle();
                  setOpen(false);
                }}
              >
                {languageLabel}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
