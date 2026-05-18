import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Enquiry from '@/lib/models/Enquiry';

export async function GET() {
  await connectDB();
  const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(enquiries);
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await connectDB();
  await Enquiry.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
