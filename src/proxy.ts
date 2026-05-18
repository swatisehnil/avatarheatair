import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === '/admin/login';
  const session = request.cookies.get('admin_session')?.value;

  if (pathname.startsWith('/admin') && !isLoginPage && !session) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
  if (isLoginPage && session) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/admin/:path*'] };
