import React from "react"
import { useParams } from "react-router-dom"


export const Leaderboard = () => {
    const roundId = useParams()
    console.log("leaderboard")

    return (
        <>
        <h1>Leaderboard for Round:{parseInt(roundId.roundId)}</h1>
        <table>
            <thead>
            <th>Player</th>
            <th>Correctly Answered</th>
            <th>Total</th>
            <th>Amount Banked</th>
            </thead>
        </table>
        </>
    )
}