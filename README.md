# Keysolutus — Redesigned Landing Page

Production-ready Next.js 16 (App Router) + TypeScript + Tailwind CSS rebuild of the Keysolutus
landing page. All business content (services, expertise, portfolio, ideology, testimonials,
contact form fields, footer links) is preserved from the current site; only the visual and
interaction design has been rebuilt.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

- Next.js 16 App Router, Server Components by default
- TypeScript (strict)
- Tailwind CSS (white / mist-blue / soft-blue / light-gray palette only)
- Framer Motion for scroll reveals, hover states, and the hero composition
- Lenis for smooth scrolling
- lucide-react for iconography

## Structure

```
app/                 routes, layout, metadata, sitemap, robots
components/layout/   Navbar, MobileNav, Footer
components/sections/ Hero, About, WhyChooseUs, Expertise, Software, Projects,
                      Ideology/Process, Stats, Testimonials, Contact
components/ui/       shared primitives (buttons, cards, section headings, counters,
                      the single-line-diagram motif)
data/                typed content files — the single source of truth for all copy,
                      pulled directly from the current keysolutus.com
lib/                 utilities
```

## Design notes

The recurring visual motif is the **single-line diagram** — the schematic notation
switchgear engineers use every day (nodes, breakers, thin connecting lines). It appears
in the hero composition, section dividers, and hover states as a quiet nod to the
company's actual craft, rather than generic decoration.

Palette is restricted to white, very light blue, soft blue and light gray per the brief —
no dark sections, no bright accent colors.
