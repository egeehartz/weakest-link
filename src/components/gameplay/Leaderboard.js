import React from "react"
import { useHistory, useParams } from "react-router-dom"


export const Leaderboard = () => {
    const params = useParams()
    let history = useHistory()


    const next = () => {
        history.push(`/elimination/${parseInt(params.roundId)}`)
    }
    return (
        <>
            <h1>Leaderboard for Round {parseInt(params.roundId)}</h1>
            <table>
                <thead>
                    <tr>
                        <td>Player |</td>
                        <td>Correctly Answered |</td>
                        <td>Total |</td>
                        <td>Amount Banked |</td>
                    </tr>
                </thead>
            </table>
            <button onClick={next}>NEXT</button>
        </>
    )
}