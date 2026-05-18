import PromoSection from '@/lib/models/PromoSection';
import { getSection, putSection } from '@/lib/apiHelper';

export async function GET() { return getSection(PromoSection); }
export async function PUT(req: Request) { return putSection(PromoSection, req); }
