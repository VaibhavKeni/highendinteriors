'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Interior Designers In Mumbai"
    heading="Interior Designers In Mumbai"
    subheading="HIGHEND Interiors — full-service interior designers serving all of Mumbai"
    description="HIGHEND Interiors provides comprehensive interior design services across Mumbai. Whether you are renovating your home, setting up a new office, or designing a retail space, our experienced team delivers exceptional results. We serve clients across all Mumbai neighborhoods including Vile Parle, Andheri, Bandra, Juhu, Santacruz, Borivali, Thane, and beyond. Contact us today for a free consultation."
    services={[
      { icon: '🏠', title: 'Residential Design', desc: 'Complete home interior design for all types of residences.' },
      { icon: '🏢', title: 'Commercial Design', desc: 'Professional commercial interior solutions for businesses.' },
      { icon: '🪑', title: 'Modular Furniture', desc: 'Custom modular furniture for kitchens, bedrooms, and offices.' },
      { icon: '🎨', title: 'Turnkey Projects', desc: 'Complete turnkey interior solutions from design to delivery.' },
      { icon: '📐', title: 'Space Planning', desc: 'Expert space planning to maximize every square foot.' },
      { icon: '💡', title: 'Consultation', desc: 'Professional design consultation and project guidance.' },
    ]}
  />
}
