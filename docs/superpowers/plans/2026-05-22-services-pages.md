# Services Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the single /services page with a hub-and-spoke structure: a 3-card hub page linking to dedicated full sales pages for Websites, AI Automation, and the Bundle.

**Architecture:** Rewrite `ServicesSection.tsx` as a 3-card hub, then create three page components under `components/services/` each with a 4-section layout (hero, features, process, CTA). Each page component is wired to its own App Router route under `app/services/`.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS, framer-motion, lucide-react

---

## File Map

| File | Action |
|---|---|
| `components/ServicesSection.tsx` | Rewrite — 3-card hub (Websites / Bundle / Automation) |
| `app/services/page.tsx` | Rewrite — drop ProcessSection + TestimonialsSection, keep hub |
| `components/services/WebsitesPage.tsx` | Create |
| `components/services/AutomationPage.tsx` | Create |
| `components/services/BundlePage.tsx` | Create |
| `app/services/websites/page.tsx` | Create |
| `app/services/automation/page.tsx` | Create |
| `app/services/bundle/page.tsx` | Create |

---

## Task 1: Rewrite ServicesSection as 3-card hub

**Files:**
- Modify: `components/ServicesSection.tsx`

- [ ] **Step 1: Replace the entire file with the hub component**

```tsx
"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    tag: "Core Service",
    desc: "A professional website that looks great, loads fast, and helps customers find and trust your business.",
    href: "/services/websites",
    featured: false,
  },
  {
    icon: Sparkles,
    title: "The Bundle",
    tag: "Best Value",
    desc: "Website and AI automation built together — fully integrated from day one.",
    href: "/services/bundle",
    featured: true,
  },
  {
    icon: Bot,
    title: "AI Automation",
    tag: "Add-on or Standalone",
    desc: "Smart tools that handle repetitive tasks and save your team hours every week.",
    href: "/services/automation",
    featured: false,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-7">
            <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
              What We Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-[58px] font-black leading-tight tracking-tight mb-5 font-satoshi">
            Choose What <span className="gradient-text">Works for You</span>
          </h2>
          <p className="text-[#A1A1A1] text-lg max-w-xl mx-auto leading-relaxed">
            Two core services. One powerful bundle. All built around your business.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{ y: -5, scale: 1.015 }}
              className="relative"
            >
              {svc.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 rounded-full bg-[#8DBBFF] text-black text-[10px] font-black tracking-[0.18em] uppercase whitespace-nowrap">
                    Best Value
                  </span>
                </div>
              )}
              <Link
                href={svc.href}
                className={`relative group flex flex-col gap-5 p-8 rounded-2xl bg-[#1E1E1E] border transition-all duration-300 overflow-hidden h-full ${
                  svc.featured
                    ? "border-[#8DBBFF]/40 hover:border-[#8DBBFF]/70"
                    : "border-[#232323] hover:border-[#8DBBFF]/20"
                }`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% -10%, rgba(141,187,255,0.07) 0%, transparent 65%)",
                  }}
                />
                <div className="absolute top-5 right-5">
                  <span className="px-3 py-1 rounded-full bg-[#8DBBFF]/10 text-[#8DBBFF] text-[10px] tracking-[0.18em] uppercase border border-[#8DBBFF]/20">
                    {svc.tag}
                  </span>
                </div>
                <div className="relative z-10 flex flex-col gap-5 flex-1">
                  <div className={`p-3 w-fit rounded-xl transition-colors duration-300 ${svc.featured ? "bg-[#8DBBFF]/10" : "bg-white/[0.04] group-hover:bg-[#8DBBFF]/10"}`}>
                    <svc.icon size={23} className="text-[#8DBBFF]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-[18px] mb-2 font-satoshi">
                      {svc.title}
                    </h3>
                    <p className="text-[#A1A1A1] text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                  <div className={`flex items-center gap-1.5 text-[#8DBBFF] text-[13px] font-medium transition-all duration-300 ${svc.featured ? "opacity-100 translate-x-0" : "opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"}`}>
                    <span>{svc.featured ? "Get the bundle" : "Learn more"}</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Rewrite `app/services/page.tsx` — hub only, no ProcessSection or TestimonialsSection**

```tsx
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
cd veloria-website && npm run build
```

Expected: no TypeScript errors, build succeeds.

- [ ] **Step 4: Commit**

```bash
git add components/ServicesSection.tsx app/services/page.tsx
git commit -m "feat: rewrite services hub as 3-card layout with bundle"
```

---

## Task 2: Create WebsitesPage component

**Files:**
- Create: `components/services/WebsitesPage.tsx`

- [ ] **Step 1: Create the directory and file**

```bash
mkdir -p veloria-website/components/services
```

- [ ] **Step 2: Write the component**

```tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  "Custom design tailored to your brand",
  "Mobile-ready on every device",
  "SEO optimised from day one",
  "Fast load times, every time",
  "Easy to manage — no tech knowledge needed",
  "Delivered in weeks, not months",
];

const steps = [
  {
    n: "01",
    title: "We listen",
    desc: "You tell us about your business and goals. No jargon, no assumptions.",
  },
  {
    n: "02",
    title: "We build",
    desc: "Our team designs and develops your site with regular check-ins along the way.",
  },
  {
    n: "03",
    title: "You launch",
    desc: "We handle everything. You go live and start getting customers.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function WebsitesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(141,187,255,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="flex flex-col items-center gap-7"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04]">
                <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
                  Business Websites
                </span>
              </div>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-[72px] font-black leading-[0.95] tracking-tight font-satoshi"
            >
              Your website should work{" "}
              <span className="gradient-text">as hard as you do.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[#A1A1A1] text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              We design and build professional websites that attract customers, load fast,
              and make your business look its best.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-[#8DBBFF] hover:scale-[1.04] transition-all duration-300 shadow-xl shadow-white/10"
              >
                Book a free consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-[#0C0C0C]">
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
                What You Get
              </span>
            </div>
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              Everything your business{" "}
              <span className="gradient-text">needs online.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <CheckCircle2 size={17} className="text-[#8DBBFF] shrink-0" />
                <span className="text-white text-[14px]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
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
                How It Works
              </span>
            </div>
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              Simple process,{" "}
              <span className="gradient-text">great results.</span>
            </h2>
          </motion.div>
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-[#1E1E1E] border border-[#232323]"
              >
                <span className="text-[#8DBBFF] font-black text-2xl font-satoshi shrink-0 leading-none mt-0.5">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-white font-bold text-[17px] mb-1.5 font-satoshi">{step.title}</h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-[#0C0C0C] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(141,187,255,0.07) 0%, transparent 68%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex flex-col items-center gap-7"
          >
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              Ready to get your{" "}
              <span className="gradient-text">business online?</span>
            </h2>
            <p className="text-[#A1A1A1] text-lg leading-relaxed">
              We&apos;ll explain everything in plain English. No commitment required.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-[#8DBBFF] hover:scale-[1.04] transition-all duration-300 shadow-xl shadow-white/10"
            >
              Book a free consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 3: Create `app/services/websites/page.tsx`**

```tsx
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import WebsitesPage from "@/components/services/WebsitesPage";
import Footer from "@/components/Footer";

export default function WebsitesServicePage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <WebsitesPage />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: no TypeScript errors, build succeeds.

- [ ] **Step 5: Commit**

```bash
git add components/services/WebsitesPage.tsx app/services/websites/page.tsx
git commit -m "feat: add /services/websites dedicated page"
```

---

## Task 3: Create AutomationPage component

**Files:**
- Create: `components/services/AutomationPage.tsx`
- Create: `app/services/automation/page.tsx`

- [ ] **Step 1: Write `components/services/AutomationPage.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  "Custom automation workflows built around how you work",
  "Handles repetitive tasks automatically",
  "Saves hours of manual work every week",
  "Works in the background — no extra effort from your team",
  "No tech knowledge needed to use it",
  "Ongoing support included",
];

const steps = [
  {
    n: "01",
    title: "We map your workflow",
    desc: "We find where your team is losing time to repetitive tasks.",
  },
  {
    n: "02",
    title: "We build the automation",
    desc: "Custom tools built specifically for your business processes.",
  },
  {
    n: "03",
    title: "It runs itself",
    desc: "You approve it, we deploy it, and it works quietly in the background.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function AutomationPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(141,187,255,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="flex flex-col items-center gap-7"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04]">
                <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
                  AI Automation
                </span>
              </div>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-[72px] font-black leading-[0.95] tracking-tight font-satoshi"
            >
              Stop doing manually what a{" "}
              <span className="gradient-text">machine can do for you.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[#A1A1A1] text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              We set up smart automation tools that handle your repetitive tasks —
              saving your team hours every single week.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-[#8DBBFF] hover:scale-[1.04] transition-all duration-300 shadow-xl shadow-white/10"
              >
                Book a free consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-[#0C0C0C]">
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
                What You Get
              </span>
            </div>
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              Your time back,{" "}
              <span className="gradient-text">every week.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <CheckCircle2 size={17} className="text-[#8DBBFF] shrink-0" />
                <span className="text-white text-[14px]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
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
                How It Works
              </span>
            </div>
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              We do the hard part,{" "}
              <span className="gradient-text">you reap the rewards.</span>
            </h2>
          </motion.div>
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-[#1E1E1E] border border-[#232323]"
              >
                <span className="text-[#8DBBFF] font-black text-2xl font-satoshi shrink-0 leading-none mt-0.5">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-white font-bold text-[17px] mb-1.5 font-satoshi">{step.title}</h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-[#0C0C0C] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(141,187,255,0.07) 0%, transparent 68%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex flex-col items-center gap-7"
          >
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              Ready to get your{" "}
              <span className="gradient-text">time back?</span>
            </h2>
            <p className="text-[#A1A1A1] text-lg leading-relaxed">
              We&apos;ll walk you through exactly what we can automate for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-[#8DBBFF] hover:scale-[1.04] transition-all duration-300 shadow-xl shadow-white/10"
            >
              Book a free consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Create `app/services/automation/page.tsx`**

```tsx
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import AutomationPage from "@/components/services/AutomationPage";
import Footer from "@/components/Footer";

export default function AutomationServicePage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <AutomationPage />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

Expected: no TypeScript errors, build succeeds.

- [ ] **Step 4: Commit**

```bash
git add components/services/AutomationPage.tsx app/services/automation/page.tsx
git commit -m "feat: add /services/automation dedicated page"
```

---

## Task 4: Create BundlePage component

**Files:**
- Create: `components/services/BundlePage.tsx`
- Create: `app/services/bundle/page.tsx`

- [ ] **Step 1: Write `components/services/BundlePage.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  "Everything in Business Websites",
  "Everything in AI Automation",
  "Fully integrated — your site and automation built together",
  "No handover problems between separate suppliers",
  "Priority support",
  "Best value — costs less than buying both separately",
];

const steps = [
  {
    n: "01",
    title: "One conversation",
    desc: "We scope everything together: your website and your automation needs.",
  },
  {
    n: "02",
    title: "One build",
    desc: "Designed and developed as a single system, not two bolted together.",
  },
  {
    n: "03",
    title: "One launch",
    desc: "Everything goes live together, fully connected and ready to grow.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function BundlePage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(141,187,255,0.13) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="flex flex-col items-center gap-7"
          >
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#8DBBFF]/30 bg-[#8DBBFF]/[0.07]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8DBBFF] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#8DBBFF]" />
                </span>
                <span className="text-[#8DBBFF] text-[11px] tracking-[0.22em] uppercase">
                  Best Value · Most Popular
                </span>
              </div>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-[72px] font-black leading-[0.95] tracking-tight font-satoshi"
            >
              A website and automation that{" "}
              <span className="gradient-text">work together from day one.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[#A1A1A1] text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Get both services built as one seamless system — better integrated,
              better value, and ready to grow with your business.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8DBBFF] text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-white hover:scale-[1.04] transition-all duration-300 shadow-xl shadow-[#8DBBFF]/20"
              >
                Get the bundle
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-[#0C0C0C]">
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
                What You Get
              </span>
            </div>
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              The complete package,{" "}
              <span className="gradient-text">built as one.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#8DBBFF]/[0.04] border border-[#8DBBFF]/15"
              >
                <CheckCircle2 size={17} className="text-[#8DBBFF] shrink-0" />
                <span className="text-white text-[14px]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
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
                How It Works
              </span>
            </div>
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              One team, one build,{" "}
              <span className="gradient-text">one launch.</span>
            </h2>
          </motion.div>
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 items-start p-6 rounded-2xl bg-[#1E1E1E] border border-[#8DBBFF]/20"
              >
                <span className="text-[#8DBBFF] font-black text-2xl font-satoshi shrink-0 leading-none mt-0.5">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-white font-bold text-[17px] mb-1.5 font-satoshi">{step.title}</h3>
                  <p className="text-[#A1A1A1] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-[#0C0C0C] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(141,187,255,0.09) 0%, transparent 68%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex flex-col items-center gap-7"
          >
            <h2 className="text-3xl md:text-[46px] font-black leading-tight tracking-tight font-satoshi">
              Ready to build something{" "}
              <span className="gradient-text">that works together?</span>
            </h2>
            <p className="text-[#A1A1A1] text-lg leading-relaxed">
              One conversation. We&apos;ll scope everything and show you exactly what&apos;s possible.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8DBBFF] text-black font-bold text-[13.5px] tracking-wide rounded-full hover:bg-white hover:scale-[1.04] transition-all duration-300 shadow-xl shadow-[#8DBBFF]/20"
            >
              Get the bundle
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Create `app/services/bundle/page.tsx`**

```tsx
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import BundlePage from "@/components/services/BundlePage";
import Footer from "@/components/Footer";

export default function BundleServicePage() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <BundlePage />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

Expected: no TypeScript errors, build succeeds.

- [ ] **Step 4: Commit and push**

```bash
git add components/services/BundlePage.tsx app/services/bundle/page.tsx
git commit -m "feat: add /services/bundle dedicated page"
git push origin master
```

---

## Visual Verification Checklist

After all tasks complete, run `npm run dev` and check each route:

- [ ] `/services` — 3 cards in a row, bundle has blue border and "Best Value" badge, all cards are clickable links
- [ ] `/services/websites` — hero loads, 6 feature cards in 2-column grid, 3 process steps, CTA strip
- [ ] `/services/automation` — same structure with automation content
- [ ] `/services/bundle` — same structure, hero badge pings, CTA button is blue (not white), feature cards have blue tint
- [ ] All CTAs on sub-pages navigate to `/contact`
- [ ] Navbar works on all pages, footer appears on all pages
