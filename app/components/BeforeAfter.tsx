'use client'

import { useState, useRef } from 'react'
import '../styles/BeforeAfter.css'

interface BeforeAfterProps {
  before: string
  after: string
  title: string
  desc: string
}

export default function BeforeAfter({ before, after, title, desc }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length > 0) {
      handleMove(e.touches[0].clientX)
    }
  }

  return (
    <div>
      <div
        ref={containerRef}
        className="slider-container"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        <img id="before-img" className="slider-image slider-before" alt="Before" src={before} />
        <img
          id="after-img"
          className="slider-image slider-after"
          alt="After"
          src={after}
          style={{ clipPath: `inset(0px 0px 0px ${100 - sliderPosition}%)` }}
        />

        <div className="slider-handle" id="handle" style={{ left: `${sliderPosition}%` }}>
          <div className="handle-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"></polyline>
              <polyline points="9 18 3 12 9 6"></polyline>
            </svg>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"></polyline>
              <polyline points="15 18 21 12 15 6"></polyline>
            </svg>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 24px', background: 'white' }}>
        <h5 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2c3e50', marginBottom: '8px' }}>{title}</h5>
        <p style={{ fontSize: '0.9rem', color: '#666', margin: 0, lineHeight: '1.5' }}>{desc}</p>
      </div>
    </div>
  )
}
