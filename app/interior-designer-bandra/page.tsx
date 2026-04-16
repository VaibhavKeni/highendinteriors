'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Interior Designer Near Bandra"
    heading="Interior Designer Near Bandra, Mumbai"
    subheading="HIGHEND Interiors — premium interior design services near Bandra, Mumbai"
    description="HIGHEND Interiors serves clients near Bandra with world-class interior design services. Located in Vile Parle, just minutes from Bandra, we provide complete residential and commercial interior solutions for Bandra, Khar, Santacruz, and surrounding areas. Our team creates stunning homes and offices that combine Mumbai's cosmopolitan style with functional design. Contact us for a free home visit and consultation."
    services={[
      { icon: '🏠', title: 'Luxury Home Interiors', desc: 'Premium home interiors for Bandra\'s upscale residences.' },
      { icon: '🏢', title: 'Commercial Spaces', desc: 'Stylish offices and retail spaces near Bandra.' },
      { icon: '🪑', title: 'Modular Kitchen', desc: 'High-end modular kitchen designs.' },
      { icon: '🛋️', title: 'Living & Dining', desc: 'Elegant living and dining room interiors.' },
      { icon: '🎨', title: 'Interior Styling', desc: 'Complete interior styling and decor services.' },
      { icon: '🏡', title: 'Villa & Duplex', desc: 'Luxury villa and duplex interior design.' },
    ]}
  />
}
