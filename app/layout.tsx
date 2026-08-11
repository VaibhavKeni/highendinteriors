import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import './styles/globals.css'

export const metadata: Metadata = {
  title: 'Best Interior Designer in Mumbai | HIGHEND Interiors | Expert Home & Office Design',
  description: 'Transform your space with HIGHEND Interiors. Expert interior design for homes & offices in Mumbai. Modular kitchens, false ceilings, custom furniture. 15+ years | 500+ projects | 5★ rated. Free consultation & 3D visualization.',
  keywords: 'interior design, interior, home designer, home interior design, home interior, bedroom interior design, interior decoration, interior design course, interior designer near me, house interior design, kitchen interior design, living room interior design, hall interior design, office interior design, room interior design, modern interior design, scandinavian interior design, interior designers, minimalist living room, contemporary interior design, bedroom interior, living room interior, scandinavian interior, interior designer, interior design services, interior decorator, interior design service, interior design companies, interior design company, kitchen design services, residential interior design, interior design firms, interior design consultation, interior design consultant, office design services, commercial interior design, commercial interior designer, full service interior design, kitchen designer, house designer, design services, home decor ideas, interior design ideas, interior design styles, kitchen design ideas, living room decor ideas, bedroom ideas for couples, bathroom design ideas, bathroom ideas, bathroom colors, accent wall ideas, living room paint ideas, living room wall decor, kitchen decor ideas, office decor ideas, office decor ideas for work, office decoration ideas, patio decor ideas, dining room decor ideas, dining room ideas, bedroom wall decor ideas, mantel decor ideas, wall design ideas, entryway wall decor, kitchen island decor, small apartment ideas, small living room ideas, small living room ideas with tv, guest bedroom ideas, luxury bedroom, moody bedroom ideas, preppy bedroom, bohemian style bedroom, master bathroom ideas, shower niche ideas, man cave ideas, modern home office, living room with tv, grey couch living room ideas, light blue couch, scandinavian living room, victorian living room, modern cottage house, nancy meyers aesthetic, eclectic style, traditional furniture, wainscotting ideas, wall trim molding, diy home decor, house ideas, how to hang curtains, how to hide tv wires, how to paint tile, hide cords on wall, feng shui bedroom layout, king bed pillow arrangement, emphasis in interior design, unity principle of design, interior design software, home design software, kitchen design app, kitchen design tool, bathroom design tool, live home 3d, ai interior designer, virtual interior design service, interior design packages, interior design companies near me, apartment interior design, residential design, top interior designers, restaurant interior designers, hire an interior designer, transitional interior design, interior designers in mumbai, interior designer in andheri, interior designer in thane, interior designer in navi mumbai, interior designer in borivali, interior designer near bandra, interior designer in vile parle, interior designer in powai, interior designer in worli, interior designer in fort, interior designer in colaba',
  authors: [{ name: 'HIGHEND Interiors' }],
  metadataBase: new URL('https://highendinteriors.co.in'),
  openGraph: {
    title: 'Best Interior Designer in Mumbai | HIGHEND Interiors | Expert Home & Office Design',
    description: 'Transform your space with HIGHEND Interiors. Expert interior design for homes & offices in Mumbai. Modular kitchens, false ceilings, custom furniture. 15+ years | 500+ projects | 5★ rated. Free consultation & 3D visualization.',
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
    title: 'Best Interior Designer in Mumbai | HIGHEND Interiors | Expert Home & Office Design',
    description: 'Transform your space with HIGHEND Interiors. Expert interior design for homes & offices in Mumbai. 15+ years | 500+ projects | 5★ rated. Free consultation & 3D visualization.',
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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-61RG9NENEL"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-61RG9NENEL');
            `,
          }}
        />
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}
