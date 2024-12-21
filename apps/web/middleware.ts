import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from "./auth";

export async function middleware(request: NextRequest) {
  const pathname = new URL(request.url).pathname;

  if (pathname.startsWith("/api/")) {
    return NextResponse.next(); // /api/*は認証をスキップ
  }

  const basicAuth = request.headers.get('authorization');
  
  const username = 'usr';
  const password = 'pwd';
  const authString = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;

  if (basicAuth !== authString) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  if (pathname.startsWith("/admin")) {
    const session = await auth.auth();
    if (!session) {
      return NextResponse.redirect('http://localhost:3001/sign-in');
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // 全ページに適用
};
