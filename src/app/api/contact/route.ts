import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.phone || !data.message) {
      return NextResponse.json(
        { error: 'Name, phone, and message are required' },
        { status: 400 }
      );
    }

    console.log('[New Contact Inquiry Received]:', data);

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out to Jahid Office Equipment. We will get back to you shortly.',
    });
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact message' },
      { status: 500 }
    );
  }
}
