import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">HIGHEND Interiors</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h2>Crafting Dream Spaces</h2>
          <p>Premium Interior Design & Execution</p>
          <div className="hero-buttons">
            <button className="cta-button">Get Free Quote</button>
            <button className="cta-button-outline">View Portfolio</button>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>450+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Expert Team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About HIGHEND Interiors</h2>
              <p>We are a leading interior design firm specializing in residential and commercial spaces. With over 15 years of experience, we transform ordinary spaces into extraordinary living experiences.</p>
              <p>Our team of expert designers and craftsmen work closely with clients to understand their vision and bring it to life with precision and creativity.</p>
              <ul className="about-features">
                <li>✓ Customized Design Solutions</li>
                <li>✓ Premium Quality Materials</li>
                <li>✓ Timely Project Delivery</li>
                <li>✓ End-to-End Execution</li>
              </ul>
              <button className="cta-button">Learn More</button>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Interior Design" />
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-subtitle">Complete Interior Solutions for Every Space</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Residential Interior</h3>
              <p>Complete home interior design including living rooms, bedrooms, kitchens, and more</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Commercial Spaces</h3>
              <p>Office interiors, retail spaces, and commercial establishments</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🪑</div>
              <h3>Modular Kitchen</h3>
              <p>Custom modular kitchen designs with premium fittings and accessories</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛏️</div>
              <h3>Bedroom Design</h3>
              <p>Luxurious bedroom interiors with wardrobes and storage solutions</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛋️</div>
              <h3>Living Room</h3>
              <p>Elegant living room designs with TV units and entertainment areas</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💼</div>
              <h3>Consultation</h3>
              <p>Expert design consultation and 3D visualization services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2>Our Portfolio</h2>
          <p className="section-subtitle">Explore Our Recent Projects</p>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80" alt="Modern Living Room" />
              <div className="portfolio-overlay">
                <h3>Modern Living Room</h3>
                <p>Residential Project</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80" alt="Luxury Kitchen" />
              <div className="portfolio-overlay">
                <h3>Luxury Kitchen</h3>
                <p>Modular Kitchen</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80" alt="Elegant Bedroom" />
              <div className="portfolio-overlay">
                <h3>Elegant Bedroom</h3>
                <p>Master Bedroom</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80" alt="Contemporary Office" />
              <div className="portfolio-overlay">
                <h3>Contemporary Office</h3>
                <p>Commercial Space</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" alt="Dining Area" />
              <div className="portfolio-overlay">
                <h3>Dining Area</h3>
                <p>Residential Project</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Kids Room" />
              <div className="portfolio-overlay">
                <h3>Kids Room</h3>
                <p>Children's Bedroom</p>
              </div>
            </div>
          </div>
          <div className="portfolio-cta">
            <button className="cta-button">View All Projects</button>
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="section-subtitle">Simple & Transparent Working Process</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>Initial meeting to understand your requirements and vision</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design</h3>
              <p>Create detailed 3D designs and layouts for your approval</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>Professional execution with quality materials and craftsmanship</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Delivery</h3>
              <p>Timely project completion and handover with warranty</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by Hundreds of Happy Clients</p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"HIGHEND Interiors transformed our home beautifully. The attention to detail and quality of work exceeded our expectations. Highly recommended!"</p>
              <div className="testimonial-author">
                <h4>Rajesh Kumar</h4>
                <span>Homeowner</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Professional team with excellent design sense. They completed our office interior on time and within budget. Very satisfied with the results."</p>
              <div className="testimonial-author">
                <h4>Priya Sharma</h4>
                <span>Business Owner</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The modular kitchen they designed is both functional and stylish. Great quality materials and perfect execution. Worth every penny!"</p>
              <div className="testimonial-author">
                <h4>Amit Patel</h4>
                <span>Homeowner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">Ready to Transform Your Space?</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>📍 Address</h3>
                <p>Your Address Here</p>
              </div>
              <div className="contact-item">
                <h3>📞 Phone</h3>
                <p>+91 XXXXX XXXXX</p>
              </div>
              <div className="contact-item">
                <h3>✉️ Email</h3>
                <p>info@highendinteriors.com</p>
              </div>
              <div className="contact-item">
                <h3>🕒 Working Hours</h3>
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
            <div className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="tel" placeholder="Your Phone" />
              <textarea placeholder="Your Message" rows={5}></textarea>
              <button className="cta-button">Send Message</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>HIGHEND Interiors</h3>
              <p>Creating beautiful spaces that inspire and delight.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Residential Interior</li>
                <li>Commercial Interior</li>
                <li>Modular Kitchen</li>
                <li>Consultation</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="https://www.instagram.com/highend_interiors9" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 HIGHEND Interiors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
