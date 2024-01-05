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
        token.user = {
          ...user,
          id: Number(user.id),
        };
      }

      if (trigger === 'update' && session) {
        token.user = session;

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
    maxAge: 60 * 60 * 10, // 10 hours,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
