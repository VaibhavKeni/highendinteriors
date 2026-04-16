'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Best Interior Designers In Mumbai"
    heading="Best Interior Designers In Mumbai"
    subheading="Award-winning interior design by HIGHEND Interiors — rated 5★ on Google by 20+ clients"
    description="HIGHEND Interiors is consistently rated among the best interior designers in Mumbai. With 15+ years of experience, 500+ completed projects, and a 5-star Google rating, we have earned the trust of hundreds of Mumbai families and businesses. Our commitment to quality, creativity, and customer satisfaction sets us apart. We deliver premium interior design services at competitive prices across all of Mumbai."
    services={[
      { icon: '⭐', title: 'Award-Winning Design', desc: 'Recognized for excellence in interior design across Mumbai.' },
      { icon: '🏠', title: 'Residential Projects', desc: 'Premium home interiors for apartments, villas, and bungalows.' },
      { icon: '🏢', title: 'Commercial Projects', desc: 'Professional office and retail interior design solutions.' },
      { icon: '🎨', title: 'Creative Concepts', desc: 'Unique, personalized design concepts for every client.' },
      { icon: '💎', title: 'Premium Materials', desc: 'Only the finest materials and finishes used in every project.' },
      { icon: '✅', title: '2-Year Warranty', desc: 'Complete peace of mind with our 2-year workmanship warranty.' },
    ]}
  />
}
