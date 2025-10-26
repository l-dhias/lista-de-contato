import { FiltroCard } from '../../components/FiltroCard'
import { FaHome, FaHeart, FaStar, FaBriefcase, FaUsers } from 'react-icons/fa'
import * as S from './styles'

export const BarraLateral = () => (
  <S.Aside>
    <div>
      <button type="submit">+ Criar novo Contato</button>
      <S.Filtros>
        <FiltroCard legenda="Família" contador={5} icone={FaHome} />
        <FiltroCard legenda="Amigos" contador={3} icone={FaHeart} />
        <FiltroCard legenda="Favoritos" contador={1} icone={FaStar} />
        <FiltroCard legenda="Trabalho" contador={2} icone={FaBriefcase} />
        <FiltroCard
          legenda="Todos os contatos"
          contador={11}
          ativo
          icone={FaUsers}
        />
      </S.Filtros>
    </div>
  </S.Aside>
)
