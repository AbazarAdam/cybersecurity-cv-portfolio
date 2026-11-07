import type { Metadata } from "next";
import { Cairo, Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Abazar Adam | Software & Cybersecurity Engineering",
  description:
    "Abazar Adam is a software and cybersecurity engineer building full-stack, mobile, and secure engineering solutions.",
  openGraph: {
    title: "Abazar Adam | Software & Cybersecurity Engineering",
    description:
      "Abazar Adam is a software and cybersecurity engineer building full-stack, mobile, and secure engineering solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abazar Adam | Software & Cybersecurity Engineering",
    description:
      "Abazar Adam is a software and cybersecurity engineer building full-stack, mobile, and secure engineering solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${orbitron.variable} ${jetBrainsMono.variable} ${cairo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
