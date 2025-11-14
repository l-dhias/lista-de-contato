import { useEffect, useState } from 'react'
import Contatos from '../../models/Contato'
import {
  remover,
  editar,
  alternarFavorito
} from '../../store/reducers/contatos'
import * as S from './styles'
import { useDispatch } from 'react-redux'

type Props = Contatos

const validaCategoria = (categoria: string) => {
  if (categoria === 'amigos') {
    return 'icons/amigos.png'
  } else if (categoria === 'familia') {
    return 'icons/familia.png'
  } else {
    return 'icons/escritorio.png'
  }
}

const Contato = ({
  email: emailOriginal,
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  categoria,
  id,
  favorito: favoritoOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [telefone, alteraNumero] = useState('')
  const [email, alteraEmailAd] = useState('')
  const [nome, alteraNome] = useState('')
  const [estaEditando, setEstaEditando] = useState(false)
  const [favorito, setFavorito] = useState(favoritoOriginal)
  const [telefoneError, setTelefoneError] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) alteraEmailAd(emailOriginal)
    if (nomeOriginal.length > 0) alteraNome(nomeOriginal)
    if (telefoneOriginal > 0) alteraNumero(telefoneOriginal.toString())
    setFavorito(favoritoOriginal)
  }, [emailOriginal, telefoneOriginal, nomeOriginal, favoritoOriginal])

  const validarTelefone = (valor: string) => {
    const apenasNumeros = valor.replace(/\D/g, '')
    if (apenasNumeros.length < 11) {
      setTelefoneError('Telefone deve ter pelo menos 11 dígitos')
      return false
    } else {
      setTelefoneError('')
      return true
    }
  }

  const telefoneChange = (valor: string) => {
    const apenasNumeros = valor.replace(/\D/g, '')
    alteraNumero(apenasNumeros)
    validarTelefone(apenasNumeros)
  }

  const cancelaEdicao = () => {
    setEstaEditando(false)
    alteraEmailAd(emailOriginal)
    alteraNome(nomeOriginal)
    alteraNumero(telefoneOriginal.toString())
    setFavorito(favoritoOriginal)
    telefoneChange(telefoneOriginal.toString())
  }

  const salvar = () => {
    if (!validarTelefone(telefone)) {
      return
    }
    dispatch(
      editar({
        id,
        nome,
        email,
        telefone: parseInt(telefone),
        categoria,
        favorito
      })
    )
    setEstaEditando(false)
  }

  const Remover = () => {
    if (window.confirm('Tem certeza que deseja excluir este contato?')) {
      dispatch(remover(id))
    }
  }

  const AlternarFavorito = () => {
    setFavorito(!favorito)
    dispatch(alternarFavorito(id))
  }

  return (
    <S.ContentContato key={id}>
      <S.ContentNome>
        <div>
          {estaEditando ? (
            <img src="icons/caneta.png" alt={categoria} />
          ) : (
            <img src={validaCategoria(categoria)} alt={categoria} />
          )}
        </div>
        <S.Input
          type="text"
          value={nome}
          onChange={({ target }) => alteraNome(target.value)}
          disabled={!estaEditando}
        />
      </S.ContentNome>
      <div>
        <S.Input
          type="text"
          value={email}
          onChange={({ target }) => alteraEmailAd(target.value)}
          disabled={!estaEditando}
        />
      </div>
      <div>
        <S.Input
          type="tel"
          value={telefone}
          onChange={({ target }) => telefoneChange(target.value)}
          disabled={!estaEditando}
        />
        {telefoneError && <S.Error>{telefoneError}</S.Error>}
      </div>
      <S.OpcoesFuncionalidade>
        {estaEditando ? (
          <>
            <S.BotaoFuncionalidade title="Favoritar" onClick={AlternarFavorito}>
              <img
                src={favorito ? 'icons/estrela-fill.png' : 'icons/estrela.png'}
                alt="favoritar"
                width="12px"
                height="12px"
              />
            </S.BotaoFuncionalidade>
            <S.BotaoFuncionalidade onClick={salvar} title="salvar">
              <img
                src="icons/save.png"
                alt="salvar"
                width="12px"
                height="12px"
              />
            </S.BotaoFuncionalidade>
            <S.BotaoFuncionalidade title="Cancelar" onClick={cancelaEdicao}>
              <img
                src="icons/cancel.png"
                alt="excluir"
                width="12px"
                height="12px"
              />
            </S.BotaoFuncionalidade>
          </>
        ) : (
          <>
            <S.BotaoFuncionalidade title="Favoritar" onClick={AlternarFavorito}>
              <img
                src={favorito ? 'icons/estrela-fill.png' : 'icons/estrela.png'}
                alt="favoritar"
                width="12px"
                height="12px"
              />
            </S.BotaoFuncionalidade>
            <S.BotaoFuncionalidade
              onClick={() => setEstaEditando(!estaEditando)}
              title="Editar"
            >
              <img
                src="icons/caneta.png"
                alt="editar"
                width="12px"
                height="12px"
              />
            </S.BotaoFuncionalidade>
            <S.BotaoFuncionalidade title="Excluir" onClick={Remover}>
              <img
                src="icons/lata-de-lixo.png"
                alt="excluir"
                width="12px"
                height="12px"
              />
            </S.BotaoFuncionalidade>
          </>
        )}
      </S.OpcoesFuncionalidade>
    </S.ContentContato>
  )
}

export default Contato
