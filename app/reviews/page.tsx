'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import QuoteModal from '@/app/components/QuoteModal'
import MobileBottomNav from '@/app/components/MobileBottomNav'
import '../styles/Reviews.css'

export default function Reviews() {
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
    rating: 5
  })
  const [submitted, setSubmitted] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  useEffect(() => {
    const spinner = document.getElementById('spinner')
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show')
      }, 1000)
    }
  }, [])

  const stats = [
    { label: 'Happy Clients', value: '1000+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Average Rating', value: '4.8/5' },
    { label: 'Years Experience', value: '15+' }
  ]

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setReviewForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Review submitted:', reviewForm)
    setSubmitted(true)
    setTimeout(() => {
      setReviewForm({ name: '', email: '', title: '', message: '', rating: 5 })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="reviews-page">
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{zIndex: 99999}}>
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      <div className="reviews-header">
        <div className="header-content">
          <h1>Client Reviews & Testimonials</h1>
          <p>See what our satisfied clients have to say about us</p>
        </div>
      </div>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="google-reviews-section py-4 py-md-5">
        <div className="container">
          <h2 className="section-title mb-4">Our Google Reviews</h2>
          <div className="google-reviews-container">
            <div className="google-reviews-embed">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7167.3060072772205!2d72.8479356!3d19.0989097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c97fc8df9833%3A0x979626c8639a7eb6!2sHIGHEND%20INTERIORS!5e1!3m2!1sen!2sin!4v1773171439368!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{border: 0, borderRadius: '12px'}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="google-reviews-info">
              <div className="google-rating-box">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star filled"></i>
                  ))}
                </div>
                <p className="rating-text">4.8 out of 5 stars</p>
                <p className="review-count">Based on 450+ reviews</p>
              </div>
              <div className="google-reviews-cta">
                <h3>Read All Reviews on Google</h3>
                <p>Check out hundreds of 5-star reviews from our satisfied clients on Google Maps</p>
                <a 
                  href="https://maps.app.goo.gl/YraiHXFWgaJHuPpS6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <i className="fab fa-google me-2"></i>View All Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Widget Section */}
      <section className="reviews-widget-section py-4 py-md-5">
        <div className="container">
          <h2 className="section-title mb-4">Latest Reviews</h2>
          <div className="reviews-widget-container">
            <p className="widget-info">
              <i className="fas fa-info-circle me-2"></i>
              Reviews are loading from Google Maps. Click the button below to see all reviews.
            </p>
            <div className="widget-cta">
              <a 
                href="https://maps.app.goo.gl/YraiHXFWgaJHuPpS6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <i className="fab fa-google me-2"></i>View All Google Reviews
              </a>
            </div>
            <div className="reviews-preview">
              <h3>Why Check Our Google Reviews?</h3>
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle me-2"></i>Verified reviews from real clients</li>
                <li><i className="fas fa-check-circle me-2"></i>Authentic feedback and ratings</li>
                <li><i className="fas fa-check-circle me-2"></i>See photos from completed projects</li>
                <li><i className="fas fa-check-circle me-2"></i>Direct communication with reviewers</li>
                <li><i className="fas fa-check-circle me-2"></i>Latest updates and responses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Review Form Section */}
      <section className="review-form-section">
        <div className="container">
          <h2 className="section-title">Share Your Experience</h2>
          <p className="section-subtitle">Tell us about your experience with HIGH END Interiors</p>
          
          <div className="form-container">
            <form className="review-form" onSubmit={handleSubmitReview}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={reviewForm.name}
                    onChange={handleReviewChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={reviewForm.email}
                    onChange={handleReviewChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="title">Review Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={reviewForm.title}
                  onChange={handleReviewChange}
                  required
                  placeholder="Summarize your experience"
                />
              </div>

              <div className="form-group">
                <label>Rating *</label>
                <div className="rating-selector">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      className={`star-btn ${reviewForm.rating >= star ? 'active' : ''}`}
                      onClick={() => setReviewForm(prev => ({ ...prev, rating: star }))}
                    >
                      <i className="fas fa-star"></i>
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Review *</label>
                <textarea
                  id="message"
                  name="message"
                  value={reviewForm.message}
                  onChange={handleReviewChange}
                  required
                  placeholder="Share your experience with us..."
                  rows={5}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                <i className="fas fa-paper-plane me-2"></i>Submit Review
              </button>

              {submitted && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  <span>Thank you! Your review has been submitted successfully.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Why Reviews Matter */}
      <section className="why-reviews-section">
        <div className="container">
          <h2 className="section-title">Why Our Clients Love Us</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon">🎨</div>
              <h3>Creative Excellence</h3>
              <p>We bring innovative and personalized design solutions to every project.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">⏰</div>
              <h3>Timely Delivery</h3>
              <p>Projects are completed on schedule with transparent communication.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>We use only the finest materials and premium finishes for lasting beauty.</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon">🤝</div>
              <h3>Client Support</h3>
              <p>Dedicated support throughout the project and after completion.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />
    </div>
  )
}
