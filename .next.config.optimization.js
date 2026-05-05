// Performance optimization settings for production builds
module.exports = {
  // Enable SWC minification for faster builds
  swcMinify: true,
  
  // Disable source maps in production to reduce bundle size
  productionBrowserSourceMaps: false,
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  
  // Disable ETags for faster responses
  generateEtags: false,
  
  // Compress responses
  compress: true,
  
  // Remove powered by header
  poweredByHeader: false,
  
  // Optimize chunks
  experimental: {
    optimizePackageImports: ['bootstrap', 'animate.css'],
  },
}
