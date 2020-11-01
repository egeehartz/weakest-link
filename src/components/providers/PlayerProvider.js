import React, { useState } from "react"

export const PlayerContext = React.createContext()

export const PlayerProvider = (props) => {
    const [players, setPlayers] = useState([])

    const getPlayers = () => {
        return fetch("http://localhost:8088/players")
            .then(res => res.json())
            .then(setPlayers)
    }

    const addPlayer = player => {
        return fetch("http://localhost:8088/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player)
        })
            .then(getPlayers)
    }

    const voteOffPlayer = (playerId) => {
        const player = {
            eliminated: true
        }
        return fetch(`http://localhost:8088/players/${playerId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player)
        })
            .then(getPlayers)
    }

    return (
        <PlayerContext.Provider value={{
            players, getPlayers, addPlayer, setPlayers, voteOffPlayer
            }}>
            {props.children}
        </PlayerContext.Provider>
    )
}