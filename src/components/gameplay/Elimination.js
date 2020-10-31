import React, {useContext, useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import {useHistory} from "react-router-dom"
import {PlayerContext} from "../providers/PlayerProvider"


export const Elimination = () => {
    let history = useHistory()
    const params = useParams()
    const { players, getPlayers } = useContext(PlayerContext)

    const [fPlayers, setFilteredPlayers] = useState([])

    useEffect(() => {
        getPlayers()
    }, [])

    useEffect(() => {
        const filtered = players.filter(u => u.eliminated === false)
        setFilteredPlayers(filtered)
    }, [players])

    //TODO onClick={editPlayer}

    const next = () => {
        //TODO find nextPlayer based on Strongest Link status
        if(parseInt(params.roundId) === 6) {
            history.push("/final")
        } else {
            history.push(`/gameplay/${parseInt(params.roundId) + 1}/1`)
        }
    }

    return (
        <>
            <h1>End of Round {parseInt(params.roundId)}</h1>
            <h2>Who is the Weakest Link?</h2>
            {
                fPlayers.map(fp => {
                    return <div>
                        <button onClick={next}>
                            {fp.name}
                        </button>
                    </div>
                })
            }
        </>
    )
}