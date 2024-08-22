/* eslint-disable react/prop-types */
import { createContext } from "react"

export const SomeContext = createContext()

export const HookUseContext = ({ children }) => {
    const contextValue = 'testing context'
    const contextValue2 = 'teste 2'

    return (
        <SomeContext.Provider value={{ contextValue, contextValue2 }}>
            {children}
        </SomeContext.Provider>
    )
}

export default HookUseContext