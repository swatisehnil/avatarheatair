import { getSection, putSection } from '@/lib/apiHelper';
import ContactPage from '@/lib/models/ContactPage';

export async function GET() { return getSection(ContactPage); }
export async function PUT(req: Request) { return putSection(ContactPage, req); }
