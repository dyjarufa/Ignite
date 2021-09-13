import { useState } from 'react'
import Modal from 'react-modal'
import { NewTransactionModal } from './components/ NewTransactionModal'
import { Dashboard } from './components/dashboard'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './TransactionContext'

Modal.setAppElement('#root') // Informa qual é o root da apicação, acessibilidade conforme a documentação.

export function App() {
  const [isNewtransactionModalOpen, setIsNewtransactionModal] = useState(false)
  function handleCloseNewTransaction() {
    setIsNewtransactionModal(false)
  }

  function handleOpenNewTransaction() {
    setIsNewtransactionModal(true)
  }
  return (
    <TransactionsProvider>
      <div className="App">
        <Header onOpenNewtransactionModalOpen={handleOpenNewTransaction} />
        <NewTransactionModal
          isOpen={isNewtransactionModalOpen}
          onRequestClose={handleCloseNewTransaction}
        />
        <Dashboard />
        <GlobalStyle />
      </div>
    </TransactionsProvider>
  )
}
