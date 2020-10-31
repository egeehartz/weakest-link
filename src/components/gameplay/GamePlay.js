import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { PlayerContext } from "../providers/PlayerProvider"



export const GamePlay = () => {
    const params = useParams()
    //const roundId = useParams()
    let history = useHistory()
    const {players, getPlayers} = useContext(PlayerContext)
    //const [player, setPlayer] = useState({})

    const currentPlayer = players.find(p => p.id === parseInt(params.playerId))

    const [fPlayers, setFilteredPlayers] = useState([])
    const [nextPlayer, setNextPlayer] = useState({})

    useEffect(() => {
        getPlayers()
    },[])

    useEffect(() => {
            const filtered = players.filter(u => u.eliminated === false)
            setFilteredPlayers(filtered)
    },[players])

    useEffect(() => {
            const nextId = fPlayers.find(fu => fu.id > currentPlayer.id)
            console.log(nextId, "useEffect")
            if(nextId === undefined){
                const IDs = fPlayers.map(fp => fp.id)
                const nextPlayerId = Math.min(...IDs)
                const nextPlayer = fPlayers.find(fp => fp.id === nextPlayerId)
                setNextPlayer(nextPlayer)
            } 
            else {
                setNextPlayer(nextId)
            }
    },[params.playerId])

    //console.log(fPlayers.length)
    console.log(nextPlayer)
   // console.log(params)
    

    const next = () => {
        history.push(`/gameplay/${parseInt(params.roundId)}/${parseInt(nextPlayer.id)}`)
    }
    const endingNext = () => {
        history.push(`/leaderboard/${parseInt(params.roundId)}`)
    }

    return (
        <>
        <h1>Round: {params.roundId}</h1>
        <p>Player: {currentPlayer.name}</p>
        <button onClick={next}>click meeeee</button>
        <button onClick={endingNext}>end round</button>
        </>
    )
}