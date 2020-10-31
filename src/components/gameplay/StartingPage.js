import React, { useContext, useEffect } from "react"
import {PlayerContext} from "../providers/PlayerProvider"
import "../css/StartingPage.css"
import { useHistory } from "react-router-dom"


export const StartingPage = () => {
    let history = useHistory()
    const {players, getPlayers} = useContext(PlayerContext)

    useEffect(() => {
        getPlayers()
    },[])

    const next = () => {
        history.push("/gameplay/1/1")
    }

    return (
        <>
        <div className="playerContainer">
        {
            players.map(p => {
            return <div className="player">{p.name}</div>
            })
        }
        </div>
        <button onClick={next}>START</button>
        </>
    )
}