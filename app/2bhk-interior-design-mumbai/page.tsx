'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="2BHK Interior Design Mumbai"
    heading="2BHK Interior Design In Mumbai"
    subheading="Affordable & stylish 2BHK interior design by HIGHEND Interiors — starting from ₹4 Lakhs"
    description="HIGHEND Interiors specializes in 2BHK interior design across Mumbai. We transform standard 2BHK apartments into beautiful, functional homes that maximize every square foot. Our 2BHK packages include modular kitchen, wardrobes for both bedrooms, living room with TV unit and false ceiling, and complete decor styling. Transparent pricing with no hidden costs. Most 2BHK projects completed in 45-60 days."
    services={[
      { icon: '🪑', title: 'Modular Kitchen', desc: 'Smart modular kitchen with premium fittings for your 2BHK.' },
      { icon: '🛏️', title: 'Both Bedrooms', desc: 'Complete bedroom design with wardrobes for both rooms.' },
      { icon: '🛋️', title: 'Living Room', desc: 'TV unit, false ceiling, and complete living room design.' },
      { icon: '🚿', title: 'Bathrooms', desc: 'Modern bathroom upgrades with quality fixtures.' },
      { icon: '💰', title: 'Fixed Price Packages', desc: 'Transparent 2BHK packages starting from ₹4 Lakhs.' },
      { icon: '⏱️', title: '45-Day Delivery', desc: 'Most 2BHK projects completed within 45-60 days.' },
    ]}
  />
}
