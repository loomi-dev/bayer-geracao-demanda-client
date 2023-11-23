import { NextAuthOptions } from 'next-auth';

import { credentialsProvider, facebookProvider, googleProvider } from './providers';

export const authOptions: NextAuthOptions = {
  providers: [credentialsProvider, googleProvider, facebookProvider],
  callbacks: {
    // Aqui podemos realizar extensões nas callbacks utilizadas pelo next-auth, permitindo alteração nos dados de retorno e comportamento
    // de cada uma das funções
    signIn: async ({ user }) => {
      // É aqui na função signIn que podemos fazer uso dos ID vindos da função profile dos providers de redes sociais
      // Os retornos dessa callback poderão ser:
      // false: O fluxo de auth não será realizado
      // true: O fluxo de auth será realizado (Irá prosseguir para as demais callbacks)
      // string: com o valor da url que devera ser redirecionada. exemplo: (/?errors=permissions). OBS: o fluxo de auth não será realizado, string tem o mesmo funcionamento do false mas com uma url custom.
      // Podemos lançar erros e pegar como parâmetros de URL. Ex: throw new Error('User not found');
      // Essa mensagem de erro poderá ser vista em um parâmetro na URL.

      // esse objeto user é justamente a tipagem User que declaramos no next-auth.d.ts
      console.log(user);
      return false;
    },
    jwt: async ({ token, user, trigger, session }) => {
      // Atualização do objeto "token" que será passado para a callback session, responsável por criar a sessão de autenticação;
      if (user) {
        // Utilizamos essa condicional para adicionar as informações, vindas do signin no "user", no objeto que conseguirá levar essas informações para a
        // criação da sessão;
        token.user = user;
      }

      if (trigger === 'update') {
        // Essa condicional permite que com que possamos realizar a atualização da sessão em caso de mudança de dados utilizando a função update
        // que pode ser obtida através do hook useSession;
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
    // aqui você define as paginas que deverão ser utilizadas para o signIn, caso ocorra erro durante a autenticação com o error, signOut e outros.
    // a página padrão de signIn do next-auth é baseURL/api/auth/signin acessando essa página ira mostrar uma tela padrão do next-auth com os providers disponíveis.
    error: '/login',
    signIn: '/login',
  },
  session: {
    // aqui você define a estrategia utilizada para armazenamento da sessão, e o tempo para expirar a sessão em segundos.
    strategy: 'jwt', // padrão utilizada.
    maxAge: 60 * 60 * 6, // 6 horas.
  },

  // aqui voce o SECRET do JWT que é uma informação sensível que só o servidor deve ter acesso. Então crie uma env sem o NEXT_PUBLIC como prefix.
  secret: process.env.NEXTAUTH_SECRET,
};
