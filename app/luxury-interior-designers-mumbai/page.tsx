'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Luxury Interior Designers Mumbai"
    heading="Luxury Interior Designers In Mumbai"
    subheading="HIGHEND Interiors — Mumbai's premium luxury interior design studio"
    description="HIGHEND Interiors is Mumbai's trusted luxury interior design firm. We create opulent, sophisticated spaces using the finest materials — Italian marble, premium hardwood, designer wallpapers, and bespoke furniture. Our luxury interior projects include high-end residences, penthouses, villas, luxury offices, and premium retail spaces. Every luxury project is handled with meticulous attention to detail and uncompromising quality standards."
    services={[
      { icon: '👑', title: 'Luxury Residences', desc: 'Opulent home interiors with premium materials and bespoke designs.' },
      { icon: '🏰', title: 'Penthouse & Villa', desc: 'Exclusive penthouse and villa interior design.' },
      { icon: '💎', title: 'Premium Materials', desc: 'Italian marble, designer wallpapers, and luxury finishes.' },
      { icon: '🛋️', title: 'Bespoke Furniture', desc: 'Custom-crafted furniture pieces for luxury spaces.' },
      { icon: '💡', title: 'Luxury Lighting', desc: 'Designer lighting solutions for premium interiors.' },
      { icon: '🎨', title: 'Art & Decor', desc: 'Curated art and decor for a complete luxury experience.' },
    ]}
  />
}
