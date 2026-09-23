# PNGHR Website

Official website project for **PNGHR Consultant Firm**, developed by **8n8systems**.

## Product direction
A lightweight hybrid of corporate consulting content and image-led HSE storytelling.

## Stack
- Next.js 15
- TypeScript
- Lightweight custom CSS
- Vercel-ready
- Google Sheets API for lead capture
- Meta Pixel integration
- WhatsApp conversion CTA
- SEO sitemap + robots

## Core routes
- /
- /about
- /services
- /services/[slug]
- /industries
- /insights
- /contact

## Local development
```bash
npm install
npm run dev
```

## Lead database
Create a Google Sheet tab named `Leads` with:
`Lead ID | Date | Name | Company | Phone | Email | Service | Source | Campaign | Status | Follow-up Date | Assigned To | Notes`

Share it with the Google service account and configure values in `.env.local` using `.env.example`.

## Integrations
- Google Sheets API: ready, credentials required
- Meta Pixel: ready, Pixel ID required
- WhatsApp: active via environment number
- Vercel: repository is deployment-ready

## Content governance
Service language is based on the PNGHR company profile. New claims, industries, metrics, testimonials, certifications or partner statements should be approved by PNGHR before publication.
