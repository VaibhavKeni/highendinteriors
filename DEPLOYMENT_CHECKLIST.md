# Vercel Deployment Checklist with SEO

## Pre-Deployment

- [ ] All code committed to GitHub
- [ ] Build passes locally: `npm run build`
- [ ] No console errors or warnings
- [ ] Environment variables ready:
  - [ ] GMAIL_USER
  - [ ] GMAIL_PASSWORD
  - [ ] SITE_URL (optional)

## Vercel Setup

- [ ] Create Vercel account at https://vercel.com
- [ ] Connect GitHub repository
- [ ] Configure environment variables in Vercel dashboard
- [ ] Deploy project
- [ ] Verify deployment at vercel-generated URL

## Domain Configuration

- [ ] Add custom domain in Vercel Settings → Domains
- [ ] Update DNS records in GoDaddy:
  - [ ] Add CNAME record pointing to Vercel
  - [ ] Or update nameservers to Vercel's
- [ ] Wait for DNS propagation (up to 48 hours)
- [ ] Verify domain is working

## SEO Setup

### Files Verification
- [ ] `/public/robots.txt` exists
- [ ] `/public/sitemap.xml` exists
- [ ] `/public/favicon.ico` exists
- [ ] `/public/og-image.jpg` exists (1200x630px)
- [ ] `/public/twitter-image.jpg` exists (1200x630px)

### Google Search Console
- [ ] Create account at https://search.google.com/search-console
- [ ] Add property: https://highendinteriors.co.in
- [ ] Verify ownership (DNS or HTML file method)
- [ ] Submit sitemap: https://highendinteriors.co.in/sitemap.xml
- [ ] Check indexing status
- [ ] Monitor for crawl errors

### Google Analytics
- [ ] Create account at https://analytics.google.com
- [ ] Get tracking ID (GA_ID)
- [ ] Add tracking code to app/layout.tsx
- [ ] Verify tracking is working

### Bing Webmaster Tools
- [ ] Create account at https://www.bing.com/webmasters
- [ ] Add site: https://highendinteriors.co.in
- [ ] Submit sitemap

## Testing & Verification

### SEO Testing
- [ ] Test with Google Mobile-Friendly Test
- [ ] Check PageSpeed Insights score
- [ ] Validate schema markup at schema.org
- [ ] Test Open Graph tags on Facebook
- [ ] Test Twitter cards on Twitter

### Functionality Testing
- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Contact forms working
- [ ] Email sending working
- [ ] WhatsApp links working
- [ ] Navigation working on mobile

### Performance Testing
- [ ] Core Web Vitals check
- [ ] Lighthouse score > 90
- [ ] Page load time < 3 seconds
- [ ] Mobile performance good

## Post-Deployment

- [ ] Monitor Google Search Console daily for first week
- [ ] Check Google Analytics for traffic
- [ ] Monitor Vercel Analytics for errors
- [ ] Set up email alerts for errors
- [ ] Create backup of code and database

## Ongoing Maintenance

- [ ] Update sitemap when adding new pages
- [ ] Monitor keyword rankings weekly
- [ ] Check for 404 errors monthly
- [ ] Update meta descriptions quarterly
- [ ] Add new blog content regularly
- [ ] Monitor backlinks
- [ ] Update schema markup as needed

## Important URLs

- Vercel Dashboard: https://vercel.com/dashboard
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com
- Bing Webmaster Tools: https://www.bing.com/webmasters
- PageSpeed Insights: https://pagespeed.web.dev
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

## Support Contacts

- Vercel Support: https://vercel.com/support
- Google Search Central: https://developers.google.com/search
- Next.js Documentation: https://nextjs.org/docs

---

**Deployment Date:** _______________
**Deployed By:** _______________
**Notes:** _______________
