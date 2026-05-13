import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veloria Solutions — Premium AI & Technology Systems",
  description:
    "Veloria Solutions delivers premium AI, automation, and scalable technology systems for modern businesses.",
  keywords: ["AI", "automation", "software", "cloud", "cybersecurity", "consulting"],
  authors: [{ name: "Veloria Solutions" }],
  creator: "Veloria Solutions",
  openGraph: {
    title: "Veloria Solutions — Premium AI & Technology Systems",
    description: "Building intelligent digital solutions for modern businesses.",
    url: "https://veloria.solutions",
    siteName: "Veloria Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veloria Solutions",
    description: "Building intelligent digital solutions for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,800,700,500,400&f[]=general-sans@700,600,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans bg-[#090909] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
