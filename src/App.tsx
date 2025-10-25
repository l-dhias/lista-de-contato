import { BarraLateral } from './containers/BarraLateral'
import { ListaDeTarefas } from './containers/ListaDeTarefas'
import { Container, EstiloGlobal } from './styles'

function App() {
  return (
    <div className="App">
      <>
        <EstiloGlobal />
        <Container>
          <BarraLateral />
          <ListaDeTarefas />
        </Container>
      </>
    </div>
  )
}

export default App
