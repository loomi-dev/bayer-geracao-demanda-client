import { withAuth } from 'next-auth/middleware';

export const config = {
  matcher: ['/', '/carteira'],
};

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token?.user.accessToken,
  },
});
