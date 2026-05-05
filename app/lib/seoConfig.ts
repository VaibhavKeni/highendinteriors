// SEO Configuration for HIGHEND Interiors
export const SEO_CONFIG = {
  domain: 'https://highendinteriors.co.in',
  siteName: 'HIGHEND Interiors',
  
  // Canonical URLs - Single source of truth
  canonicalUrls: {
    home: 'https://highendinteriors.co.in/',
    about: 'https://highendinteriors.co.in/about',
    services: 'https://highendinteriors.co.in/services',
    portfolio: 'https://highendinteriors.co.in/portfolio',
    gallery: 'https://highendinteriors.co.in/gallery',
    contact: 'https://highendinteriors.co.in/contact',
    testimonials: 'https://highendinteriors.co.in/testimonials',
    reviews: 'https://highendinteriors.co.in/reviews',
    blog: 'https://highendinteriors.co.in/blog',
    faq: 'https://highendinteriors.co.in/faq',
    privacyPolicy: 'https://highendinteriors.co.in/privacy-policy',
    terms: 'https://highendinteriors.co.in/terms',
  },

  // Open Graph defaults
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'HIGHEND Interiors',
    images: [
      {
        url: 'https://highendinteriors.co.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HIGHEND Interiors - Best Interior Designer in Mumbai',
      },
    ],
  },

  // Twitter Card defaults
  twitter: {
    card: 'summary_large_image',
    creator: '@highend_interiors9',
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  // Verification codes (if needed)
  verification: {
    google: '', // Add Google Search Console verification code
    yandex: '', // Add Yandex verification code
  },
}

// Helper function to get canonical URL
export function getCanonicalUrl(path: string): string {
  const key = path.replace(/\//g, '').replace(/-/g, '') || 'home'
  const urlKey = Object.keys(SEO_CONFIG.canonicalUrls).find(
    k => k.replace(/([A-Z])/g, '-$1').toLowerCase() === key
  )
  return urlKey ? SEO_CONFIG.canonicalUrls[urlKey as keyof typeof SEO_CONFIG.canonicalUrls] : `${SEO_CONFIG.domain}${path}`
}
