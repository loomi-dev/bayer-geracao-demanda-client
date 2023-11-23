import { DefaultSession, DefaultUser, DefaultJWT } from 'next-auth';

declare module 'next-auth' {
  interface User extends DefaultUser {
    // aqui voce define a tipagem para o objeto user

    age?: number;
    gender?: string;
  }

  interface Session extends DefaultSession {
    // aqui voce define a tipagem para a session que é o que vai ser obtido no hook useSession()

    accessToken?: string;
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    // aqui é a tipagem para o retorno do jwt e pra corrigir o problema de tipagem no token da session.

    user: User;
  }
}
