import { connectDB } from './mongodb';
import { NextResponse } from 'next/server';
import { Model } from 'mongoose';

export async function getSection<T>(Model: Model<T>) {
  await connectDB();
  let doc = await Model.findOne().lean();
  if (!doc) doc = await (Model as any).create({});
  return NextResponse.json(doc);
}

export async function putSection<T>(Model: Model<T>, req: Request) {
  await connectDB();
  const body = await req.json();
  const doc = await Model.findOneAndUpdate({}, body, { new: true, upsert: true, lean: true });
  return NextResponse.json(doc);
}
