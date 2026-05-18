import SiteSettings from '@/lib/models/SiteSettings';
import { getSection, putSection } from '@/lib/apiHelper';

export async function GET() { return getSection(SiteSettings); }
export async function PUT(req: Request) { return putSection(SiteSettings, req); }
