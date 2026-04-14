'use client'

import { useEffect, useState } from 'react'
import '../styles/BackToTop.css'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Lower threshold for mobile devices
      const threshold = window.innerWidth <= 768 ? 100 : 200
      const scrolled = window.scrollY > threshold
      setIsVisible(scrolled)
    }

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility)
    
    // Initial check
    toggleVisibility()

    // Cleanup
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`btn btn-primary btn-lg-square back-to-top ${isVisible ? 'show' : ''}`}
      aria-label="Back to top"
      style={{
        display: isVisible ? 'flex' : 'none'
      }}
    >
      ↑
    </button>
  )
}