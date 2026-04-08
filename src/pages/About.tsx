import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import MobileBottomNav from '../components/MobileBottomNav'
import './About.css'

function About() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  useEffect(() => {
    const spinner = document.getElementById('spinner')
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show')
      }, 1000)
    }
  }, [])

  const achievements = [
    { number: '500+', label: 'Projects Completed', icon: '🏆' },
    { number: '15+', label: 'Years Experience', icon: '⭐' },
    { number: '1000+', label: 'Happy Clients', icon: '😊' },
    { number: '50+', label: 'Awards Won', icon: '🎖️' }
  ]

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We constantly push boundaries to bring fresh and creative solutions to every project.'
    },
    {
      icon: '🎯',
      title: 'Quality',
      description: 'Excellence is our standard. We use premium materials and meticulous craftsmanship.'
    },
    {
      icon: '🤝',
      title: 'Client Focus',
      description: 'Your vision is our mission. We listen, understand, and deliver beyond expectations.'
    },
    {
      icon: '⏰',
      title: 'Reliability',
      description: 'On-time delivery and transparent communication are our commitments to you.'
    }
  ]

  return (
    <div className="about-page">
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{zIndex: 99999}}>
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      {/* Header */}
      <div className="about-header">
        <div className="header-content">
          <h1>About HIGH END Interiors</h1>
          <p>Transforming Spaces, Creating Experiences</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Our Story" />
            </div>
            <div className="story-content">
              <h2>Our Story</h2>
              <p>HIGH END Interiors was founded with a simple yet powerful vision: to transform ordinary spaces into extraordinary living experiences. What started as a small design studio has grown into one of Mumbai's most trusted interior design firms.</p>
              <p>Over the past 15 years, we've had the privilege of working with hundreds of clients, from homeowners to corporate businesses. Each project has taught us something new and strengthened our commitment to excellence.</p>
              <p>Today, we're proud to be recognized as leaders in the industry, known for our innovative designs, premium quality, and exceptional customer service.</p>
              <div className="story-highlights">
                <div className="highlight">
                  <i className="fas fa-check-circle"></i>
                  <span>Award-Winning Designs</span>
                </div>
                <div className="highlight">
                  <i className="fas fa-check-circle"></i>
                  <span>Expert Team of Professionals</span>
                </div>
                <div className="highlight">
                  <i className="fas fa-check-circle"></i>
                  <span>Premium Quality Materials</span>
                </div>
                <div className="highlight">
                  <i className="fas fa-check-circle"></i>
                  <span>Timely Project Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="trusted-partners-section">
        <div className="container">
          <div className="partners-content">
            <div className="partners-text">
              <h2 className="section-title">Our Trusted Partners</h2>
              <p className="section-subtitle">We collaborate with industry-leading brands</p>
              <p className="partners-description">We work exclusively with premium brands and suppliers to ensure that every material used in our projects meets our high standards of quality and durability. Our partnerships with industry leaders allow us to offer the best solutions for your interior design needs.</p>
              <ul className="partners-benefits">
                <li><i className="fas fa-check-circle"></i>Premium Quality Materials</li>
                <li><i className="fas fa-check-circle"></i>Certified Suppliers</li>
                <li><i className="fas fa-check-circle"></i>Warranty & Support</li>
                <li><i className="fas fa-check-circle"></i>Sustainable Options</li>
              </ul>
            </div>
            <div className="partners-image">
              <img src="assets/images/Trusted_Partners/Trusted Partners.png" alt="Trusted Partners" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Space?</h2>
            <p>Let's create something beautiful together</p>
            <a 
              href="https://highendinteriors.co.in/contact"
              className="btn btn-primary btn-lg"
            >
              <i className="fas fa-calendar-check me-2"></i>Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />
    </div>
  )
}

export default About
