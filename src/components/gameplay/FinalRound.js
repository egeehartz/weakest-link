import React, { useEffect, useContext, useState } from "react"
import {useHistory} from "react-router-dom"
import {PlayerContext} from "../providers/PlayerProvider"


export const FinalRound = () => {
    let history = useHistory()
    const { players, getPlayers } = useContext(PlayerContext)
    const [fPlayers, setFilteredPlayers] = useState([])

   // const []

    useEffect(() => {
        getPlayers()
    },[])

    useEffect(() => {
        const filtered = players.filter(u => u.eliminated === false)
        setFilteredPlayers(filtered)
    }, [players])

    return (
        <>
        <h1>Final Round</h1>
        {
            fPlayers.map(fp => {
                return <div>
                    <h4>{fp.name}</h4>
                    <button>yes</button>
                    <button>no</button>
                    <div>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    </div>
                </div>
            })
        }
        </>
    )
}