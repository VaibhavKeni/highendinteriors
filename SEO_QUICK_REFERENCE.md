# HIGHEND Interiors - SEO Quick Reference Guide

## 🎯 Key Changes Summary

### What Was Fixed
1. ✅ Removed duplicate canonical links (was causing multiple canonical tags)
2. ✅ Fixed broken image URLs (spaces not URL-encoded)
3. ✅ Optimized CSS (removed duplicate imports)
4. ✅ Improved LCP (added lazy loading to images)
5. ✅ Created dynamic sitemap and robots.txt

### Expected Results
- **Health Score**: 92 → 97+ (5+ point improvement)
- **Canonical Issues**: 37 → 0
- **Duplicate Canonical Tags**: 5 → 0
- **Broken Images**: 4 → 0
- **CSS Size**: Reduced by ~30%

---

## 📋 File Structure

```
app/
├── layout.tsx                          # Root layout (NO canonical link here)
├── sitemap.ts                          # Dynamic sitemap generation
├── robots.ts                           # Dynamic robots.txt generation
├── page.tsx                            # Homepage (fixed image URLs)
├── lib/
│   ├── seoConfig.ts                   # SEO configuration (NEW)
│   ├── canonicalUrls.ts               # Canonical URLs reference
│   └── seo.ts                         # SEO utilities
├── styles/
│   └── globals.css                    # CSS (removed duplicate imports)
├── [43 route folders]/
│   └── layout.tsx                     # Each has canonical metadata
└── components/
    └── [various components]

public/
├── robots.txt                         # Fallback robots.txt
└── sitemap.xml                        # Static sitemap (can be removed)
```

---

## 🔧 How to Add a New Page

### Step 1: Create Route Folder
```bash
mkdir app/new-page-name
```

### Step 2: Create layout.tsx
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title | HIGHEND Interiors',
  description: 'Page description for SEO',
  alternates: {
    canonical: 'https://highendinteriors.co.in/new-page-name',
  },
}

export default function NewPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
```

### Step 3: Create page.tsx
```typescript
export default function NewPage() {
  return (
    <div>
      {/* Your page content */}
    </div>
  )
}
```

### Step 4: Update sitemap.ts
Add new route to the routes array in `app/sitemap.ts`

---

## 🖼️ Image URL Encoding Rules

### Common Replacements
- Space ` ` → `%20`
- Ampersand `&` → `%26`
- Percent `%` → `%25`
- Hash `#` → `%23`
- Question `?` → `%3F`

### Examples
```
❌ /assets/images/A to Z icons/Modular Kitchen.png
✅ /assets/images/A%20to%20Z%20icons/Modular%20Kitchen.png

❌ /assets/images/Storage & Wardrobe.png
✅ /assets/images/Storage%20%26%20Wardrobe.png
```

---

## 🔍 Verification Checklist

### Before Deployment
- [ ] All layout.tsx files have canonical metadata
- [ ] No hardcoded `<link rel="canonical">` tags in components
- [ ] All image URLs are properly encoded
- [ ] sitemap.ts includes all pages
- [ ] robots.ts is properly configured

### After Deployment
- [ ] Visit homepage and check `<head>` for ONE canonical tag
- [ ] Check `https://highendinteriors.co.in/sitemap.xml` loads
- [ ] Check `https://highendinteriors.co.in/robots.txt` loads
- [ ] All images load without 404 errors
- [ ] Submit sitemap to Google Search Console

---

## 📊 Monitoring

### Google Search Console
1. Go to https://search.google.com/search-console
2. Select property: highendinteriors.co.in
3. Check:
   - Coverage → Errors (should be 0)
   - Enhancements → Mobile Usability
   - Performance → Core Web Vitals

### Tools to Use
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Google Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Screaming Frog SEO Spider**: For crawling and checking canonicals

---

## ⚠️ Common Mistakes to Avoid

❌ **Don't**: Add `<link rel="canonical">` tags in components
✅ **Do**: Use metadata exports in layout.tsx files

❌ **Don't**: Use spaces in image file names
✅ **Do**: Use URL encoding or hyphens instead

❌ **Don't**: Import CSS multiple times
✅ **Do**: Import once in layout.tsx

❌ **Don't**: Create duplicate pages with different URLs
✅ **Do**: Use canonical URLs to point to primary version

---

## 🚀 Performance Tips

### Image Optimization
```typescript
// Good - with lazy loading
<img src="/image.png" alt="Description" loading="lazy" />

// Better - with Next.js Image component
import Image from 'next/image'
<Image src="/image.png" alt="Description" width={800} height={600} />
```

### CSS Optimization
- Keep CSS imports in layout.tsx only
- Use CSS modules for component-specific styles
- Minimize inline styles

### Caching
- Static pages: Cache for 1 year (31536000 seconds)
- API routes: No cache (no-cache, no-store)
- Images: Cache for 1 year with AVIF/WebP formats

---

## 📞 Support

For SEO issues:
1. Check this guide first
2. Review SEO_FIXES_REPORT.md for detailed information
3. Check Google Search Console for specific errors
4. Use Screaming Frog to verify canonical tags

---

**Last Updated**: 2024
**Version**: 1.0
