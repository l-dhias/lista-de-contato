import { useSelector } from 'react-redux'
import { useState } from 'react'
import Contato from '../../components/Contatos'
import Contatos from '../../models/Contato'
import { Content } from '../../styles'
import * as S from './styles'
import type { RootReducer } from '../../store'

export const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { criterio } = useSelector((state: RootReducer) => state.filtro)
  const [termoBusca, setTermoBusca] = useState('')

  const filtraContatos = (): Contatos[] => {
    let contatosFiltrados = itens

    if (criterio && criterio !== 'todos') {
      if (criterio === 'favoritos') {
        contatosFiltrados = contatosFiltrados.filter((c) => c.favorito)
      } else {
        contatosFiltrados = contatosFiltrados.filter(
          (c) => c.categoria === criterio
        )
      }
    }

    if (termoBusca.trim()) {
      const termo = termoBusca.toLowerCase()
      contatosFiltrados = contatosFiltrados.filter(
        (c) =>
          c.nome.toLowerCase().includes(termo) ||
          c.email.toLowerCase().includes(termo) ||
          c.telefone.toString().includes(termo)
      )
    }

    return contatosFiltrados
  }

  const contatosFiltrados = filtraContatos()

  return (
    <S.MainContainer>
      <S.ContainerPesquisa>
        <S.Procurar
          placeholder="Buscar por nome, email ou telefone..."
          value={termoBusca}
          onChange={({ target }) => setTermoBusca(target.value)}
        />
      </S.ContainerPesquisa>
      <S.TituloContainer>
        <h2>Contatos {contatosFiltrados.length}</h2>
      </S.TituloContainer>

      <Content>
        <h4>Nome</h4>
        <h4>E-mail</h4>
        <h4>Telefone</h4>
      </Content>
      <S.Container>
        {contatosFiltrados.length == 0 ? (
          <>
            <h3> Nenhum contato encontrado</h3>
          </>
        ) : (
          contatosFiltrados.map((contatos) => (
            <Contato
              key={contatos.id}
              categoria={contatos.categoria}
              email={contatos.email}
              nome={contatos.nome}
              telefone={contatos.telefone}
              id={contatos.id}
              favorito={contatos.favorito}
            />
          ))
        )}
      </S.Container>
    </S.MainContainer>
  )
}
