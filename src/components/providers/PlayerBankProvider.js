import React, { useState } from "react"

export const PlayerBankContext = React.createContext()

export const PlayerBankProvider = (props) => {
    const [playerBanks, setPlayerBanks] = useState([])

    const getPlayerBanks = () => {
        return fetch("http://localhost:8088/playerBanks")
            .then(res => res.json())
            .then(setPlayerBanks)
    }

    const addPlayerBank = PlayerBank => {
        return fetch("http://localhost:8088/playerBanks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(PlayerBank)
        })
            .then(getPlayerBanks)
    }

    return (
        <PlayerBankContext.Provider value={{
            playerBanks, getPlayerBanks, addPlayerBank, setPlayerBanks
            }}>
            {props.children}
        </PlayerBankContext.Provider>
    )
}