import CredentialsProvider from 'next-auth/providers/credentials';

import { ApiServiceErr, Credentials, loginWithCredentials } from '@/api';

export const credentialsProvider = CredentialsProvider({
  id: 'credentials',
  name: 'credentials',
  credentials: {},
  async authorize(credentials) {
    const { identifier, password } = credentials as Credentials;

    try {
      const { jwt, user } = await loginWithCredentials({ identifier, password });

      return {
        id: user.id,
        username: user.username,
        email: user.email,
        confirmed: user.confirmed,
        accessToken: jwt,
        phoneNumber: user.phoneNumber ?? '',
        company_identifier: user.company_identifier ?? '',
        company_role: user.company_position ?? '',
        role: user.role,
      };
    } catch (err) {
      const error = err as ApiServiceErr;

      throw new Error(error?.data?.error?.name ?? 'FailedRequest');
    }
  },
});
