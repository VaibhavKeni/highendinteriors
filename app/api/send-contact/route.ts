import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    if (!name || !email || !phone || !subject || !message) {
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
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `

    // Send to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'highendinteriors9@gmail.com',
      replyTo: email,
      subject: `New Contact: ${subject} from ${name}`,
      html: emailContent,
    })

    // Send copy to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Message Received - HIGH END Interiors',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message regarding <strong>${subject}</strong> and will get back to you shortly.</p>
        <hr>
        <h3>Your Message Details:</h3>
        ${emailContent}
        <hr>
        <p>Best regards,<br>HIGH END Interiors Team</p>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
