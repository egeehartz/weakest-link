import React, { useContext, useEffect, useState } from "react"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { PlayerBankContext } from "../providers/PlayerBankProvider"
import { PlayerContext } from "../providers/PlayerProvider"


export const Leaderboard = () => {
    const params = useParams()
    let history = useHistory()
    const location = useLocation()
    const {players, getPlayers} = useContext(PlayerContext)
    const {playerBanks, getPlayerBanks} = useContext(PlayerBankContext)

    const [correctArr, wrongArr, banked ] = location.state
    let [totalBanked, setTotal] = useState(0)
    let [roundTotalBanked1, setRoundTotal1] = useState(0)
    let [roundTotalBanked2, setRoundTotal2] = useState(0)
    let [roundTotalBanked3, setRoundTotal3] = useState(0)
    let [roundTotalBanked4, setRoundTotal4] = useState(0)
    let [roundTotalBanked5, setRoundTotal5] = useState(0)
    let [roundTotalBanked6, setRoundTotal6] = useState(0)
    let [roundTotalBanked7, setRoundTotal7] = useState(0)
    let [roundTotalBanked8, setRoundTotal8] = useState(0)

    
    useEffect(() => {
        getPlayers()
        getPlayerBanks()
    },[])
    
    const next = () => {
        history.push({
            pathname: `/elimination/${parseInt(params.roundId)}`
        })
    }
    
    useEffect(() => {
        let amount = 0
        playerBanks.forEach(pb => amount += pb.amount)
        setTotal(amount)
    },[playerBanks])
    
    useEffect(() => {
        const bankedArr1 = playerBanks.filter(pb => pb.player_id === players[0].id && pb.round_id === parseInt(params.roundId))
        let amount = 0
        bankedArr1.forEach(pb => amount += pb.amount)
        setRoundTotal1(amount)
    },[])
    
    useEffect(() => {
        const bankedArr2 = playerBanks.filter(pb => pb.player_id === players[1].id && pb.round_id === parseInt(params.roundId)) 
        let amount = 0
        bankedArr2.forEach(pb => amount += pb.amount)
        setRoundTotal2(amount)
    },[])
    
    useEffect(() => {
        const bankedArr3 = playerBanks.filter(pb => pb.player_id === players[2].id && pb.round_id === parseInt(params.roundId)) 
        let amount = 0
        bankedArr3.forEach(pb => amount += pb.amount)
        setRoundTotal3(amount)
    },[])

    useEffect(() => {
        let amount = 0
        const bankedArr4 = playerBanks.filter(pb => pb.player_id === players[3].id && pb.round_id === parseInt(params.roundId)) 
        bankedArr4.forEach(pb => amount += pb.amount)
        setRoundTotal4(amount)
    },[])

    useEffect(() => {
        let amount = 0
        const bankedArr5 = playerBanks.filter(pb => pb.player_id === players[4].id && pb.round_id === parseInt(params.roundId)) 
        bankedArr5.forEach(pb => amount += pb.amount)
        setRoundTotal5(amount)
    },[])

    useEffect(() => {
        let amount = 0
        const bankedArr6 = playerBanks.filter(pb => pb.player_id === players[5].id && pb.round_id === parseInt(params.roundId)) 
        bankedArr6.forEach(pb => amount += pb.amount)
        setRoundTotal6(amount)
    },[])

    useEffect(() => {
        let amount = 0
        const bankedArr7 = playerBanks.filter(pb => pb.player_id === players[6].id && pb.round_id === parseInt(params.roundId)) 
        bankedArr7.forEach(pb => amount += pb.amount)
        setRoundTotal7(amount)
    },[])

    useEffect(() => {
        let amount = 0
        const bankedArr8 = playerBanks.filter(pb => pb.player_id === players[7].id && pb.round_id === parseInt(params.roundId)) 
        bankedArr8.forEach(pb => amount += pb.amount)
        setRoundTotal8(amount)
    },[])


    return (
        <>
            <h1>Leaderboard for Round {parseInt(params.roundId)}</h1>
            <h3>Total Banked this round: ${banked.banked}</h3>
            <h3>Total for the game: ${totalBanked}</h3>
            <table>
                <thead>
                    <tr>
                        <td>Player |</td>
                        <td>Correctly Answered |</td>
                        <td>Total |</td>
                        <td>Amount Banked |</td>
                    </tr>
                </thead>
                <tbody>
                    {/**PLAYERS*/}
                    <>
                    <tr hidden={players[0].eliminated === true}> 
                        <td>{players[0].name}</td>
                        <td>{correctArr[0]}</td>
                        <td>{correctArr[0] + wrongArr[0]}</td>
                        <td>{roundTotalBanked1 !== 0 ? <p>${roundTotalBanked1}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[1].eliminated === true}> 
                        <td>{players[1].name}</td>
                        <td>{correctArr[1]}</td>
                        <td>{correctArr[1] + wrongArr[1]}</td>
                        <td>{roundTotalBanked2 !== 0 ? <p>${roundTotalBanked2}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[2].eliminated === true}> 
                        <td>{players[2].name}</td>
                        <td>{correctArr[2]}</td>
                        <td>{correctArr[2] + wrongArr[2]}</td>
                        <td>{roundTotalBanked3 !== 0 ? <p>${roundTotalBanked3}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[3].eliminated === true}> 
                        <td>{players[3].name}</td>
                        <td>{correctArr[3]}</td>
                        <td>{correctArr[3] + wrongArr[3]}</td>
                        <td>{roundTotalBanked4 !== 0 ? <p>${roundTotalBanked4}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[4].eliminated === true}> 
                        <td>{players[4].name}</td>
                        <td>{correctArr[4]}</td>
                        <td>{correctArr[4] + wrongArr[4]}</td>
                        <td>{roundTotalBanked5 !== 0 ? <p>${roundTotalBanked5}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[5].eliminated === true}> 
                        <td>{players[5].name}</td>
                        <td>{correctArr[5]}</td>
                        <td>{correctArr[5] + wrongArr[5]}</td>
                        <td>{roundTotalBanked6 !== 0 ? <p>${roundTotalBanked6}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[6].eliminated === true}> 
                        <td>{players[6].name}</td>
                        <td>{correctArr[6]}</td>
                        <td>{correctArr[6] + wrongArr[6]}</td>
                        <td>{roundTotalBanked7 !== 0 ? <p>${roundTotalBanked7}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[7].eliminated === true}> 
                        <td>{players[7].name}</td>
                        <td>{correctArr[7]}</td>
                        <td>{correctArr[7] + wrongArr[7]}</td>
                        <td>{roundTotalBanked8 !== 0 ? <p>${roundTotalBanked8}</p> : "$0"}</td>
                    </tr>
                    </>
                </tbody>
            </table>
            <button onClick={next}>NEXT</button>
        </>
    )
}