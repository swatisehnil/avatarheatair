import { getSection, putSection } from '@/lib/apiHelper';
import AboutPage from '@/lib/models/AboutPage';

export async function GET() { return getSection(AboutPage); }
export async function PUT(req: Request) { return putSection(AboutPage, req); }
