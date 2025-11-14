import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Contatos from '../../models/Contato'
import * as enums from '../../utils/enums/Social'

type ContatosState = {
  itens: Contatos[]
}

const contatosPadrao: Contatos[] = [
  {
    nome: 'Leo ',
    email: 'teste.test0@mail.com',
    categoria: enums.Social.AMIGOS,
    telefone: 35000000000,
    id: 1,
    favorito: false
  },
  {
    nome: 'Luis ',
    email: 'teste.test1@mail.com',
    categoria: enums.Social.FAMILIA,
    telefone: 350000000001,
    id: 2,
    favorito: false
  },
  {
    nome: 'Leila ',
    email: 'teste.test2@mail.com',
    categoria: enums.Social.TRABALHO,
    telefone: 35000000002,
    id: 3,
    favorito: false
  },
  {
    nome: 'Margarida ',
    email: 'teste.test3@mail.com',
    categoria: enums.Social.AMIGOS,
    telefone: 35000000003,
    id: 4,
    favorito: false
  },
  {
    nome: 'Antonio ',
    email: 'teste.test4@mail.com',
    categoria: enums.Social.FAMILIA,
    telefone: 35000000004,
    id: 5,
    favorito: false
  },
  {
    nome: 'Luna',
    email: 'teste.test5@mail.com',
    categoria: enums.Social.TRABALHO,
    telefone: 35000000005,
    id: 6,
    favorito: true
  },
  {
    nome: 'lucca',
    email: 'teste.test6@mail.com',
    categoria: enums.Social.AMIGOS,
    telefone: 35000000006,
    id: 7,
    favorito: false
  },
  {
    nome: 'Kaio ',
    email: 'teste.test7@mail.com',
    categoria: enums.Social.FAMILIA,
    telefone: 35000000007,
    id: 8,
    favorito: false
  },
  {
    nome: 'Cristian',
    email: 'teste.test8@mail.com',
    categoria: enums.Social.TRABALHO,
    telefone: 35000000008,
    id: 9,
    favorito: false
  }
]

function carregarContatos(): Contatos[] {
  const contatosSalvos = localStorage.getItem('contatos')
  if (contatosSalvos) {
    try {
      return JSON.parse(contatosSalvos)
    } catch {
      return []
    }
  }

  return []
}

const contatosSalvos = carregarContatos()

const initialState: ContatosState = {
  itens: contatosSalvos.length > 0 ? contatosSalvos : contatosPadrao
}

function salvarContato(contatos: Contatos[]) {
  localStorage.setItem('contatos', JSON.stringify(contatos))
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
      salvarContato(state.itens)
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
        salvarContato(state.itens)
      }
    },
    alternarFavorito: (state, action: PayloadAction<number>) => {
      const contato = state.itens.find((c) => c.id === action.payload)
      if (contato) {
        contato.favorito = !contato.favorito
        salvarContato(state.itens)
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
      const nomeJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      const telefoneJaExiste = state.itens.find(
        (contato) => contato.telefone === action.payload.telefone
      )
      const emailJaExiste = state.itens.find(
        (contato) =>
          contato.email.toLowerCase() ===
          action.payload.email.toLocaleLowerCase()
      )
      if (nomeJaExiste) {
        alert('Já existe um contato com este nome')
      } else if (telefoneJaExiste) {
        alert('Já existe um contato com este telefone')
      } else if (emailJaExiste) {
        alert('Já existe um contato com este email')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1,
          favorito: false
        }
        state.itens.push(contatoNovo)
        salvarContato(state.itens)
      }
    }
  }
})

export const { editar, remover, alternarFavorito, cadastrar } =
  contatoSlice.actions
export default contatoSlice.reducer
