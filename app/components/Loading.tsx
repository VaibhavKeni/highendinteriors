'use client'

import '../styles/Loading.css'

export default function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  )
}
