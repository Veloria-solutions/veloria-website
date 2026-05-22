# Services Pages Design

**Date:** 2026-05-22  
**Status:** Approved

## Overview

Replace the single `/services` page (which currently shows a 2-card ServicesSection + ProcessSection + TestimonialsSection) with a hub-and-spoke structure: a hub page with 3 linked cards, and a dedicated full sales page for each service.

## Routes

| Route | Purpose |
|---|---|
| `/services` | Hub page — 3 cards linking to sub-pages |
| `/services/websites` | Full sales page for Business Websites |
| `/services/automation` | Full sales page for AI Automation |
| `/services/bundle` | Full sales page for The Bundle (featured) |

## Hub Page (`/services`)

### Layout
- Short section header: "What We Offer" or similar
- Three equal-width cards in a row (Option A from brainstorming)
- Navbar + Footer included

### Card specs
Each card contains:
- Icon (lucide-react)
- Tag label (small uppercase, e.g. "Core Service", "Most Popular", "Add-on or Standalone")
- Title
- One-line description
- CTA link to the dedicated sub-page

**Bundle card** is visually distinct:
- Blue border (`border-[#8DBBFF]/40`)
- "BEST VALUE" badge pinned to top-centre
- CTA button filled blue instead of ghost

### Card content

| | Websites | Bundle | Automation |
|---|---|---|---|
| Icon | `Globe` | `Sparkles` (or `Star`) | `Bot` |
| Tag | Core Service | Best Value | Add-on or Standalone |
| Title | Business Websites | The Bundle | AI Automation |
| Description | A professional site that looks great, loads fast, and helps customers find and trust you. | Website and AI automation built together — fully integrated from day one. | Smart tools that handle repetitive tasks and save your team hours every week. |
| CTA | View service → | Get the bundle → | View service → |

---

## Dedicated Service Pages (shared pattern)

Each page uses the same 4-section structure. Navbar + Footer included on all.

### Section 1 — Hero
- Badge (small pill label)
- H1 headline (punchy, outcome-focused)
- Subtext (1–2 sentences)
- Primary CTA button → `/contact`

### Section 2 — What You Get
- Section label + heading
- 4–6 feature bullets with `CheckCircle2` icons and short descriptions

### Section 3 — How It Works
- Section label + heading
- 3 numbered steps, each with a title and 1-sentence description

### Section 4 — CTA Strip
- Headline
- "Book a consultation" button → `/contact`

---

## Page-by-Page Content

### `/services/websites`

**Hero**
- Badge: "Business Websites"
- H1: "Your website should work as hard as you do."
- Sub: "We design and build professional websites that attract customers, load fast, and make your business look its best."
- CTA: "Book a free consultation"

**What You Get**
- Custom design tailored to your brand
- Mobile-ready on every device
- SEO optimised from day one
- Fast load times, every time
- Easy to manage — no tech knowledge needed
- Delivered in weeks, not months

**How It Works**
1. **We listen** — You tell us about your business and goals. No jargon, no assumptions.
2. **We build** — Our team designs and develops your site with regular check-ins along the way.
3. **You launch** — We handle everything. You go live and start getting customers.

**CTA Strip**
- "Ready to get your business online?"

---

### `/services/automation`

**Hero**
- Badge: "AI Automation"
- H1: "Stop doing manually what a machine can do for you."
- Sub: "We set up smart automation tools that handle your repetitive tasks — saving your team hours every single week."
- CTA: "Book a free consultation"

**What You Get**
- Custom automation workflows built around how you work
- Handles repetitive tasks automatically
- Saves hours of manual work every week
- Works in the background — no extra effort from your team
- No tech knowledge needed to use it
- Ongoing support included

**How It Works**
1. **We map your workflow** — We find where your team is losing time to repetitive tasks.
2. **We build the automation** — Custom tools built specifically for your business processes.
3. **It runs itself** — You approve it, we deploy it, and it works quietly in the background.

**CTA Strip**
- "Ready to get your time back?"

---

### `/services/bundle`

**Hero**
- Badge: "Best Value · Most Popular"
- H1: "A website and automation that work together from day one."
- Sub: "Get both services built as one seamless system — better integrated, better value, and ready to grow with your business."
- CTA: "Get the bundle"

**What You Get**
- Everything in Business Websites
- Everything in AI Automation
- Fully integrated — your site and automation built together
- No handover problems between separate suppliers
- Priority support
- Best value — costs less than buying both separately

**How It Works**
1. **One conversation** — We scope everything together: your website and your automation needs.
2. **One build** — Designed and developed as a single system, not two bolted together.
3. **One launch** — Everything goes live together, fully connected and ready to grow.

**CTA Strip**
- "Ready to build something that works together?"

---

## Files to Create / Modify

| File | Action |
|---|---|
| `app/services/page.tsx` | Rewrite — becomes hub page |
| `app/services/websites/page.tsx` | Create |
| `app/services/automation/page.tsx` | Create |
| `app/services/bundle/page.tsx` | Create |
| `components/ServicesSection.tsx` | Rewrite — hub 3-card layout |
| `components/services/WebsitesPage.tsx` | Create |
| `components/services/AutomationPage.tsx` | Create |
| `components/services/BundlePage.tsx` | Create |

ProcessSection and TestimonialsSection are removed from the services hub. They can be added to individual service pages in a future iteration if needed.

## Design Tokens (existing, to be reused)

- Primary blue: `#8DBBFF`
- Background dark: `#090909` / `#0C0C0C` / `#1A1A1A`
- Muted text: `#A1A1A1`
- Font: Satoshi (headings), Inter (body)
- Existing classes: `gradient-text`, `glass`, `glow-blue`, `grid-bg`
- Animation: framer-motion `whileInView` fade-up pattern used throughout
