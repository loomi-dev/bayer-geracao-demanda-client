import CredentialsProvider from 'next-auth/providers/credentials';

import { Credentials } from './types';

export const credentialsProvider = CredentialsProvider({
  // Provider a ser utilizado quando o processo de autenticação é realizado com credenciais de acesso;
  // esse id é o identificador pra chamar o provider que será passado no parâmetro da função client signIn('login-with-credentials', { email, password }).
  id: 'login-with-credentials',
  name: 'credentials',
  // Aqui nas credentials deixamos um objeto vazio, pq não utilizamos a página padrão de signIn do next-auth e esse objeto é pra definir os inputs dessa página padrão.
  /** Exemplo: 
  credentials: {
    email: { label: 'Email', type: 'email' },
    password: { label: 'Password', type: 'password' },
  },
   **/
  credentials: {},
  // Na função authorize é onde faremos toda a lógica fazendo uso das informações passadas no credentials. Essa função
  // recebe como parâmetro as credentials e retornará o User caso as credenciais sejam válidas ou retorna null caso sejam inválidas.
  async authorize(credentials) {
    // A tipagem do credentials é Record<Keys de credentials, string>, caso você queira passar uma tipagem diferente é preciso
    // criar a tipagem e passar conforme abaixo:
    const { email, password } = credentials as Credentials;
    // Abaixo você pode implementar sua lógica para obtenção dos dados do usuário
    console.log(email, 'Email');
    console.log(password, 'Password');
    return null;
  },
});
