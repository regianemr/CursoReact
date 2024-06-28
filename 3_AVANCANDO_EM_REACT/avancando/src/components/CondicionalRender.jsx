import React from 'react'

const CondicionalRender = () => {
    const x = 5

    const name = "Maria"

  return (
    <div>
        {/* 7- Render Condicional */}
        <h3>Isso será exibido?</h3>
        {x > 2 && <p>Se x for true, sim!</p>}
        {/* 8 - Else */}
        <h3>Render ternário</h3>
        {name === "Maria" ?(
            <div>
                <p>Olá, Maria</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
  )
}

export default CondicionalRender