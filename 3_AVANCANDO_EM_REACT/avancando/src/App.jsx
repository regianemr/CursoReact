import './App.css'

// 2 - imagem em assets
import imagem from './assets/imagem.jpg'

// 3 - useState
import { Data } from './components/Data'

// 4 - renderização de lista
import ListRender from './components/ListRender'

// 7 - Render condicional
import CondicionalRender from './components/CondicionalRender'

function App() {

  return (
      <div className='App' style={{paddingBottom: "500px" }}>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em public */}
        <img src="/img1.jpg" alt="Alguma imagem" />
        {/* 2 - Imagem em assets */}
        <img src={imagem} alt="Outra imagem" />
        {/* 3 - useState */}
        <Data />
        {/* 4 - Render de lista */}
        <ListRender/>
        {/* 7 - Render Condicional */}
        <CondicionalRender />
      </div>
      
  )
}

export default App
