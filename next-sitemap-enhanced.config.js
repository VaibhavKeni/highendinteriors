// next-sitemap.config.js - Enhanced Sitemap Configuration
module.exports = {
  siteUrl: 'https://highendinteriors.co.in',
  generateRobotsTxt: true,
  sitemapSize: 50000,
  changefreq: 'weekly',
  priority: 0.7,
  
  // Exclude paths
  exclude: [
    '/admin',
    '/private',
    '/404',
    '/500',
    '/*.json$',
    '/api/*',
    '/checkout',
    '/cart',
    '/account'
  ],

  // Transform function to customize entries
  transform: async (config, path) => {
    let priority = 0.7
    let changefreq = 'weekly'

    // Homepage - highest priority
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    }
    // Main service pages
    else if (['/services', '/portfolio', '/gallery', '/about', '/contact'].includes(path)) {
      priority = 0.9
      changefreq = 'weekly'
    }
    // Blog posts
    else if (path.startsWith('/blog')) {
      priority = 0.8
      changefreq = 'monthly'
    }
    // Location pages
    else if (path.includes('interior-designer') || path.includes('mumbai')) {
      priority = 0.85
      changefreq = 'weekly'
    }
    // Other pages
    else {
      priority = 0.7
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },

  // Additional sitemaps
  additionalSitemaps: [
    'https://highendinteriors.co.in/sitemap-blog.xml',
    'https://highendinteriors.co.in/sitemap-locations.xml',
  ],

  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private', '/api', '/checkout'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://highendinteriors.co.in/sitemap.xml',
      'https://highendinteriors.co.in/sitemap-blog.xml',
    ],
  },
}
