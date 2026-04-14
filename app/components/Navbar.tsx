'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../styles/Navbar.css'

interface NavbarProps {
  onQuoteClick?: () => void
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const pathname = usePathname()

  const handleNavClick = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse')
    if (navbarCollapse?.classList.contains('show')) {
      const toggler = document.querySelector('.navbar-toggler') as HTMLButtonElement
      toggler?.click()
    }
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container-fluid px-3 px-md-4">
        <Link 
          href="/" 
          className="logo-container d-flex align-items-center" 
          style={{textDecoration: 'none'}}
        >
          <img className="logo" src="/logo.png" alt="Logo" onError={(e) => e.currentTarget.style.display = 'none'} />
          <img className="highend" src="/high_end.png" alt="HIGH END" onError={(e) => e.currentTarget.style.display = 'none'} />
          <span className="logo-interiors">Interiors</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                href="/"
                onClick={handleNavClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                href="/about"
                onClick={handleNavClick}
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                href="/services"
                onClick={handleNavClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
                href="/gallery"
                onClick={handleNavClick}
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/reviews') ? 'active' : ''}`}
                href="/reviews"
                onClick={handleNavClick}
              >
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
                href="/faq"
                onClick={handleNavClick}
              >
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                href="/contact"
                onClick={handleNavClick}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item mobile-quote-btn">
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  onQuoteClick?.()
                  handleNavClick()
                }}
              >
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
