import { useState } from "react"

const HookUseState = () => {
    // 1 useState
    let userName = "João"
    const [name, setName] = useState("Maria")

    const changeNames = () => {
        userName = "João Silva"

        setName("Maria Vitória")
    }

// 2 useState e input
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age)
    }

    return (
        <div>
            {/* useState */}
            <h2>useState</h2>
            <p>variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar nomes</button>
            {/* 2 useState e input */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)}
                />
                <input type="submit" value="Enviar" />
                <p>Você tem {age} anos.</p>
                <hr />
            </form>
        </div>
    )
}

export default HookUseState