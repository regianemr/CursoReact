import { useEffect, useState, useRef } from "react"

export function HookUseRef() {
    // 1 useRef
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    // 2 useRef e Dom
    const inputRef = useRef()
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        setText("")

        inputRef.current.focus()
    }

    return (
        <div>
            <h2>UseRef</h2>
            <p>O componente renderizou: {numberRef.current}</p>
            <p>Counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>
                Countador A
            </button>
            <p>Counter 2: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>
                Countador B
            </button>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    ref={inputRef} 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                />
                <input type="submit" value="Enviar" />
            </form>
            <hr />
        </div>
        
    )
}