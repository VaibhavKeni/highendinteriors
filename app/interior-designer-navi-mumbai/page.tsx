'use client'
import SEOLandingPage from '@/app/components/SEOLandingPage'
export default function Page() {
  return <SEOLandingPage
    keyword="Interior Designer In Navi Mumbai"
    heading="Interior Designer In Navi Mumbai"
    subheading="HIGHEND Interiors — bringing premium interior design to Navi Mumbai homes and offices"
    description="HIGHEND Interiors offers complete interior design services across Navi Mumbai including Vashi, Kharghar, Nerul, Belapur, Panvel, and Airoli. We design stunning residential and commercial spaces for Navi Mumbai clients. Our experienced team delivers high-quality interiors with premium materials, creative designs, and on-time project completion. Get a free consultation for your Navi Mumbai interior project today."
    services={[
      { icon: '🏠', title: 'Residential Design', desc: 'Home interiors for Navi Mumbai apartments and villas.' },
      { icon: '🏢', title: 'Commercial Design', desc: 'Office and retail interiors across Navi Mumbai.' },
      { icon: '🪑', title: 'Modular Kitchen', desc: 'Premium modular kitchens for Navi Mumbai homes.' },
      { icon: '🛏️', title: 'Bedroom Design', desc: 'Luxurious bedroom interiors tailored to your taste.' },
      { icon: '📺', title: 'TV Unit & Living', desc: 'Modern living room and TV unit designs.' },
      { icon: '🎨', title: 'Turnkey Projects', desc: 'Complete turnkey interior solutions for Navi Mumbai.' },
    ]}
  />
}
