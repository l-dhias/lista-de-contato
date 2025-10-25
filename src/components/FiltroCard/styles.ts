import styled from 'styled-components'

import { Props } from '.'

type PropsOmit = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsOmit>`
  display: flex;
  width: 99.3%;
  align-items: center;
  justify-content: center;
  gap: 6px;

  padding: 8px;
  border-radius: 50px 0 0 50px;
  border: 1px solid ${(props) => (props.ativo ? '#eb550fff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#eb550fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#313131ff' : '#5e5e5e')};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 20px;
`

export const Label = styled.span`
  font-size: 14px;
  line-height: 1;
  font-size: 20px;
`
