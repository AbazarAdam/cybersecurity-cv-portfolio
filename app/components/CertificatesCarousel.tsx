"use client";

import { certifications } from "@/app/data/content";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function CertificatesCarousel() {
    // Split certifications into two rows
    const midPoint = Math.ceil(certifications.length / 2);
    const row1 = certifications.slice(0, midPoint);
    const row2 = certifications.slice(midPoint);

    return (
        <div className="w-full space-y-8 overflow-hidden py-4">
            {/* Row 1 - Scrolls Left */}
            <div className="w-full overflow-hidden">
                <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
                    {[...row1, ...row1].map((cert, index) => (
                        <CertificateCard key={`${cert.title}-${index}-row1`} cert={cert} />
                    ))}
                </div>
            </div>

            {/* Row 2 - Scrolls Right */}
            <div className="w-full overflow-hidden">
                <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
                    {[...row2, ...row2].map((cert, index) => (
                        <CertificateCard key={`${cert.title}-${index}-row2`} cert={cert} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function CertificateCard({ cert }: { cert: (typeof certifications)[0] }) {
    return (
        <div className="mr-6 flex w-[260px] flex-shrink-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-glass p-5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-neon-blue/50 hover:shadow-[0_0_20px_rgba(0,191,255,0.15)] group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="mb-4">
                    <h3 className="font-display text-sm font-bold leading-tight text-foreground group-hover:text-neon-blue">
                        {cert.title}
                    </h3>
                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted group-hover:text-foreground-secondary">
                        {cert.issuer}
                    </p>
                </div>

                <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-neon-blue hover:text-black group-hover:border-neon-blue/50"
                >
                    <span>View Certificate</span>
                    <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
                </a>
            </div>
        </div>
    );
}
