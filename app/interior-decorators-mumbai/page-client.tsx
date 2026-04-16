'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Interior Decorators In Mumbai"
    heading="Best Interior Decorators In Mumbai"
    subheading="Transform your space with Mumbai's most trusted interior decorators — HIGHEND Interiors, Vile Parle"
    description="HIGHEND Interiors is one of Mumbai's leading interior decoration firms with over 15 years of experience. We specialize in creating stunning, functional spaces for residential and commercial clients across Mumbai. Our team of expert decorators brings your vision to life with premium materials, creative designs, and flawless execution. From concept to completion, we handle every detail to deliver spaces that inspire and delight."
    services={[
      { icon: '🏠', title: 'Home Decoration', desc: 'Complete home decoration services tailored to your style and budget.' },
      { icon: '🏢', title: 'Office Decoration', desc: 'Professional office spaces that boost productivity and reflect your brand.' },
      { icon: '🛍️', title: 'Shop Decoration', desc: 'Eye-catching retail spaces that attract customers and drive sales.' },
      { icon: '🎨', title: 'Custom Themes', desc: 'Unique themed interiors designed exclusively for your space.' },
      { icon: '💡', title: 'Lighting Design', desc: 'Ambient and accent lighting to enhance every corner of your space.' },
      { icon: '🪴', title: 'Decor Styling', desc: 'Curated decor accessories and styling for a complete finished look.' },
    ]}
  />
}
