import HeroSection from '@/lib/models/HeroSection';
import { getSection, putSection } from '@/lib/apiHelper';

export async function GET() { return getSection(HeroSection); }
export async function PUT(req: Request) { return putSection(HeroSection, req); }
