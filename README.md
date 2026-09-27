# S.S. De-Addiction & Palliative Care Centre, Latur — Website

A production-ready Next.js 15 (App Router) website for **S.S. De-Addiction & Palliative Care Centre, Latur**, run by Kai. Ashwini Anand Bargale Bahuuddeshiya Sevabhavi Sanstha.

Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion and Lucide icons. Fully bilingual — every page can be viewed in **English or Marathi** using the language toggle in the navbar (top-right, or in the mobile menu). The chosen language is remembered on the visitor's device.

## Getting started

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build for production

```bash
npm run build
npm run start
```

> Note: `next/font/google` (used for the Poppins, Inter and Noto Sans Devanagari fonts) needs an internet connection at build time to download the font files. This works automatically on Vercel and any normal internet connection — it will only fail in a fully offline/sandboxed build environment.

## Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra configuration is required.
4. Click **Deploy**.

## Project structure

```
src/
  app/                 Next.js App Router pages (one folder per route)
    about/
    services/
    admission/
    rules/
    donation/
    contact/
    gallery/
    layout.tsx         Root layout: fonts, SEO metadata, Navbar/Footer
    page.tsx            Home page
    sitemap.ts          Auto-generated sitemap.xml
    robots.ts           Auto-generated robots.txt
    loading.tsx          Global loading state
    not-found.tsx         Custom 404 page
  components/          Reusable UI components (Navbar, Footer, Hero, etc.)
  context/
    LanguageContext.tsx  English/Marathi language toggle (localStorage-backed)
  lib/
    dictionary.ts        All site text, in English and Marathi
public/
  images/               Logos, banners and gallery photos
```

## Editing content

- **Text (English & Marathi):** everything lives in `src/lib/dictionary.ts`. Find the English (`en`) block and its matching Marathi (`mr`) block and edit both together so the two languages stay in sync.
- **Contact details, bank/UPI info:** the `siteInfo` object at the top of `src/lib/dictionary.ts`.
- **Images:** replace files inside `public/images/` (keep the same filenames, or update the references in the relevant component).
- **Colours:** edit the `primary` / `secondary` / `accent` / `gold` values in `tailwind.config.ts`.

## Before going live

- Replace the placeholder domain `https://ssdpclatur.org` in `src/app/layout.tsx`, `src/app/sitemap.ts` and `src/app/robots.ts` with your real domain once you have one.
- Swap in higher-resolution/original photos in `public/images/` if available, for the sharpest possible display.
- The contact form on the Contact page is currently front-end only (it shows a success message but does not send an email). Connect it to an email service (e.g. Resend, Formspree) or an API route before relying on it.
