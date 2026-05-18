import ProjectsSection from '@/lib/models/ProjectsSection';
import { getSection, putSection } from '@/lib/apiHelper';

export async function GET() { return getSection(ProjectsSection); }
export async function PUT(req: Request) { return putSection(ProjectsSection, req); }
