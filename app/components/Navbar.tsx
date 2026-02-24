"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import { cn } from "@/lib/utils";

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-neon-blue/15 bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo */}
        <Link
          href="#top"
          className="group relative font-display text-lg font-bold tracking-[0.3em] text-neon-blue transition-all hover:text-neon-blue-bright sm:text-xl"
        >
          <span className="relative z-10">AA</span>
          <span className="absolute inset-0 -z-10 rounded-lg bg-neon-blue/5 opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-3 py-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-neon-blue group"
            >
              {link.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-neon-blue transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          {/* Desktop Language Toggle */}
          <button
            type="button"
            className="hidden rounded-full border-2 border-neon-blue/30 px-4 py-1.5 text-xs font-bold text-neon-blue transition-all hover:border-neon-blue hover:bg-neon-blue/10 hover:shadow-md hover:shadow-neon-glow lg:inline-flex"
            onClick={onLanguageToggle}
            aria-label="Toggle language"
          >
            {languageLabel}
          </button>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neon-blue/20 bg-glass text-foreground-secondary backdrop-blur-md transition-all hover:border-neon-blue/40 hover:text-neon-blue"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="top" className="px-6 pb-8 pt-14">
                <nav className="flex flex-col gap-1">
                  {links.map((link) => (
                    <SheetClose
                      key={link.href}
                      className="w-full text-left"
                      onClick={() => {
                        // Scroll to the anchor
                        const el = document.querySelector(link.href);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      <span className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-foreground-secondary transition-all hover:bg-neon-blue/10 hover:text-neon-blue hover:translate-x-1">
                        {link.label}
                      </span>
                    </SheetClose>
                  ))}
                  <div className="mt-4 border-t border-neon-blue/10 pt-4">
                    <SheetClose className="w-full" onClick={onLanguageToggle}>
                      <span className="flex items-center justify-center rounded-full border-2 border-neon-blue/30 px-4 py-2.5 text-xs font-bold text-neon-blue transition-all hover:border-neon-blue hover:bg-neon-blue/10">
                        {languageLabel}
                      </span>
                    </SheetClose>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
