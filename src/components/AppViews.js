import React from "react"
import {Route} from "react-router-dom"
import {GamePlay} from "./gameplay/GamePlay"
import { PlayerProvider } from "./providers/PlayerProvider"


export const AppViews = () => (
    <>
    <PlayerProvider>
    <Route path="/gameplay/:roundId(\d+)/:playerId(\d+)">
        <GamePlay />
    </Route>
    </PlayerProvider>
    </>
)