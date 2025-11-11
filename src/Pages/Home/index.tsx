import { BarraLateral } from '../../containers/BarraLateral'
import { ListaDeContatos } from '../../containers/ListaDeContatos'

export const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <ListaDeContatos />
    </>
  )
}
