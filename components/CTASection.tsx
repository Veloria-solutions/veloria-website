"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const badges = ["SOC 2 Compliant", "ISO 27001", "GDPR Ready"];

export default function CTASection() {
  return (
    <section id="contact" className="py-36 bg-[#0C0C0C] relative overflow-hidden">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(141,187,255,0.09) 0%, transparent 68%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8DBBFF]/20 bg-[#8DBBFF]/[0.05]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8DBBFF] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#8DBBFF]" />
            </span>
            <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
              Get Started Today
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-[58px] lg:text-[68px] font-black leading-[1.0] tracking-tight font-satoshi">
            Transform Your Business
            <br />
            <span className="gradient-text">With Intelligent Technology.</span>
          </h2>

          {/* Body */}
          <p className="text-[#A1A1A1] text-lg max-w-xl leading-relaxed">
            Join the growing number of enterprises trusting Veloria Solutions to
            power their digital future — from first concept to global scale.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="mailto:hello@veloria.solutions"
              className="group flex items-center gap-2.5 px-8 py-4 bg-white text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-[#8DBBFF] hover:scale-[1.04] transition-all duration-300 shadow-2xl shadow-white/10"
            >
              <Mail size={15} />
              Schedule a Consultation
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 border border-white/14 text-white text-[13.5px] font-medium tracking-wide rounded-full hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-2">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#8DBBFF]" />
                <span className="text-[#A1A1A1] text-[12px] tracking-wider">{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
