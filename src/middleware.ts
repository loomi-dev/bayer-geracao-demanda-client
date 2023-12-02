import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

import {
  DEFAULT_ONBOARDING_PAGE,
  DEFAULT_PRIVATE_FARMER_PAGE,
  DEFAULT_PRIVATE_MANAGER_PAGE,
} from './config';

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
    const isNewUser = token?.user.confirmed === false;
    const privatePage =
      token?.user.role === 'Manager' ? DEFAULT_PRIVATE_MANAGER_PAGE : DEFAULT_PRIVATE_FARMER_PAGE;

    const isOnboardingPage =
      pathname === '/bem-vindo' || pathname === '/bem-vindo/completar-cadastro';

    if (isNewUser && !isOnboardingPage) {
      return NextResponse.redirect(new URL(DEFAULT_ONBOARDING_PAGE, url));
    }

    if (!isNewUser && isOnboardingPage) {
      return NextResponse.redirect(new URL(privatePage, url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token?.user.accessToken,
    },
  },
);
