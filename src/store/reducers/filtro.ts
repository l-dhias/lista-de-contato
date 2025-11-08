import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  categoria: string
  criterio: 'amigos' | 'todos' | 'familia' | 'trabalho' | 'favoritos'
}

const initialState: FiltroState = {
  categoria: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraCategoria: (state, action: PayloadAction<string>) => {
      state.categoria = action.payload
    },
    alteraFiltro: (
      state,
      action: PayloadAction<
        'amigos' | 'todos' | 'familia' | 'trabalho' | 'favoritos'
      >
    ) => {
      state.criterio = action.payload
    }
  }
})

export default filtroSlice.reducer
export const { alteraCategoria, alteraFiltro } = filtroSlice.actions
