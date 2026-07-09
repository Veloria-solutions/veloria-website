"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Antares",
    role: "Co-Founder",
    photo: "/founders/antares.jpg",
    bio: "Antares is one half of Veloria — a digital engineering student who helped build the company from the ground up. He's hands-on in every project, so when you work with us, you're working directly with the person building your site.",
  },
  {
    name: "Titus",
    role: "Co-Founder",
    photo: "/founders/titus.jpg",
    bio: "Titus is the other half — also studying digital engineering, and the reason every project stays personal and interactive. We're a small team on purpose: nothing gets handed off to a big impersonal team, so we stay closely connected to you and your growth.",
  },
];

export default function FoundersSection() {
  return (
    <section id="founders" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(141,187,255,0.07) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-[52px] font-black leading-tight tracking-tight mb-5 font-satoshi">
            Meet the <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-[#A1A1A1] text-[15px] leading-relaxed max-w-2xl mx-auto">
            We&apos;re two digital engineering students who built Veloria Solutions
            ourselves, from the ground up — a small team on purpose, so every project
            stays hands-on.
          </p>
        </motion.div>

        {/* Founder cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-300 p-6"
            >
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src={founder.photo}
                  alt={`${founder.name} — ${founder.role} of Veloria Solutions`}
                  fill
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-white font-bold text-[18px] leading-snug font-satoshi">
                {founder.name}
              </h3>
              <span className="text-[#8DBBFF] text-[12.5px] font-medium tracking-wide mb-3">
                {founder.role}
              </span>
              <p className="text-[#A1A1A1] text-[13.5px] leading-relaxed">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
