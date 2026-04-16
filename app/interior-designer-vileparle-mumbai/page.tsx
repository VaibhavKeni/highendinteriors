'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Interior Designer In Vile Parle Mumbai"
    heading="Interior Designer In Vile Parle Mumbai"
    subheading="HIGHEND Interiors — Vile Parle's most trusted interior design studio since 2009"
    description="HIGHEND Interiors is located in the heart of Vile Parle East, Mumbai. As Vile Parle's most trusted interior design firm, we have transformed hundreds of homes and businesses in Vile Parle, Andheri, Santacruz, Juhu, and surrounding areas. Visit our studio at 2nd Floor, Gulshan Apartment, 5 Dixit Road, Vile Parle East, Mumbai 400057. We offer free consultations for all local clients."
    services={[
      { icon: '📍', title: 'Local Expertise', desc: 'Deep knowledge of Vile Parle and surrounding Mumbai neighborhoods.' },
      { icon: '🏠', title: 'Home Interiors', desc: 'Complete home interior design for Vile Parle residents.' },
      { icon: '🏢', title: 'Office & Commercial', desc: 'Office and shop interiors for Vile Parle businesses.' },
      { icon: '🚗', title: 'Easy Access', desc: 'Conveniently located near Vile Parle railway station.' },
      { icon: '🤝', title: 'Free Consultation', desc: 'Visit our studio for a free design consultation.' },
      { icon: '⚡', title: 'Quick Turnaround', desc: 'Fast project execution for local Vile Parle clients.' },
    ]}
  />
}
