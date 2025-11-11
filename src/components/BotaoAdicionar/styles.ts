import styled from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../../styles/variaveis'

export const BotaoAdd = styled(Link)`
  background-color: ${variaveis.corBotaoContato};
  color: ${variaveis.textoBotaoContato};
  padding: 10px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  border: none;
  text-decoration: none;

  &:hover {
    box-shadow: 3px 3px 1px ${variaveis.sombraPadrao};
    opacity: 1;
    border: none;
  }

  margin-bottom: 1rem;
`
