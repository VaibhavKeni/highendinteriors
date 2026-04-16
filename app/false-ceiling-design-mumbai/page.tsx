'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="False Ceiling Design Mumbai"
    heading="False Ceiling Design In Mumbai"
    subheading="Elegant false ceiling designs by HIGHEND Interiors — transform any room with stunning ceilings"
    description="HIGHEND Interiors specializes in false ceiling design and installation across Mumbai. We create stunning gypsum, POP, and wooden false ceilings for living rooms, bedrooms, offices, and commercial spaces. Our false ceiling designs incorporate ambient lighting, cove lighting, and recessed lights to create the perfect atmosphere. False ceilings also improve acoustics, hide wiring, and add insulation to your space."
    services={[
      { icon: '✨', title: 'Gypsum False Ceiling', desc: 'Smooth, elegant gypsum false ceilings for all rooms.' },
      { icon: '⭕', title: 'POP False Ceiling', desc: 'Classic POP false ceiling designs with decorative elements.' },
      { icon: '🪵', title: 'Wooden Ceiling', desc: 'Warm wooden ceiling panels for a natural aesthetic.' },
      { icon: '💡', title: 'Cove Lighting', desc: 'Ambient cove lighting integrated into false ceiling designs.' },
      { icon: '🔆', title: 'Recessed Lights', desc: 'Modern recessed and spot lighting solutions.' },
      { icon: '🏢', title: 'Commercial Ceilings', desc: 'Grid and designer ceilings for offices and retail spaces.' },
    ]}
  />
}
