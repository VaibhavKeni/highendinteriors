'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Furniture Designers In Mumbai"
    heading="Furniture Designers In Mumbai"
    subheading="Custom furniture design and manufacturing by HIGHEND Interiors — built for your space"
    description="HIGHEND Interiors offers custom furniture design and manufacturing services across Mumbai. We design and build bespoke furniture pieces that perfectly fit your space, style, and budget. From custom wardrobes and TV units to modular kitchen cabinets and office furniture, every piece is crafted with premium materials and expert craftsmanship. No off-the-shelf compromises — furniture built exactly for you."
    services={[
      { icon: '🚪', title: 'Custom Wardrobes', desc: 'Built-in wardrobes designed to maximize your storage space.' },
      { icon: '📺', title: 'TV Units', desc: 'Custom TV units and entertainment walls for living rooms.' },
      { icon: '🪑', title: 'Kitchen Cabinets', desc: 'Premium modular kitchen cabinets with quality hardware.' },
      { icon: '🛏️', title: 'Bed Designs', desc: 'Custom bed frames and headboards for your bedroom.' },
      { icon: '🖥️', title: 'Office Furniture', desc: 'Ergonomic and stylish office furniture solutions.' },
      { icon: '📚', title: 'Study & Storage', desc: 'Custom study tables, bookshelves, and storage units.' },
    ]}
  />
}
