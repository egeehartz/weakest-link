import React, {useContext, useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import {useHistory} from "react-router-dom"
import {PlayerContext} from "../providers/PlayerProvider"


export const Elimination = () => {
    let history = useHistory()
    const params = useParams()
    const { players, getPlayers, voteOffPlayer } = useContext(PlayerContext)

    const [fPlayers, setFilteredPlayers] = useState([])

    useEffect(() => {
        getPlayers()
    }, [])

    useEffect(() => {
        const filtered = players.filter(u => u.eliminated === false)
        setFilteredPlayers(filtered)
    }, [players])


    const next = (nextPlayerId) => {
        //TODO find nextPlayer based on Strongest Link status
        if(parseInt(params.roundId) === 6) {
            history.push("/final")
        } else {
            history.push({
                pathname: `/gameplay/${parseInt(params.roundId) + 1}/${nextPlayerId}`
            })
        }
    }

    return (
        <>
            <h1>End of Round {parseInt(params.roundId)}</h1>
            <div>
            <h2>Who is the Weakest Link?</h2>
            {
                fPlayers.map(fp => {
                    return <div>
                        <button onClick={()=> {
                            voteOffPlayer(fp.id)}}>
                            {fp.name}
                        </button>
                    </div>
                })
            }
            </div>
            <div>
                <h2>Strongest Link (to start next round)</h2>
                {
                fPlayers.map(fp => {
                    return <div>
                        <button onClick={()=> {
                            next(fp.id)}}>
                            {fp.name}
                        </button>
                    </div>
                })
            }
            </div>

        </>
    )
}