'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Shop Interior Design In Mumbai"
    heading="Shop Interior Design In Mumbai"
    subheading="Attract more customers with stunning shop interiors by HIGHEND Interiors, Mumbai"
    description="HIGHEND Interiors transforms retail shops across Mumbai into attractive, customer-friendly spaces that drive sales. We design clothing stores, jewellery shops, electronics stores, salons, and all types of retail spaces. Our shop interior designs focus on customer flow, product display, brand identity, and creating an inviting atmosphere that keeps customers coming back."
    services={[
      { icon: '👗', title: 'Clothing & Fashion', desc: 'Stylish retail interiors for clothing and fashion stores.' },
      { icon: '💍', title: 'Jewellery Shops', desc: 'Elegant display solutions for jewellery and luxury retail.' },
      { icon: '💈', title: 'Salons & Spas', desc: 'Relaxing and stylish interiors for salons and beauty spaces.' },
      { icon: '📱', title: 'Electronics Stores', desc: 'Modern, tech-forward retail environments.' },
      { icon: '🏪', title: 'General Retail', desc: 'Functional and attractive layouts for all retail formats.' },
      { icon: '🪟', title: 'Display & Signage', desc: 'Eye-catching product displays and in-store signage.' },
    ]}
  />
}
