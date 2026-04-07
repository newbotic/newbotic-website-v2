import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { to, subject, content } = await request.json()

    // For now, log the email (in production, use Resend, SendGrid, etc.)
    console.log('Email would be sent to:', to)
    console.log('Subject:', subject)
    console.log('Content:', content)

    // Simulate successful send
    return NextResponse.json({ success: true, message: 'Quote sent successfully' })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send quote' },
      { status: 500 }
    )
  }
}
