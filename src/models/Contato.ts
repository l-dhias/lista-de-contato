import * as enums from '../utils/enums/Social'

class Contatos {
  nome: string
  email: string
  categoria: enums.Social
  telefone: number
  id: number
  favorito: boolean

  constructor(
    nome: string,
    email: string,
    categoria: enums.Social,
    telefone: number,
    id: number,
    favorito: boolean
  ) {
    this.nome = nome
    this.categoria = categoria
    this.email = email
    this.telefone = telefone
    this.id = id
    this.favorito = favorito
  }
}
export default Contatos
