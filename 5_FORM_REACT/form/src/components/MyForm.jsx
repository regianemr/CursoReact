import "./MyForm.css"

import { useState } from "react"

const MyForm = ({userName, userEmail}) => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)

    const handleName = (e) => {
        setName(e.target.value)
    }

    // 5 envio de form
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name, email)
    }

    console.log(name, email)

  return (
    <div>
        {/* 1 - Criação de form */}
        {/* 5- Envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" 
                placeholder="Digite o seu nome" 
                onChange={handleName} 
                // 6 controlled input
                value={name}
                /> 
                
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input type="text" 
                name= "email" 
                // 4 - Simplificando manipulação
                placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)}
                // 6 controlled input
                value={email || ""} />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm