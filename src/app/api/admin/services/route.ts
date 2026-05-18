import ServicesSection from '@/lib/models/ServicesSection';
import { getSection, putSection } from '@/lib/apiHelper';

export async function GET() { return getSection(ServicesSection); }
export async function PUT(req: Request) { return putSection(ServicesSection, req); }
