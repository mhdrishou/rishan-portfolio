# Rishan Portfolio - Premium Developer Portfolio Website

## 1. Project Overview

**Project Name:** Rishan Portfolio
**Type:** Premium Full-Stack Portfolio Website
**Core Functionality:** A world-class developer portfolio showcasing Rishan's skills as a Web Developer, UI/UX Designer, AI Integration Specialist, and Vibe Coding Expert
**Target Users:** Potential clients, recruiters, and collaborators seeking premium web development services

## 2. Tech Stack

- **Frontend:** Next.js 14 (React), TypeScript
- **Styling:** CSS Modules + Framer Motion
- **Backend:** Next.js API Routes (integrated)
- **Email:** Nodemailer
- **Validation:** Zod
- **Deployment:** Vercel-ready

## 3. UI/UX Specification

### Layout Structure

**Pages:**
- Single-page application with smooth scroll sections
- Sections: Hero → About → Skills → Services → Contact

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design - Glassmorphism Theme

**Color Palette:**
- Primary Background: #F8F9FE (soft white with blue tint)
- Secondary Background: #FFFFFF
- Glass Card: rgba(255, 255, 255, 0.25)
- Glass Border: rgba(255, 255, 255, 0.4)
- Primary Accent: #4A90D9 (soft blue)
- Secondary Accent: #7C3AED (subtle purple)
- Gradient Primary: linear-gradient(135deg, #4A90D9 0%, #7C3AED 100%)
- Text Primary: #1A1A2E (deep navy-black)
- Text Secondary: #4B5563 (medium grey)
- Text Tertiary: #9CA3AF (light grey)

**Typography:**
- Primary Font: Poppins (headings)
- Secondary Font: Inter (body)
- Hero Title: 72px / 80px bold
- Section Title: 48px / 56px semibold
- Subtitle: 24px / 32px medium
- Body: 16px / 24px regular
- Small: 14px / 20px regular

**Spacing System:**
- Section padding: 120px vertical
- Container max-width: 1200px
- Card padding: 32px
- Element gap: 24px
- Border radius (cards): 24px
- Border radius (buttons): 12px

**Glassmorphism Effects:**
- Background blur: blur(20px)
- Card backdrop filter: saturate(180%) blur(20px)
- Box shadow: 0 8px 32px rgba(31, 38, 135, 0.08)
- Border: 1px solid rgba(255, 255, 255, 0.4)

### Components

**Custom Cursor:**
- Size: 20px (default), 40px (hover)
- Outer glow ring with blur
- Inner solid dot
- Trail effect with particles
- Cursor-following dotted grid background

**Hero Section:**
- Large animated headline with gradient text
- Subtitle with typing effect
- Floating glass cards showcasing roles
- Animated gradient orbs in background

**About Section:**
- Split layout: image placeholder + content
- Minimal storytelling with highlights
- Floating decorative elements

**Skills Section:**
- Interactive grid of skill cards
- Glassmorphism cards with icons
- Hover effects: scale(1.02), glow, tilt
- Categories: Frontend, Backend, Design, AI

**Services Section:**
- Horizontal scroll on mobile, grid on desktop
- 4 service cards with icons
- Price indicator (optional)
- CTA button on each card

**Contact Section:**
- Glass form container
- Floating labels
- Real-time validation
- Success/error feedback
- Animated submit button

### Background Effects

**Animated Dotted Grid:**
- Dot size: 2px
- Dot color: rgba(74, 144, 217, 0.3)
- Grid spacing: 40px
- Subtle parallax following cursor

**Gradient Waves:**
- 2-3 soft gradient orbs
- Colors: soft blue (#4A90D9), subtle purple (#7C3AED)
- Blur: 100px
- Slow floating animation (20s cycle)

**Noise Overlay:**
- Opacity: 0.02
- Subtle grain texture for premium feel

## 4. Animations Specification

### Cursor Interactions
- Cursor scales to 2x on interactive elements
- Smooth lerp following (0.15s delay)
- Particle trail on movement

### Scroll Reveals
- Fade in + slide up (30px)
- Duration: 0.6s
- Stagger: 0.1s between elements
- Threshold: 0.2

### Hover Effects
- Cards: scale(1.02), shadow increase, subtle tilt
- Buttons: scale(1.05), glow pulse
- Links: underline animation left-to-right

### Micro-interactions
- Form inputs: border color transition
- Checkboxes: bounce on check
- Submit button: loading spinner + success check

## 5. Functionality Specification

### Contact Form API

**Endpoint:** `/api/contact`

**Request Body:**
```json
{
  "name": "string (required, 2-50 chars)",
  "email": "string (required, valid email)",
  "subject": "string (required, 5-100 chars)",
  "message": "string (required, 20-1000 chars)"
}
```

**Response:**
- Success: `{ success: true, message: "Message sent successfully" }`
- Error: `{ success: false, error: "Error message" }`

**Validation:**
- Zod schema validation
- Server-side sanitization
- Rate limiting: 5 requests per minute per IP

**Email Sending:**
- Nodemailer with SMTP
- HTML email template
- Confirmation to sender
- Admin notification

### Environment Variables
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@example.com
```

## 6. Folder Structure

```
rishan-portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── GlassCard.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Contact.tsx
│   │   ├── effects/
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── DottedGrid.tsx
│   │   │   └── GradientOrbs.tsx
│   │   └── layout/
│   │       └── Navbar.tsx
│   ├── lib/
│   │   ├── validation.ts
│   │   └── email.ts
│   └── styles/
│       └── variables.css
├── public/
│   └── ...
├── package.json
├── tsconfig.json
└── next.config.js
```

## 7. Acceptance Criteria

- [ ] Single-page smooth scroll layout
- [ ] Custom cursor with glow effect and trail
- [ ] Cursor-following dotted grid background
- [ ] Animated gradient waves in background
- [ ] Glassmorphism cards throughout
- [ ] Scroll reveal animations on all sections
- [ ] Hover effects on all interactive elements
- [ ] Contact form with full backend validation
- [ ] Email sending functionality
- [ ] Success/error feedback UI
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] No console errors
- [ ] 60fps smooth animations
- [ ] Production-ready code
- [ ] Deployable to Vercel