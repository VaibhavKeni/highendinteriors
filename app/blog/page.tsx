'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import QuoteModal from '@/app/components/QuoteModal'
import MobileBottomNav from '@/app/components/MobileBottomNav'
import '../styles/Blog.css'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string
  image: string
  date: string
  readTime: string
  author: string
}

export default function Blog() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const spinner = document.getElementById('spinner')
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show')
      }, 1000)
    }
  }, [])

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Modern Interior Design Ideas for Small Apartments',
      slug: 'modern-interior-design-small-apartments',
      excerpt: 'Discover how to maximize space and style in small apartments with modern design principles and smart furniture solutions.',
      category: 'Design Ideas',
      image: '/assets/images/Highend%20Interiors/Residential-5/IMG-20260312-WA0244.jpg',
      date: '2024-01-15',
      readTime: '5 min read',
      author: 'HIGHEND Interiors'
    },
    {
      id: 2,
      title: 'Scandinavian Interior Design: Minimalism Meets Comfort',
      slug: 'scandinavian-interior-design-guide',
      excerpt: 'Learn the principles of Scandinavian design and how to create a cozy, minimalist space that feels warm and inviting.',
      category: 'Design Styles',
      image: '/assets/images/Highend%20Interiors/Residential-3/IMG-20260312-WA0014.jpg',
      date: '2024-01-12',
      readTime: '6 min read',
      author: 'HIGHEND Interiors'
    },
    {
      id: 3,
      title: 'Kitchen Design Trends 2024: What\'s Hot This Year',
      slug: 'kitchen-design-trends-2024',
      excerpt: 'Explore the latest kitchen design trends including color schemes, materials, and layouts that are trending in 2024.',
      category: 'Trends',
      image: '/assets/images/Highend%20Interiors/Drawings%201/IMG-20260312-WA0033.jpg',
      date: '2024-01-10',
      readTime: '7 min read',
      author: 'HIGHEND Interiors'
    },
    {
      id: 4,
      title: 'How to Choose the Perfect Color Palette for Your Home',
      slug: 'choosing-color-palette-home',
      excerpt: 'Master the art of color selection with our comprehensive guide to choosing colors that complement your space and mood.',
      category: 'Design Tips',
      image: '/assets/images/Highend%20Interiors/Residential-8/IMG-20260410-WA0024.jpg',
      date: '2024-01-08',
      readTime: '5 min read',
      author: 'HIGHEND Interiors'
    },
    {
      id: 5,
      title: 'Maximizing Space: Smart Storage Solutions for Every Room',
      slug: 'smart-storage-solutions',
      excerpt: 'Discover innovative storage ideas and space-saving furniture that will transform your home and reduce clutter.',
      category: 'Design Tips',
      image: '/assets/images/Highend%20Interiors/Residential-12/IMG-20260410-WA0135.jpg',
      date: '2024-01-05',
      readTime: '6 min read',
      author: 'HIGHEND Interiors'
    },
    {
      id: 6,
      title: 'Luxury Bathroom Design: Creating Your Personal Spa',
      slug: 'luxury-bathroom-design',
      excerpt: 'Transform your bathroom into a luxurious spa-like retreat with premium fixtures, lighting, and design elements.',
      category: 'Design Ideas',
      image: '/assets/images/Highend%20Interiors/Residential-12/IMG-20260410-WA0136.jpg',
      date: '2024-01-02',
      readTime: '5 min read',
      author: 'HIGHEND Interiors'
    },
    {
      id: 7,
      title: 'Office Interior Design: Creating Productive Workspaces',
      slug: 'office-interior-design-productivity',
      excerpt: 'Learn how to design an office space that boosts productivity, creativity, and employee well-being.',
      category: 'Commercial Design',
      image: '/assets/images/Highend%20Interiors/Shop%201/IMG-20260312-WA0381.jpg',
      date: '2023-12-28',
      readTime: '7 min read',
      author: 'HIGHEND Interiors'
    },
    {
      id: 8,
      title: 'Bedroom Interior Design: Creating Your Dream Sanctuary',
      slug: 'bedroom-interior-design-sanctuary',
      excerpt: 'Design a peaceful and stylish bedroom that serves as your personal sanctuary with our expert tips and ideas.',
      category: 'Design Ideas',
      image: '/assets/images/Highend%20Interiors/Residential-3/IMG-20260312-WA0011.jpg',
      date: '2023-12-25',
      readTime: '6 min read',
      author: 'HIGHEND Interiors'
    }
  ]

  const categories = ['All', 'Design Ideas', 'Design Styles', 'Design Tips', 'Trends', 'Commercial Design']
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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
          <h1>Interior Design Blog</h1>
          <p>Expert Tips, Trends, and Inspiration for Your Home</p>
        </div>
      </div>

      <section className="blog-section py-4 py-md-5">
        <div className="container">
          {/* Category Filter */}
          <div className="blog-filters mb-4 mb-md-5">
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
          </div>

          {/* Blog Posts Grid */}
          <div className="blog-grid">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-image" />
                  <span className="blog-category-badge">{post.category}</span>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  
                  <div className="blog-meta">
                    <span className="blog-date">
                      <i className="fas fa-calendar me-2"></i>
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                    <span className="blog-read-time">
                      <i className="fas fa-clock me-2"></i>
                      {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="btn btn-primary btn-sm mt-3">
                    Read More <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />
    </div>
  )
}
