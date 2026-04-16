'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Interior Designer In Andheri"
    heading="Interior Designer In Andheri, Mumbai"
    subheading="HIGHEND Interiors — serving Andheri East & West with premium interior design services"
    description="HIGHEND Interiors provides top-quality interior design services in Andheri, Mumbai. Located just minutes away in Vile Parle, we serve all of Andheri East and Andheri West with residential and commercial interior design. Whether you need a complete home makeover, modular kitchen, office interior, or shop design in Andheri, our experienced team delivers exceptional results on time and within budget."
    services={[
      { icon: '🏠', title: 'Home Interiors Andheri', desc: 'Complete home interior design for apartments in Andheri East & West.' },
      { icon: '🏢', title: 'Office Interiors Andheri', desc: 'Professional office design for Andheri\'s thriving business district.' },
      { icon: '🪑', title: 'Modular Kitchen', desc: 'Premium modular kitchens for Andheri homes.' },
      { icon: '🛏️', title: 'Bedroom Design', desc: 'Luxurious bedroom interiors for Andheri residences.' },
      { icon: '🛍️', title: 'Shop Interiors', desc: 'Attractive retail and shop interiors in Andheri.' },
      { icon: '🎨', title: 'Full Renovation', desc: 'Complete home renovation services in Andheri.' },
    ]}
  />
}
