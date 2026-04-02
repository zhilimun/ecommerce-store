# Elegant Commerce - E-commerce Website

A modern, responsive e-commerce website built with Next.js and Tailwind CSS.

## Features

- Responsive design for all devices
- Product catalog with filtering
- Detailed product pages
- Shopping cart functionality
- Modern UI/UX design
- Optimized performance

## Tech Stack

- Next.js - React framework for production
- Tailwind CSS - Utility-first CSS framework
- React Icons - Beautiful iconography

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Project Structure

```
├── pages/           # Next.js pages
│   ├── index.js     # Homepage
│   └── product/     # Product detail pages
├── components/      # Reusable components
├── styles/          # Global styles
└── public/          # Static assets
```

## Deployment

### Vercel Deployment (Recommended)

This project is configured for easy deployment on Vercel:

1. Push to GitHub (already done)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and select this repository
4. Vercel will automatically detect this is a Next.js project
5. Click "Deploy" and your site will be live

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Environment Variables

If you need environment variables, create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

Then update the values as needed.

### Local Production Build

To test the production build locally:
```bash
npm run build
npm start
```