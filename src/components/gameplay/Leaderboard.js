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

    const bankedObj1 = playerBanks.find(pb => pb.player_id === players[0].id) || {}
    const bankedObj2 = playerBanks.find(pb => pb.player_id === players[1].id) || {}
    const bankedObj3 = playerBanks.find(pb => pb.player_id === players[2].id) || {}
    const bankedObj4 = playerBanks.find(pb => pb.player_id === players[3].id) || {}
    const bankedObj5 = playerBanks.find(pb => pb.player_id === players[4].id) || {}
    const bankedObj6 = playerBanks.find(pb => pb.player_id === players[5].id) || {}
    const bankedObj7 = playerBanks.find(pb => pb.player_id === players[6].id) || {}
    const bankedObj8 = playerBanks.find(pb => pb.player_id === players[7].id) || {}

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
                        <td>{bankedObj1.hasOwnProperty("amount") ? <p>${bankedObj1.amount}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[1].eliminated === true}> 
                        <td>{players[1].name}</td>
                        <td>{correctArr[1]}</td>
                        <td>{correctArr[1] + wrongArr[1]}</td>
                        <td>{bankedObj2.hasOwnProperty("amount") ? <p>${bankedObj2.amount}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[2].eliminated === true}> 
                        <td>{players[2].name}</td>
                        <td>{correctArr[2]}</td>
                        <td>{correctArr[2] + wrongArr[2]}</td>
                        <td>{bankedObj3.hasOwnProperty("amount") ? <p>${bankedObj3.amount}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[3].eliminated === true}> 
                        <td>{players[3].name}</td>
                        <td>{correctArr[3]}</td>
                        <td>{correctArr[3] + wrongArr[3]}</td>
                        <td>{bankedObj4.hasOwnProperty("amount") ? <p>${bankedObj4.amount}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[4].eliminated === true}> 
                        <td>{players[4].name}</td>
                        <td>{correctArr[4]}</td>
                        <td>{correctArr[4] + wrongArr[4]}</td>
                        <td>{bankedObj5.hasOwnProperty("amount") ? <p>${bankedObj5.amount}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[5].eliminated === true}> 
                        <td>{players[5].name}</td>
                        <td>{correctArr[5]}</td>
                        <td>{correctArr[5] + wrongArr[5]}</td>
                        <td>{bankedObj6.hasOwnProperty("amount") ? <p>${bankedObj6.amount}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[6].eliminated === true}> 
                        <td>{players[6].name}</td>
                        <td>{correctArr[6]}</td>
                        <td>{correctArr[6] + wrongArr[6]}</td>
                        <td>{bankedObj7.hasOwnProperty("amount") ? <p>${bankedObj7.amount}</p> : "$0"}</td>
                    </tr>
                    <tr hidden={players[7].eliminated === true}> 
                        <td>{players[7].name}</td>
                        <td>{correctArr[7]}</td>
                        <td>{correctArr[7] + wrongArr[7]}</td>
                        <td>{bankedObj8.hasOwnProperty("amount") ? <p>${bankedObj8.amount}</p> : "$0"}</td>
                    </tr>
                    </>
                </tbody>
            </table>
            <button onClick={next}>NEXT</button>
        </>
    )
}