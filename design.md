# Basava Electrician — Full Professional Website Design Document (`design.md`)

## 1. Project Overview & Vision
A state-of-the-art, high-conversion, professional website for **Basava Electrician** (`@basav_electrician`). 
Designed according to the **Vercel Web Interface Guidelines** (strict accessibility, keyboard navigation, performance, dark/white high-contrast visual aesthetic, and mobile-first responsiveness).

---

## 2. Core Vercel Web Interface Guidelines Compliance
- **Accessibility**:
  - Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Strict `<button>` for actions and `<a>` for links/navigation.
  - All interactive elements include explicit `aria-label` or accessible text.
  - Decorative icons include `aria-hidden="true"`.
  - Color contrast ratio exceeds WCAG AAA (7:1) using deep black `#09090b` and crisp white `#ffffff` with subtle neutral grays `#a1a1aa`.
- **Focus & Interaction**:
  - Visible focus rings using `:focus-visible:ring-2 :focus-visible:ring-white`.
  - Zero dead zones on touch targets (minimum 48×48px for all mobile touch targets).
- **Typography & Content**:
  - Proper typographical characters (`…` ellipsis, curly quotes `“”`, non-breaking spaces `&nbsp;` on numbers and brand names).
  - Headings structured strictly `<h1>` through `<h3>` with `text-wrap: balance`.
- **Performance & Media**:
  - All images include explicit `width` and `height` to prevent Cumulative Layout Shift (CLS).
  - Below-the-fold assets use `loading="lazy"`.
  - Respects `prefers-reduced-motion` for all transitions and micro-animations.

---

## 3. Brand Identity & Visual Theme
- **Color Palette**:
  - Background: Deep Obsidian Black (`#09090b` / `#121214`)
  - Primary Typography: Pure White (`#ffffff`)
  - Secondary Typography: Muted Zinc (`#a1a1aa` / `#71717a`)
  - Border & Dividers: Subtle Slate Borders (`rgba(255, 255, 255, 0.1)`)
  - Subtle Energy Accent: Crisp Electric White / Warm Gold Highlight (`#f59e0b` / `#38bdf8`)
- **Logo**:
  - Circular dark & white emblem with high-contrast electric spark and typography (`basava_electrician_logo.jpg`).

---

## 4. Website Architecture & Complete Feature Set
1. **Top Announcement Bar**:
   - "🚨 Available 24/7 for Emergency Power Outages & Short Circuits — Call [Phone]"
2. **Navigation Header**:
   - Brand Logo + "Basava Electrician".
   - Fast Navigation: Services, Portfolio, Pricing Estimator, Reviews, Contact.
   - Direct CTA: "Book via WhatsApp" & "Call Now".
3. **Hero Section**:
   - Headline: *"Precision Electrical Engineering & Reliable Contracting"*
   - Subheadline: Certified residential, commercial, and industrial electrical solutions delivered safely on schedule.
   - Trust Badges: Licensed Electrician • 100% Safety Certified • 24/7 Rapid Response • 5.0★ Rated.
   - Dual Call-to-Actions: "Request Free Quote" & "Emergency Call".
4. **Interactive Electrical Cost Estimator**:
   - Allows prospective customers to select service type (New House Wiring, Inverter/Battery Setup, Appliance Repair, Safety Inspection) and receive an instant estimate with one-click WhatsApp dispatch.
5. **Comprehensive Services Matrix**:
   - Residential Wiring & Rewiring (Full house piping, switches, DB box dressing).
   - Commercial & Industrial Power (3-phase wiring, industrial panels, MCB upgrades).
   - Inverter, Battery & UPS Setup (Home power backup and solar integration).
   - Lighting & Ambience Architecture (LED profiles, false ceiling lighting, floodlights).
   - Emergency Diagnostics (Short circuit troubleshooting, earth leakage detection).
6. **Work Portfolio & Gallery**:
   - Grid layout showcasing actual photos of completed jobs (wiring, neatly dressed distribution boxes, aesthetic architectural lighting).
   - Before/After comparisons.
7. **Customer Reviews & Testimonials**:
   - Verified local customer feedback, Google reviews rating, and project highlights.
8. **Direct Booking & Inquiry Form**:
   - Accessible form: Name, Phone, Service Required, Location, Urgency.
   - Auto-formats and sends directly to WhatsApp and logs to local backend.
9. **FAQ Section**:
   - Transparent answers on pricing, warranty on electrical work, response time, and inspection charges.
10. **Footer**:
    - Complete contact details, emergency phone number, service areas, Instagram link (`@basav_electrician`), and copyright.

---

## 5. Information Needed from Client
- Primary Contact Phone Number & WhatsApp Number.
- Exact City / Region / Neighborhoods served (e.g. Bangalore, Banahatti, Hubli, etc.).
- Photos of past work to feature in the portfolio gallery.
- Specific certifications, years of experience, or specializations.
