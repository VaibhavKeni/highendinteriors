'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Home Renovation Mumbai"
    heading="Home Renovation Services In Mumbai"
    subheading="Complete home renovation by HIGHEND Interiors — transform your old home into a dream space"
    description="HIGHEND Interiors offers complete home renovation services across Mumbai. Whether you want to renovate a single room or your entire home, our team handles everything — civil work, carpentry, electrical, plumbing, painting, and interior design. We transform old, outdated homes into modern, beautiful living spaces. Our renovation projects are completed on time, within budget, and with minimal disruption to your daily life."
    services={[
      { icon: '🔨', title: 'Complete Renovation', desc: 'Full home renovation from civil work to final styling.' },
      { icon: '🪑', title: 'Kitchen Renovation', desc: 'Modular kitchen upgrades and complete kitchen makeovers.' },
      { icon: '🚿', title: 'Bathroom Renovation', desc: 'Modern bathroom renovations with premium fixtures.' },
      { icon: '🎨', title: 'Painting & Finishing', desc: 'Interior painting, texture, and wall finish services.' },
      { icon: '💡', title: 'Electrical & Lighting', desc: 'Complete electrical upgrades and lighting installation.' },
      { icon: '🛋️', title: 'Interior Makeover', desc: 'Furniture, decor, and complete interior styling.' },
    ]}
  />
}
