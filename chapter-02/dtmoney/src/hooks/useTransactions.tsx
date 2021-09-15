import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../services/api'

type TransactionProp = {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

// interface TransactionInput { 1o estratégia, criar um interface com para tipar TransactionInput
//   title: string
//   amount: number
//   type: string
//   category: string
// }

// 2o estratégia posso usar o Pick e definir apenas as propriedades que eu quero
// type TransactionInput = Pick<
//   TransactionProp,
//   'amount' | 'type' | 'category' | 'title'
// >

// 3o estratégia, usando Omit, informo as propriedades que não quero
type TransactionInput = Omit<TransactionProp, 'id' | 'createdAt'>

type TransactionsProviderProps = {
  children: ReactNode
}

type TransactionsContextData = {
  transactions: TransactionProp[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData // forçar uma tipagem no typescript
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProp[]>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput, // passando todas as informações dos inputs
      createdAt: new Date() // decidi setar a data no post
    })

    const { transaction } = response.data
    setTransactions([...transactions, transaction]) // conceito de imutabilidade
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}
