'use client'

import Link from 'next/link'
import '../styles/Footer.css'

export default function Footer() {
  const handleNavClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="footer bg-dark text-white py-4 py-md-5">
      <div className="container">
        <div className="row g-3 g-md-4">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-primary mb-2 mb-md-3">HIGH END Interiors</h5>
            <p className="mb-0">Creating beautiful spaces that inspire and delight.</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-primary mb-2 mb-md-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link 
                  href="/" 
                  className="text-white-50"
                  onClick={handleNavClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-white-50"
                  onClick={handleNavClick}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-white-50"
                  onClick={handleNavClick}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="text-white-50"
                  onClick={handleNavClick}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/reviews" 
                  className="text-white-50"
                  onClick={handleNavClick}
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-white-50"
                  onClick={handleNavClick}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-white-50"
                  onClick={handleNavClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-primary mb-2 mb-md-3">Services</h5>
            <ul className="list-unstyled">
              <li className="text-white-50">Residential Interior</li>
              <li className="text-white-50">Commercial Interior</li>
              <li className="text-white-50">Modular Kitchen</li>
              <li className="text-white-50">Consultation</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-primary mb-2 mb-md-3">Follow Us</h5>
            <div className="d-flex gap-2">
              <a 
                href="https://www.instagram.com/highend_interiors9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-light btn-sm"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100063596333131" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <hr className="my-3 my-md-4" />
        <div className="top-searches">
          <h6 className="top-searches-title">Top Searches</h6>
          <div className="top-searches-links">
            {[
              'Interior Decorators In Mumbai',
              'Commercial Interior Design In Mumbai',
              'Residential Interior Designers In Mumbai',
              'Living Room Interior Design In Mumbai',
              'Kitchen Interior Design In Mumbai',
              'Bedroom Interior Design In Mumbai',
              'Shop Interior Design In Mumbai',
              'Office Interior Design In Mumbai',
              'Furniture Designers In Mumbai',
              'Home Interior Designer In Mumbai',
              'Best Interior Designers In Mumbai',
              'Interior Designers In Mumbai',
              'Interior Designer In Vile Parle Mumbai',
            ].map((term) => (
              <Link key={term} href="/services" className="top-search-tag" onClick={handleNavClick}>
                {term}
              </Link>
            ))}
          </div>
        </div>
        <hr className="my-3 my-md-4" />
        <div className="text-center">
          <p className="mb-0">&copy; 2024 HIGH END Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
