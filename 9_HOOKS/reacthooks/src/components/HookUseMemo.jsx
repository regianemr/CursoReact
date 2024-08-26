import { useState, useEffect, useMemo } from "react"

export function HookUseMemo () {
    const [number, setNumber] = useState(0)

    // const premiumNumbers = ["0", "100", "200"]

    const premiumNumbers = useMemo(() => {
        return ["0", "100", "200", "400"]
    }, [])


    useEffect(() => {
        console.log("Premiumnumbers foi alterado")
    }, [premiumNumbers])


    return (
        <div>
            <h2>useMimo</h2>
            <input type="text" onChange={(e) => setNumber(e.target.value)} />
            {premiumNumbers.includes(number) ?<p>Acertou o número</p> : ""}
        </div>
    )
}