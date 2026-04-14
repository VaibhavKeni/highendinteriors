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
    if (path === '/') return pathname === '/' || pathname === ''
    return pathname === path || pathname === path + '/'
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top custom-navbar">
      <div className="container-fluid px-3 px-md-4">
        <Link href="/" className="logo-container d-flex align-items-center" style={{textDecoration: 'none'}}>
          <img className="logo" src="/logo.png" alt="Logo" onError={(e) => e.currentTarget.style.display = 'none'} />
          <img className="highend" src="/high_end.png" alt="HIGH END" onError={(e) => e.currentTarget.style.display = 'none'} />
          <span className="logo-interiors">Interiors</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About us' },
              { path: '/services', label: 'Services' },
              { path: '/gallery', label: 'Gallery' },
              { path: '/reviews', label: 'Reviews' },
              { path: '/faq', label: 'FAQ' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <Link
                  className={`nav-link ${isActive(path) ? 'nav-active' : ''}`}
                  href={path}
                  onClick={handleNavClick}
                  style={isActive(path) ? {
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #d4af37, #f0c040)',
                    borderRadius: '6px',
                    fontWeight: '800',
                    boxShadow: '0 3px 10px rgba(212,175,55,0.5)',
                    padding: '0.4rem 0.9rem',
                    textDecoration: 'none',
                  } : { color: '#555' }}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="nav-item mobile-quote-btn">
              <button
                className="btn btn-primary"
                onClick={() => { onQuoteClick?.(); handleNavClick() }}
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