import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import { createServer, Model } from 'miragejs' // criação de api fake

createServer({
  // banco de dados interno do miraje
  models: {
    // propriedade model
    transaction: Model // tabela fake models do tipo Model
  },

  /* Criação de dados mokados ao iniciar o bd do miraje */
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-09-08 18:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-09-05 09:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api' // informa que todas as chamadas da api realizadas  a partir do endereço "/api" será direcionada para o mirajs

    this.get('/transactions', () => {
      // retorno um vetor com objeto contendo as propriedades
      /* return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          crateAt: new Date()
        }
      ] */

      return this.schema.all('transaction') // schema.all retorna todas os dados de transaction table
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data) // schema é o bd  // insere dados no model/table "transaction"
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
