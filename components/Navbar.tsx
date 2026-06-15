"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import VeloriaLogo from "./VeloriaLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#090909]/80 backdrop-blur-2xl border-b border-white/[0.06] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo + agency label */}
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Veloria Solutions Home">
            <VeloriaLogo />
          </Link>
          <div className="hidden md:flex items-center gap-3">
            <div className="w-px h-4 bg-white/[0.12]" />
            <span className="text-[#555] text-[11px] tracking-[0.18em] uppercase">AI Automation Agency</span>
          </div>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#A1A1A1] hover:text-white text-[13.5px] tracking-wider transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#8DBBFF] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-white text-black text-[13px] font-semibold tracking-wide rounded-full hover:bg-[#8DBBFF] hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-white/5"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0C0C0C]/95 backdrop-blur-xl border-t border-white/[0.06]"
          >
            <div className="px-6 py-7 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[#A1A1A1] hover:text-white text-base tracking-wider transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 text-center px-5 py-3 bg-white text-black text-sm font-semibold tracking-wide rounded-full"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
