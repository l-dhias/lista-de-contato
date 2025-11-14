import { BarraLateral } from '../../containers/BarraLateral'
import { FormularioContato } from '../../containers/FormularioContato'

export const CriarContato = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={false} />
      <FormularioContato />
    </>
  )
}
