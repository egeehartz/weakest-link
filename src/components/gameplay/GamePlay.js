import React from "react"
import { useHistory, useParams } from "react-router-dom"



export const GamePlay = () => {
const userId = useParams()
const roundId = useParams()
let history = useHistory()

const next = () => {
    history.push(`/gameplay/${parseInt(roundId.roundId)}/${parseInt(userId.userId) + 1}`)
}

    return (
        <>
        <h1>Round: {roundId.roundId}</h1>
        <p>Player: {userId.userId}</p>
        <button onClick={next}>click meeeee</button>
        </>
    )
}