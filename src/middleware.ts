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
    '/clientes/:path*',
    '/comprovantes/:path*',
    '/planejamento/:path*',
    '/simulador',
    '/dashboard',
    '/enxoval',
    '/simulador',
  ],
};

const ROLE_PAGES = {
  Farmer: [
    '/planejamento',
    '/planejamento/criar-novo-planejamento',
    '/comprovantes',
    '/simulador',
    '/enxoval',
    '/carteira',
    '/bem-vindo/:path*',
  ],
  Manager: ['/planejamento', '/comprovantes', '/simulador', '/dashboard', '/clientes/:path*'],
};

export default withAuth(
  function middleware({ url, nextUrl: { pathname }, nextauth: { token } }) {
    const userRole = token?.user.role as Roles;
    const isNewUser = token?.user.confirmed === false && userRole !== 'Manager';
    const defaultPrivatePageByRole =
      userRole === 'Manager' ? DEFAULT_PRIVATE_MANAGER_PAGE : DEFAULT_PRIVATE_FARMER_PAGE;

    const pathnameIsNotFromUserRole = !ROLE_PAGES[userRole].some((rolePage) => {
      if (rolePage.includes(':path*')) {
        const rolePageSplitted = rolePage.split('/:path*')[0];

        return pathname.includes(rolePageSplitted);
      }

      return rolePage === pathname;
    });

    const isOnboardingPage =
      pathname === '/bem-vindo' || pathname === '/bem-vindo/completar-cadastro';
    const isRootPage = pathname === '/';

    if (isRootPage) {
      return NextResponse.redirect(new URL(defaultPrivatePageByRole, url));
    }

    if (isNewUser && !isOnboardingPage) {
      return NextResponse.redirect(new URL(DEFAULT_ONBOARDING_PAGE, url));
    }

    if (!isNewUser && isOnboardingPage) {
      return NextResponse.redirect(new URL(defaultPrivatePageByRole, url));
    }

    if (pathnameIsNotFromUserRole) {
      return NextResponse.redirect(new URL(defaultPrivatePageByRole, url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token?.user?.accessToken,
    },
  },
);
