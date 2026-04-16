'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Office Interior Design In Mumbai"
    heading="Office Interior Design In Mumbai"
    subheading="Create inspiring workspaces with HIGHEND Interiors — Mumbai's office interior design experts"
    description="HIGHEND Interiors designs modern, productive office spaces across Mumbai. We create work environments that inspire creativity, boost productivity, and reflect your company's brand identity. From small startups to large corporate offices, we handle complete office interior projects including workstations, cabins, conference rooms, reception areas, and breakout zones."
    services={[
      { icon: '💼', title: 'Corporate Offices', desc: 'Professional corporate office interiors for large organizations.' },
      { icon: '🚀', title: 'Startup Offices', desc: 'Creative and energetic spaces for startups and SMEs.' },
      { icon: '🤝', title: 'Conference Rooms', desc: 'Impressive meeting and conference room designs.' },
      { icon: '🖥️', title: 'Workstations', desc: 'Ergonomic and efficient workstation layouts.' },
      { icon: '🛋️', title: 'Reception Areas', desc: 'Welcoming reception and lobby designs.' },
      { icon: '☕', title: 'Breakout Zones', desc: 'Relaxing breakout and cafeteria spaces for employees.' },
    ]}
  />
}
