import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'
import { BotaoAdd } from '../../components/BotaoAdicionar/styles'

export const Aside = styled.aside`
  padding: 1rem;
  background-color: ${variaveis.fundoLateral};
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const TituloPrincipal = styled(Link)`
  gap: 0.5rem;
  align-items: center;
  display: flex;
  text-decoration: none;
  color: inherit;
  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.75rem;
    margin-bottom: 0.165rem;
  }
`

export const BotaoVoltar = styled(BotaoAdd)``

export const Logo = styled.div`
  img {
    width: 32px;
    height: 32px;
  }
`
