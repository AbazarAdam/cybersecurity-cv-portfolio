"use client";

import { useEffect, useRef, useState } from "react";

/**
 * HeroBackground — Animated gradient mesh with floating glow orbs.
 *
 * • GPU-accelerated (will-change: transform, CSS animations only)
 * • Colors derived from CSS custom properties (--neon-blue, --neon-blue-dim)
 * • Dark / light mode aware
 * • No heavy libs — pure CSS + minimal JS for mount guard
 * • Responsive & performant (60 fps)
 */
export default function HeroBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="hero-bg-container" aria-hidden="true">
            {/* Gradient mesh base */}
            <div className="hero-mesh" />

            {/* Floating orbs */}
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />
            <div className="hero-orb hero-orb-3" />
            <div className="hero-orb hero-orb-4" />

            {/* Subtle grid overlay */}
            <div className="hero-grid" />

            {/* Scan line */}
            <div className="hero-scanline" />

            <style jsx>{`
        .hero-bg-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        /* ---- Gradient Mesh ---- */
        .hero-mesh {
          position: absolute;
          inset: -50%;
          width: 200%;
          height: 200%;
          background:
            radial-gradient(ellipse 60% 50% at 20% 30%, rgba(157, 0, 255, 0.12), transparent 60%),
            radial-gradient(ellipse 50% 60% at 80% 70%, rgba(91, 0, 153, 0.10), transparent 60%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(213, 128, 255, 0.05), transparent 50%);
          animation: meshDrift 20s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes meshDrift {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          100% {
            transform: translate3d(-3%, 2%, 0) rotate(2deg);
          }
        }

        /* ---- Floating Orbs ---- */
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          will-change: transform, opacity;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .hero-orb-1 {
          width: clamp(200px, 30vw, 450px);
          height: clamp(200px, 30vw, 450px);
          background: radial-gradient(circle, rgba(157, 0, 255, 0.3), transparent 70%);
          top: -10%;
          left: -5%;
          animation: orbFloat1 12s ease-in-out infinite, orbFadeIn 1s 0.2s ease forwards;
        }

        .hero-orb-2 {
          width: clamp(180px, 25vw, 380px);
          height: clamp(180px, 25vw, 380px);
          background: radial-gradient(circle, rgba(91, 0, 153, 0.25), transparent 70%);
          bottom: -5%;
          right: -8%;
          animation: orbFloat2 15s ease-in-out infinite, orbFadeIn 1s 0.4s ease forwards;
        }

        .hero-orb-3 {
          width: clamp(120px, 18vw, 280px);
          height: clamp(120px, 18vw, 280px);
          background: radial-gradient(circle, rgba(213, 128, 255, 0.15), transparent 70%);
          top: 40%;
          right: 15%;
          animation: orbFloat3 18s ease-in-out infinite, orbFadeIn 1s 0.6s ease forwards;
        }

        .hero-orb-4 {
          width: clamp(100px, 15vw, 220px);
          height: clamp(100px, 15vw, 220px);
          background: radial-gradient(circle, rgba(157, 0, 255, 0.18), transparent 70%);
          bottom: 20%;
          left: 20%;
          animation: orbFloat4 14s ease-in-out infinite, orbFadeIn 1s 0.8s ease forwards;
        }

        @keyframes orbFadeIn {
          to { opacity: 1; }
        }

        @keyframes orbFloat1 {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% {
            transform: translate3d(30px, 20px, 0) scale(1.05);
          }
          66% {
            transform: translate3d(-15px, 35px, 0) scale(0.97);
          }
        }

        @keyframes orbFloat2 {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% {
            transform: translate3d(-25px, -15px, 0) scale(1.03);
          }
          66% {
            transform: translate3d(20px, -30px, 0) scale(0.96);
          }
        }

        @keyframes orbFloat3 {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-20px, 25px, 0) scale(1.08);
          }
        }

        @keyframes orbFloat4 {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(15px, -20px, 0) scale(1.04);
          }
        }

        /* ---- Subtle Grid ---- */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(157, 0, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(157, 0, 255, 0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 70%);
          opacity: 0.6;
        }

        /* ---- Scan Line ---- */
        .hero-scanline {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 49%,
            rgba(157, 0, 255, 0.06) 50%,
            transparent 51%,
            transparent 100%
          );
          background-size: 100% 6px;
          animation: scanScroll 8s linear infinite;
          opacity: 0.4;
        }

        @keyframes scanScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, 6px, 0);
          }
        }

        /* ---- Light Mode Adjustments ---- */
        :global(.light) .hero-mesh {
          background:
            radial-gradient(ellipse 60% 50% at 20% 30%, rgba(124, 58, 237, 0.08), transparent 60%),
            radial-gradient(ellipse 50% 60% at 80% 70%, rgba(91, 33, 182, 0.06), transparent 60%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(167, 139, 250, 0.04), transparent 50%);
        }

        :global(.light) .hero-orb-1 {
          background: radial-gradient(circle, rgba(124, 58, 237, 0.15), transparent 70%);
        }

        :global(.light) .hero-orb-2 {
          background: radial-gradient(circle, rgba(91, 33, 182, 0.12), transparent 70%);
        }

        :global(.light) .hero-orb-3 {
          background: radial-gradient(circle, rgba(167, 139, 250, 0.10), transparent 70%);
        }

        :global(.light) .hero-orb-4 {
          background: radial-gradient(circle, rgba(124, 58, 237, 0.10), transparent 70%);
        }

        :global(.light) .hero-grid {
          background-image:
            linear-gradient(rgba(124, 58, 237, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.05) 1px, transparent 1px);
        }

        :global(.light) .hero-scanline {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 49%,
            rgba(124, 58, 237, 0.04) 50%,
            transparent 51%,
            transparent 100%
          );
        }

        /* ---- Mobile scale-down ---- */
        @media (max-width: 640px) {
          .hero-orb {
            filter: blur(60px);
          }
        }
      `}</style>
        </div>
    );
}
