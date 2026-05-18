import TestimonialsSection from '@/lib/models/TestimonialsSection';
import { getSection, putSection } from '@/lib/apiHelper';

export async function GET() { return getSection(TestimonialsSection); }
export async function PUT(req: Request) { return putSection(TestimonialsSection, req); }
