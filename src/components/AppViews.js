import React from "react"
import { Route } from "react-router-dom"
import { GamePlay } from "./gameplay/GamePlay"
import { PlayerProvider } from "./providers/PlayerProvider"
import { PlayerForm } from "./gameplay/PlayerForm"
import { StartingPage } from "./gameplay/StartingPage"
import { Leaderboard } from "./gameplay/Leaderboard"
import { Elimination } from "./gameplay/Elimination"
import { FinalRound } from "./gameplay/FinalRound"


export const AppViews = () => (
    <>
    <PlayerProvider>
        <Route exact path='/'>
            <PlayerForm />
        </Route>
        <Route path="/welcome">
            <StartingPage />
        </Route>
        <Route path="/gameplay/:roundId(\d+)/:playerId(\d+)">
            <GamePlay />
        </Route>
        <Route path="/leaderboard/:roundId(\d+)">
            <Leaderboard />
        </Route>
        <Route path="/elimination/:roundId(\d+)">
            <Elimination />
        </Route>
        <Route path="/final">
            <FinalRound />
        </Route>
    </PlayerProvider>
    </>
)