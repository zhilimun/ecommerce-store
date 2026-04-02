# Deploy to Vercel

To deploy your e-commerce website to Vercel, follow these steps:

## Prerequisites

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Log in to your Vercel account:
   ```bash
   vercel login
   ```
   This will open a browser window where you can log in to your Vercel account.

## Deploy the Project

1. Navigate to your project directory:
   ```bash
   cd /home/zhi/.openclaw/shared/Projects/WebsiteDev/ecommerce-store
   ```

2. Deploy to Vercel:
   ```bash
   vercel --prod
   ```
   
   Or for a preview deployment:
   ```bash
   vercel
   ```

## Alternative: Git Integration Method

Since your code is already in GitHub, you can also deploy directly from the Vercel dashboard:

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in to your account
3. Click "New Project"
4. Select your GitHub account and find the `ecommerce-store` repository
5. Vercel will automatically detect this is a Next.js project and configure it appropriately
6. Click "Deploy"

## After Deployment

Once deployed, Vercel will provide you with a URL for your live site. The URL will look something like:
- Production: `https://ecommerce-store.vercel.app`
- Preview: `https://ecommerce-store-git-[branch-name]-yourname.vercel.app`

## Environment Variables (if needed)

If you need to set environment variables:
1. Go to your project dashboard in Vercel
2. Go to Settings > Environment Variables
3. Add any required variables (like API keys, database URLs, etc.)

Your e-commerce website is fully configured and ready for deployment!