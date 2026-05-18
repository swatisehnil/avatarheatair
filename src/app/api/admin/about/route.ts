import AboutSection from '@/lib/models/AboutSection';
import { getSection, putSection } from '@/lib/apiHelper';

export async function GET() { return getSection(AboutSection); }
export async function PUT(req: Request) { return putSection(AboutSection, req); }
