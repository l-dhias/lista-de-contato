import { useDispatch } from 'react-redux'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/contatos'
import { useState, type FormEvent } from 'react'
import * as enums from '../../utils/enums/Social'

export const FormularioContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [categoria, setCategoria] = useState(enums.Social.AMIGOS)
  const [telefoneError, setTelefoneError] = useState('')

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

  const handleTelefoneChange = (valor: string) => {
    const apenasNumeros = valor.replace(/\D/g, '')
    setTelefone(apenasNumeros)
    validarTelefone(apenasNumeros)
  }

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    if (!validarTelefone(telefone)) {
      return
    }

    setTimeout(() => {
      dispatch(
        cadastrar({
          nome,
          telefone: Number(telefone),
          email,
          categoria,
          favorito: false
        })
      )
    }, 500)
    navigate('/')
  }

  return (
    <>
      <S.FormContainer onSubmit={cadastrarContato}>
        <h2>Criar contato</h2>

        <div>
          <img src="icons/amigos.png" />

          <div>
            <S.Input
              type="text"
              id="nome"
              required
              onChange={({ target }) => setNome(target.value)}
              value={nome}
              placeholder=""
            />
            <label htmlFor="nome">Nome</label>
          </div>
        </div>
        <div>
          <img src="icons/email.png" />

          <div>
            <S.Input
              type="email"
              id="email"
              required
              onChange={({ target }) => setEmail(target.value)}
              value={email}
              placeholder=""
            />
            <label htmlFor="email">E-mail</label>
          </div>
        </div>
        <div>
          <img src="icons/telefone.png" />

          <div>
            <S.Input
              type="tel"
              id="telefone"
              required
              onChange={({ target }) => handleTelefoneChange(target.value)}
              value={telefone}
              placeholder=""
            />
            <label htmlFor="telefone">Telefone</label>
            {telefoneError && <S.Error>{telefoneError}</S.Error>}
          </div>
        </div>
        <S.CategoriaFieldset>
          <legend>Categoria</legend>

          {Object.values(enums.Social).map((categoria) => (
            <div key={categoria}>
              <input
                type="radio"
                name="categoria"
                value={categoria}
                id={categoria}
                defaultChecked={categoria === enums.Social.AMIGOS}
                onChange={({ target }) =>
                  setCategoria(target.value as enums.Social)
                }
              />
              <label htmlFor={categoria}>{categoria}</label>
            </div>
          ))}
        </S.CategoriaFieldset>

        <S.BotaoSalvar type="submit">Salvar</S.BotaoSalvar>
      </S.FormContainer>
    </>
  )
}
