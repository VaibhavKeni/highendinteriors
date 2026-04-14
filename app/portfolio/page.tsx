'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import QuoteModal from '@/app/components/QuoteModal'
import MobileBottomNav from '@/app/components/MobileBottomNav'
import '../styles/Portfolio.css'

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  location: string
  duration: string
  budget: string
}

export default function Portfolio() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    const spinner = document.getElementById('spinner')
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show')
      }, 1000)
    }
  }, [])

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Luxury Apartment',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description: 'A stunning 3-bedroom luxury apartment with contemporary design and premium finishes.',
      location: 'Bandra, Mumbai',
      duration: '4 months',
      budget: '₹25,00,000'
    },
    {
      id: 2,
      title: 'Corporate Office Space',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      description: 'Modern office design with open workspace, meeting rooms, and executive cabin.',
      location: 'BKC, Mumbai',
      duration: '3 months',
      budget: '₹15,00,000'
    },
    {
      id: 3,
      title: 'Modular Kitchen Renovation',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80',
      description: 'State-of-the-art modular kitchen with smart storage and premium appliances.',
      location: 'Vile Parle, Mumbai',
      duration: '2 months',
      budget: '₹8,00,000'
    },
    {
      id: 4,
      title: 'Boutique Hotel Design',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=800&q=80',
      description: 'Elegant boutique hotel with 20 rooms, restaurant, and lounge areas.',
      location: 'Fort, Mumbai',
      duration: '6 months',
      budget: '₹50,00,000'
    },
    {
      id: 5,
      title: 'Minimalist Studio Apartment',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      description: 'Compact studio with smart space utilization and minimalist aesthetic.',
      location: 'Andheri, Mumbai',
      duration: '1.5 months',
      budget: '₹12,00,000'
    },
    {
      id: 6,
      title: 'Luxury Bathroom Suite',
      category: 'Bathroom',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      description: 'Spa-like bathroom with premium fixtures and luxurious finishes.',
      location: 'Worli, Mumbai',
      duration: '1 month',
      budget: '₹5,00,000'
    },
    {
      id: 7,
      title: 'Family Home Makeover',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      description: '4-bedroom family home with modern design and functional spaces.',
      location: 'Powai, Mumbai',
      duration: '5 months',
      budget: '₹30,00,000'
    },
    {
      id: 8,
      title: 'Retail Store Design',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description: 'Modern retail space with attractive displays and customer-friendly layout.',
      location: 'Colaba, Mumbai',
      duration: '2.5 months',
      budget: '₹18,00,000'
    }
  ]

  const categories = ['All', 'Residential', 'Commercial', 'Kitchen', 'Bathroom']

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="portfolio-page">
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{zIndex: 99999}}>
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      <div className="portfolio-header">
        <div className="header-content">
          <h1>Our Portfolio</h1>
          <p>Explore Our Latest Interior Design Projects</p>
        </div>
      </div>

      <section className="portfolio-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <button 
                      className="view-project-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Project
                    </button>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-info">
                <span className="project-category">{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
                <p className="description">{selectedProject.description}</p>
                
                <div className="project-details">
                  <div className="detail-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <span className="detail-label">Location</span>
                      <span className="detail-value">{selectedProject.location}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-calendar"></i>
                    <div>
                      <span className="detail-label">Duration</span>
                      <span className="detail-value">{selectedProject.duration}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fas fa-rupee-sign"></i>
                    <div>
                      <span className="detail-label">Budget</span>
                      <span className="detail-value">{selectedProject.budget}</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="btn btn-primary btn-block"
                  onClick={() => {
                    setSelectedProject(null)
                    setShowQuoteModal(true)
                  }}
                >
                  <i className="fas fa-phone me-2"></i>Get Similar Design
                </button>
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
