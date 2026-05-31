# Fira's Futuristic Informatics Portfolio

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3 with custom theme
- **Language:** TypeScript
- **Icons:** Lucide React
- **Fonts:** Sora (Google Fonts)
- **Design:** Glassmorphism + Neon Accents

## Project Structure

```
portofolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── skills/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── BottomNav.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ...
│   ├── lib/                    # Utilities & constants
│   │   ├── constants.ts
│   │   └── utils.ts
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Design Tokens

- **Primary Color:** Deep Pink (#ff71ce)
- **Secondary Color:** Cosmic Dark (#0c1227)
- **Accent Colors:** Cyan (#00f0ff), Purple (#8338ec)
- **Border Radius:** 8px (glass)
- **Typography:** Sora (sans-serif)

## Installation & Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the portfolio.

## Features Ready for Implementation

- [ ] Home Page (Hero + Featured Projects)
- [ ] About Page (Timeline + Interests)
- [ ] Skills Page (Technical Arsenal)
- [ ] Projects Page (Project Gallery)
- [ ] Contact Page (Lead Form)
- [ ] Responsive Navigation (Top + Bottom Bar)
- [ ] Glassmorphism Cards
- [ ] Interactive Hover Effects
