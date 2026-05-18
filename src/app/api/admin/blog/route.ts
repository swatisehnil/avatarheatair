import BlogSection from '@/lib/models/BlogSection';
import { getSection, putSection } from '@/lib/apiHelper';

export async function GET() { return getSection(BlogSection); }
export async function PUT(req: Request) { return putSection(BlogSection, req); }
