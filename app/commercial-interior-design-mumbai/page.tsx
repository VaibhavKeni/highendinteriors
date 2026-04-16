'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Commercial Interior Design In Mumbai"
    heading="Commercial Interior Design In Mumbai"
    subheading="Expert commercial interior designers for offices, shops, restaurants & showrooms in Mumbai"
    description="HIGHEND Interiors delivers world-class commercial interior design services across Mumbai. We create professional, brand-aligned workspaces that enhance productivity and leave lasting impressions. Our commercial projects include offices, retail stores, restaurants, showrooms, and hospitality spaces. With 15+ years of experience and 500+ completed projects, we are Mumbai's trusted commercial interior design partner."
    services={[
      { icon: '🏢', title: 'Office Interiors', desc: 'Modern office spaces designed for productivity and employee well-being.' },
      { icon: '🛍️', title: 'Retail & Showrooms', desc: 'Attractive retail environments that enhance customer experience.' },
      { icon: '🍽️', title: 'Restaurant & Cafe', desc: 'Inviting dining spaces with the perfect ambiance for your brand.' },
      { icon: '🏨', title: 'Hospitality Spaces', desc: 'Hotels and hospitality interiors that create memorable experiences.' },
      { icon: '🏭', title: 'Industrial Spaces', desc: 'Functional and aesthetic industrial interior solutions.' },
      { icon: '💼', title: 'Co-working Spaces', desc: 'Flexible, modern co-working environments for today\'s workforce.' },
    ]}
  />
}
