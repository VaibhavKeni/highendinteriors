'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Bedroom Interior Design In Mumbai"
    heading="Bedroom Interior Design In Mumbai"
    subheading="Luxurious bedroom designs by HIGHEND Interiors — creating your perfect sanctuary in Mumbai"
    description="HIGHEND Interiors creates serene, luxurious bedrooms across Mumbai that provide the perfect sanctuary for rest and relaxation. Our bedroom designs combine comfort with elegance — from master bedrooms to children's rooms. We specialize in custom wardrobes, false ceilings, bed back panels, and complete bedroom styling. Every bedroom we design is a reflection of your personal style."
    services={[
      { icon: '🛏️', title: 'Master Bedroom', desc: 'Luxurious master bedroom designs with premium finishes.' },
      { icon: '👶', title: 'Kids Bedroom', desc: 'Fun, functional, and safe bedroom designs for children.' },
      { icon: '🚪', title: 'Wardrobe Design', desc: 'Custom wardrobes with smart storage and sliding doors.' },
      { icon: '✨', title: 'False Ceiling', desc: 'Elegant bedroom false ceilings with mood lighting.' },
      { icon: '🎨', title: 'Bed Back Panel', desc: 'Stunning headboard and back panel designs.' },
      { icon: '💡', title: 'Bedroom Lighting', desc: 'Ambient and task lighting for the perfect bedroom atmosphere.' },
    ]}
  />
}
