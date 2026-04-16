'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import QuoteModal from '@/app/components/QuoteModal'
import MobileBottomNav from '@/app/components/MobileBottomNav'

interface SEOPageProps {
  keyword: string
  heading: string
  subheading: string
  description: string
  services: { icon: string; title: string; desc: string }[]
}

export default function SEOLandingPage({ keyword, heading, subheading, description, services }: SEOPageProps) {
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  useEffect(() => {
    const spinner = document.getElementById('spinner')
    if (spinner) setTimeout(() => spinner.classList.remove('show'), 1000)
  }, [])

  return (
    <div>
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{zIndex: 99999}}>
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)', color: 'white', padding: '5rem 2rem', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem'}}>{heading}</h1>
          <p style={{fontSize: '1.15rem', opacity: 0.95, marginBottom: '2rem'}}>{subheading}</p>
          <button className="btn btn-light btn-lg fw-bold" style={{color: '#b8941f'}} onClick={() => setShowQuoteModal(true)}>
            <i className="fas fa-phone me-2"></i>Get Free Consultation
          </button>
        </div>
      </section>

      {/* About */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 style={{color: '#2c3e50', fontWeight: 800, marginBottom: '1rem'}}>{keyword} — HIGHEND Interiors</h2>
              <p style={{color: '#555', lineHeight: 1.8, fontSize: '1rem'}}>{description}</p>
              <ul className="list-unstyled mt-3">
                {['15+ Years Experience', '500+ Projects Completed', 'Premium Quality Materials', 'On-Time Delivery', 'Affordable Pricing'].map(item => (
                  <li key={item} className="mb-2"><i className="fas fa-check-circle me-2" style={{color: '#d4af37'}}></i>{item}</li>
                ))}
              </ul>
              <button className="btn btn-primary mt-3" onClick={() => setShowQuoteModal(true)}>Book a Free Consultation</button>
            </div>
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt={keyword} className="img-fluid rounded" style={{boxShadow: '0 8px 30px rgba(0,0,0,0.12)'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-5" style={{background: '#f9f9f9'}}>
        <div className="container">
          <h2 className="text-center fw-bold mb-2" style={{color: '#2c3e50'}}>Our {keyword} Services</h2>
          <p className="text-center text-muted mb-5">Everything you need under one roof</p>
          <div className="row g-4">
            {services.map((s, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="bg-white rounded p-4 h-100 text-center" style={{boxShadow: '0 4px 15px rgba(0,0,0,0.08)', borderTop: '3px solid #d4af37'}}>
                  <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{s.icon}</div>
                  <h5 className="fw-bold mb-2" style={{color: '#2c3e50'}}>{s.title}</h5>
                  <p className="text-muted mb-0" style={{fontSize: '0.9rem'}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 text-center">
            {[['500+', 'Projects Completed'], ['1000+', 'Happy Clients'], ['15+', 'Years Experience'], ['4.8★', 'Google Rating']].map(([val, label]) => (
              <div key={label} className="col-6 col-md-3">
                <div className="p-4 rounded" style={{background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: 'white'}}>
                  <div style={{fontSize: '2rem', fontWeight: 800}}>{val}</div>
                  <div style={{fontSize: '0.9rem', opacity: 0.9}}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #2c3e50, #1a252f)', color: 'white', textAlign: 'center'}}>
        <div className="container">
          <h2 className="fw-bold mb-3">Looking for {keyword}?</h2>
          <p className="mb-4" style={{opacity: 0.85}}>Contact HIGHEND Interiors today for a free consultation and quote.</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button className="btn btn-primary btn-lg" onClick={() => setShowQuoteModal(true)}>
              <i className="fas fa-calendar-check me-2"></i>Book Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />
    </div>
  )
}
