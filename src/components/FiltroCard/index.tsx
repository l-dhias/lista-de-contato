import * as S from './styles'

type Props = {
  ativo: boolean
  titulo: string
  contador: number
  icon: string
  onClick: () => void
}

export const FiltroCard = ({
  ativo,
  titulo,
  contador,
  icon,
  onClick
}: Props) => {
  return (
    <>
      <S.Filtro ativo={ativo} onClick={onClick}>
        <S.Icon>
          <img src={icon} alt={titulo} />
        </S.Icon>
        <S.Detalhes>
          <p>{titulo}</p>
          <span>{contador}</span>
        </S.Detalhes>
      </S.Filtro>
    </>
  )
}
