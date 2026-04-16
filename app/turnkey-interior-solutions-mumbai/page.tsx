'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Turnkey Interior Solutions Mumbai"
    heading="Turnkey Interior Solutions In Mumbai"
    subheading="HIGHEND Interiors — complete turnkey interior solutions, from design to delivery"
    description="HIGHEND Interiors provides complete turnkey interior solutions across Mumbai. Our turnkey service covers everything — design consultation, 3D visualization, material procurement, civil work, carpentry, electrical, painting, and final styling. You hand us the keys and we hand back a fully finished, move-in ready space. No coordination headaches, no multiple contractors — just one team, one point of contact, and one seamless experience."
    services={[
      { icon: '🗝️', title: 'Design to Delivery', desc: 'Complete end-to-end interior project management.' },
      { icon: '📐', title: 'Design & Planning', desc: '3D visualization and detailed design planning.' },
      { icon: '🔨', title: 'Civil & Carpentry', desc: 'All civil work, carpentry, and structural changes.' },
      { icon: '💡', title: 'Electrical & Lighting', desc: 'Complete electrical work and lighting installation.' },
      { icon: '🎨', title: 'Painting & Finishing', desc: 'Premium painting, textures, and wall finishes.' },
      { icon: '🛋️', title: 'Furnishing & Styling', desc: 'Furniture, decor, and complete interior styling.' },
    ]}
  />
}
