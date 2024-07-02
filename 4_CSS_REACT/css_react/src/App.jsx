import './App.css'

// 2 - css de componente
import MyComponent from './components/MyComponent'


function App() {
  // 4 - css inline dinamico
  const n = 15
  

  return (
      <div className='App'>
        {/* 1- css global */}
        <h1>CSS no React</h1>
        {/* 2- css de componente */}
        <MyComponent />
        <p>Pegou o CSS do componente</p>
        {/* 3- Inline style */}
        <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}
        >
          Este elemento tem estilos inline
        </p>
        {/* 4 - inline style dinamico */}
        <h2 style={n > 10 ? {color: "pink"}: {color: "magenta" }}>
          CSS dinâmico
        </h2>
        <h2 style={n > 20 ? {color: "pink"}: {color: "magenta" }}>
          CSS dinâmico 2
        </h2>
        
      </div>
      
  )
}

export default App
