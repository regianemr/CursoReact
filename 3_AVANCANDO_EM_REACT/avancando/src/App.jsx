import './App.css'

// 2 - imagem em assets
import imagem from './assets/imagem.jpg'

// 3 - useState
import { Data } from './components/Data'

// 4 - renderização de lista
import ListRender from './components/ListRender'

// 7 - Render condicional
import CondicionalRender from './components/CondicionalRender'

// 8 - props
import ShowUserName from './components/ShowUserName'

// 9 - Desestruturando props
import CarDetails from './components/CarDetails'

// 11 - Renderização de listas com componente
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  {id: 2, brand: "KIA", color: "Preto", km: 122222 },
  {id: 3, brand: "Renault", color: "Cinza", km: 525555 },
]


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
        {/* 8 - Props */}
        <ShowUserName name="Regiane"/>
        {/* 9 - Desestruturando props */}
        <CarDetails brand="VW" km={2546}color="Branco"/>
        {/* 10 - Reaproveitamento de componentes */}
        <CarDetails brand="Fiat" km={8685} color="Prata"/>
        <CarDetails km={9415} color="Vermelho" brand="Audi"/>
        {/* 11 - Renderização de lista com componentes (loop) */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
        ))}
      </div>
      
  )
}

export default App
