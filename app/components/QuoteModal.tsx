'use client'

import { useState } from 'react'
import '../styles/QuoteModal.css'

interface QuoteModalProps {
  show: boolean
  onClose: () => void
}

export default function QuoteModal({ show, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [statusModal, setStatusModal] = useState({ show: false, type: '', message: '' })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, phone, message } = formData
    if (!name || !email || !phone || !message) {
      setStatusModal({ show: true, type: 'error', message: 'Please fill all fields' })
      return
    }
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000)
    
    fetch('/api/send-quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message }),
      signal: controller.signal
    })
    .then(res => {
      clearTimeout(timeoutId)
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      return res.json()
    })
    .then(data => {
      if (data.success) {
        setStatusModal({ show: true, type: 'success', message: 'Quote request sent successfully!' })
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => {
          setStatusModal({ show: false, type: '', message: '' })
          onClose()
        }, 2000)
      } else {
        setStatusModal({ show: true, type: 'error', message: data.message || 'Failed to send quote' })
      }
    })
    .catch(err => {
      clearTimeout(timeoutId)
      console.error('Error:', err)
      if (err.name === 'AbortError') {
        setStatusModal({ show: true, type: 'error', message: 'Request timeout. Please try again.' })
      } else {
        setStatusModal({ show: true, type: 'error', message: `Error: ${err.message}` })
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, phone, message } = formData
    if (!name || !email || !phone || !message) {
      alert('Please fill all fields')
      return
    }
    const whatsappNumber = '919867818123'
    const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank')
    setFormData({ name: '', email: '', phone: '', message: '' })
    onClose()
  }

  if (!show) return null

  return (
    <>
      <div className="modal-backdrop show" style={{display: 'block'}}>
        <div className="modal show" style={{display: 'block'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Get a Free Quote</h5>
                <button type="button" className="btn-close" onClick={onClose}>X</button>
              </div>
              <div className="modal-body">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleFormChange} />
                  </div>
                  <div className="mb-3">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleFormChange} />
                  </div>
                  <div className="mb-3">
                    <input type="tel" name="phone" className="form-control" placeholder="Your Phone" value={formData.phone} onChange={handleFormChange} />
                  </div>
                  <div className="mb-3">
                    <textarea name="message" className="form-control" rows={5} placeholder="Your Message" value={formData.message} onChange={handleFormChange}></textarea>
                  </div>
                  <div className="d-flex gap-2">
                    <button type="button" onClick={sendEmail} className="btn btn-primary flex-grow-1">Send via Email</button>
                    <button type="submit" className="btn btn-success flex-grow-1">Send via WhatsApp</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {statusModal.show && (
        <div className="modal-backdrop show" style={{display: 'block', zIndex: 1060}}>
          <div className="modal show" style={{display: 'block', zIndex: 1070}}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center py-4 py-md-5">
                  <div className="mb-3">
                    {statusModal.type === 'success' ? (
                      <i className="fas fa-check-circle text-success" style={{fontSize: '3rem'}}></i>
                    ) : (
                      <i className="fas fa-exclamation-circle text-danger" style={{fontSize: '3rem'}}></i>
                    )}
                  </div>
                  <p className="fs-5">{statusModal.message}</p>
                  <button type="button" className="btn btn-primary" onClick={() => setStatusModal({ show: false, type: '', message: '' })}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
