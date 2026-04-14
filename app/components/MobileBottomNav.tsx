'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../styles/MobileBottomNav.css'

interface MobileBottomNavProps {
  onBookClick?: () => void
}

export default function MobileBottomNav({ onBookClick }: MobileBottomNavProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    if (pathname === '/gallery') {
      setActiveTab('gallery')
    } else if (pathname === '/reviews') {
      setActiveTab('reviews')
    } else if (pathname === '/contact') {
      setActiveTab('contact')
    } else {
      setActiveTab('home')
    }
  }, [pathname])

  const handleNavClick = (tabName: string) => {
    setActiveTab(tabName)
    const sectionId = tabName === 'home' ? 'home' : tabName
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="mobile-bottom-nav">
      <Link 
        href="/"
        className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => setActiveTab('home')}
      >
        <i className="fas fa-home"></i>
        <span>Home</span>
      </Link>
      <Link 
        href="/gallery"
        className={`nav-item ${activeTab === 'gallery' ? 'active' : ''}`}
        onClick={() => setActiveTab('gallery')}
      >
        <i className="fas fa-images"></i>
        <span>Gallery</span>
      </Link>
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
      <Link 
        href="/reviews"
        className={`nav-item ${activeTab === 'reviews' ? 'active' : ''}`}
        onClick={() => setActiveTab('reviews')}
      >
        <i className="fas fa-star"></i>
        <span>Reviews</span>
      </Link>
      <Link 
        href="/contact"
        className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}
        onClick={() => setActiveTab('contact')}
      >
        <i className="fas fa-phone-alt"></i>
        <span>Contact</span>
      </Link>
    </div>
  )
}
