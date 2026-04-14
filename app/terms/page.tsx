'use client'

import { useEffect } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import '../styles/Legal.css'

export default function Terms() {
  useEffect(() => {
    const spinner = document.getElementById('spinner')
    if (spinner) {
      setTimeout(() => {
        spinner.classList.remove('show')
      }, 1000)
    }
  }, [])

  return (
    <div className="legal-page">
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" style={{zIndex: 99999}}>
        <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <Navbar onQuoteClick={() => {}} />

      <div className="legal-header">
        <div className="header-content">
          <h1>Terms & Conditions</h1>
          <p>Last Updated: January 2024</p>
        </div>
      </div>

      <section className="legal-content">
        <div className="container">
          <div className="legal-text">
            <h2>1. Agreement to Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

            <h2>2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on HIGH END Interiors' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              <li>Violating any applicable laws or regulations related to access to or use of the website</li>
            </ul>

            <h2>3. Disclaimer</h2>
            <p>The materials on HIGH END Interiors' website are provided on an 'as is' basis. HIGH END Interiors makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h2>4. Limitations</h2>
            <p>In no event shall HIGH END Interiors or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HIGH END Interiors' website, even if HIGH END Interiors or an authorized representative has been notified orally or in writing of the possibility of such damage.</p>

            <h2>5. Accuracy of Materials</h2>
            <p>The materials appearing on HIGH END Interiors' website could include technical, typographical, or photographic errors. HIGH END Interiors does not warrant that any of the materials on its website are accurate, complete, or current. HIGH END Interiors may make changes to the materials contained on its website at any time without notice.</p>

            <h2>6. Materials and Links</h2>
            <p>HIGH END Interiors has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by HIGH END Interiors of the site. Use of any such linked website is at the user's own risk.</p>

            <h2>7. Modifications</h2>
            <p>HIGH END Interiors may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>

            <h2>8. Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>

            <h2>9. Service Terms</h2>
            <p>HIGH END Interiors provides interior design and consultation services. All projects are subject to:</p>
            <ul>
              <li>Initial consultation and site survey</li>
              <li>Detailed project proposal and quotation</li>
              <li>Signed agreement before commencement of work</li>
              <li>Payment terms as agreed upon</li>
              <li>Project timeline as specified in the agreement</li>
            </ul>

            <h2>10. Payment Terms</h2>
            <p>Payment for services shall be made as per the agreed payment schedule. Failure to make timely payments may result in suspension of services. All prices are in Indian Rupees unless otherwise specified.</p>

            <h2>11. Project Cancellation</h2>
            <p>Cancellation of projects must be communicated in writing. Cancellation charges will be applicable as per the terms agreed upon in the project agreement.</p>

            <h2>12. Warranty</h2>
            <p>HIGH END Interiors provides a 2-year warranty on all workmanship and materials used in the project. This warranty covers defects in materials and workmanship but does not cover normal wear and tear or damage due to misuse.</p>

            <h2>13. Limitation of Liability</h2>
            <p>In no case shall HIGH END Interiors be liable for any indirect, incidental, special, consequential, or punitive damages, regardless of the cause of action or the theory of liability, even if HIGH END Interiors has been advised of the possibility of such damages.</p>

            <h2>14. Contact Information</h2>
            <p>For any questions regarding these Terms & Conditions, please contact us at:</p>
            <ul>
              <li>Email: highendinteriors9@gmail.com</li>
              <li>Phone: +91 83558 88976</li>
              <li>Address: 2nd floor, Gulshan apartment, 5, Dixit Rd, near Sathye College, Satsang CHSL, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057</li>
            </ul>

            <h2>15. Entire Agreement</h2>
            <p>These terms and conditions constitute the entire agreement between you and HIGH END Interiors regarding the use of this website and supersede all prior negotiations, representations, or agreements, whether written or oral.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
