import { createContext, useState } from "react"


export const context = createContext()



export const Contextcomponents = ({children}) => {
    const [count, setCount] = useState(0)
    const [newcount, setnewcount] = useState(0)
    const globalOBJ = {count, setCount, newcount, setnewcount}

    return (
        <context.Provider value={globalOBJ}>
            {children}
        </context.Provider>
    )
}
