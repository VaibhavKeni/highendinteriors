import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, floorPlan, budget } = await request.json()

    if (!name || !email || !phone || !floorPlan || !budget) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
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
      <h2>New Callback Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Floor Plan:</strong> ${floorPlan}</p>
      <p><strong>Budget:</strong> ${budget}</p>
    `

    // Send to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'vaibhavkeni21@gmail.com',
      replyTo: email,
      subject: `New Callback Request from ${name}`,
      html: emailContent,
    })

    // Send copy to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Callback Request Received - HIGH END Interiors',
      html: `
        <h2>Thank you for your callback request!</h2>
        <p>Dear ${name},</p>
        <p>We have received your callback request and will contact you shortly.</p>
        <hr>
        <h3>Your Request Details:</h3>
        ${emailContent}
        <hr>
        <p>Best regards,<br>HIGH END Interiors Team</p>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Callback request sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send callback request' },
      { status: 500 }
    )
  }
}
