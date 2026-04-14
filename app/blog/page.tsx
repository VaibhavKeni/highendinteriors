'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import QuoteModal from '@/app/components/QuoteModal'
import MobileBottomNav from '@/app/components/MobileBottomNav'
import '../styles/Blog.css'

interface BlogPost {
  id: number
  title: string
  category: string
  image: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
}

export default function Blog() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const spinner = document.getElementById('spinner')
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show')
      }, 1000)
    }
  }, [])

  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Top 10 Interior Design Trends for 2024',
      category: 'Trends',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      excerpt: 'Discover the latest interior design trends that are dominating the industry in 2024.',
      content: 'Interior design is constantly evolving. This year, we\'re seeing a shift towards sustainable materials, bold colors, and personalized spaces. Learn about the top trends that can transform your home.',
      author: 'Design Team',
      date: 'Jan 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'How to Maximize Small Spaces',
      category: 'Tips',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      excerpt: 'Smart strategies to make your small apartment feel spacious and comfortable.',
      content: 'Small spaces require creative solutions. From multi-functional furniture to clever storage, discover how to make the most of every square foot in your home.',
      author: 'Interior Expert',
      date: 'Jan 10, 2024',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'The Psychology of Colors in Interior Design',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
      excerpt: 'Understanding how colors affect mood and perception in your living spaces.',
      content: 'Colors have a profound impact on our emotions and well-being. Learn how to choose the right color palette for each room to create the desired atmosphere.',
      author: 'Design Psychologist',
      date: 'Jan 5, 2024',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Sustainable Interior Design: Eco-Friendly Choices',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80',
      excerpt: 'Making environmentally conscious choices in your interior design projects.',
      content: 'Sustainability is more important than ever. Explore eco-friendly materials, energy-efficient lighting, and sustainable practices that can reduce your environmental footprint.',
      author: 'Green Living Expert',
      date: 'Dec 28, 2023',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Modern Kitchen Design Ideas',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80',
      excerpt: 'Transform your kitchen with modern design elements and smart storage solutions.',
      content: 'The kitchen is the heart of the home. Discover modern design ideas that combine functionality with aesthetics to create a kitchen you\'ll love.',
      author: 'Kitchen Designer',
      date: 'Dec 20, 2023',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Creating the Perfect Home Office',
      category: 'Tips',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      excerpt: 'Design a productive and comfortable workspace in your home.',
      content: 'With remote work becoming common, a well-designed home office is essential. Learn how to create a space that boosts productivity and maintains work-life balance.',
      author: 'Workspace Designer',
      date: 'Dec 15, 2023',
      readTime: '5 min read'
    }
  ]

  const categories = ['All', 'Trends', 'Tips', 'Design', 'Kitchen', 'Sustainability']

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(p => p.category === selectedCategory)

  return (
    <div className="blog-page">
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{zIndex: 99999}}>
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      <div className="blog-header">
        <div className="header-content">
          <h1>Design Insights & Tips</h1>
          <p>Expert Advice on Interior Design and Home Transformation</p>
        </div>
      </div>

      <section className="blog-section">
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

          <div className="blog-grid">
            {filteredPosts.map(post => (
              <div key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p className="excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span className="author"><i className="fas fa-user me-1"></i>{post.author}</span>
                    <span className="date"><i className="fas fa-calendar me-1"></i>{post.date}</span>
                    <span className="read-time"><i className="fas fa-clock me-1"></i>{post.readTime}</span>
                  </div>
                  <button 
                    className="read-more-btn"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More <i className="fas fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedPost && (
        <div className="post-modal-backdrop" onClick={() => setSelectedPost(null)}>
          <div className="post-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedPost(null)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedPost.image} alt={selectedPost.title} />
              </div>
              <div className="modal-info">
                <span className="post-category">{selectedPost.category}</span>
                <h2>{selectedPost.title}</h2>
                <div className="post-meta">
                  <span><i className="fas fa-user me-1"></i>{selectedPost.author}</span>
                  <span><i className="fas fa-calendar me-1"></i>{selectedPost.date}</span>
                  <span><i className="fas fa-clock me-1"></i>{selectedPost.readTime}</span>
                </div>
                <div className="post-content">
                  <p>{selectedPost.content}</p>
                </div>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedPost(null)
                    setShowQuoteModal(true)
                  }}
                >
                  <i className="fas fa-phone me-2"></i>Get Design Consultation
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
