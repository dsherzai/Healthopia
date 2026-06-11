# Healthopia

The practice studio for NEURO Academy coaches — limitless AI-simulated clients,
a living resource library, and mentor feedback.

## Architecture

- **Frontend:** React + Vite + Tailwind, deployed on Vercel
- **AI engine:** `/api/claude.js` — a Vercel serverless function that proxies
  requests to the Anthropic API. The API key lives only in Vercel environment
  variables, never in the browser.
- **Accounts & saved progress (next milestone):** Supabase. The client is
  already scaffolded in `src/lib/supabase.js` and activates when env vars are set.

## Environment variables (Vercel → Project → Settings → Environment Variables)

| Name | Required | Purpose |
| --- | --- | --- |
| `ANTHROPIC_API_KEY` | Yes | Powers the scenario engine and resource generator. Create at console.anthropic.com |
| `CLAUDE_MODEL` | No | Override the default model |
| `VITE_SUPABASE_URL` | Later | Enables coach accounts |
| `VITE_SUPABASE_ANON_KEY` | Later | Enables coach accounts |

## Local development

```
npm install
npm run dev
```

Note: `/api/claude.js` only runs on Vercel (or `vercel dev`). In plain `vite dev`,
AI features will show a friendly "not configured" error.

## Custom domain

Point healthopia.coach at Vercel:
- A record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`

Then add the domain under Vercel → Project → Settings → Domains.
