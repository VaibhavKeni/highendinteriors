'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Interior Designer In Thane"
    heading="Interior Designer In Thane"
    subheading="HIGHEND Interiors — premium interior design services for Thane homes and offices"
    description="HIGHEND Interiors extends its award-winning interior design services to Thane. We design beautiful homes, modern offices, and attractive retail spaces across Thane. Our team handles complete interior projects for 1BHK, 2BHK, 3BHK apartments and independent houses in Thane. With 15+ years of experience and 500+ completed projects, we bring Mumbai's best interior design expertise to Thane residents."
    services={[
      { icon: '🏠', title: 'Home Interiors Thane', desc: 'Complete residential interior design for Thane apartments and houses.' },
      { icon: '🏢', title: 'Office Design Thane', desc: 'Modern office interiors for Thane\'s growing business community.' },
      { icon: '🪑', title: 'Modular Kitchen', desc: 'Smart modular kitchen solutions for Thane homes.' },
      { icon: '🚪', title: 'Wardrobe Design', desc: 'Custom wardrobe and storage solutions.' },
      { icon: '✨', title: 'False Ceiling', desc: 'Elegant false ceiling designs with lighting.' },
      { icon: '🎨', title: 'Full Renovation', desc: 'Complete home renovation and makeover services.' },
    ]}
  />
}
