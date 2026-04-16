'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Living Room Interior Design In Mumbai"
    heading="Living Room Interior Design In Mumbai"
    subheading="Create a stunning living room with HIGHEND Interiors — Mumbai's living room design experts"
    description="Your living room is the heart of your home. HIGHEND Interiors creates beautiful, functional living rooms across Mumbai that perfectly balance style and comfort. From modern minimalist to classic luxury, we design living spaces that reflect your personality. Our services include TV unit design, false ceiling, accent walls, custom furniture, and complete decor styling."
    services={[
      { icon: '📺', title: 'TV Unit Design', desc: 'Custom TV units and entertainment walls for modern living rooms.' },
      { icon: '🛋️', title: 'Sofa & Seating', desc: 'Premium sofa sets and seating arrangements for comfort and style.' },
      { icon: '✨', title: 'False Ceiling', desc: 'Elegant false ceiling designs with ambient lighting.' },
      { icon: '🎨', title: 'Accent Walls', desc: 'Statement walls with wallpaper, panels, or textured finishes.' },
      { icon: '💡', title: 'Lighting Design', desc: 'Layered lighting to create the perfect living room ambiance.' },
      { icon: '🪴', title: 'Decor & Styling', desc: 'Complete decor accessories and styling for a finished look.' },
    ]}
  />
}
