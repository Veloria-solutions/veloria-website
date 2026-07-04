"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? "";

const services = [
  "Business Website",
  "Intelligent Chatbot",
  "Full-Service Retainer",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "", website: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Honeypot: real visitors never see or fill this field, so a value means a bot.
    // Pretend success so the bot gets no signal that it was filtered.
    if (form.website) {
      setStatus("success");
      setForm({ name: "", email: "", service: "", message: "", website: "" });
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          service_type: form.service,
          message:      form.message,
        },
        PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", service: "", message: "", website: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-[14px] placeholder:text-[#555] focus:outline-none focus:border-[#8DBBFF]/50 focus:bg-white/[0.06] transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot — hidden from real users, bots tend to fill it */}
      <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[#A1A1A1] text-[12px] tracking-wide">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-[#A1A1A1] text-[12px] tracking-wide">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-[#A1A1A1] text-[12px] tracking-wide">
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled className="bg-[#181818]">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-[#181818]">{s}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[#A1A1A1] text-[12px] tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={2000}
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us a bit about your business and what you need…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white text-black text-[13px] font-bold tracking-wide rounded-full hover:bg-[#8DBBFF] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
      >
        {status === "sending" ? (
          <><Loader2 size={15} className="animate-spin" /> Sending…</>
        ) : (
          <><Send size={15} /> Send Message</>
        )}
      </button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[13px]"
          >
            <CheckCircle2 size={15} />
            Message sent — we&apos;ll be in touch soon!
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[13px]"
          >
            <AlertCircle size={15} />
            Something went wrong — please try emailing us directly at{" "}
            <a href="mailto:info@veloria.solutions" className="underline">info@veloria.solutions</a>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
