'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Modular Kitchen Design Mumbai"
    heading="Modular Kitchen Design In Mumbai"
    subheading="Premium modular kitchens by HIGHEND Interiors — functional, beautiful, and built to last"
    description="HIGHEND Interiors is Mumbai's specialist for modular kitchen design and installation. We design L-shaped, U-shaped, parallel, and straight modular kitchens using premium materials and branded hardware. Our kitchens feature soft-close drawers, pull-out units, corner solutions, and smart storage. We use only branded materials — Hettich, Hafele, and Blum hardware — ensuring your kitchen lasts for decades. Get a free kitchen design consultation today."
    services={[
      { icon: '🪑', title: 'L-Shape Kitchen', desc: 'Efficient L-shaped modular kitchen for medium-sized spaces.' },
      { icon: '🔄', title: 'U-Shape Kitchen', desc: 'Maximum storage U-shaped kitchen for larger spaces.' },
      { icon: '➡️', title: 'Parallel Kitchen', desc: 'Functional parallel kitchen layout for narrow spaces.' },
      { icon: '🗄️', title: 'Smart Storage', desc: 'Pull-outs, corner units, and innovative storage solutions.' },
      { icon: '🔧', title: 'Branded Hardware', desc: 'Hettich, Hafele & Blum hardware for lasting quality.' },
      { icon: '🍳', title: 'Countertops', desc: 'Granite, quartz, and marble countertop options.' },
    ]}
  />
}
