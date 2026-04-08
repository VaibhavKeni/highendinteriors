import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import MobileBottomNav from '../components/MobileBottomNav'
import './Services.css'

interface Service {
  id: number
  icon: string
  title: string
  description: string
  features: string[]
  price: string
  image: string
}

function Services() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const services: Service[] = [
    {
      id: 1,
      icon: '🏠',
      title: 'Residential Interior Design',
      description: 'Transform your home into a beautiful and functional living space with our expert residential design services.',
      features: [
        'Complete home design consultation',
        'Custom furniture selection',
        'Color and material selection',
        '3D visualization',
        'Project management',
        'Quality assurance'
      ],
      price: 'Starting from ₹50,000',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    },
    {
      id: 2,
      icon: '🏢',
      title: 'Commercial Interior Design',
      description: 'Create professional and inspiring workspaces that enhance productivity and reflect your brand identity.',
      features: [
        'Office layout planning',
        'Workspace optimization',
        'Brand integration',
        'Lighting design',
        'Furniture solutions',
        'Compliance management'
      ],
      price: 'Starting from ₹1,00,000',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80'
    },
    {
      id: 3,
      icon: '🪑',
      title: 'Modular Kitchen Design',
      description: 'Modern, functional kitchens with premium fixtures and smart storage solutions for your home.',
      features: [
        'Kitchen layout design',
        'Premium appliances',
        'Custom cabinetry',
        'Storage solutions',
        'Lighting design',
        'Installation support'
      ],
      price: 'Starting from ₹75,000',
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80'
    },
    {
      id: 4,
      icon: '🛏️',
      title: 'Bedroom Design',
      description: 'Create a serene and luxurious bedroom that provides comfort and relaxation for quality sleep.',
      features: [
        'Bedroom layout planning',
        'Wardrobe design',
        'Lighting solutions',
        'Color psychology',
        'Furniture selection',
        'Texture coordination'
      ],
      price: 'Starting from ₹40,000',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80'
    },
    {
      id: 5,
      icon: '🛋️',
      title: 'Living Room Design',
      description: 'Elegant living spaces perfect for entertaining guests and spending quality time with family.',
      features: [
        'Space planning',
        'TV unit design',
        'Seating arrangement',
        'Entertainment setup',
        'Accent walls',
        'Decor styling'
      ],
      price: 'Starting from ₹60,000',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80'
    },
    {
      id: 6,
      icon: '🚿',
      title: 'Bathroom Design',
      description: 'Spa-like bathrooms with premium fixtures and luxurious finishes for ultimate relaxation.',
      features: [
        'Bathroom layout',
        'Premium fixtures',
        'Tile selection',
        'Lighting design',
        'Ventilation planning',
        'Storage solutions'
      ],
      price: 'Starting from ₹35,000',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80'
    },
    {
      id: 7,
      icon: '🎨',
      title: '3D Visualization',
      description: 'See your space before it\'s built with our advanced 3D visualization and rendering services.',
      features: [
        'Photorealistic renderings',
        'Multiple design options',
        'Material visualization',
        'Lighting simulation',
        'Virtual walkthrough',
        'Design modifications'
      ],
      price: 'Starting from ₹15,000',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
    },
    {
      id: 8,
      icon: '💼',
      title: 'Design Consultation',
      description: 'Expert advice and guidance for your interior design project from our experienced designers.',
      features: [
        'Initial consultation',
        'Space assessment',
        'Design recommendations',
        'Budget planning',
        'Material guidance',
        'Project timeline'
      ],
      price: 'Starting from ₹5,000',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We meet with you to understand your vision, requirements, and budget for the project.'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our team creates detailed designs and 3D visualizations based on your preferences.'
    },
    {
      number: '03',
      title: 'Planning',
      description: 'We develop a comprehensive project plan with timeline and resource allocation.'
    },
    {
      number: '04',
      title: 'Execution',
      description: 'Our skilled team executes the design with precision and quality craftsmanship.'
    },
    {
      number: '05',
      title: 'Quality Check',
      description: 'We conduct thorough quality inspections to ensure everything meets our standards.'
    },
    {
      number: '06',
      title: 'Handover',
      description: 'Final walkthrough and handover of your beautifully transformed space.'
    }
  ]

  return (
    <div className="services-page">
      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      {/* Header */}
      <div className="services-header">
        <div className="header-content">
          <h1>Our Services</h1>
          <p>Comprehensive Interior Design Solutions for Every Space</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card-large">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <button 
                      className="view-details-btn"
                      onClick={() => setSelectedService(service)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="service-content">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-price">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">How we bring your vision to life</p>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < processSteps.length - 1 && <div className="process-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose HIGH END Interiors</h2>
          <div className="why-choose-grid">
            <div className="why-card">
              <div className="why-icon">🎯</div>
              <h3>Expert Team</h3>
              <p>15+ years of experience with award-winning designers and craftsmen.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>We use only the finest materials and premium finishes for lasting beauty.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">⏰</div>
              <h3>Timely Delivery</h3>
              <p>Projects completed on schedule with transparent communication throughout.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>Value for Money</h3>
              <p>Competitive pricing without compromising on quality and design excellence.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎨</div>
              <h3>Creative Solutions</h3>
              <p>Innovative designs tailored to your unique style and requirements.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Client Focused</h3>
              <p>Your satisfaction is our priority with dedicated project management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Space?</h2>
            <p>Let's discuss your project and create something extraordinary together</p>
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => setShowQuoteModal(true)}
            >
              <i className="fas fa-calendar-check me-2"></i>Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="service-modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="service-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedService(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedService.image} alt={selectedService.title} />
              </div>
              <div className="modal-info">
                <h2>{selectedService.title}</h2>
                <p className="description">{selectedService.description}</p>
                
                <h4>What's Included:</h4>
                <ul className="features-list">
                  {selectedService.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="price-section">
                  <span className="price-label">Starting Price:</span>
                  <span className="price-value">{selectedService.price}</span>
                </div>

                <button 
                  className="btn btn-primary btn-block"
                  onClick={() => {
                    setSelectedService(null)
                    setShowQuoteModal(true)
                  }}
                >
                  <i className="fas fa-phone me-2"></i>Get Quote for This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />
    </div>
  )
}

export default Services
