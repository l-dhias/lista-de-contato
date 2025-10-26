import * as S from './styles'
import { IconType } from 'react-icons'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
  icone?: IconType
}

export const FiltroCard = ({ ativo, contador, legenda, icone }: Props) => (
  <S.Card ativo={ativo}>
    <S.Icone>
      {icone && icone({ size: 20 })} {}
    </S.Icone>
    <S.Label>{legenda}</S.Label>
    <S.Contador>{contador}</S.Contador>
  </S.Card>
)
