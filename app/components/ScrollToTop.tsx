"use client";

import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-neon-blue bg-background shadow-[0_0_15px_rgba(157,0,255,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(157,0,255,0.8)] focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUpIcon className="h-6 w-6 text-neon-blue" />
        </button>
    );
}
