'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import QuoteModal from '@/app/components/QuoteModal'
import MobileBottomNav from '@/app/components/MobileBottomNav'
import '../styles/Gallery.css'

interface SiteProject {
  name: string
  category: string
  images: string[]
}

export default function Gallery() {
  const [selectedSite, setSelectedSite] = useState<SiteProject | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  useEffect(() => {
    const spinner = document.getElementById('spinner')
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show')
      }, 1000)
    }
  }, [])

  const siteProjects: { [key: string]: SiteProject } = {
    'Shop': {
      name: 'Shop',
      category: 'commercial',
      images: [
        'assets/images/Highend Interiors/Shop/IMG-20260312-WA0381.jpg',
        'assets/images/Highend Interiors/Shop/IMG-20260312-WA0382.jpg',
        'assets/images/Highend Interiors/Shop/IMG-20260312-WA0383.jpg',
        'assets/images/Highend Interiors/Shop/IMG-20260312-WA0384.jpg',
        'assets/images/Highend Interiors/Shop/IMG-20260312-WA0385.jpg',
        'assets/images/Highend Interiors/Shop/IMG-20260312-WA0386.jpg',
        'assets/images/Highend Interiors/Shop/IMG-20260312-WA0387.jpg',
        'assets/images/Highend Interiors/Shop/IMG-20260312-WA0388.jpg',
        'assets/images/Highend Interiors/Shop/IMG-20260312-WA0389.jpg',
        'assets/images/Highend Interiors/Shop/IMG-20260312-WA0390.jpg'
      ]
    },
    'Residential-1': {
      name: 'Residential-1',
      category: 'residential',
      images: [
        'assets/images/Highend Interiors/Residential-1/IMG-20260312-WA0439.jpg',
        'assets/images/Highend Interiors/Residential-1/IMG-20260312-WA0440.jpg',
        'assets/images/Highend Interiors/Residential-1/IMG-20260312-WA0441.jpg',
        'assets/images/Highend Interiors/Residential-1/IMG-20260312-WA0442.jpg',
        'assets/images/Highend Interiors/Residential-1/IMG-20260312-WA0443.jpg',
        'assets/images/Highend Interiors/Residential-1/IMG-20260312-WA0444.jpg',
        'assets/images/Highend Interiors/Residential-1/IMG-20260312-WA0445.jpg',
        'assets/images/Highend Interiors/Residential-1/IMG-20260312-WA0446.jpg',
        'assets/images/Highend Interiors/Residential-1/IMG-20260312-WA0447.jpg',
        'assets/images/Highend Interiors/Residential-1/IMG-20260312-WA0448.jpg'
      ]
    },
    'Residential-2': {
      name: 'Residential-2',
      category: 'residential',
      images: [
        'assets/images/Highend Interiors/Residential-2/IMG-20260312-WA0413.jpg',
        'assets/images/Highend Interiors/Residential-2/IMG-20260312-WA0414.jpg',
        'assets/images/Highend Interiors/Residential-2/IMG-20260312-WA0415.jpg',
        'assets/images/Highend Interiors/Residential-2/IMG-20260312-WA0416.jpg',
        'assets/images/Highend Interiors/Residential-2/IMG-20260312-WA0417.jpg',
        'assets/images/Highend Interiors/Residential-2/IMG-20260312-WA0418.jpg',
        'assets/images/Highend Interiors/Residential-2/IMG-20260312-WA0419.jpg',
        'assets/images/Highend Interiors/Residential-2/IMG-20260312-WA0420.jpg',
        'assets/images/Highend Interiors/Residential-2/IMG-20260312-WA0421.jpg',
        'assets/images/Highend Interiors/Residential-2/IMG-20260312-WA0422.jpg'
      ]
    },
    'Residential-3': {
      name: 'Residential-3',
      category: 'residential',
      images: [
        'assets/images/Highend Interiors/Residential-3/IMG-20260312-WA0009.jpg',
        'assets/images/Highend Interiors/Residential-3/IMG-20260312-WA0010.jpg',
        'assets/images/Highend Interiors/Residential-3/IMG-20260312-WA0011.jpg',
        'assets/images/Highend Interiors/Residential-3/IMG-20260312-WA0012.jpg',
        'assets/images/Highend Interiors/Residential-3/IMG-20260312-WA0013.jpg',
        'assets/images/Highend Interiors/Residential-3/IMG-20260312-WA0014.jpg',
        'assets/images/Highend Interiors/Residential-3/IMG-20260312-WA0015.jpg',
        'assets/images/Highend Interiors/Residential-3/IMG-20260312-WA0016.jpg',
        'assets/images/Highend Interiors/Residential-3/IMG-20260312-WA0017.jpg',
        'assets/images/Highend Interiors/Residential-3/IMG-20260312-WA0018.jpg'
      ]
    },
    'Residential-4': {
      name: 'Residential-4',
      category: 'residential',
      images: [
        'assets/images/Highend Interiors/Residential-4/IMG-20260312-WA0130.jpg',
        'assets/images/Highend Interiors/Residential-4/IMG-20260312-WA0131.jpg',
        'assets/images/Highend Interiors/Residential-4/IMG-20260312-WA0132.jpg',
        'assets/images/Highend Interiors/Residential-4/IMG-20260312-WA0133.jpg',
        'assets/images/Highend Interiors/Residential-4/IMG-20260312-WA0134.jpg',
        'assets/images/Highend Interiors/Residential-4/IMG-20260312-WA0135.jpg',
        'assets/images/Highend Interiors/Residential-4/IMG-20260312-WA0136.jpg',
        'assets/images/Highend Interiors/Residential-4/IMG-20260312-WA0137.jpg',
        'assets/images/Highend Interiors/Residential-4/IMG-20260312-WA0138.jpg',
        'assets/images/Highend Interiors/Residential-4/IMG-20260312-WA0139.jpg'
      ]
    },
    'Residential-5': {
      name: 'Residential-5',
      category: 'residential',
      images: [
        'assets/images/Highend Interiors/Residential-5/IMG-20260312-WA0099.jpg',
        'assets/images/Highend Interiors/Residential-5/IMG-20260312-WA0100.jpg',
        'assets/images/Highend Interiors/Residential-5/IMG-20260312-WA0101.jpg',
        'assets/images/Highend Interiors/Residential-5/IMG-20260312-WA0102.jpg',
        'assets/images/Highend Interiors/Residential-5/IMG-20260312-WA0103.jpg',
        'assets/images/Highend Interiors/Residential-5/IMG-20260312-WA0104.jpg',
        'assets/images/Highend Interiors/Residential-5/IMG-20260312-WA0105.jpg',
        'assets/images/Highend Interiors/Residential-5/IMG-20260312-WA0106.jpg',
        'assets/images/Highend Interiors/Residential-5/IMG-20260312-WA0107.jpg',
        'assets/images/Highend Interiors/Residential-5/IMG-20260312-WA0108.jpg'
      ]
    },
    'Residential-6': {
      name: 'Residential-6',
      category: 'residential',
      images: [
        'assets/images/Highend Interiors/Residential-6/IMG-20260312-WA0225.jpg',
        'assets/images/Highend Interiors/Residential-6/IMG-20260312-WA0226.jpg',
        'assets/images/Highend Interiors/Residential-6/IMG-20260312-WA0227.jpg',
        'assets/images/Highend Interiors/Residential-6/IMG-20260312-WA0228.jpg',
        'assets/images/Highend Interiors/Residential-6/IMG-20260312-WA0229.jpg',
        'assets/images/Highend Interiors/Residential-6/IMG-20260312-WA0230.jpg',
        'assets/images/Highend Interiors/Residential-6/IMG-20260312-WA0231.jpg',
        'assets/images/Highend Interiors/Residential-6/IMG-20260312-WA0232.jpg',
        'assets/images/Highend Interiors/Residential-6/IMG-20260312-WA0233.jpg',
        'assets/images/Highend Interiors/Residential-6/IMG-20260312-WA0234.jpg'
      ]
    },
    'Residential-7': {
      name: 'Residential-7',
      category: 'residential',
      images: [
        'assets/images/Highend Interiors/Residential-7/IMG-20260312-WA0189.jpg',
        'assets/images/Highend Interiors/Residential-7/IMG-20260312-WA0190.jpg',
        'assets/images/Highend Interiors/Residential-7/IMG-20260312-WA0191.jpg',
        'assets/images/Highend Interiors/Residential-7/IMG-20260312-WA0192.jpg',
        'assets/images/Highend Interiors/Residential-7/IMG-20260312-WA0193.jpg',
        'assets/images/Highend Interiors/Residential-7/IMG-20260312-WA0194.jpg',
        'assets/images/Highend Interiors/Residential-7/IMG-20260312-WA0195.jpg',
        'assets/images/Highend Interiors/Residential-7/IMG-20260312-WA0196.jpg'
      ]
    },
    'Residential-8': {
      name: 'Residential-8',
      category: 'residential',
      images: [
        'assets/images/Highend Interiors/Residential-8/IMG-20260312-WA0404.jpg',
        'assets/images/Highend Interiors/Residential-8/IMG-20260312-WA0405.jpg',
        'assets/images/Highend Interiors/Residential-8/IMG-20260312-WA0406.jpg',
        'assets/images/Highend Interiors/Residential-8/IMG-20260312-WA0407.jpg',
        'assets/images/Highend Interiors/Residential-8/IMG-20260312-WA0408.jpg',
        'assets/images/Highend Interiors/Residential-8/IMG-20260312-WA0409.jpg',
        'assets/images/Highend Interiors/Residential-8/IMG-20260312-WA0410.jpg',
        'assets/images/Highend Interiors/Residential-8/IMG-20260312-WA0411.jpg',
        'assets/images/Highend Interiors/Residential-8/IMG-20260312-WA0412.jpg'
      ]
    }
  }

  const handleSiteClick = (siteName: string) => {
    setSelectedSite(siteProjects[siteName])
    setCurrentImageIndex(0)
    setShowModal(true)
  }

  const handleNextImage = () => {
    if (selectedSite) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedSite.images.length)
    }
  }

  const handlePrevImage = () => {
    if (selectedSite) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedSite.images.length) % selectedSite.images.length)
    }
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedSite(null)
  }

  const sites = Object.keys(siteProjects)

  return (
    <div className="gallery-page">
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{zIndex: 99999}}>
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      <div className="gallery-header">
        <div className="header-content">
          <h1>Our Gallery</h1>
          <p>Explore our stunning collection of interior design projects</p>
        </div>
      </div>

      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {sites.map((siteName) => {
              const site = siteProjects[siteName]
              return (
                <div 
                  key={siteName} 
                  className="gallery-card"
                  onClick={() => handleSiteClick(siteName)}
                >
                  <div className="gallery-image-wrapper">
                    <img src={site.images[0]} alt={siteName} className="gallery-image" />
                    <div className="gallery-overlay">
                      <div className="overlay-content">
                        <h3>{siteName}</h3>
                        <p>{site.category.charAt(0).toUpperCase() + site.category.slice(1)}</p>
                        <p className="image-count">{site.images.length} Photos</p>
                        <button className="view-btn">View All</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {showModal && selectedSite && (
        <div className="site-modal-backdrop" onClick={closeModal}>
          <div className="site-modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header" style={{ padding: '1.5rem 5rem' }}>
              <h2>{selectedSite.name}</h2>
              <p className="image-counter">{currentImageIndex + 1} / {selectedSite.images.length}</p>
              <button className="close-btn" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            </div>

            <div className="modal-body">
              <div className="main-image-container">
                <img 
                  src={selectedSite.images[currentImageIndex]} 
                  alt={`${selectedSite.name} - ${currentImageIndex + 1}`}
                  className="main-image"
                />
                <button className="nav-btn prev-btn" onClick={handlePrevImage}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="nav-btn next-btn" onClick={handleNextImage}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

              <div className="thumbnail-gallery">
                {selectedSite.images.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />
    </div>
  )
}
