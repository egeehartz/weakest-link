import React from "react"
import {Route} from "react-router-dom"
import {GamePlay} from "./gameplay/GamePlay"


export const AppViews = () => (
    <>
    <Route path="/gameplay/:roundId(\d+)/:userId(\d+)">
        <GamePlay />
    </Route>
    </>
)