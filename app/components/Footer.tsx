'use client'

import { useState } from 'react'
import Link from 'next/link'
import '../styles/Footer.css'

export default function Footer() {
  const [showTopSearches, setShowTopSearches] = useState(false)

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
          <h6 className={`top-searches-title ${showTopSearches ? '' : 'collapsed'}`} onClick={() => setShowTopSearches(!showTopSearches)}>
            <i className="fas fa-chevron-down"></i>
            {showTopSearches ? 'Hide' : 'Show'} Top Searches
          </h6>
          <div className={`top-searches-links ${showTopSearches ? '' : 'hidden'}`}>
            {[
              { label: 'Interior Decorators In Mumbai', slug: 'interior-decorators-mumbai' },
              { label: 'Commercial Interior Design In Mumbai', slug: 'commercial-interior-design-mumbai' },
              { label: 'Residential Interior Designers In Mumbai', slug: 'residential-interior-designers-mumbai' },
              { label: 'Living Room Interior Design In Mumbai', slug: 'living-room-interior-design-mumbai' },
              { label: 'Kitchen Interior Design In Mumbai', slug: 'kitchen-interior-design-mumbai' },
              { label: 'Bedroom Interior Design In Mumbai', slug: 'bedroom-interior-design-mumbai' },
              { label: 'Shop Interior Design In Mumbai', slug: 'shop-interior-design-mumbai' },
              { label: 'Office Interior Design In Mumbai', slug: 'office-interior-design-mumbai' },
              { label: 'Furniture Designers In Mumbai', slug: 'furniture-designers-mumbai' },
              { label: 'Home Interior Designer In Mumbai', slug: 'home-interior-designer-mumbai' },
              { label: 'Best Interior Designers In Mumbai', slug: 'best-interior-designers-mumbai' },
              { label: 'Interior Designers In Mumbai', slug: 'interior-designers-mumbai' },
              { label: 'Interior Designer In Vile Parle Mumbai', slug: 'interior-designer-vileparle-mumbai' },
              { label: 'Interior Designer In Andheri', slug: 'interior-designer-andheri' },
              { label: 'Interior Designer In Thane', slug: 'interior-designer-thane' },
              { label: 'Interior Designer In Navi Mumbai', slug: 'interior-designer-navi-mumbai' },
              { label: 'Interior Designer In Borivali', slug: 'interior-designer-borivali' },
              { label: 'Interior Designer Near Bandra', slug: 'interior-designer-bandra' },
              { label: 'Luxury Interior Designers Mumbai', slug: 'luxury-interior-designers-mumbai' },
              { label: 'Affordable Interior Designers Mumbai', slug: 'affordable-interior-designers-mumbai' },
              { label: 'Modular Kitchen Design Mumbai', slug: 'modular-kitchen-design-mumbai' },
              { label: 'False Ceiling Design Mumbai', slug: 'false-ceiling-design-mumbai' },
              { label: 'Home Renovation Mumbai', slug: 'home-renovation-mumbai' },
              { label: 'Turnkey Interior Solutions Mumbai', slug: 'turnkey-interior-solutions-mumbai' },
              { label: '2BHK Interior Design Mumbai', slug: '2bhk-interior-design-mumbai' },
            ].map(({ label, slug }) => (
              <Link key={slug} href={`/${slug}`} className="top-search-tag" onClick={handleNavClick}>
                {label}
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
