import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { PlayerContext } from "../providers/PlayerProvider"
import "../css/GamePlay.css"



export const GamePlay = () => {
    const params = useParams()
    let history = useHistory()
    const {players, getPlayers} = useContext(PlayerContext)
    const currentPlayer = players.find(p => p.id === parseInt(params.playerId))
    const [fPlayers, setFilteredPlayers] = useState([])

    useEffect(() => {
        getPlayers()
    },[])

    useEffect(() => {
            const filtered = players.filter(u => u.eliminated === false)
            setFilteredPlayers(filtered)
    },[players])

    const next = () => {
        const nextId = fPlayers.find(fu => fu.id > currentPlayer.id)
        if(nextId === undefined){
            const IDs = fPlayers.map(fp => fp.id)
            const nextPlayerId = Math.min(...IDs)
            history.push(`/gameplay/${parseInt(params.roundId)}/${parseInt(nextPlayerId)}`)
        } 
        else {
            history.push(`/gameplay/${parseInt(params.roundId)}/${parseInt(nextId.id)}`)
        }
    }
    const endingNext = () => {
        history.push(`/leaderboard/${parseInt(params.roundId)}`)
    }

    return (
        <>
        <h1>Round: {params.roundId}</h1>
        <p>Player: {currentPlayer.name}</p>
        <button onClick={next}>CORRECT</button>
        <button onClick={next}>incorrect</button>
        <button>BANK</button>
        <button onClick={endingNext}>end round</button>
        </>
    )
}