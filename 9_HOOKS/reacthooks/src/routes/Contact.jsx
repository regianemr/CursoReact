import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"

const Contact = () => {
  const { contextValue2 } = useContext(SomeContext)
  return (
    <div>
        <h1>Contato</h1>
        <p>UseContext</p>
        <p>Valor do contexto: {contextValue2}</p>
    </div>
  )
}

export default Contact