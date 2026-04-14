'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import QuoteModal from '@/app/components/QuoteModal'
import MobileBottomNav from '@/app/components/MobileBottomNav'
import '../styles/Testimonials.css'

interface Testimonial {
  id: number
  name: string
  title: string
  image: string
  rating: number
  text: string
  project: string
  date: string
}

export default function Testimonials() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  useEffect(() => {
    const spinner = document.getElementById('spinner')
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show')
      }, 1000)
    }
  }, [])

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      title: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      rating: 5,
      text: 'HIGH END Interiors transformed our apartment into a dream home. The team was professional, creative, and delivered everything on time. Highly recommended!',
      project: 'Modern Luxury Apartment',
      date: 'Dec 2023'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      rating: 5,
      text: 'The office design exceeded our expectations. It\'s not just beautiful but also highly functional. Our employees love the new workspace!',
      project: 'Corporate Office Space',
      date: 'Nov 2023'
    },
    {
      id: 3,
      name: 'Amit Patel',
      title: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      rating: 5,
      text: 'The kitchen renovation was seamless. The team handled everything from design to installation. Our kitchen is now the heart of our home!',
      project: 'Modular Kitchen Renovation',
      date: 'Oct 2023'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      title: 'Hotel Owner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      rating: 5,
      text: 'Working with HIGH END Interiors for our boutique hotel was the best decision. The design is elegant, and guests love the ambiance!',
      project: 'Boutique Hotel Design',
      date: 'Sep 2023'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      title: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      rating: 5,
      text: 'Despite the small space, they created a beautiful and functional studio. The attention to detail is remarkable. Worth every penny!',
      project: 'Minimalist Studio Apartment',
      date: 'Aug 2023'
    },
    {
      id: 6,
      name: 'Anjali Desai',
      title: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      rating: 5,
      text: 'The bathroom design is absolutely luxurious. It feels like a spa at home. The team was courteous and professional throughout.',
      project: 'Luxury Bathroom Suite',
      date: 'Jul 2023'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '15+', label: 'Years Experience' }
  ]

  return (
    <div className="testimonials-page">
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{zIndex: 99999}}>
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      <div className="testimonials-header">
        <div className="header-content">
          <h1>Client Testimonials</h1>
          <p>What Our Clients Say About Us</p>
        </div>
      </div>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-info">
                    <img src={testimonial.image} alt={testimonial.name} className="client-image" />
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p className="client-title">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-footer">
                  <span className="project"><i className="fas fa-briefcase me-1"></i>{testimonial.project}</span>
                  <span className="date"><i className="fas fa-calendar me-1"></i>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Space?</h2>
            <p>Join hundreds of satisfied clients who have experienced the HIGH END Interiors difference</p>
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => setShowQuoteModal(true)}
            >
              <i className="fas fa-phone me-2"></i>Get Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />
    </div>
  )
}
