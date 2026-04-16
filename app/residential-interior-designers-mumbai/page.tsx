'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Residential Interior Designers In Mumbai"
    heading="Residential Interior Designers In Mumbai"
    subheading="Transform your home with Mumbai's finest residential interior designers — HIGHEND Interiors"
    description="HIGHEND Interiors specializes in residential interior design across Mumbai. We transform 1BHK, 2BHK, 3BHK, 4BHK apartments, villas, and bungalows into dream homes. Our residential design services cover every room — living room, bedroom, kitchen, bathroom, and more. We combine aesthetics with functionality to create homes that reflect your personality and lifestyle."
    services={[
      { icon: '🏠', title: '1BHK & 2BHK Design', desc: 'Smart space planning and design for compact apartments.' },
      { icon: '🏡', title: '3BHK & 4BHK Design', desc: 'Luxurious interiors for larger family homes.' },
      { icon: '🏰', title: 'Villa & Bungalow', desc: 'Premium interior design for villas and independent bungalows.' },
      { icon: '🛋️', title: 'Living Room', desc: 'Elegant living spaces perfect for family and entertaining.' },
      { icon: '🛏️', title: 'Bedroom Design', desc: 'Serene and luxurious bedrooms for quality rest.' },
      { icon: '🪑', title: 'Modular Kitchen', desc: 'Functional and beautiful modular kitchen solutions.' },
    ]}
  />
}
