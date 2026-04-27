import type { Metadata } from 'next'

export const generatePageMetadata = (
  title: string,
  description: string,
  path: string,
  keywords?: string
): Metadata => {
  const baseUrl = 'https://highendinteriors.co.in'
  const fullUrl = `${baseUrl}${path}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: fullUrl,
      siteName: 'HIGHEND Interiors',
      locale: 'en_IN',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/twitter-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  }
}
