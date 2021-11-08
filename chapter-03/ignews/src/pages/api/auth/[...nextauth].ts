import NextAuth from "next-auth"
import Providers from "next-auth/providers"


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // Scope do Oauth significa quais informações do usuário quero acessar
      //docs: https://docs.github.com/pt/developers/apps/building-oauth-apps/scopes-for-oauth-apps
      scope: 'read:user'
    }),
    // ...add more providers here
  ],
})