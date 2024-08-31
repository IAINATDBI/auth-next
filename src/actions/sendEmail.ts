'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailData {
  name: string
  email: string
  message: string
}

export const sendEmail = async ({ name, email, message }: EmailData) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'your-email@example.com', // Replace with your email
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    if (error) {
      throw new Error(error.message)
    }

    return { success: true }
  } catch (error: any) {
    return { error: error.message }
  }
}