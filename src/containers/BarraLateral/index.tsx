import { FiltroCard } from '../../components/FiltroCard'

import * as S from './styles'

export const BarraLateral = () => (
  <S.Aside>
    <div>
      <button type="submit"> + Criar novo Contato</button>
      <S.Filtros>
        <FiltroCard ativo />
        <FiltroCard ativo />
        <FiltroCard ativo />
        <FiltroCard ativo />
        <FiltroCard ativo />
        <FiltroCard ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)
