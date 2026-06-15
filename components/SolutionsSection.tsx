"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Globe } from "lucide-react";
import Link from "next/link";

/* ── Website preview mockup ─────────────────────────────── */
function WebsiteMockup({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl bg-[#181818] border border-[#242424] overflow-hidden group cursor-default"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(141,187,255,0.06) 0%, transparent 55%)" }}
      />

      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#242424]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/70" />
        <div className="ml-3 flex-1 h-5 rounded-full bg-white/[0.05] flex items-center px-3 gap-1.5">
          <Globe size={8} className="text-white/20" />
          <div className="w-24 h-1.5 rounded-full bg-white/[0.08]" />
        </div>
      </div>

      {/* Page content */}
      <div className="p-5 flex flex-col gap-4">
        {/* Nav */}
        <div className="flex items-center justify-between">
          <div className="w-16 h-3 rounded-full bg-white/[0.15]" />
          <div className="flex items-center gap-3">
            {[40, 32, 28, 36].map((w, i) => (
              <div key={i} className="h-2 rounded-full bg-white/[0.07]" style={{ width: w }} />
            ))}
            <div className="w-16 h-6 rounded-full bg-[#8DBBFF]/20 border border-[#8DBBFF]/30" />
          </div>
        </div>

        {/* Hero area */}
        <div className="rounded-xl bg-[#111] p-6 flex flex-col gap-3">
          <div className="w-2/3 h-5 rounded-full bg-white/[0.15]" />
          <div className="w-5/6 h-3.5 rounded-full bg-white/[0.08]" />
          <div className="w-4/6 h-3.5 rounded-full bg-white/[0.05]" />
          <div className="mt-2 flex gap-3">
            <div className="w-24 h-8 rounded-full bg-[#8DBBFF]/30 border border-[#8DBBFF]/40" />
            <div className="w-24 h-8 rounded-full bg-white/[0.05] border border-white/10" />
          </div>
        </div>

        {/* Card row */}
        <div className="grid grid-cols-3 gap-3">
          {["#8DBBFF", "#A78BFA", "#34D399"].map((color, i) => (
            <div key={i} className="rounded-xl bg-[#111] p-3 flex flex-col gap-2">
              <div className="w-6 h-6 rounded-lg" style={{ background: `${color}22`, border: `1px solid ${color}33` }} />
              <div className="h-2 rounded-full bg-white/[0.12]" />
              <div className="h-1.5 rounded-full bg-white/[0.06]" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Chatbot mockup ─────────────────────────────────────── */
function ChatbotMockup({ delay = 0 }: { delay?: number }) {
  const messages = [
    { from: "user", text: "Hi, do you have availability this Friday?" },
    { from: "bot",  text: "Yes! We have slots at 10:00, 14:00, and 16:30. Which works best for you?" },
    { from: "user", text: "14:00 please." },
    { from: "bot",  text: "Perfect — booking confirmed for Friday at 14:00. You'll receive a confirmation email shortly." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl bg-[#181818] border border-[#242424] overflow-hidden group cursor-default"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(141,187,255,0.06) 0%, transparent 55%)" }}
      />

      {/* Chat header */}
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-[#242424]">
        <div className="w-8 h-8 rounded-full bg-[#8DBBFF]/20 border border-[#8DBBFF]/30 flex items-center justify-center">
          <Bot size={14} className="text-[#8DBBFF]" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-white text-[12px] font-semibold">Veloria Assistant</div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-[#A1A1A1]">Online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="p-5 flex flex-col gap-3">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.from === "user" ? 10 : -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3 + i * 0.12 }}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-[11px] leading-relaxed ${
                msg.from === "user"
                  ? "bg-[#8DBBFF]/20 text-white rounded-tr-sm"
                  : "bg-[#111] text-[#C1C1C1] border border-white/[0.06] rounded-tl-sm"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {/* Quick-reply chips */}
        <div className="flex flex-wrap gap-2 mt-1">
          {["View services", "Get a quote", "Talk to us"].map((chip) => (
            <div
              key={chip}
              className="px-3 py-1 rounded-full border border-[#8DBBFF]/20 bg-[#8DBBFF]/[0.05] text-[#8DBBFF] text-[10px]"
            >
              {chip}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="mt-1 flex items-center gap-2 rounded-xl bg-[#111] border border-white/[0.06] px-3 py-2">
          <div className="flex-1 h-2 rounded-full bg-white/[0.06]" />
          <div className="w-6 h-6 rounded-full bg-[#8DBBFF]/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#8DBBFF]/60" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────── */
const solutions = [
  {
    tag: "Web Design",
    title: "Website Design & Development",
    desc: "Custom, mobile-ready websites built to convert visitors into customers — from landing pages to full multi-page sites.",
    href: "/services/websites",
    Mockup: WebsiteMockup,
  },
  {
    tag: "Chatbot & Automation",
    title: "Chatbot & Automation Suite",
    desc: "AI-powered chat that handles enquiries, qualifies leads, and books appointments automatically — 24 hours a day.",
    href: "/services/chatbot",
    Mockup: ChatbotMockup,
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-7">
            <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
              Featured Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-[58px] font-black leading-tight tracking-tight mb-5 font-satoshi">
            Built for Your{" "}
            <span className="gradient-text">Business</span>
          </h2>
          <p className="text-[#A1A1A1] text-lg max-w-xl mx-auto leading-relaxed">
            Two of our most popular solutions — shown in action.
            Everything is custom-built around how you work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {solutions.map((sol, i) => (
            <div key={sol.title} className="flex flex-col gap-5">
              <sol.Mockup delay={i * 0.18} />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18 + 0.5 }}
                className="flex items-start justify-between gap-4"
              >
                <div>
                  <span className="text-[#8DBBFF] text-[10px] tracking-[0.22em] uppercase block mb-1">
                    {sol.tag}
                  </span>
                  <h3 className="text-white font-bold text-xl mb-1.5 font-satoshi">
                    {sol.title}
                  </h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{sol.desc}</p>
                </div>
                <Link
                  href={sol.href}
                  aria-label={`View ${sol.title}`}
                  className="shrink-0 p-2.5 rounded-full border border-white/10 hover:border-[#8DBBFF]/40 text-[#A1A1A1] hover:text-[#8DBBFF] transition-all duration-200 mt-1"
                >
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
