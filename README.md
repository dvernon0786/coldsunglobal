# Cold Sun Global — Website

**coldsunglobal.com** — International brand & presence for the Cold Sun Group

> Next.js 15 (App Router) · TypeScript · Tailwind CSS · Playfair Display + DM Sans

---

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Full Site Map (32 pages)

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/about` | About Us |
| `/leadership` | Leadership — Erik |
| `/contact` | Contact Us |
| `/clients` | Clients & Success Stories |
| `/resources` | Blog, Ebooks & Webinars |
| `/solutions` | Solutions Overview |
| `/solutions/salesforce` | Salesforce Solutions |
| `/solutions/agentforce` | Agentforce & AI Agents |
| `/solutions/field-service` | Field Service Management |
| `/solutions/revenue-management` | Revenue Management |
| `/solutions/erp` | NetSuite / IFS Cloud / Sage Intacct |
| `/solutions/servicenow` | ServiceNow |
| `/services` | Services Overview |
| `/services/consulting` | Consulting |
| `/services/implementation` | Implementation & Integration |
| `/services/managed-services` | Managed & Advisory Services |
| `/services/change-management` | Change Management |
| `/services/migration` | Migration Services |
| `/services/training` | Training |
| `/services/talent-management` | Talent Management |
| `/industries` | Industries Overview |
| `/industries/energy` | Energy & Oil and Gas |
| `/industries/utilities` | Utilities |
| `/industries/healthcare` | Healthcare & Life Sciences |
| `/industries/telecom` | Telecommunications |
| `/industries/manufacturing` | Manufacturing |
| `/industries/professional-services` | Professional Services |
| `/industries/high-tech` | High Technology & IT |
| `/industries/education` | Education |
| `/industries/nonprofit` | Nonprofit |
| `/industries/home-services` | Home & Business Services |

---

## Deploy to Vercel (Recommended)

### CLI

```bash
npm install -g vercel
vercel --prod
```

### Dashboard

1. Push code to GitHub
2. Go to vercel.com → New Project → Import repo
3. Framework auto-detected as Next.js
4. Click Deploy

### Add domain (coldsunglobal.com)

1. Vercel Dashboard → Settings → Domains
2. Add coldsunglobal.com + www.coldsunglobal.com
3. Update DNS at your registrar with Vercel's records
4. SSL auto-provisioned

---

## Deploy to VPS / Self-Hosted

```bash
npm run build
npm start               # port 3000

# PM2 (recommended)
npm install -g pm2
pm2 start npm --name "coldsunglobal" -- start
pm2 save && pm2 startup
```

Nginx reverse proxy:
```nginx
server {
  listen 80;
  server_name coldsunglobal.com www.coldsunglobal.com;
  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
```

---

## Customization Guide

### Colors — src/app/globals.css
```css
:root {
  --navy: #04365f;
  --orange: #f68900;
  --navy-deep: #02243f;
}
```

### Logo — src/components/Nav.tsx + Footer.tsx
Replace the CSS initials block with an Image tag pointing to your logo file.

### Contact Form — src/app/contact/page.tsx
Currently HTML-only. Integrate with:
- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` to the form
- **Resend**: `npm install resend` — add API route in `src/app/api/contact/route.ts`
- **HubSpot**: Embed HubSpot form script

### Leadership — src/app/leadership/page.tsx
Replace "Erik" placeholder with real name, title, photo, and bio.

### Client Logos — src/app/page.tsx + src/app/clients/page.tsx
Add logo images to `/public/logos/` and swap the text-only client names.

### Blog/CMS — src/app/resources/page.tsx
Static cards currently. Integrate Contentful, Sanity, or Notion for dynamic content.

### Analytics
Add to src/app/layout.tsx:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### New Pages
Use the InnerPage component for consistent quick pages:
```tsx
import InnerPage from "@/components/InnerPage";
export default function MyPage() {
  return <InnerPage
    label="Label"
    headline="Headline"
    headlineAccent="Accent."
    subheadline="Sub..."
    intro="Intro..."
    sections={[{title:"T",body:"B"}]}
    ctaHeadline="CTA"
    ctaBody="Body."
    ctaLabel="Button →"
  />;
}
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Nav + Footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # CSS variables + animations
│   ├── sitemap.ts          # XML sitemap
│   ├── robots.ts           # robots.txt
│   ├── not-found.tsx       # 404 page
│   ├── about/
│   ├── leadership/
│   ├── contact/
│   ├── clients/
│   ├── resources/
│   ├── solutions/          # index + salesforce, agentforce, field-service,
│   │                       #   revenue-management, erp, servicenow
│   ├── services/           # index + consulting, implementation, managed-services,
│   │                       #   change-management, migration, training, talent-management
│   └── industries/         # index + energy, utilities, healthcare, telecom,
│                           #   manufacturing, professional-services, high-tech,
│                           #   education, nonprofit, home-services
└── components/
    ├── Nav.tsx             # Full nav with dropdowns (desktop + mobile)
    ├── Footer.tsx          # Footer with CTA band + links
    └── InnerPage.tsx       # Reusable page template
```

---

## Cold Sun Group

```
Cold Sun Global (coldsunglobal.com)   ← Brand & Global Presence
        ↓
Cold Sun Capital (coldsuncapital.com)  ← Ownership & Investment
        ↓
Cold Sun Enterprise (coldsunenterprise.com) ← Delivery Engine
        ↓
Regions: NA · UK · Netherlands · India
```

---

© 2025 Cold Sun Global. Part of the Cold Sun Group.
