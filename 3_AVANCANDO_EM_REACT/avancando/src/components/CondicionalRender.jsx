import React from 'react'

const CondicionalRender = () => {
    const x = 5

  return (
    <div>
        {/* 7- Render Condicional */}
        <h3>Isso será exibido?</h3>
        {x > 2 && <p>Se x for true, sim!</p>}
    </div>
  )
}

export default CondicionalRender