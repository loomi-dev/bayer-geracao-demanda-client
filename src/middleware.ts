import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

import { DEFAULT_PRIVATE_PAGE } from './config';

export const config = {
  matcher: [
    '/',
    '/bem-vindo/:path*',
    '/carteira',
    '/clientes',
    '/comprovantes',
    '/planejamento',
    '/simulador',
  ],
};

export default withAuth(
  function middleware({ url, nextUrl: { pathname }, nextauth: { token } }) {
    if (pathname === '/bem-vindo' || pathname === '/bem-vindo/completar-cadastro') {
      const isNewUser = token?.user.confirmed === false;

      if (!isNewUser) {
        return NextResponse.redirect(new URL(DEFAULT_PRIVATE_PAGE, url));
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token?.user.accessToken,
    },
  },
);
