"use client";

import { motion } from "framer-motion";
import { Activity, ArrowUpRight } from "lucide-react";

/* ── Mini dashboard mockup ───────────────────────────── */
function DashboardMockup({
  delay = 0,
  variant = 0,
}: {
  delay?: number;
  variant?: number;
}) {
  const bars = variant === 0
    ? [35, 55, 42, 78, 62, 88, 72, 95, 80, 68, 90, 85]
    : [60, 40, 75, 50, 85, 65, 90, 45, 80, 70, 55, 92];

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
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(141,187,255,0.06) 0%, transparent 55%)",
        }}
      />

      {/* Window chrome */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#242424]">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/70" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-20 h-2 rounded-full bg-white/[0.07]" />
          <div className="w-10 h-2 rounded-full bg-white/[0.04]" />
        </div>
      </div>

      {/* Layout */}
      <div className="flex">
        {/* Sidebar icons */}
        <div className="w-11 border-r border-[#242424] py-5 flex flex-col items-center gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-5 h-5 rounded-[4px] ${i === 0 ? "bg-[#8DBBFF]/25" : "bg-white/[0.05]"}`}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 flex flex-col gap-4">
          {/* Stat row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { l: "Revenue", v: variant === 0 ? "$128.4K" : "$94.2K", c: "+12.5%", pos: true },
              { l: "Users",   v: variant === 0 ? "4,821"   : "12.6K",  c: "+8.3%",  pos: true },
              { l: "Latency", v: variant === 0 ? "2.4ms"   : "1.8ms",  c: "↓14%",   pos: true },
            ].map((s) => (
              <div key={s.l} className="bg-[#111] rounded-xl p-3">
                <div className="text-[#555] text-[8px] tracking-widest uppercase mb-1">{s.l}</div>
                <div className="text-white text-sm font-bold font-satoshi leading-none">{s.v}</div>
                <div className="text-emerald-400 text-[9px] mt-0.5">{s.c}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-[#111] rounded-xl p-4 h-24 flex items-end gap-1">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.4 + i * 0.04, duration: 0.4 }}
                className="flex-1 rounded-[3px]"
                style={{
                  height: `${h}%`,
                  transformOrigin: "bottom",
                  background:
                    i === bars.length - 1
                      ? "linear-gradient(180deg, #8DBBFF 0%, rgba(141,187,255,0.25) 100%)"
                      : `rgba(141,187,255,${0.08 + (h / 100) * 0.2})`,
                }}
              />
            ))}
          </div>

          {/* Footer row */}
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-[#111] rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[#555] text-[8px] tracking-widest uppercase">
                  System Health
                </div>
                <div className="text-emerald-400 text-[9px]">Nominal</div>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#8DBBFF] to-emerald-400"
                  style={{ width: variant === 0 ? "87%" : "94%" }}
                />
              </div>
            </div>
            <div className="bg-[#111] rounded-xl p-3 flex items-center gap-2">
              <Activity size={13} className="text-[#8DBBFF]" />
              <div className="text-white text-[11px] font-medium">Live</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────── */
const solutions = [
  {
    tag: "Analytics",
    title: "AI Analytics Platform",
    desc: "Real-time intelligence dashboards with predictive insights, automated reporting, and anomaly detection.",
  },
  {
    tag: "Infrastructure",
    title: "Enterprise Cloud Suite",
    desc: "End-to-end cloud management with cost optimisation, auto-scaling, and 99.99% availability SLA.",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-32 bg-[#0C0C0C] relative overflow-hidden">
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
            Built for the{" "}
            <span className="gradient-text">Future</span>
          </h2>
          <p className="text-[#A1A1A1] text-lg max-w-xl mx-auto leading-relaxed">
            Premium, production-grade solutions we've architected for modern
            enterprise challenges — battle-tested and ready to scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {solutions.map((sol, i) => (
            <div key={sol.title} className="flex flex-col gap-5">
              <DashboardMockup delay={i * 0.18} variant={i} />
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
                <button
                  aria-label={`View ${sol.title}`}
                  className="shrink-0 p-2.5 rounded-full border border-white/10 hover:border-[#8DBBFF]/40 text-[#A1A1A1] hover:text-[#8DBBFF] transition-all duration-200 mt-1"
                >
                  <ArrowUpRight size={16} />
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
