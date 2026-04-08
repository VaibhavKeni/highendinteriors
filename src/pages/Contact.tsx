import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import MobileBottomNav from '../components/MobileBottomNav'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  // const [submitted, setSubmitted] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [statusModal, setStatusModal] = useState({ show: false, type: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, phone, subject, message } = formData
    if (!name || !email || !phone || !subject || !message) {
      setStatusModal({ show: true, type: 'error', message: 'Please fill all fields' })
      return
    }
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:3001/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message })
      })
      const data = await response.json()
      setIsLoading(false)
      if (data.success) {
        setStatusModal({ show: true, type: 'success', message: 'Message sent successfully!' })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => {
          setStatusModal({ show: false, type: '', message: '' })
        }, 3000)
      } else {
        setStatusModal({ show: true, type: 'error', message: 'Failed to send message' })
      }
    } catch (error) {
      setIsLoading(false)
      // Fallback: Send via mailto
      const mailtoLink = `mailto:highendinteriors9@gmail.com?subject=${subject}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage:%0A${message}`
      window.location.href = mailtoLink
      setStatusModal({ show: true, type: 'success', message: 'Opening email client...' })
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => {
        setStatusModal({ show: false, type: '', message: '' })
      }, 2000)
    }
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: '2nd floor, Gulshan apartment, 5, Dixit Rd, near Sathaye College, Satsang CHSL, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+91 83558 88976'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: 'highendinteriors9@gmail.com'
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      details: 'Mon - Sat: 09:00 AM - 06:00 PM'
    }
  ]

  const services = [
    'Residential Interior Design',
    'Commercial Interior Design',
    'Modular Kitchen Design',
    'Bedroom Design',
    'Living Room Design',
    'Bathroom Design',
    '3D Visualization',
    'Consultation Services'
  ]

  return (
    <div className="contact-page">
      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      {/* Header */}
      <div className="contact-header">
        <div className="header-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Let's create something beautiful together.</p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    rows={5}
                  ></textarea>
                </div>

                <button type="submit" disabled={isLoading} className="btn btn-primary btn-submit">
                  <i className="fas fa-paper-plane me-2"></i>{isLoading ? 'Sending...' : 'Send Message'}
                </button>

                {statusModal.show && (
                  <div className="status-message" style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    borderRadius: '8px',
                    textAlign: 'center',
                    backgroundColor: statusModal.type === 'success' ? '#d4edda' : '#f8d7da',
                    color: statusModal.type === 'success' ? '#155724' : '#721c24',
                    border: `1px solid ${statusModal.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                  }}>
                    <i className={`fas ${statusModal.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`} style={{ marginRight: '0.5rem' }}></i>
                    <span>{statusModal.message}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Map and Services */}
            <div className="contact-side">
              {/* Map */}
              <div className="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7167.3060072772205!2d72.8479356!3d19.0989097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c97fc8df9833%3A0x979626c8639a7eb6!2sHIGHEND%20INTERIORS!5e1!3m2!1sen!2sin!4v1773171439368!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Services List */}
              <div className="services-box">
                <h3>Our Services</h3>
                <ul className="services-list">
                  {services.map((service, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="social-section">
        <div className="container">
          <h2>Follow Us</h2>
          <p>Stay updated with our latest projects and design inspiration</p>
          <div className="social-links">
            <a href="https://www.instagram.com/highend_interiors9" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100063596333131" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
              <i className="fab fa-facebook"></i>
              <span>Facebook</span>
            </a>
            <a href="https://wa.me/919867818123" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
            <a href="tel:+919867818123" className="social-btn phone">
              <i className="fas fa-phone"></i>
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />
    </div>
  )
}

export default Contact
