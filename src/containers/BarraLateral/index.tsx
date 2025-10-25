import { FiltroCard } from '../../components/FiltroCard'
import { IoPeople } from 'react-icons/io5'

import * as S from './styles'

export const BarraLateral = () => (
  <S.Aside>
    <div>
      <button type="submit"> + Criar novo Contato</button>
      <S.Filtros>
        <FiltroCard legenda="Família" contador={5} />
        <FiltroCard legenda=" Amigos" contador={3} />
        <FiltroCard legenda="Favoritos" contador={1} />
        <FiltroCard legenda="Trabalho" contador={2} />
        <FiltroCard legenda="Todos os con tatos" contador={11} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)
