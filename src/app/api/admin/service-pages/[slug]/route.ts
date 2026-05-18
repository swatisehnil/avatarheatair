import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import ServicePage from '@/lib/models/ServicePage';

export async function GET(_: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  await connectDB();
  const { slug } = await params;
  let doc = await ServicePage.findOne({ slug }).lean();
  if (!doc) doc = await ServicePage.create({ slug });
  return NextResponse.json(doc);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  await connectDB();
  const { slug } = await params;
  const body = await req.json();
  const doc = await ServicePage.findOneAndUpdate(
    { slug },
    { ...body, slug },
    { new: true, upsert: true, lean: true }
  );
  return NextResponse.json(doc);
}
