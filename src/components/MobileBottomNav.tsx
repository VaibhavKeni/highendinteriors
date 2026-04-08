import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

interface MobileBottomNavProps {
  onBookClick?: () => void
}

function MobileBottomNav({ onBookClick }: MobileBottomNavProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    if (location.pathname === '/gallery') {
      setActiveTab('gallery')
    } else if (location.pathname === '/reviews') {
      setActiveTab('reviews')
    } else if (location.pathname === '/contact') {
      setActiveTab('contact')
    } else {
      setActiveTab('home')
    }
  }, [location.pathname])

  const handleNavClick = (tabName: string, path?: string) => {
    setActiveTab(tabName)
    if (path) {
      navigate(path)
    } else {
      const sectionId = tabName === 'home' ? 'home' : tabName
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="mobile-bottom-nav">
      <button 
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => {
          navigate('/')
          setActiveTab('home')
        }}
      >
        <i className="fas fa-home"></i>
        <span>Home</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'gallery' ? 'active' : ''}`}
        onClick={() => handleNavClick('gallery', '/gallery')}
      >
        <i className="fas fa-images"></i>
        <span>Gallery</span>
      </button>
      <button 
        className={`nav-item book-now-btn ${activeTab === 'book' ? 'active' : ''}`}
        onClick={() => {
          setActiveTab('book')
          onBookClick?.()
        }}
      >
        <i className="fas fa-calendar-check"></i>
        <span>Book Now</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
        onClick={() => handleNavClick('reviews', '/reviews')}
      >
        <i className="fas fa-star"></i>
        <span>Reviews</span>
      </button>
      <button 
        className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}
        onClick={() => handleNavClick('contact', '/contact')}
      >
        <i className="fas fa-phone-alt"></i>
        <span>Contact</span>
      </button>
    </div>
  )
}

export default MobileBottomNav
