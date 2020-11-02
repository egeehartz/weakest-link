import React, { useContext, useEffect, useState } from "react"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { PlayerContext } from "../providers/PlayerProvider"
import "../css/GamePlay.css"
import { ChainContext } from "../providers/ChainProvider"
import { PlayerBankContext } from "../providers/PlayerBankProvider"



export const GamePlay = () => {
    const params = useParams()
    let history = useHistory()
    const { players, getPlayers } = useContext(PlayerContext)
    const {chains, getChains} = useContext(ChainContext)
    const {addPlayerBank} = useContext(PlayerBankContext)
    const currentPlayer = players.find(p => p.id === parseInt(params.playerId))
    const [fPlayers, setFilteredPlayers] = useState([])
    const [currentChain, setCurrentChain] = useState([])

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

    let [bankCounter, setBankCounter] = useState(1)
    let [bankedAmount, setBankAmount] = useState(0)

    useEffect(() => {
        getPlayers()
        getChains()
    }, [])

    useEffect(() => {
        const filtered = players.filter(u => u.eliminated === false)
        setFilteredPlayers(filtered)
    }, [players])

    useEffect(() => {
        const filtered = chains.filter(c => c.round === parseInt(params.roundId))
        setCurrentChain(filtered)
    }, [chains])

    const next = () => {
        const nextId = fPlayers.find(fu => fu.id > currentPlayer.id)
        if (nextId === undefined) {
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
            state: [[correct1, correct2, correct3, correct4, correct5, correct6, correct7, correct8],
            [wrong1, wrong2, wrong3, wrong4, wrong5, wrong6, wrong7, wrong8], {banked: bankedAmount}]
        })
    }

    const correctCounter = () => {
        if (currentPlayer.id === 1) {
            setCorrect1(correct1 += 1)
        } else if (currentPlayer.id === 2) {
            setCorrect2(correct2 += 1)
        } else if (currentPlayer.id === 3) {
            setCorrect3(correct3 += 1)
        } else if (currentPlayer.id === 4) {
            setCorrect4(correct4 += 1)
        } else if (currentPlayer.id === 5) {
            setCorrect5(correct5 += 1)
        } else if (currentPlayer.id === 6) {
            setCorrect6(correct6 += 1)
        } else if (currentPlayer.id === 7) {
            setCorrect7(correct7 += 1)
        } else {
            setCorrect8(correct8 += 1)
        }
    }

    const wrongCounter = () => {
        if (currentPlayer.id === 1) {
            setWrong1(wrong1 += 1)
        } else if (currentPlayer.id === 2) {
            setWrong2(wrong2 += 1)
        } else if (currentPlayer.id === 3) {
            setWrong3(wrong3 += 1)
        } else if (currentPlayer.id === 4) {
            setWrong4(wrong4 += 1)
        } else if (currentPlayer.id === 5) {
            setWrong5(wrong5 += 1)
        } else if (currentPlayer.id === 6) {
            setWrong6(wrong6 += 1)
        } else if (currentPlayer.id === 7) {
            setWrong7(wrong7 += 1)
        } else {
            setWrong8(wrong8 += 1)
        }
    }


    const bankMoney = () => {
        const amountObj = currentChain.find(c => c.step === (bankCounter - 1))
        setBankAmount(bankedAmount += amountObj.amt)
        setBankCounter(1)
        addPlayerBank({
            amount: amountObj.amt,
            player_id: parseInt(params.playerId),
            round_id: parseInt(params.roundId)
        })
    }

    return (
        <>
            <h1>Round: {params.roundId}</h1>
            <div className="mainContent">
            <div className="gameplay">
                <h4>Player: {currentPlayer.name}</h4>
                <div className="answerButtons">
                        <button onClick={() => {
                            setBankCounter(bankCounter += 1)
                            correctCounter()
                            next()
                        }}>CORRECT</button>
                        <button onClick={() => {
                            setBankCounter(bankCounter = 1)
                            wrongCounter()
                            next()
                        }}>incorrect</button>
                    </div>
                    <div className="bankButton">
                        <button onClick={bankMoney}>BANK</button>
                    </div>
            </div>
            <div className="chain">
                        {
                            currentChain.map(c => {
                                return <div className="chainColumn">
                                    <p>${c.amt}</p>
                                    <p hidden={c.step !== bankCounter}>arrow</p>
                                    </div>
                            }).reverse()
                        }
                        <p>Bank: ${bankedAmount}</p>
            </div>
            </div>
                <div className="endRound">
                    <button onClick={endingNext}>end round</button>
                </div>
        </>
    )
}