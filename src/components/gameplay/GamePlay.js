import React, { useContext, useEffect, useState } from "react"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { PlayerContext } from "../providers/PlayerProvider"
import "../css/GamePlay.css"



export const GamePlay = () => {
    const params = useParams()
    let history = useHistory()
    let location = useLocation()
    const {players, getPlayers} = useContext(PlayerContext)
    const currentPlayer = players.find(p => p.id === parseInt(params.playerId))
    const [fPlayers, setFilteredPlayers] = useState([])

    let [correct1, setCorrect1] = useState(0)
    let [correct2, setCorrect2] = useState(0)
    let [correct3, setCorrect3] = useState(0)
    let [correct4, setCorrect4] = useState(0)
    let [correct5, setCorrect5] = useState(0)
    let [correct6, setCorrect6] = useState(0)
    let [correct7, setCorrect7] = useState(0)
    let [correct8, setCorrect8] = useState(0)

    let [wrong1, setWrong1] = useState(0)
    let [wrong2, setWrong2] = useState(0)
    let [wrong3, setWrong3] = useState(0)
    let [wrong4, setWrong4] = useState(0)
    let [wrong5, setWrong5] = useState(0)
    let [wrong6, setWrong6] = useState(0)
    let [wrong7, setWrong7] = useState(0)
    let [wrong8, setWrong8] = useState(0)

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
        console.log("heard")
        history.push({
            pathname: `/leaderboard/${parseInt(params.roundId)}`,
            state:[[correct1, correct2, correct3, correct4, correct5, correct6, correct7, correct8],
            [wrong1, wrong2, wrong3, wrong4, wrong5, wrong6, wrong7, wrong8]]
        })
    }

    const correctCounter = () => {
        if (currentPlayer.id === 1){
            setCorrect1(correct1 += 1)
        } else if (currentPlayer.id === 2){
            setCorrect2(correct2 += 1)
        } else if (currentPlayer.id === 3){
            setCorrect3(correct3 += 1)
        }else if (currentPlayer.id === 4){
            setCorrect4(correct4 += 1)
        } else if (currentPlayer.id === 5){
            setCorrect5(correct5 += 1)
        } else if (currentPlayer.id === 6){
            setCorrect6(correct6 += 1)
        } else if (currentPlayer.id === 7){
            setCorrect7(correct7 += 1)
        } else {
            setCorrect8(correct8 += 1)
        }
    }

    const wrongCounter = () => {
        if (currentPlayer.id === 1){
            setWrong1(wrong1 += 1)
        } else if (currentPlayer.id === 2){
            setWrong2(wrong2 += 1)
        } else if (currentPlayer.id === 3){
            setWrong3(wrong3 += 1)
        }else if (currentPlayer.id === 4){
            setWrong4(wrong4 += 1)
        } else if (currentPlayer.id === 5){
            setWrong5(wrong5 += 1)
        } else if (currentPlayer.id === 6){
            setWrong6(wrong6 += 1)
        } else if (currentPlayer.id === 7){
            setWrong7(wrong7 += 1)
        } else {
            setWrong8(wrong8 += 1)
        }
    }


    return (
        <>
        <h1>Round: {params.roundId}</h1>
        <p>Player: {currentPlayer.name}</p>
        <button onClick={()=>{
            correctCounter()
            next()}}>CORRECT</button>
        <button onClick={()=> {
            wrongCounter()
            next()}}>incorrect</button>
        <button>BANK</button>
        <button onClick={endingNext}>end round</button>
        </>
    )
}