# Ephvex Studio

A video production portfolio and brand site for Ephvex Studio, built with React, Tailwind CSS, and React Router.

## Tech Stack
- React (Vite)
- Tailwind CSS
- React Router
- EmailJS (contact form)
- Cloudinary (video and image hosting)

## Pages
- **Home** — hero, intro, "What We Create" overview, highlight reel
- **Portfolio** — AI UGC, AI Product (video + photography), and AI Pixar sections
- **Contact** — contact form plus email, WhatsApp, Instagram, and LinkedIn links

## Adding New Videos
Videos are managed in `src/data/video.js`. To add a new one, add an entry to the array with a unique `id`, `title`, `category` (`ugc`, `product-video`, `product-photo`, or `pixar`), `type` (`video` or `image`), and the Cloudinary `url`.

## Development
\`\`\`bash
npm install
npm run dev
\`\`\`

## Built by
[Daviez](https://porfolio-daviez.vercel.app/)