'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Kitchen Interior Design In Mumbai"
    heading="Kitchen Interior Design In Mumbai"
    subheading="Modular & custom kitchen designs by HIGHEND Interiors — Mumbai's kitchen design specialists"
    description="HIGHEND Interiors designs beautiful, functional kitchens across Mumbai. Whether you need a modular kitchen, parallel kitchen, L-shaped, or U-shaped layout, we deliver premium quality with smart storage solutions. We use branded materials, high-quality hardware, and durable finishes to create kitchens that are both stunning and practical. Our kitchen designs maximize every inch of your space."
    services={[
      { icon: '🪑', title: 'Modular Kitchen', desc: 'Premium modular kitchen with smart storage and branded fittings.' },
      { icon: '📐', title: 'L-Shape & U-Shape', desc: 'Efficient L-shaped and U-shaped kitchen layouts for all sizes.' },
      { icon: '🔧', title: 'Custom Cabinetry', desc: 'Bespoke kitchen cabinets built to your exact specifications.' },
      { icon: '🍳', title: 'Countertops', desc: 'Premium granite, quartz, and marble countertop solutions.' },
      { icon: '💡', title: 'Kitchen Lighting', desc: 'Under-cabinet and overhead lighting for functional kitchens.' },
      { icon: '🗄️', title: 'Storage Solutions', desc: 'Innovative storage solutions to maximize kitchen space.' },
    ]}
  />
}
