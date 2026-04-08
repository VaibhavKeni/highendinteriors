import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import 'animate.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CitiesSlider from './components/Slider'
import MobileBottomNav from './components/MobileBottomNav'
import Loading from './components/Loading'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [dreamFormData, setDreamFormData] = useState({ name: '', phone: '', floorPlan: '', budget: '' })
  const [statusModal, setStatusModal] = useState({ show: false, type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [isPageLoading, setIsPageLoading] = useState(false)
  
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
  }



  const handleDreamFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setDreamFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleDreamFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, phone, floorPlan, budget } = dreamFormData
    if (!name || !phone || !floorPlan || !budget ) {
      setStatusModal({ show: true, type: 'error', message: 'Please fill all fields' })
      return
    }
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:3001/api/send-callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, floorPlan, budget})
      })
      const data = await response.json()
      setIsLoading(false)
      if (data.success) {
        setStatusModal({ show: true, type: 'success', message: 'Callback request sent successfully!' })
        setDreamFormData({ name: '', phone: '', floorPlan: '', budget: '' })
        setTimeout(() => {
          setStatusModal({ show: false, type: '', message: '' })
        }, 3000)
      } else {
        setStatusModal({ show: true, type: 'error', message: 'Failed to send callback request' })
      }
    } catch (error) {
      setIsLoading(false)
      // Fallback: Send via WhatsApp
      const whatsappNumber = '919867818123'
      const text = `Hi, I want to book a callback.%0AName: ${name}%0APhone: ${phone}%0AFloor Plan: ${floorPlan}%0ABudget: ${budget}`
      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank')
      setStatusModal({ show: true, type: 'success', message: 'Opening WhatsApp...' })
      setDreamFormData({ name: '', phone: '', floorPlan: '', budget: '' })
      setTimeout(() => {
        setStatusModal({ show: false, type: '', message: '' })
      }, 2000)
    }
  }

  useEffect(() => {
    setIsPageLoading(true)
    const timer = setTimeout(() => {
      setIsPageLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [location])

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
      {isPageLoading && <Loading />}
      
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{zIndex: 99999}}>
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />

      <CitiesSlider />

      <section className="about-section py-4 py-md-5" id="about">
        <div className="container">
          <div className="row g-4 g-md-5 align-items-center">
            <div className="col-lg-6" data-animation="animate__fadeInLeft">
              <img src="assets/images/Dashboard/Office.jpg" className="img-fluid rounded" alt="About" />
            </div>
            <div className="col-lg-6" data-animation="animate__fadeInRight">
              <h2 className="section-title mb-3 mb-md-4">About HIGH END Interiors</h2>
              <p className="section-text mb-2 mb-md-3">We are a leading interior design firm specializing in residential and commercial spaces. With over 15 years of experience, we transform ordinary spaces into extraordinary living experiences.</p>
              <p className="section-text mb-3 mb-md-4">Our team of expert designers and craftsmen work closely with clients to understand their vision and bring it to life with precision and creativity.</p>
              <ul className="section-list list-unstyled">
                <li className="section-list-item mb-2"><i className="fas fa-check text-primary me-2"></i>Customized Design Solutions</li>
                <li className="section-list-item mb-2"><i className="fas fa-check text-primary me-2"></i>Premium Quality Materials</li>
                <li className="section-list-item mb-2"><i className="fas fa-check text-primary me-2"></i>Timely Project Delivery</li>
                <li className="section-list-item mb-2"><i className="fas fa-check text-primary me-2"></i>End-to-End Execution</li>
              </ul>
              <button className="btn btn-primary mt-3" onClick={() => navigate('/about')}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-section py-4 py-md-5" id="why-choose">
        <div className="container">
          <div className="text-center mb-4 mb-md-5" data-animation="animate__fadeInUp">
            <h2 className="section-title">Why Choose HIGH END Interiors</h2>
            <p className="section-subtitle">What Sets Us Apart</p>
          </div>
          <div className="row g-3 g-md-4">
            {[
              { icon: '⭐', title: 'Expert Team', desc: 'Experienced designers with 15+ years in the industry' },
              { icon: '🎨', title: 'Custom Design', desc: 'Personalized solutions tailored to your style and budget' },
              { icon: '⚡', title: 'On-Time Delivery', desc: 'Committed to meeting project deadlines without compromise' },
              { icon: '💎', title: 'Premium Quality', desc: 'Only finest materials and craftsmanship used' },
              { icon: '🔧', title: 'End-to-End Service', desc: 'From concept to completion, we handle everything' },
              { icon: '✅', title: 'Warranty Support', desc: '2-year warranty on all workmanship and materials' }
            ].map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-animation="animate__fadeInUp">
                <div className="why-choose-card bg-white p-3 p-md-4 rounded text-center h-100">
                  <div className="why-choose-icon fs-1 mb-2 mb-md-3">{item.icon}</div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section py-4 py-md-5 bg-light" id="process">
        <div className="container">
          <div className="text-center mb-4 mb-md-5" data-animation="animate__fadeInUp">
            <h2 className="section-title">Our Design Process</h2>
            <p className="section-subtitle">From Concept to Completion</p>
          </div>
          <div className="row g-3 g-md-4">
            {[
              { step: '01', title: 'Consultation', desc: 'Understand your vision, style preferences, and budget requirements' },
              { step: '02', title: '3D Visualization', desc: 'Create detailed 3D renderings for your approval' },
              { step: '03', title: 'Design Approval', desc: 'Finalize design with material and color selections' },
              { step: '04', title: 'Procurement', desc: 'Source premium materials and furnishings' },
              { step: '05', title: 'Execution', desc: 'Professional installation with minimal disruption' },
              { step: '06', title: 'Handover', desc: 'Final inspection and project completion' }
            ].map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-animation="animate__fadeInUp">
                <div className="process-card text-center">
                  <div className="process-step">{item.step}</div>
                  <h5 className="card-title mt-3 mb-2">{item.title}</h5>
                  <p className="card-text text-muted mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section py-4 py-md-5" id="solutions">
        <div className="container">
          <div className="text-center mb-4 mb-md-5" data-animation="animate__fadeInUp">
            <h2 className="solutions-title">A to Z Interior Solutions</h2>
            <p className="solutions-subtitle">From concept to completion — everything your space needs, under one roof.</p>
          </div>
          <div className="row g-3 g-md-4">
            {[
              { img: 'assets/images/A to Z icons/Modular Kitchen.png', title: 'Modular Kitchen' },
              { img: 'assets/images/A to Z icons/Space Saving Furniture.png', title: 'Space Saving Furniture' },
              { img: 'assets/images/A to Z icons/False Ceiling.png', title: 'False Ceiling' },
              { img: 'assets/images/A to Z icons/Wallpaper.png', title: 'Wallpaper' },
              { img: 'assets/images/A to Z icons/Wall Paint.png', title: 'Wall Paint' },
              { img: 'assets/images/A to Z icons/Dressing Table.png', title: 'Dressing Table' },
              { img: 'assets/images/A to Z icons/Storage & Wardrobe.png', title: 'Storage & Wardrobe' },
              { img: 'assets/images/A to Z icons/TV Units.png', title: 'TV Units' },
              { img: 'assets/images/A to Z icons/Bathroom.png', title: 'Bathroom' },
              { img: 'assets/images/A to Z icons/Study Table.png', title: 'Study Table' },
              { img: 'assets/images/A to Z icons/Movable Furniture.png', title: 'Movable Furniture' },
              { img: 'assets/images/A to Z icons/Light.png', title: 'Lighting' }
            ].map((item, index) => (
              <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6" data-animation="animate__fadeInUp">
                <div className="solution-card text-center">
                  <div className="solution-img-wrapper">
                    <img src={item.img} alt={item.title} className="solution-img" />
                  </div>
                  <h6 className="solution-title mt-3">{item.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section py-4 py-md-5 bg-light" id="partners">
        <div className="container">
          <div className="row g-4 g-md-5 align-items-center">
            <div className="col-lg-6" data-animation="animate__fadeInLeft">
              <div className="partners-img-wrapper">
                <img src="assets/images/Trusted_Partners/Trusted Partners.png" alt="Trusted Partners" className="partners-img w-100" />
              </div>
            </div>
            <div className="col-lg-6" data-animation="animate__fadeInRight">
              <div className="partners-content">
                <h2 className="partners-title mb-3 mb-md-4">Our Trusted Partners</h2>
                <p className="partners-subtitle mb-3 mb-md-4">We collaborate with industry-leading brands to ensure top-quality materials and lasting performance.</p>
                <ul className="partners-list list-unstyled mb-4 mb-md-5">
                  <li className="partners-list-item mb-3" data-animation="animate__fadeInUp"><i className="fas fa-check partners-check-icon me-3"></i><span>Premium Furniture & Fittings</span></li>
                  <li className="partners-list-item mb-3" data-animation="animate__fadeInUp"><i className="fas fa-check partners-check-icon me-3"></i><span>Elite Paints & Coatings</span></li>
                  <li className="partners-list-item mb-3" data-animation="animate__fadeInUp"><i className="fas fa-check partners-check-icon me-3"></i><span>Luxury Tiles & Flooring</span></li>
                  <li className="partners-list-item mb-3" data-animation="animate__fadeInUp"><i className="fas fa-check partners-check-icon me-3"></i><span>Modern Lighting Solutions</span></li>
                  <li className="partners-list-item mb-3" data-animation="animate__fadeInUp"><i className="fas fa-check partners-check-icon me-3"></i><span>Premium Hardware & Accessories</span></li>
                  <li className="partners-list-item" data-animation="animate__fadeInUp"><i className="fas fa-check partners-check-icon me-3"></i><span>Eco-Friendly Materials</span></li>
                </ul>
                <p className="partners-description">Our partnerships ensure that every project receives the highest quality materials and expert craftsmanship, delivering exceptional results that stand the test of time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section py-4 py-md-5 bg-light" id="testimonials">
        <div className="container">
          <div className="text-center mb-4 mb-md-5" data-animation="animate__fadeInUp">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Google Reviews from Our Happy Clients</p>
          </div>

          <div className="text-center mt-3 mt-md-4">
            <a href="https://maps.app.goo.gl/YraiHXFWgaJHuPpS6" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
              View All Google Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="design-dream-section py-4 py-md-5" id="design-dream">
        <div className="design-dream-bg">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80" alt="Luxury Living Room" className="design-dream-img" />
        </div>
        <div className="container position-relative" style={{zIndex: 2}}>
          <div className="row g-4 g-md-5">
            <div className="col-lg-6" data-animation="animate__fadeInLeft">
              <div className="design-form-wrapper">
                <h4 className="design-form-subtitle mb-2">Let's design your</h4>
                <h2 className="design-form-title mb-4">Dream Space</h2>
                
                <form className="design-form" onSubmit={handleDreamFormSubmit}>
                  <div className="mb-3">
                    <input type="text" name="name" className="form-control design-input" placeholder="Full Name" value={dreamFormData.name} onChange={handleDreamFormChange} required />
                  </div>
                  <div className="mb-3">
                    <input type="tel" name="phone" className="form-control design-input" placeholder="Phone No." maxLength={10} minLength={10} value={dreamFormData.phone} onChange={handleDreamFormChange} required />
                  </div>
                  <div className="mb-3">
                    <select name="floorPlan" className="form-select design-input" value={dreamFormData.floorPlan} onChange={handleDreamFormChange} required>
                      <option value="" disabled>Select Floor plan</option>
                      <option value="1 BHK">1 BHK</option>
                      <option value="2 BHK">2 BHK</option>
                      <option value="3 BHK">3 BHK</option>
                      <option value="4 BHK">4 BHK</option>
                      <option value="5 BHK / PENTHOUSE">5 BHK / PENTHOUSE</option>
                      <option value="Villa">Villa</option>
                      <option value="Bunglow">Bunglow</option>
                      <option value="Shop">Shop</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Office">Office</option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Bedroom">Bedroom</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <select name="budget" className="form-select design-input" value={dreamFormData.budget} onChange={handleDreamFormChange} required>
                      <option value="" disabled>Budget in mind</option>
                      <option value="Less than 1 Lakhs">Less than 1 Lakh</option>
                      <option value="1 - 4 Lakhs">1 - 4 Lakhs</option>
                      <option value="4 - 6 Lakhs">4 - 6 Lakhs</option>
                      <option value="6 - 10 Lakhs">6 - 10 Lakhs</option>
                      <option value="10 - 15 Lakhs">10 - 15 Lakhs</option>
                      <option value="15 - 20 Lakhs">15 - 20 Lakhs</option>
                      <option value="20 - 25 Lakhs">20 - 25 Lakhs</option>
                      <option value="More than 25 Lakhs">More than 25 Lakhs</option>
                    </select>
                  </div>
                  {/* <div className="mb-3">
                    <div className="city-options">
                      <label className="city-option">
                        <input type="radio" name="city" value="Mumbai" checked={dreamFormData.city === 'Mumbai'} onChange={handleDreamFormChange} required />
                        <span>Mumbai</span>
                      </label>
                      <label className="city-option">
                        <input type="radio" name="city" value="Nagpur" checked={dreamFormData.city === 'Nagpur'} onChange={handleDreamFormChange} />
                        <span>Nagpur</span>
                      </label>
                    </div>
                  </div> */}
                  <button type="submit" disabled={isLoading} className="btn btn-primary w-100 design-btn mb-3">
                    {isLoading ? <>Sending...</> : 'BOOK CALL BACK'}
                  </button>
                  <p className="design-privacy-text text-center">✅ We respect your privacy. No spam ever.</p>
                </form>
              </div>
            </div>
            <div className="col-lg-6" data-animation="animate__fadeInRight">
              <div className="design-content">
                <p className="design-tagline">Design, execution, and delivery — all handled seamlessly by experts.</p>
                <h2 className="design-heading">Hasle free Interiors from start to finish</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section py-4 py-md-5" id="contact">
        <div className="container">
          <div className="text-center mb-4 mb-md-5" data-animation="animate__fadeInUp">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Ready to Transform Your Space?</p>
          </div>
          <div className="row g-3 g-md-4">
            <div className="col-lg-6" data-animation="animate__fadeInLeft">
              <div className="contact-info">
                <div className="mb-3 mb-md-4">
                  <h5 className="contact-heading"><i className="fas fa-map-marker-alt text-primary me-2"></i>Address</h5>
                  <p className="contact-text mb-0"><b>HIGH END INTERIORS</b></p>
                  <p className="contact-text mb-0">2nd floor, Gulshan apartment, 5, Dixit Rd, near Sathye College, Satsang CHSL, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057</p>
                </div>
                <div className="mb-3 mb-md-4">
                  <h5 className="contact-heading"><i className="fas fa-phone text-primary me-2"></i>Phone</h5>
                  <p className="contact-text mb-0">+91 83558 88976</p>
                </div>
                <div className="mb-3 mb-md-4">
                  <h5 className="contact-heading"><i className="fas fa-envelope text-primary me-2"></i>Email</h5>
                  <p className="contact-text mb-0">highendinteriors9@gmail.com</p>
                </div>
                <div className="mb-3 mb-md-4">
                  <h5 className="contact-heading"><i className="fab fa-instagram text-primary me-2"></i>Instagram</h5>
                  <p className="contact-text mb-0"><a href="https://www.instagram.com/highend_interiors9" target="_blank" rel="noopener noreferrer" className="text-primary">highend_interiors9</a></p>
                </div>
                <div className="mb-3 mb-md-4">
                  <h5 className="contact-heading"><i className="fab fa-facebook text-primary me-2"></i>Facebook</h5>
                  <p className="contact-text mb-0"><a href="https://www.facebook.com/profile.php?id=100063596333131" target="_blank" rel="noopener noreferrer" className="text-primary">Proprietor-Gautam Vernekar- Highendinteriors</a></p>
                </div>
              </div>
            </div>

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

      <Footer />

      <a href="#" className="btn btn-primary btn-lg-square back-to-top">↑</a>

      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />

      {showQuoteModal && (
        <div className="modal-backdrop show" style={{display: 'block'}}>
          <div className="modal show" style={{display: 'block'}}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Get a Free Quote</h5>
                  <button type="button" className="btn-close" onClick={() => setShowQuoteModal(false)}>X</button>
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

      {statusModal.show && (
        <div className="modal-backdrop show" style={{display: 'block'}}>
          <div className="modal show" style={{display: 'block'}}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center py-4 py-md-5">
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
