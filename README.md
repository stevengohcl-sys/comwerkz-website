# Comwerkz Technology website

Mobile-first one-page website for Comwerkz Technology P.L., based on the approved website build proposal.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run audit:prod
npm run build
npm start
npm run security:headers
```

## SEO

The App Router metadata includes Singapore service keywords, canonical metadata, Open Graph and Twitter cards, crawlable `robots.txt`, XML sitemap generation, and `ProfessionalService` JSON-LD. Set `NEXT_PUBLIC_SITE_URL` to the final production domain when attaching a custom domain.

## Security and CI/CD

- Security headers: CSP, clickjacking protection, MIME sniffing prevention, permission restrictions, referrer policy and HSTS.
- GitHub Actions: type checking, production dependency audit, production build and live header verification.
- CodeQL: JavaScript/TypeScript analysis on pull requests, `main`, and a weekly schedule.
- Dependabot: weekly npm updates and monthly GitHub Actions updates.
- Vercel: connect the GitHub repository for automatic preview deployments on pull requests and production deployments from `main`.

No public website can be guaranteed “non-hackable”; this repository applies a practical defense-in-depth baseline for a static company website.

## Implementation follow-ups

- Connect verified WhatsApp, Telegram, Facebook, Messenger and Instagram destinations.
- Replace email-client handoff with the selected production form-delivery service if required.
- Add analytics only after selecting the provider and consent requirements.
