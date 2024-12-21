import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

console.log('Middleware executed');

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get('authorization');
  
  // ベーシック認証のユーザー名とパスワード
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

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // 全ページに適用
};