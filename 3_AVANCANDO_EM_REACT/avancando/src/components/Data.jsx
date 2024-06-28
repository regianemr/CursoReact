import { useState } from "react"

export const Data = () => {

    let someData = 10

    const [anotherNumber, setAnotherNumber] = useState(15)
    const [testNumber, setTestNumber] = useState(25)

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => someData = 15}>Mudar variável</button>
            </div>
            <div>
                <p>Valor: {anotherNumber}</p>
                <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
            </div>
            <div>
                <p>Valor teste: {testNumber}</p>
                <button onClick={() => setTestNumber(40)}>Mudar state teste </button>
            </div>
        </div>
    )

}

export default Data;