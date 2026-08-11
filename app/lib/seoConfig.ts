// SEO Configuration for HIGHEND Interiors
export const SEO_CONFIG = {
  domain: 'https://highendinteriors.co.in',
  siteName: 'HIGHEND Interiors',
  
  // Advanced Keywords by Category - Research-Backed Data (Deduplicated)
  keywords: {
    // Ultra High Volume Keywords (100K+)
    ultraHighVolume: [
      'interior design',
      'interior',
      'home designer',
      'home interior design',
      'home interior',
      'bedroom interior design',
      'interior decoration'
    ],
    // High Volume Keywords (50K-100K)
    highVolume: [
      'interior design course',
      'interior designer near me',
      'house interior design',
      'kitchen interior design',
      'living room interior design',
      'hall interior design'
    ],
    // Medium-High Volume (25K-50K)
    mediumHighVolume: [
      'office interior design',
      'room interior design',
      'modern interior design',
      'scandinavian interior design',
      'interior designers',
      'minimalist living room',
      'contemporary interior design',
      'bedroom interior',
      'living room interior',
      'scandinavian interior'
    ],
    // Service-Based Keywords (Low Competition)
    serviceKeywords: [
      'interior designer',
      'interior design services',
      'interior decorator',
      'interior design service',
      'interior design companies',
      'interior design company',
      'kitchen design services',
      'residential interior design',
      'interior design firms',
      'interior design consultation',
      'interior design consultant',
      'office design services',
      'commercial interior design',
      'commercial interior designer',
      'full service interior design',
      'kitchen designer',
      'house designer',
      'design services'
    ],
    // Design Ideas & Inspiration (High Volume)
    designIdeas: [
      'home decor ideas',
      'interior design ideas',
      'interior design styles',
      'kitchen design ideas',
      'living room decor ideas',
      'bedroom ideas for couples',
      'bathroom design ideas',
      'bathroom ideas',
      'bathroom colors',
      'accent wall ideas',
      'living room paint ideas',
      'living room wall decor',
      'kitchen decor ideas',
      'office decor ideas',
      'office decor ideas for work',
      'office decoration ideas',
      'patio decor ideas',
      'dining room decor ideas',
      'dining room ideas',
      'bedroom wall decor ideas',
      'mantel decor ideas',
      'wall design ideas',
      'entryway wall decor',
      'kitchen island decor',
      'small apartment ideas',
      'small living room ideas',
      'small living room ideas with tv',
      'guest bedroom ideas',
      'luxury bedroom',
      'moody bedroom ideas',
      'preppy bedroom',
      'bohemian style bedroom',
      'master bathroom ideas',
      'shower niche ideas',
      'man cave ideas',
      'modern home office',
      'living room with tv',
      'grey couch living room ideas',
      'light blue couch',
      'scandinavian living room',
      'victorian living room',
      'modern cottage house',
      'nancy meyers aesthetic',
      'eclectic style',
      'traditional furniture',
      'wainscotting ideas',
      'wall trim molding',
      'diy home decor',
      'house ideas'
    ],
    // How-To & DIY Keywords
    howToKeywords: [
      'how to hang curtains',
      'how to hide tv wires',
      'how to paint tile',
      'hide cords on wall',
      'feng shui bedroom layout',
      'king bed pillow arrangement'
    ],
    // Design Principles & Concepts
    designPrinciples: [
      'emphasis in interior design',
      'unity principle of design'
    ],
    // Software & Tools Keywords
    softwareTools: [
      'interior design software',
      'home design software',
      'kitchen design app',
      'kitchen design tool',
      'bathroom design tool',
      'live home 3d',
      'ai interior designer',
      'virtual interior design service'
    ],
    // Specialized Keywords
    specialized: [
      'interior design packages',
      'interior design companies near me',
      'apartment interior design',
      'residential design',
      'top interior designers',
      'restaurant interior designers',
      'hire an interior designer',
      'transitional interior design'
    ],
    // Location-Based Keywords (Mumbai Focus)
    locationBased: [
      'interior designers in mumbai',
      'interior designer in andheri',
      'interior designer in thane',
      'interior designer in navi mumbai',
      'interior designer in borivali',
      'interior designer near bandra',
      'interior designer in vile parle',
      'interior designer in powai',
      'interior designer in worli',
      'interior designer in fort',
      'interior designer in colaba'
    ]
  },
  
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

// Helper function to get all keywords as string (deduplicated)
export function getAllKeywords(): string {
  const allKeywords = Object.values(SEO_CONFIG.keywords).flat()
  const uniqueKeywords = Array.from(new Set(allKeywords))
  return uniqueKeywords.join(', ')
}

// Helper function to get high priority keywords
export function getHighPriorityKeywords(): string {
  const priority = [
    ...SEO_CONFIG.keywords.ultraHighVolume,
    ...SEO_CONFIG.keywords.highVolume,
    ...SEO_CONFIG.keywords.serviceKeywords
  ]
  const uniqueKeywords = Array.from(new Set(priority))
  return uniqueKeywords.join(', ')
}

// Helper function to get design ideas keywords
export function getDesignIdeasKeywords(): string {
  return SEO_CONFIG.keywords.designIdeas.join(', ')
}
