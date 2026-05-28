"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { src: "/testimonials/oscar.png",   alt: "Oscar — Client Project"   },
  { src: "/testimonials/balinea.png", alt: "Balinea — Client Project" },
];

export default function ProjectShowcase() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-7">
            <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
              Our Work
            </span>
          </div>
          <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
            Built for real{" "}
            <span className="gradient-text">businesses.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border border-white/[0.07] bg-[#1E1E1E]"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
