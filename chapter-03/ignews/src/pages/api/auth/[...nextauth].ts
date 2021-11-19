import NextAuth from "next-auth"
import Providers from "next-auth/providers"

import { fauna } from '../../../services/fauna'

import { query as q } from 'faunadb'


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
  ],

  callbacks: {
    async signIn(user, account, profile) {
      const { email } = user;
      
      try {
        await fauna.query(
          q.If(
              q.Not(
                  q.Exists(
                    q.Match( // igual ao where do bd
                      q.Index('user_by_email'),
                      q.Casefold(user.email)
                    )
                  )
              ),
              q.Create(
                q.Collection('users'),
                { data: { email }}
              ),
              q.Get( // aqui seria o else // Caso o usuário já exista, busco como Get (select do bd)
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email)
                )
              )
            )
          )
          
          return true

      } catch(e) {
        console.log(e)
        return false 
      }
    },
  }
})