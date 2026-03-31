# Memory: Bonesy Portfolio Tech Stack
**Type**: Project Metadata
**Tags**: NEXT.js 16, Tailwind v4, GSAP, Antigravity

## Core Architecture
- **Framework**: Next.js 16 (App Router)
- **Design System**: Tailwind v4 with custom "Antigravity" tokens (`--shadow-weightless`, `--shadow-spatial`, `--glass`).
- **Motion Engine**: GSAP with ScrollTrigger for high-performance entrance animations.
- **Components**: Reusable `GsapWrapper` for scroll-linked effects and `MagneticWrapper` for tactile interactions.

## Deployment Guidelines
- Use `npm run build` to verify production readiness.
- Ensure all custom CSS utilities are documented in `REFERENCE.md`.
