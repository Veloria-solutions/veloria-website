"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { src: "/testimonials/oscar.png",   alt: "Oscar — Client Project"   },
  { src: "/testimonials/balinea.png", alt: "Balinea — Client Project" },
  { src: "/testimonials/paititi.png", alt: "Paititi — Client Project" },
];

export default function ProjectShowcase() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
            Built for real{" "}
            <span className="gradient-text">businesses.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.07] bg-[#1E1E1E]"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
