import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

type headerProps = {
  onOpenNewtransactionModalOpen: () => void
}

export function Header({ onOpenNewtransactionModalOpen }: headerProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo dt money" />
        <button type="button" onClick={onOpenNewtransactionModalOpen}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
