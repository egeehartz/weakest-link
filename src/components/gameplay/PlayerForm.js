import React from "react"
import { useHistory } from "react-router-dom"


export const PlayerForm = () => {
    let history = useHistory()

    const next = () => {
        history.push("/welcome")
    }

    return (
        <>
        <h1>Welcome to the Weakest Link!</h1>
        <form>
            <fieldset>
                <label>Player 1</label>
                <input placeholder="first name"></input>
            </fieldset>
            <fieldset>
                <label>Player 2</label>
                <input placeholder="first name"></input>
            </fieldset>
            <fieldset>
                <label>Player 3</label>
                <input placeholder="first name"></input>
            </fieldset>
            <fieldset>
                <label>Player 4</label>
                <input placeholder="first name"></input>
            </fieldset>
            <fieldset>
                <label>Player 5</label>
                <input placeholder="first name"></input>
            </fieldset>
            <fieldset>
                <label>Player 6</label>
                <input placeholder="first name"></input>
            </fieldset>
            <fieldset>
                <label>Player 7</label>
                <input placeholder="first name"></input>
            </fieldset>
            <fieldset>
                <label>Player 8</label>
                <input placeholder="first name"></input>
            </fieldset>
            <button onClick={next}>Save Players</button>
        </form>
        </>
    )
}