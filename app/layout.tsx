import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import './styles/globals.css'
import BackToTop from './components/BackToTop'

export const metadata: Metadata = {
  title: 'HIGHEND Interiors - Premium Interior Design in Mumbai | Home & Office Interiors',
  description: 'HIGHEND Interiors offers premium interior design services in Mumbai. Specializing in residential, commercial, modular kitchens, and bedroom designs. 15+ years experience, 500+ projects completed.',
  keywords: 'Interior Decorators In Mumbai, Commercial Interior Design In Mumbai, Residential Interior Designers In Mumbai, Living Room Interior Design In Mumbai, Kitchen Interior Design In Mumbai, Bedroom Interior Design In Mumbai, Shop Interior Design In Mumbai, Office Interior Design In Mumbai, Furniture Designers In Mumbai, Home Interior Designer In Mumbai, Best Interior Designers In Mumbai, Interior Designers In Mumbai, Interior Designer In Vile Parle Mumbai, interior design Mumbai, modular kitchen Mumbai, Vile Parle interior designer, residential interior, commercial interior',
  authors: [{ name: 'HIGHEND Interiors' }],
  openGraph: {
    title: 'HIGHEND Interiors - Premium Interior Design in Mumbai',
    description: 'Transform your space with HIGHEND Interiors. Expert interior design services for homes and offices in Mumbai.',
    type: 'website',
    url: 'https://highendinteriors.co.in',
    images: [
      {
        url: 'https://highendinteriors.co.in/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HIGHEND Interiors - Premium Interior Design in Mumbai',
    description: 'Transform your space with HIGHEND Interiors. Expert interior design services for homes and offices in Mumbai.',
    images: ['https://highendinteriors.co.in/twitter-image.jpg'],
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
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </head>
      <body>
        {children}
        <BackToTop />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}
