import FacebookProvider from 'next-auth/providers/facebook';

export const facebookProvider = FacebookProvider({
  // As informações de clientId e clientSecret são obtidas na developers facebook. Lá você irá criar um aplicativo e então obter o ID e a SECRET.
  clientId: process.env.NEXT_FACEBOOK_ID ?? '',
  clientSecret: process.env.NEXT_FACEBOOK_SECRET ?? '',
  // Se você precisar apenas de informações básicas do usuário como imagem do perfil, nome e email. As informações default devolvidas pelo provider
  // do facebook serão o suficiente, caso você precise realizar algo mais robusto poderá fazer uso da função profile e montar sua regra de negócio;
  // Você poderá utilizar os parâmetros profile para pegar as info do usuário padrões do facebook e tokens para obter os tokens do facebook e realizar
  // integrações com outras API
  async profile(profile, tokens) {
    console.log(profile);
    console.log(tokens);
    // A função profile precisa retornar um User, caso você queira criar comportamentos diferentes no fluxo do nextAuth lá no arquivo [...nextauth].ts
    // poderá fazer uso de ids como exemplificado abaixo, para determinar qual comportamento o fluxo de autenticação irá assumir;
    // Esses ids poderão ser capturados na callback signIn
    return { id: 'Operação teste' };
  },
});
