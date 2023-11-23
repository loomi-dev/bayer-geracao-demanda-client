import GoogleProvider from 'next-auth/providers/google';

export const googleProvider = GoogleProvider({
  // As informações de clientId e clientSecret são obtidas no google Cloud, na parte de credenciais. Lá você poderá configurar credenciais para
  // diferentes aplicativos
  clientId: process.env.NEXT_GOOGLE_ID ?? '',
  clientSecret: process.env.NEXT_GOOGLE_SECRET ?? '',
  // Se você precisar apenas de informações básicas do usuário como imagem do perfil, nome e email. As informações default devolvidas pelo provider
  // do google serão o suficiente, caso você precise realizar algo mais robusto poderá fazer uso da função profile e montar sua regra de negócio;
  // Você poderá utilizar os parâmetros profile para pegar as info do usuário padrões do google e tokens para obter os tokens do google e realizar
  // integrações com outras API
  profile(profile, tokens) {
    console.log(profile);
    console.log(tokens);
    // A função profile precisa retornar um User, caso você queira criar comportamentos diferentes no fluxo do nextAuth lá no arquivo [...nextauth].ts
    // poderá fazer uso de ids como exemplificado abaixo, para determinar qual comportamento o fluxo de autenticação irá assumir;
    // Esses ids poderão ser capturados na callback signIn
    return { id: 'Operação teste' };
  },
});
