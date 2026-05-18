import TeamSection from '@/lib/models/TeamSection';
import { getSection, putSection } from '@/lib/apiHelper';

export async function GET() { return getSection(TeamSection); }
export async function PUT(req: Request) { return putSection(TeamSection, req); }
