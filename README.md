# Shakir Kamal — Portfolio

Personal portfolio and case studies, live at [shakir-kamal.vercel.app](https://shakir-kamal.vercel.app).

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

## Editing content

Almost everything on the site is data, so most updates don't touch components:

| What | Where |
| --- | --- |
| Name, role, tagline, email, links, availability | `src/lib/site.ts` |
| Projects and the flagship card | `src/lib/projects.ts` |
| About, experience and stack | `src/lib/profile.ts` |
| SureKeys case study | `src/app/work/surekeys/page.tsx` |
| CV download | `public/shakir-kamal-cv.pdf` |
| Colours (light and dark) | tokens at the top of `src/app/globals.css` |

Set `available: false` in `site.ts` to hide the "Currently taking on new roles" note.

## Contact form

The form sends email through [Resend](https://resend.com) from a server action
(`src/app/actions/contact.ts`). Copy `.env.example` to `.env.local` and set
`RESEND_API_KEY`, and add the same variable in the Vercel project settings for production.
Without a key, the form shows visitors your email address instead.

With Resend's shared `onboarding@resend.dev` sender, mail can only go to the email address of
your Resend account. To send from your own domain, verify it in Resend and set
`CONTACT_FROM_EMAIL`.
