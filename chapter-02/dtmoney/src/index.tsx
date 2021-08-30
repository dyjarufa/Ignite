import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import { createServer } from 'miragejs'

createServer({
  routes() {
    // informa que todas as chamadas da api realizadas  a partir do endereço "/api" será direcionada para o mirajs
    this.namespace = 'api'

    this.get('/transactions', () => {
      // retorno um vetor com objeto contendo as propriedades
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          crateAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
