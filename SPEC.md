# Rishan's Portfolio - Technical Specification

## 1. Project Overview

**Project Name:** Rishan's Portfolio  
**Type:** Full-stack personal portfolio website  
**Core Functionality:** Premium developer portfolio showcasing skills and enabling client contact  
**Target Users:** Potential clients, employers, collaborators

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Page Sections (in order):**
1. Sticky Glass Navbar
2. Hero Section with 3D element
3. About Section
4. Skills / Expertise Section
5. Why Choose Me Section
6. Contact Section (with functional form)
7. Footer

**Responsive Breakpoints:**
- Mobile: 0-639px
- Tablet: 640-1023px  
- Desktop: 1024px+

### 2.2 Visual Design

**Color Palette:**
- Background: `#FFFFFF` (white)
- Primary Text: `#000000` (black)
- Secondary Text: `#666666` (gray-500)
- Accent: `#000000` (black)
- Glass Background: `rgba(255, 255, 255, 0.7)` with backdrop-blur
- Card Background: `rgba(255, 255, 255, 0.5)` with backdrop-blur
- Border: `rgba(0, 0, 0, 0.1)`
- Dotted Pattern: `rgba(0, 0, 0, 0.03)`

**Typography:**
- Primary Font: Poppins (Google Fonts)
- Headings: Poppins Bold, tracking -0.02em
- Body: Poppins Regular, 16px/24px line-height
- Hero Name: 80px (mobile: 48px), font-weight 800
- Section Titles: 48px (mobile: 32px), font-weight 700
- Body: 16px, font-weight 400

**Spacing System:**
- Section padding: 120px vertical (mobile: 80px)
- Container max-width: 1200px
- Gap between elements: 24px/32px/48px
- Card padding: 32px

**Visual Effects:**
- Glassmorphism: backdrop-filter blur(20px), background rgba(255,255,255,0.7)
- Soft shadows: 0 8px 32px rgba(0,0,0,0.08)
- Border radius: 24px for cards, 16px for buttons
- Dotted gradient background sections

### 2.3 Components

**Navbar:**
- Fixed position, glass effect background
- Logo (Rishan), Nav links (About, Skills, Contact)
- Blur effect on scroll: backdrop-filter blur(20px)

**Hero Section:**
- Full viewport height (100vh)
- Name: "Rishan" - large bold text
- Subtitle: "Web Developer • Designer • AI Integration • Vibe Coding Expert"
- Tagline: "Crafting digital experiences that feel like premium products"
- 3D floating orb on the right side

**About Section:**
- Short powerful intro text
- Subtle fade-in animation on scroll
- Glass card container

**Skills Section:**
- 4 glassmorphism cards in 2x2 grid (mobile: 1 column)
- Each card has icon, title, description
- 3D tilt effect on hover
- Categories: Web Development, UI/UX Design, AI Integration, Vibe Coding

**Why Choose Me:**
- 3 bullet points with icons
- Smooth reveal animations

**Contact Section:**
- Glass card with form
- Fields: Name, Email, Message
- Submit button with loading state
- Success/error feedback messages

**Footer:**
- Simple copyright text
- Social links (optional)

### 2.4 Animations

**Global:**
- Smooth scroll: scroll-behavior smooth
- Page transitions: fade in on load

**Scroll Animations (Framer Motion):**
- Sections fade in and slide up on scroll
- Staggered children animation

**Hero:**
- 3D orb: subtle rotation, mouse movement response
- Text: staggered fade-in on load

**Skills Cards:**
- 3D tilt on hover (perspective transform)
- Scale up slightly on hover

**3D Orb:**
- Gentle floating animation (continuous)
- Responds to mouse position
- Smooth lighting and reflections

---

## 3. Functionality Specification

### 3.1 Core Features

**Frontend:**
- Single page with smooth scroll navigation
- Interactive 3D hero element
- Animated skill cards with 3D tilt
- Fully functional contact form with validation
- Mobile-responsive design

**Backend (API Routes):**
- POST /api/contact - Handle contact form submissions
- Input validation with Zod
- Store messages in SQLite database (via Prisma)
- Send email notification (using Resend or Nodemailer)
- Rate limiting for spam protection

### 3.2 Contact Form Flow

1. User fills form (Name, Email, Message)
2. Client-side validation
3. Submit to /api/contact
4. Server validates with Zod
5. Store in database
6. Send email notification
7. Return success/error response
8. Show appropriate UI feedback

### 3.3 Data Handling

**Database Schema (Prisma):**
```prisma
model ContactMessage {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  message   String
  createdAt DateTime @default(now())
}
```

### 3.4 Environment Variables

```
DATABASE_URL="file:./dev.db"
RESEND_API_KEY="re_..."
EMAIL_FROM="noreply@rishan.dev"
EMAIL_TO="rishan@email.com"
```

---

## 4. Technical Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D:** React Three Fiber + Drei
- **Database:** Prisma with SQLite
- **Email:** Resend (or Nodemailer)
- **Validation:** Zod
- **Deployment:** Vercel-optimized

---

## 5. Acceptance Criteria

### Visual:
- [ ] Glassmorphism effect visible on navbar and cards
- [ ] Black on white color scheme throughout
- [ ] Poppins font loaded and applied
- [ ] 3D orb renders in hero section
- [ ] Smooth animations on scroll
- [ ] Mobile responsive (no horizontal scroll)

### Functional:
- [ ] Contact form submits successfully
- [ ] Form validation works
- [ ] Success message shows after submission
- [ ] Database stores messages
- [ ] Navigation scrolls to sections
- [ ] 3D orb responds to mouse movement

### Performance:
- [ ] Page loads without errors
- [ ] 3D doesn't cause lag (check FPS)
- [ ] No console errors in production
- [ ] Build completes successfully

---

## 6. File Structure

```
/app
  /api/contact/route.ts
  /layout.tsx
  /page.tsx
  /globals.css
/components
  /Navbar.tsx
  /Hero.tsx
  /About.tsx
  /Skills.tsx
  /WhyChooseMe.tsx
  /Contact.tsx
  /Footer.tsx
  /ThreeDScene.tsx
/lib
  /prisma.ts
  /email.ts
/prisma
  /schema.prisma
/public
  (empty - no static assets needed)
/package.json
/tailwind.config.ts
/tsconfig.json
/next.config.js
/.env.example
```

---

## 7. Out of Scope

- Projects/Portfolio section (explicitly excluded)
- Blog section
- Dark mode toggle
- Multi-language support
- Complex CMS integration