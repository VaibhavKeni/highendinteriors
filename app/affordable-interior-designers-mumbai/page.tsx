'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Affordable Interior Designers Mumbai"
    heading="Affordable Interior Designers In Mumbai"
    subheading="Quality interiors that fit your budget — HIGHEND Interiors, Mumbai"
    description="HIGHEND Interiors believes great interior design should be accessible to everyone. We offer affordable interior design packages for Mumbai homes and offices without compromising on quality. Our budget-friendly packages start from ₹50,000 for a single room and include complete design, material selection, and execution. We are transparent about pricing with no hidden costs. Get the best value for your interior design budget in Mumbai."
    services={[
      { icon: '💰', title: 'Budget Packages', desc: 'Affordable interior packages starting from ₹50,000.' },
      { icon: '🏠', title: '1BHK & 2BHK', desc: 'Cost-effective complete home interiors for compact apartments.' },
      { icon: '🪑', title: 'Modular Kitchen', desc: 'Quality modular kitchens at competitive prices.' },
      { icon: '🚪', title: 'Wardrobe Solutions', desc: 'Affordable custom wardrobes with quality materials.' },
      { icon: '✨', title: 'False Ceiling', desc: 'Budget-friendly false ceiling and lighting designs.' },
      { icon: '📋', title: 'Transparent Pricing', desc: 'No hidden costs — clear quotes before work begins.' },
    ]}
  />
}
