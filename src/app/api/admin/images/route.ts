import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function scanImages(dir: string, base: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(base, entry.name).replace(/\\/g, '/');
    if (entry.isDirectory()) {
      results.push(...scanImages(fullPath, relativePath));
    } else if (/\.(png|jpg|jpeg|svg|webp|gif)$/i.test(entry.name)) {
      results.push('/' + relativePath);
    }
  }
  return results;
}

export async function GET() {
  const imgDir = path.join(process.cwd(), 'public', 'assets', 'img');
  const images = scanImages(imgDir, 'assets/img');

  // Group by folder
  const groups: Record<string, string[]> = {};
  for (const img of images) {
    const parts = img.split('/');
    const folder = parts.length > 4 ? parts.slice(2, parts.length - 1).join('/') : (parts[2] ?? 'root');
    if (!groups[folder]) groups[folder] = [];
    groups[folder].push(img);
  }

  return NextResponse.json({ images, groups });
}
