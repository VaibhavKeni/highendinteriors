'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Interior Designer In Borivali"
    heading="Interior Designer In Borivali, Mumbai"
    subheading="HIGHEND Interiors — trusted interior designers serving Borivali East & West"
    description="HIGHEND Interiors provides premium interior design services in Borivali, Mumbai. We serve Borivali East, Borivali West, and surrounding areas with complete residential and commercial interior solutions. From modular kitchens and wardrobes to full home renovations and office interiors, our team delivers quality craftsmanship and creative designs that transform your Borivali home or office."
    services={[
      { icon: '🏠', title: 'Home Interiors Borivali', desc: 'Complete home interior design for Borivali apartments.' },
      { icon: '🪑', title: 'Modular Kitchen', desc: 'Smart and stylish modular kitchens for Borivali homes.' },
      { icon: '🚪', title: 'Wardrobe & Storage', desc: 'Custom wardrobes and storage solutions.' },
      { icon: '🛋️', title: 'Living Room', desc: 'Beautiful living room designs with TV units and false ceilings.' },
      { icon: '🛏️', title: 'Bedroom Design', desc: 'Serene and stylish bedroom interiors.' },
      { icon: '🏢', title: 'Office Interiors', desc: 'Professional office design for Borivali businesses.' },
    ]}
  />
}
