import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { PlayerContext } from "../providers/PlayerProvider"



export const GamePlay = () => {
    const playerId = useParams()
    const roundId = useParams()
    let history = useHistory()
    const {players, getPlayers} = useContext(PlayerContext)

    const [fPlayers, setFilteredPlayers] = useState([])
    const [nextPlayer, setNextPlayer] = useState({})

    useEffect(() => {
        getPlayers()
    },[])

    useEffect(() => {
        if(roundId.roundId > 1){
            const filtered = players.filter(u =>{
                console.log(u, "u")
                return u.eliminated === false
            })
            setFilteredPlayers(filtered)
        }
    },[players])

    useEffect(() => {
        if(fPlayers.length < 8){
            const nextId = fPlayers.find(fu =>{
                console.log(fu)
              return fu.id > playerId.playerId
            })
            setNextPlayer(nextId)   
        }
    },[fPlayers])

    console.log(fPlayers.length)
    console.log(nextPlayer)
    

    const next = () => {
        history.push(`/gameplay/${parseInt(roundId.roundId)}/${parseInt(playerId.playerId) + 1}`)
    }

    return (
        <>
        <h1>Round: {roundId.roundId}</h1>
        <p>Player: {playerId.playerId}</p>
        <button onClick={next}>click meeeee</button>
        </>
    )
}