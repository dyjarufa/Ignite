import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api'
  /* aqui pode ser configura o header do app */
})
