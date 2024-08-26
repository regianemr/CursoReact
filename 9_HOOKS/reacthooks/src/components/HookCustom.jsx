import { useState } from "react"
import { usePrevious } from "../hooks/usePRevious"

const HookCustom = () => {
    const [number, setNumber] = useState(0)
    const previousValue = usePrevious(number)


  return (
    <div>
        <h2>Custom Hook</h2>
        <p>Atual: {number}</p>
        <p>Valor anterior: {previousValue}</p>
        <button onClick={() => setNumber(Math.random())}>Alterar!!</button>
    </div>
    
  )
}

export default HookCustom