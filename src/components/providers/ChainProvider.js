import React, { useState } from "react"

export const ChainContext = React.createContext()

export const ChainProvider = (props) => {
    const [chains, setChains] = useState([])

    const getChains = () => {
        return fetch("http://localhost:8088/chains")
            .then(res => res.json())
            .then(setChains)
    }

    return (
        <ChainContext.Provider value={{
            chains, getChains
            }}>
            {props.children}
        </ChainContext.Provider>
    )
}