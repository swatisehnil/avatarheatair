import { getSection, putSection } from '@/lib/apiHelper';
import BlogPage from '@/lib/models/BlogPage';

export async function GET() { return getSection(BlogPage); }
export async function PUT(req: Request) { return putSection(BlogPage, req); }
