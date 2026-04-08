import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import MobileBottomNav from '../components/MobileBottomNav'
import './FAQ.css'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
}

function FAQ() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      id: 1,
      category: 'general',
      question: 'What is HIGH END Interiors?',
      answer: 'HIGH END Interiors is a premium interior design firm based in Mumbai with over 15 years of experience. We specialize in residential, commercial, and modular kitchen designs. Our team of expert designers and craftsmen work closely with clients to transform their spaces into beautiful, functional environments.'
    },
    {
      id: 2,
      category: 'general',
      question: 'How long has HIGH END Interiors been in business?',
      answer: 'We have been serving clients for over 15 years with consistent excellence. During this time, we have completed 500+ projects and earned the trust of 1000+ satisfied clients. Our experience spans residential, commercial, and specialized interior design projects.'
    },
    {
      id: 3,
      category: 'services',
      question: 'What services do you offer?',
      answer: 'We offer comprehensive interior design services including: Residential Interior Design, Commercial Interior Design, Modular Kitchen Design, Bedroom Design, Living Room Design, Bathroom Design, 3D Visualization, and Design Consultation. Each service is tailored to meet your specific needs and budget.'
    },
    {
      id: 4,
      category: 'services',
      question: 'Do you provide 3D visualization?',
      answer: 'Yes, we provide advanced 3D visualization and rendering services. This allows you to see your space before construction begins. Our photorealistic renderings help you make informed decisions about design, materials, and layout. We also offer virtual walkthroughs for better understanding of the final design.'
    },
    {
      id: 5,
      category: 'pricing',
      question: 'How much does interior design cost?',
      answer: 'Our pricing varies based on project scope, size, and complexity. We offer services starting from ₹5,000 for consultations to ₹1,00,000+ for complete commercial projects. We provide transparent quotes after understanding your requirements. We work within various budgets and offer excellent value for money.'
    },
    {
      id: 6,
      category: 'pricing',
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment options to suit your budget. Typically, we structure payments in phases: initial consultation fee, design approval payment, and final payment upon completion. We can discuss customized payment plans based on your project requirements.'
    },
    {
      id: 7,
      category: 'timeline',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A small consultation might take 1-2 weeks, while a complete home renovation typically takes 2-4 months. Commercial projects may take longer. We provide a detailed timeline during the planning phase and maintain transparent communication throughout.'
    },
    {
      id: 8,
      category: 'timeline',
      question: 'Can you complete projects on a tight deadline?',
      answer: 'We understand that timelines are important. While we prioritize quality over speed, we can accommodate urgent projects with proper planning and resource allocation. We recommend discussing your deadline during the initial consultation so we can plan accordingly.'
    },
    {
      id: 9,
      category: 'process',
      question: 'What is your design process?',
      answer: 'Our process includes: 1) Initial Consultation - understanding your vision and requirements, 2) Design - creating detailed designs and 3D visualizations, 3) Planning - developing project timeline and resource plan, 4) Execution - implementing the design with quality craftsmanship, 5) Quality Check - thorough inspections, 6) Handover - final walkthrough and project completion.'
    },
    {
      id: 10,
      category: 'process',
      question: 'How involved will I be in the design process?',
      answer: 'Your involvement is crucial to our process. We conduct regular consultations, share design options, and incorporate your feedback at every stage. You\'ll see 3D visualizations before execution and have the opportunity to make modifications. We believe in collaborative design that reflects your vision.'
    },
    {
      id: 11,
      category: 'materials',
      question: 'What materials do you use?',
      answer: 'We use premium quality materials from trusted suppliers. Our material selection includes Italian fixtures, premium tiles, high-quality wood, granite countertops, and professional-grade appliances. We source materials that offer durability, aesthetics, and value for money. We can work within your budget while maintaining quality standards.'
    },
    {
      id: 12,
      category: 'materials',
      question: 'Can I choose my own materials?',
      answer: 'Absolutely! We can work with materials of your choice. However, we recommend consulting with us to ensure materials are compatible with the design and meet quality standards. We can guide you on material selection, durability, and cost-effectiveness.'
    },
    {
      id: 13,
      category: 'warranty',
      question: 'Do you provide warranty on your work?',
      answer: 'Yes, we stand behind our work. We provide quality assurance on all our projects. Any defects in craftsmanship are addressed promptly. We also provide guidance on material warranties and maintenance to ensure your space remains beautiful for years to come.'
    },
    {
      id: 14,
      category: 'warranty',
      question: 'What happens after project completion?',
      answer: 'After handover, we remain available for any concerns or adjustments. We provide maintenance guidance and can assist with any issues that arise. Our relationship with clients doesn\'t end at project completion - we\'re here for ongoing support and future projects.'
    },
    {
      id: 15,
      category: 'location',
      question: 'Do you work outside Mumbai?',
      answer: 'Currently, we primarily serve the Mumbai region. However, we can discuss special projects outside Mumbai on a case-by-case basis. For consultations and project management, we work closely with clients to ensure seamless execution regardless of location.'
    },
    {
      id: 16,
      category: 'location',
      question: 'Where is your office located?',
      answer: 'Our office is located at: 2nd floor, Gulshan apartment, 5, Dixit Rd, near Sathye College, Satsang CHSL, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057. You can visit us for consultations or contact us for virtual meetings.'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'process', label: 'Process' },
    { id: 'materials', label: 'Materials' },
    { id: 'warranty', label: 'Warranty' },
    { id: 'location', label: 'Location' }
  ]

  const filteredFAQs = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="faq-page">
      <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
      <QuoteModal show={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      {/* Header */}
      <div className="faq-header">
        <div className="header-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our services and process</p>
        </div>
      </div>

      {/* Filter Section */}
      <section className="faq-filters">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="faq-items-section">
        <div className="container">
          <div className="faq-items">
            {filteredFAQs.map(item => (
              <div 
                key={item.id} 
                className={`faq-item ${expandedId === item.id ? 'expanded' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleExpand(item.id)}
                >
                  <span>{item.question}</span>
                  <i className={`fas fa-chevron-down ${expandedId === item.id ? 'rotated' : ''}`}></i>
                </button>
                {expandedId === item.id && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="still-questions-section">
        <div className="container">
          <div className="questions-content">
            <h2>Still Have Questions?</h2>
            <p>Can't find the answer you're looking for? Our team is here to help.</p>
            <div className="contact-options">
              <a href="tel:+919867818123" className="contact-btn phone">
                <i className="fas fa-phone"></i>
                <span>Call Us</span>
              </a>
              <a href="https://wa.me/919867818123" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp">
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
              <button 
                onClick={() => setShowQuoteModal(true)}
                className="contact-btn email"
              >
                <i className="fas fa-envelope"></i>
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss your interior design needs and create something beautiful</p>
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => setShowQuoteModal(true)}
            >
              <i className="fas fa-calendar-check me-2"></i>Book a Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav onBookClick={() => setShowQuoteModal(true)} />
    </div>
  )
}

export default FAQ
