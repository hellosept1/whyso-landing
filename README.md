```md
# WhySo — Landing (Next.js + Tailwind)

This is a minimal landing page for the WhySo MVP, built with Next.js and Tailwind CSS.

## Quick start (local)

1. Clone the repo (or create files via GitHub UI)

```bash
npm install
npm run dev
```

Open http://localhost:3000 to preview.

## Deploy to Vercel

1. Create a GitHub repo and push these files (or create a new repo via GitHub web UI and add files manually).
2. Login to Vercel and **Import Project** → select your GitHub repo.
3. Vercel will detect Next.js and set build command automatically (`npm run build`).
4. After deploy, in your Vercel project add the custom domain `whyso.live` and follow the DNS instructions.

## Email capture

Currently the signup stores emails to `localStorage` for an MVP quick start. Replace the form submission with Mailchimp/Formspree/Supabase when you are ready to capture emails on the server.

## Next steps
- Add a real email backend (Mailchimp, Supabase, ConvertKit)
- Replace local knight SVG with custom logo
- Build the interactive chess "justify your move" app (Next milestone)
```
