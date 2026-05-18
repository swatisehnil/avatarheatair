import VideoSection from '@/lib/models/VideoSection';
import { getSection, putSection } from '@/lib/apiHelper';

export async function GET() { return getSection(VideoSection); }
export async function PUT(req: Request) { return putSection(VideoSection, req); }
