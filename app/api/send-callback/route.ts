import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export async function POST(request: NextRequest) {
  try {
    const { name, phone, floorPlan, budget } = await request.json()

    if (!name || !phone || !floorPlan || !budget) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'vaibhavkeni21@gmail.com',
      subject: `Callback Request from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Floor Plan:</strong> ${floorPlan}</p><p><strong>Budget:</strong> ${budget}</p>`
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Failed to send email' }, { status: 500 })
  }
}
