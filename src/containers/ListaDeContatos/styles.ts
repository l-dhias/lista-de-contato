import styled from 'styled-components'
import { InputChore, Main } from '../../styles'

export const MainContainer = styled(Main)``

export const TituloContainer = styled.div`
  width: 100%;
  h2 {
    margin: 1rem;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow-y: scroll;
`

export const ContainerPesquisa = styled.div`
  position: sticky;
  top: 1;
  left: 1;
  padding: 1rem 1rem 0;
`

export const Procurar = styled(InputChore)`
  border: none;
  border-bottom: 1px solid;
  width: 50%;
`
