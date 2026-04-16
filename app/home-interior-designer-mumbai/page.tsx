'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Home Interior Designer In Mumbai"
    heading="Home Interior Designer In Mumbai"
    subheading="Your dream home awaits — HIGHEND Interiors, Mumbai's trusted home interior designers"
    description="HIGHEND Interiors is Mumbai's trusted home interior design firm with 15+ years of experience transforming homes across the city. We offer complete home interior design services — from initial concept and 3D visualization to final execution and handover. Our team works closely with you to understand your lifestyle, preferences, and budget to create a home that is uniquely yours."
    services={[
      { icon: '🏠', title: 'Complete Home Design', desc: 'End-to-end interior design for your entire home.' },
      { icon: '🎨', title: '3D Visualization', desc: 'See your home before work begins with photorealistic 3D renders.' },
      { icon: '🛋️', title: 'Living & Dining', desc: 'Beautiful living and dining room designs for family spaces.' },
      { icon: '🛏️', title: 'All Bedrooms', desc: 'Master, guest, and kids bedroom design solutions.' },
      { icon: '🪑', title: 'Kitchen & Utility', desc: 'Functional modular kitchens and utility area designs.' },
      { icon: '🚿', title: 'Bathrooms', desc: 'Spa-like bathroom designs with premium fixtures.' },
    ]}
  />
}
