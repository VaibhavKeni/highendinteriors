import { useEffect, useState } from 'react'
import './App.css'
import 'animate.css'
import CitiesSlider from './components/Slider'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [statusModal, setStatusModal] = useState({ show: false, type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, phone, message } = formData
    if (!name || !email || !phone || !message) {
      setStatusModal({ show: true, type: 'error', message: 'Please fill all fields' })
      return
    }
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:3001/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message })
      })
      const data = await response.json()
      setIsLoading(false)
      if (data.success) {
        setStatusModal({ show: true, type: 'success', message: 'Quote sent successfully!' })
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => {
          setShowModal(false)
          setStatusModal({ show: false, type: '', message: '' })
        }, 30000)
      } else {
        setStatusModal({ show: true, type: 'error', message: 'Failed to send quote' })
      }
    } catch (error) {
      setIsLoading(false)
      setStatusModal({ show: true, type: 'error', message: 'Error sending quote: ' + error })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, phone, message } = formData
    if (!name || !email || !phone || !message) {
      alert('Please fill all fields')
      return
    }
    const whatsappNumber = '919867818123'
    const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank')
    setFormData({ name: '', email: '', phone: '', message: '' })
    setShowModal(false)
  }

  useEffect(() => {
    const spinner = document.getElementById('spinner')
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show')
      }, 1000)
    }

    const backToTop = document.querySelector('.back-to-top')
    const toggleBackToTop = () => {
      if (window.scrollY > 300) {
        backToTop?.classList.add('show')
      } else {
        backToTop?.classList.remove('show')
      }
    }
    window.addEventListener('scroll', toggleBackToTop)

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated')
          const animationClass = entry.target.getAttribute('data-animation')
          if (animationClass) {
            entry.target.classList.add(animationClass)
          }
        }
      })
    }, observerOptions)

    document.querySelectorAll('[data-animation]').forEach(el => observer.observe(el))

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', toggleBackToTop)
    }
  }, [])

  return (
    <div className="app">
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{zIndex: 99999}}>
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container-fluid px-4">
          <h1 className="logo-container d-flex align-items-center">
            <img className="logo" src="/logo.png" alt="Logo" onError={(e) => e.currentTarget.style.display = 'none'} />
            <img className="highend" src="/high_end.png" alt="HIGH END" onError={(e) => e.currentTarget.style.display = 'none'} />
            <span className="logo-interiors">Interiors</span>
          </h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About us</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
          <button className="btn btn-primary ms-3" onClick={() => setShowModal(true)}>Get a Quote</button>
        </div>
      </nav>

      <CitiesSlider />

      <section className="about-section py-5" id="about">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-animation="animate__fadeInLeft">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" className="img-fluid rounded" alt="About" />
            </div>
            <div className="col-lg-6" data-animation="animate__fadeInRight">
              <h2 className="mb-4">About HIGH END Interiors</h2>
              <p>We are a leading interior design firm specializing in residential and commercial spaces. With over 15 years of experience, we transform ordinary spaces into extraordinary living experiences.</p>
              <p>Our team of expert designers and craftsmen work closely with clients to understand their vision and bring it to life with precision and creativity.</p>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Customized Design Solutions</li>
                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Premium Quality Materials</li>
                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>Timely Project Delivery</li>
                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i>End-to-End Execution</li>
              </ul>
              <button className="btn btn-primary mt-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section py-5 bg-light" id="services">
        <div className="container">
          <div className="text-center mb-5" data-animation="animate__fadeInUp">
            <h2>Our Services</h2>
            <p className="text-muted">Complete Interior Solutions for Every Space</p>
          </div>
          <div className="row g-4">
            {[
              { icon: '🏠', title: 'Residential Interior', desc: 'Complete home interior design including living rooms, bedrooms, kitchens, and more' },
              { icon: '🏢', title: 'Commercial Spaces', desc: 'Office interiors, retail spaces, and commercial establishments' },
              { icon: '🪑', title: 'Modular Kitchen', desc: 'Custom modular kitchen designs with premium fittings and accessories' },
              { icon: '🛏️', title: 'Bedroom Design', desc: 'Luxurious bedroom interiors with wardrobes and storage solutions' },
              { icon: '🛋️', title: 'Living Room', desc: 'Elegant living room designs with TV units and entertainment areas' },
              { icon: '💼', title: 'Consultation', desc: 'Expert design consultation and 3D visualization services' }
            ].map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-animation="animate__fadeInUp">
                <div className="service-card bg-white p-4 rounded text-center h-100">
                  <div className="service-icon fs-1 mb-3">{service.icon}</div>
                  <h5>{service.title}</h5>
                  <p className="text-muted">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section py-5" id="portfolio">
        <div className="container">
          <div className="text-center mb-5" data-animation="animate__fadeInUp">
            <h2>Our Portfolio</h2>
            <p className="text-muted">Explore Our Recent Projects</p>
          </div>
          <div className="row g-4">
            {[
              { img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80', title: 'Modern Living Room', cat: 'Residential' },
              { img: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80', title: 'Luxury Kitchen', cat: 'Modular Kitchen' },
              { img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80', title: 'Elegant Bedroom', cat: 'Master Bedroom' },
              { img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80', title: 'Contemporary Office', cat: 'Commercial' },
              { img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', title: 'Dining Area', cat: 'Residential' },
              { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', title: 'Kids Room', cat: 'Children Bedroom' }
            ].map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-animation="animate__fadeInUp">
                <div className="portfolio-item position-relative overflow-hidden rounded">
                  <img src={item.img} className="img-fluid w-100" alt={item.title} />
                  <div className="portfolio-overlay position-absolute bottom-0 start-0 w-100 p-4">
                    <h5 className="text-white">{item.title}</h5>
                    <p className="text-primary">{item.cat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section py-5 bg-light" id="testimonials">
        <div className="container">
          <div className="text-center mb-5" data-animation="animate__fadeInUp">
            <h2>What Our Clients Say</h2>
            <p className="text-muted">Google Reviews from Our Happy Clients</p>
          </div>

          {/* <div className="row g-4">
            {[
              { name: 'Rajesh Kumar', role: 'Homeowner', rating: 5, text: 'HIGHEND Interiors transformed our home beautifully. The attention to detail and quality of work exceeded our expectations. Highly recommended!' },
              { name: 'Priya Sharma', role: 'Business Owner', rating: 5, text: 'Professional team with excellent design sense. They completed our office interior on time and within budget. Very satisfied with the results.' },
              { name: 'Amit Patel', role: 'Homeowner', rating: 5, text: 'The modular kitchen they designed is both functional and stylish. Great quality materials and perfect execution. Worth every penny!' }
            ].map((testimonial, index) => (
              <div key={index} className="col-lg-4" data-animation="animate__fadeInUp">
                <div className="testimonial-card bg-white p-4 rounded">
                  <div className="mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-warning fs-5">★</span>
                    ))}
                  </div>
                  <p className="fst-italic">"{testimonial.text}"</p>
                  <div className="mt-3">
                    <h6 className="mb-0">{testimonial.name}</h6>
                    <small className="text-primary">{testimonial.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          <div className="text-center mt-4">
            <a href="https://maps.app.goo.gl/YraiHXFWgaJHuPpS6" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
              View All Google Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section py-5" id="contact">
        <div className="container">
          <div className="text-center mb-5" data-animation="animate__fadeInUp">
            <h2>Get In Touch</h2>
            <p className="text-muted">Ready to Transform Your Space?</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-6" data-animation="animate__fadeInLeft">
              <div className="contact-info">
                <div className="mb-4">
                  <h5><i className="fas fa-map-marker-alt text-primary me-2"></i>Address</h5>
                  <p><b>HIGH END INTERIORS</b></p>
                  <p> 2 nd floor, Gulshan apartment, 5, Dixit Rd, near Sathye College, Satsang CHSL, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057</p>
                </div>
                <div className="mb-4">
                  <h5><i className="fas fa-phone text-primary me-2"></i>Phone</h5>
                  <p>+91 83558 88976</p>
                </div>
                <div className="mb-4">
                  <h5><i className="fas fa-envelope text-primary me-2"></i>Email</h5>
                  <p>highendinteriors9@gmail.com</p>
                </div>
                <div className="mb-4">
                  <h5><i className="fab fa-instagram text-primary me-2"></i>Instagram</h5>
                  <p><a href="https://www.instagram.com/highend_interiors9" target="_blank" rel="noopener noreferrer" className="text-primary">highend_interiors9</a></p>
                </div>
                <div className="mb-4">
                  <h5><i className="fab fa-facebook text-primary me-2"></i>Facebook</h5>
                  <p><a href="https://www.facebook.com/profile.php?id=100063596333131" target="_blank" rel="noopener noreferrer" className="text-primary">Proprietor-Gautam Vernekar- Highendinteriors</a></p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6" data-animation="animate__fadeInRight">
              <form className="contact-form">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" placeholder="Your Phone" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows={5} placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
           */}

          <div className="col-lg-6" data-animation="animate__fadeInUp">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7167.3060072772205!2d72.8479356!3d19.0989097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c97fc8df9833%3A0x979626c8639a7eb6!2sHIGHEND%20INTERIORS!5e1!3m2!1sen!2sin!4v1773171439368!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border: 0, borderRadius: '10px'}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          </div>
        </div>
      </section>

      <footer className="footer bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-primary mb-3">HIGH END Interiors</h5>
              <p>Creating beautiful spaces that inspire and delight.</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-primary mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#about" className="text-white-50">About Us</a></li>
                <li><a href="#services" className="text-white-50">Services</a></li>
                <li><a href="#portfolio" className="text-white-50">Portfolio</a></li>
                <li><a href="#contact" className="text-white-50">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-primary mb-3">Services</h5>
              <ul className="list-unstyled">
                <li>Residential Interior</li>
                <li>Commercial Interior</li>
                <li>Modular Kitchen</li>
                <li>Consultation</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-primary mb-3">Follow Us</h5>
              <div className="d-flex gap-2">
                <a href="https://www.instagram.com/highend_interiors9" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=100063596333131" className="btn btn-outline-light btn-sm">Facebook</a>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <p className="mb-0">&copy; 2024 HIGH END Interiors. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a href="#" className="btn btn-primary btn-lg-square back-to-top">↑</a>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop show" style={{display: 'block'}}>
          <div className="modal show" style={{display: 'block'}}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Get a Free Quote</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}>X</button>
                </div>
                <div className="modal-body">
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleFormChange} />
                    </div>
                    <div className="mb-3">
                      <input type="email" name="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleFormChange} />
                    </div>
                    <div className="mb-3">
                      <input type="tel" name="phone" className="form-control" placeholder="Your Phone" value={formData.phone} onChange={handleFormChange} />
                    </div>
                    <div className="mb-3">
                      <textarea name="message" className="form-control" rows={5} placeholder="Your Message" value={formData.message} onChange={handleFormChange}></textarea>
                    </div>
                    <div className="d-flex gap-2">
                      <button type="button" onClick={sendEmail} disabled={isLoading} className="btn btn-primary flex-grow-1">
                        {isLoading ? <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...</> : 'Send via Email'}
                      </button>
                      <button type="submit" disabled={isLoading} className="btn btn-success flex-grow-1">Send via WhatsApp</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Status Modal */}
      {statusModal.show && (
        <div className="modal-backdrop show" style={{display: 'block'}}>
          <div className="modal show" style={{display: 'block'}}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center py-5">
                  <div className="mb-3">
                    {statusModal.type === 'success' ? (
                      <i className="fas fa-check-circle text-success" style={{fontSize: '3rem'}}></i>
                    ) : (
                      <i className="fas fa-exclamation-circle text-danger" style={{fontSize: '3rem'}}></i>
                    )}
                  </div>
                  <p className="fs-5">{statusModal.message}</p>
                  <button type="button" className="btn btn-primary" onClick={() => setStatusModal({ show: false, type: '', message: '' })}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
