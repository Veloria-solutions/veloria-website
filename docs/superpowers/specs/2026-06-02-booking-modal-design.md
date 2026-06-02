# Booking Consultation Modal — Design Spec

**Date:** 2026-06-02  
**Status:** Approved

---

## Overview

A global modal overlay that lets site visitors book a consultation without leaving the page. Triggered by any "Book Consultation" CTA button on the site. Submits form data server-side to `info@veloria.solutions` via Resend — no email client required.

---

## Architecture

### New Files

| File | Purpose |
|------|---------|
| `context/BookingModalContext.tsx` | React Context + Provider exposing `openModal()` and `closeModal()` |
| `components/BookingModal.tsx` | Modal UI, form state, submission logic |
| `app/api/send-consultation/route.ts` | Next.js App Router API route — receives form POST, sends email via Resend |

### Integration Points

- `app/layout.tsx` — wrap children with `BookingModalProvider` and render `<BookingModal />` once at root level
- Any CTA button that should trigger the modal calls `openModal()` from `useBookingModal()` hook

### Environment Variable

`RESEND_API_KEY` — added to `.env.local`. Obtained from a free Resend account (resend.com).

---

## Form Fields

Rendered in this order inside the modal:

1. **Service Bundle** — `<select>` dropdown, options:
   - Business Website
   - Intelligent Chatbot Solutions
   - Full-Service Retainer
   - Reservation Systems
   - Automated Appointment Booking

2. **Full Name** — `<input type="text">`, required

3. **Email** — `<input type="email">`, required

4. **Phone Number** — `<input type="tel">`, required

5. **Preferred Date** — `react-day-picker` calendar rendered inline (full month grid with prev/next month navigation). Past dates disabled.

6. **Additional Information** — `<textarea>`, optional, placeholder: "Anything else you'd like us to know before the call?"

---

## UI & Styling

- Dark glassy overlay backdrop (`bg-black/60 backdrop-blur-sm`)
- Modal panel: `bg-[#111111] border border-white/10 rounded-2xl` matching existing card patterns
- `#8DBBFF` accent for focus rings, active states, and the submit button (pill shape matching existing CTAs)
- Framer Motion: modal fades + slides up on open, fades out on close (consistent with existing animation patterns)
- Scrollable modal body for smaller viewports
- Close button (X icon) top-right corner; clicking backdrop also closes
- react-day-picker styled to match dark theme (custom CSS overrides)

---

## Submission Flow

1. Client validates required fields (name, email, phone, bundle, date) — inline error messages on empty required fields
2. POST to `/api/send-consultation` with JSON body containing all 6 fields
3. API route uses Resend SDK to send HTML email to `info@veloria.solutions`
4. Email subject: `New Consultation Request — {Service Bundle}`
5. Email body: clean HTML listing all fields
6. On success: form swaps to a confirmation message ("We've received your request — we'll be in touch soon.")
7. On error: inline error banner shown, form remains editable

---

## Email Format (sent to info@veloria.solutions)

**Subject:** `New Consultation Request — {bundleName}`

**Body:**
```
Name:        {fullName}
Email:       {email}
Phone:       {phone}
Bundle:      {bundle}
Date:        {preferredDate}
Notes:       {additionalInfo}
```

---

## Dependencies to Install

```bash
npm install resend react-day-picker
```

---

## Setup Steps for Resend

1. Create free account at resend.com
2. Create an API key (Dashboard → API Keys → Create API Key)
3. Add to `veloria-website/.env.local`: `RESEND_API_KEY=re_xxxxx`
4. Verify sender domain or use Resend's shared sending domain for testing

---

## Out of Scope

- Database storage of submissions
- Admin dashboard for viewing submissions
- Calendar availability management (date picker shows all future dates, no blocked slots)
- SMS/webhook notifications
