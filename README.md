# Fermor — Financial Planning Landing Page

A modern, responsive financial planning landing page built with Next.js and Tailwind CSS. The interface is designed around a clean editorial style that makes financial information feel simple, approachable, and easy to understand.

## Live Demo

[View the live website](https://fermor-homepage-iota.vercel.app/)

## Repository

[GitHub Repository](https://github.com/PSRajput3377/fermor-homepage)

---

## Overview

Fermor is a frontend concept for a personal financial planning platform.

The goal of the project is to present financial information in a clear and approachable way while maintaining a polished, minimal interface.

The landing page includes:

- Responsive navigation
- Hero section with primary CTA
- "How it works" section
- Financial overview section
- Common financial questions
- Financial planning section
- Small financial moves and recommendations
- Final call-to-action
- Responsive footer
- Mobile navigation menu
- Scroll-based animations
- Scroll progress indicator

---

## Features

### Responsive Design

The website is designed to work across:

- Desktop
- Tablet
- Mobile

The navigation includes a dedicated mobile menu for smaller screens.

### Scroll Animations

Sections use subtle scroll-based animations including:

- Fade-in
- Vertical and horizontal movement
- Scale transitions
- Blur-to-sharp transitions
- Subtle rotation
- Re-triggered animations when scrolling in both directions

### Interactive UI

Interactive elements include:

- Navigation links
- CTA buttons
- Hover states
- Animated arrow interactions
- Mobile navigation
- Smooth scrolling

### Financial Dashboard Concept

The financial overview section presents financial information through a visual dashboard-style interface with:

- Financial metrics
- Progress indicators
- Visual chart elements
- Planning insights

---

## Tech Stack

- **Next.js 16**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Motion**
- **Lucide React**
- **Vercel**
- **GitHub**

---

## Project Structure

```text
fermor-homepage/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── FinalCTA.tsx
│   ├── FinancialOverview.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Navbar.tsx
│   ├── Planning.tsx
│   ├── Questions.tsx
│   ├── ScrollProgress.tsx
│   ├── ScrollReveal.tsx
│   └── SmallMoves.tsx
│
├── public/
│
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
