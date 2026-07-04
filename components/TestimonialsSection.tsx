"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Veloria Solutions transformed our operations with their AI automation platform. We've seen a 40% increase in efficiency within just three months of deployment.",
    name: "Sarah Chen",
    role: "CTO",
    company: "NexaCore Technologies",
    initials: "SC",
  },
  {
    quote:
      "The team delivered exceptional cloud infrastructure that scales perfectly with our growth. Best technology investment we've made in three years — bar none.",
    name: "Michael Torres",
    role: "CEO",
    company: "DataStream Analytics",
    initials: "MT",
  },
  {
    quote:
      "Their cybersecurity framework gave us complete peace of mind. Professional, thorough, and incredibly responsive. Veloria is the real deal.",
    name: "Emma Richardson",
    role: "CISO",
    company: "Vertex Capital Group",
    initials: "ER",
  },
  {
    quote:
      "Working with Veloria felt like having a world-class engineering team embedded in our company. The custom software they built exceeded every expectation.",
    name: "James Park",
    role: "VP Engineering",
    company: "Momentum Labs",
    initials: "JP",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const n = testimonials.length;
  const prev = () => setCurrent((c) => (c - 1 + n) % n);
  const next = () => setCurrent((c) => (c + 1) % n);

  return (
    <section className="py-32 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(141,187,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-[58px] font-black leading-tight tracking-tight font-satoshi">
            Trusted by{" "}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -22 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-3xl px-10 py-12 text-center glow-blue"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="text-[#8DBBFF] fill-[#8DBBFF]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-10 font-satoshi">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-11 h-11 rounded-full border border-[#8DBBFF]/25 bg-gradient-to-br from-[#8DBBFF]/20 to-[#8DBBFF]/5 flex items-center justify-center">
                  <span className="text-[#8DBBFF] font-bold text-[13px]">
                    {testimonials[current].initials}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">
                    {testimonials[current].name}
                  </div>
                  <div className="text-[#A1A1A1] text-[12px]">
                    {testimonials[current].role},{" "}
                    <span className="text-[#8DBBFF]/80">
                      {testimonials[current].company}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-9">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-white/10 hover:border-white/30 text-[#A1A1A1] hover:text-white transition-all duration-200"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-7 h-2 bg-[#8DBBFF]"
                      : "w-2 h-2 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-white/10 hover:border-white/30 text-[#A1A1A1] hover:text-white transition-all duration-200"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
