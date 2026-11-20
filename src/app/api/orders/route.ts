import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.customerName || !data.phone) {
      return NextResponse.json(
        { error: 'Customer name and phone number are required' },
        { status: 400 }
      );
    }

    // In a full production MERN app, this would save to MongoDB:
    // await db.collection('inquiries').insertOne({ ...data, createdAt: new Date() });
    console.log('[New Order/Quotation Inquiry Received]:', {
      id: data.id,
      customer: data.customerName,
      company: data.companyName,
      phone: data.phone,
      itemsCount: data.totalQuantity,
      items: data.items?.map((i: any) => ({
        name: i.product?.name,
        qty: i.quantity,
      })),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully. Our sales team will contact you shortly.',
      orderId: data.id,
    });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}
