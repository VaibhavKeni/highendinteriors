import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if credentials exist
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
      console.error('Missing Gmail credentials')
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    })

    const emailContent = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `

    // Send to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'highendinteriors9@gmail.com',
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: emailContent,
    })

    // Send copy to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Quote Request Received - HIGH END Interiors',
      html: `
        <h2>Thank you for your quote request!</h2>
        <p>Dear ${name},</p>
        <p>We have received your quote request and will get back to you shortly.</p>
        <hr>
        <h3>Your Request Details:</h3>
        ${emailContent}
        <hr>
        <p>Best regards,<br>HIGH END Interiors Team</p>
      `,
    })

    const response = NextResponse.json(
      { success: true, message: 'Quote request sent successfully!' },
      { status: 200 }
    )
    response.headers.set('Content-Type', 'application/json')
    return response
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: `Failed to send quote request: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}
