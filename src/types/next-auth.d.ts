import { DefaultSession, DefaultUser, DefaultJWT } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    id: number;
    username: string;
    email: string;
    confirmed: boolean;
    accessToken: string;
    role: Roles;
    phoneNumber?: string;
    lastAccess?: string;
    farmer?: Farmer;
    manager?: Manager;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    user: {
      id: number;
      username: string;
      email: string;
      confirmed: boolean;
      accessToken: string;
      role: Roles;
      phoneNumber?: string;
      lastAccess?: string;
      farmer?: Farmer;
      manager?: Manager;
    };
  }
}
