import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import './styles/globals.css'

const BackToTop = dynamic(() => import('./components/BackToTop'), { ssr: false })

export const metadata: Metadata = {
  title: 'Best Interior Designer in Mumbai | HIGHEND Interiors',
  description: 'Transform your space with HIGHEND Interiors. Expert interior design for homes & offices in Mumbai. Modular kitchens, false ceilings, custom furniture. 15+ years | 500+ projects | 5★ rated.',
  keywords: 'interior designers near me, best interior designer in Mumbai, home interior design services, residential interior designer Mumbai, commercial interior designer Mumbai, luxury interior designers Mumbai, flat interior design Mumbai, office interior design services, turnkey interior solutions Mumbai, affordable interior designers near me, interior designer in Andheri, interior designer in Thane, interior designer in Navi Mumbai, interior designer in Borivali, interior designer near Bandra, interior decorator Mumbai, home renovation Mumbai, kitchen interior designer Mumbai, 2BHK interior design cost Mumbai, modular kitchen design Mumbai, wardrobe design services Mumbai, living room interior design ideas, bedroom interior design services, office cabin interior design, false ceiling design Mumbai, TV unit design modern, small house interior design, cost of interior design for 2BHK in Mumbai, best budget interior designer in Mumbai, modern interior design ideas for small flats, how much does home interior cost in Mumbai, latest interior design trends in India, low budget home interior design ideas, interior design ideas 2026, modern home decor ideas India, small space interior design tips, vastu tips for home interior, color combinations for living room, trending kitchen designs India, bedroom lighting ideas, luxury villa interior designers Mumbai, premium home interior designers, low budget interior designers Mumbai, affordable home interior design, corporate office interior design Mumbai, startup office design ideas, Interior Decorators In Mumbai, Commercial Interior Design In Mumbai, Residential Interior Designers In Mumbai, Living Room Interior Design In Mumbai, Kitchen Interior Design In Mumbai, Bedroom Interior Design In Mumbai, Shop Interior Design In Mumbai, Office Interior Design In Mumbai, Furniture Designers In Mumbai, Home Interior Designer In Mumbai, Best Interior Designers In Mumbai, Interior Designers In Mumbai, Interior Designer In Vile Parle Mumbai',
  authors: [{ name: 'HIGHEND Interiors' }],
  metadataBase: new URL('https://highendinteriors.co.in'),
  openGraph: {
    title: 'Best Interior Designer in Mumbai | HIGHEND Interiors',
    description: 'Transform your space with HIGHEND Interiors. Expert interior design for homes & offices in Mumbai. Modular kitchens, false ceilings, custom furniture. 15+ years | 500+ projects | 5★ rated.',
    type: 'website',
    url: 'https://highendinteriors.co.in',
    siteName: 'HIGHEND Interiors',
    locale: 'en_IN',
    images: [
      {
        url: 'https://highendinteriors.co.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HIGHEND Interiors - Best Interior Designer in Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Interior Designer in Mumbai | HIGHEND Interiors',
    description: 'Transform your space with HIGHEND Interiors. Expert interior design for homes & offices in Mumbai. 15+ years | 500+ projects | 5★ rated.',
    images: ['https://highendinteriors.co.in/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "HIGHEND Interiors",
              "image": "https://highendinteriors.co.in/logo.png",
              "@id": "https://highendinteriors.co.in",
              "url": "https://highendinteriors.co.in",
              "telephone": "+91-83558-88976",
              "email": "highendinteriors9@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5, Gulshan Apartment, Dixit Road",
                "addressLocality": "Vile Parle (East)",
                "addressRegion": "Mumbai",
                "postalCode": "400057",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.0760,
                "longitude": 72.8777
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.instagram.com/highend_interiors9",
                "https://www.facebook.com/profile.php?id=100063596333131"
              ],
              "priceRange": "₹₹₹",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "450"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
        <BackToTop />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}
