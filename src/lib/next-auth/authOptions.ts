import { NextAuthOptions } from 'next-auth';

import { DEFAULT_PUBLIC_PAGE } from '@/config';

import { credentialsProvider } from './providers';

export const authOptions: NextAuthOptions = {
  providers: [credentialsProvider],
  callbacks: {
    signIn: async ({ user }) => {
      if (!user || !user.accessToken) {
        return '/entrar?error=failed_authenticated';
      }

      return true;
    },
    jwt: async ({ token, user, trigger, session }) => {
      if (user) {
        token.user = user;
      }

      if (trigger === 'update') {
        token.user = session.user;

        return token;
      }

      return token;
    },
    session: async ({ session, token: { user } }) => ({
      ...session,
      user,
    }),
  },
  pages: {
    signIn: DEFAULT_PUBLIC_PAGE,
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 6,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
