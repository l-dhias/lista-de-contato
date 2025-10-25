import * as S from './styles'

export type Props = {
  ativo: boolean
}

export const FiltroCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>2</S.Contador>
    <S.Label>Trabalho</S.Label>
  </S.Card>
)
