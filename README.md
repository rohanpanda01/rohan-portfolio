# Rohan Kumar Panda — Portfolio

Premium dark personal portfolio for **Rohan Kumar Panda** — Software Developer
(Java • Spring Boot • React).

Built with:

- **React 19 + Vite**
- **Tailwind CSS v4**
- **Framer Motion** (page + scroll animations)
- **React Router** (case-study pages at `/project/:id`)
- **Lucide React** icons

## Quick start

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
├── public/
│   ├── resume.pdf                  # ← replace with the real resume
│   ├── favicon.svg
│   └── certificates/
│       ├── mean-react.pdf          # ← replace with the real certificate
│       └── java-fullstack.pdf      # ← replace with the real certificate
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx              # glass navbar + mobile menu
│   │   ├── Hero.jsx                # intro + animated Rohan.java code card
│   │   ├── About.jsx               # about + development approach
│   │   ├── Skills.jsx              # tech-stack categories
│   │   ├── Projects.jsx            # featured projects section
│   │   ├── ProjectCard.jsx         # interactive cards (live TOTP / auction mocks)
│   │   ├── Experience.jsx          # timeline + cloud exposure diagram
│   │   ├── Education.jsx           # MCA / BCA cards
│   │   ├── Certifications.jsx      # certificate cards + PDF modal
│   │   ├── Timeline.jsx            # career journey (scroll-growing line)
│   │   ├── Contact.jsx             # CTA + email copy + socials
│   │   ├── Footer.jsx
│   │   └── SectionHeading.jsx      # shared section header
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectDetails.jsx      # case studies: Problem → Solution → Flow → Result
│   ├── data/
│   │   ├── profile.js              # contact details, socials, resume URL
│   │   ├── projects.js             # projects + full case-study content
│   │   ├── skills.js
│   │   └── certifications.js
│   ├── App.jsx                     # routes + ambient background glows
│   ├── main.jsx
│   └── index.css                   # Tailwind v4 theme (dark glassmorphism)
├── package.json
└── README.md
```

## Before publishing — checklist

1. **`src/data/profile.js`** — update the GitHub and LinkedIn URLs (current values are
   sensible defaults) and confirm the email address.
2. **`public/resume.pdf`** — replace the generated placeholder with the real resume
   (keep the same filename, or update `resumeUrl` in `profile.js`).
3. **`public/certificates/*.pdf`** — replace both placeholder PDFs with the real
   certificate documents.
4. Run `npm run build` and deploy the `dist/` folder to Vercel, Netlify or
   GitHub Pages.

## Notes

- The contact section currently opens the visitor's mail client via `mailto:`.
  EmailJS or Formspree can be wired in later without changing the layout.
- Case-study pages are data-driven from `src/data/projects.js` — add a new object
  there and it automatically gets a page at `/project/<id>`.
- Animations are intentionally restrained so recruiters can scan content quickly.
