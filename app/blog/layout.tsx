import type { Metadata } from 'next'
import { generatePageMetadata } from '@/app/lib/seo'

export const metadata: Metadata = generatePageMetadata(
  'Interior Design Blog | Tips, Ideas & Trends | HIGHEND Interiors',
  'Explore expert interior design tips, home decor ideas, design trends, and inspiration. Learn from our blog about modern design, space planning, and more.',
  '/blog',
  'interior design blog, home decor tips, interior design tips, design trends, home decoration ideas, interior design inspiration, modern design ideas, space planning tips'
)

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
