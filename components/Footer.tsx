"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import VeloriaLogo from "./VeloriaLogo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "#contact" },
];

const social = [
  { icon: Twitter,  href: "#",                             label: "Twitter / X" },
  { icon: Linkedin, href: "#",                             label: "LinkedIn"     },
  { icon: Github,   href: "#",                             label: "GitHub"       },
  { icon: Mail,     href: "mailto:hello@veloria.solutions", label: "Email"       },
];

const legal = [
  { label: "Privacy Policy",  href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy",   href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#090909] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand block */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <VeloriaLogo />
            <p className="text-[#A1A1A1] text-sm leading-relaxed max-w-xs">
              Building intelligent digital solutions for modern businesses. Premium
              AI, automation, and scalable technology systems.
            </p>
            <div className="flex items-center gap-2.5">
              {social.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="p-2.5 rounded-full border border-white/[0.08] text-[#A1A1A1] hover:text-white hover:border-white/25 transition-all duration-200"
                >
                  <s.icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-[13px] tracking-widest uppercase mb-5 font-satoshi">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#A1A1A1] hover:text-white text-[13.5px] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold text-[13px] tracking-widest uppercase mb-5 font-satoshi">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="mailto:hello@veloria.solutions"
                className="text-[#A1A1A1] hover:text-white text-[13.5px] transition-colors"
              >
                hello@veloria.solutions
              </Link>
              <span className="text-[#A1A1A1] text-[13.5px]">veloria.solutions</span>
              <Link
                href="#contact"
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[12px] font-semibold tracking-wide rounded-full hover:bg-[#8DBBFF] transition-all duration-300 w-fit"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[#A1A1A1] text-[12px]">
            © {new Date().getFullYear()} Veloria Solutions. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[#A1A1A1] hover:text-white text-[12px] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
