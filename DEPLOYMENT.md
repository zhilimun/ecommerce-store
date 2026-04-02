# Deployment Guide for Ecommerce Store

This guide explains how to deploy your e-commerce website to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. The Vercel CLI installed globally (optional): `npm install -g vercel`
3. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Methods

### Method 1: Git Integration (Recommended)

1. Push your code to GitHub (already done):
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project" and select your GitHub repository

4. Vercel will automatically detect this is a Next.js project and configure the build settings

5. Click "Deploy" and your site will be live with a URL like:
   `https://ecommerce-store.vercel.app`

### Method 2: Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Navigate to your project directory and run:
   ```bash
   cd ecommerce-store
   vercel
   ```

3. Follow the prompts to link your project and deploy

## Environment Variables

If you need environment variables for your deployment (API keys, etc.), you can add them in the Vercel dashboard under Settings > Environment Variables.

Common variables you might need:
- `NEXT_PUBLIC_API_URL`: Your backend API URL
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe publishable key
- `DATABASE_URL`: Database connection string

## Custom Domain

To connect a custom domain:

1. In your Vercel dashboard, go to your project
2. Go to Settings > Domains
3. Add your custom domain
4. Update your DNS records as instructed

## Build Information

- Framework: Next.js
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: `.next`

## Post-Deployment

Once deployed, your e-commerce store will be accessible at the URL provided by Vercel. The site includes:

- Fully responsive design
- Product catalog
- Shopping cart functionality
- Modern UI with Tailwind CSS
- Optimized performance

## Continuous Deployment

With Git integration, every push to the `main` branch will automatically trigger a new deployment. This allows for seamless updates to your e-commerce store.

## Troubleshooting

### Common Issues

1. **Build Failures**: Ensure all dependencies are listed in `package.json`
2. **Environment Variables**: Add any required environment variables in the Vercel dashboard
3. **API Routes**: Vercel automatically handles Next.js API routes

### Performance

Your site is optimized for performance with:
- Automatic image optimization
- Bundle splitting
- Server-side rendering
- Static generation where appropriate