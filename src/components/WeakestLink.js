  
import React from "react"
import { Route } from "react-router-dom"
import { AppViews } from "./AppViews"
//import { NavBar } from "./nav/NavBar"

export const WeakestLink = () => (
    <>
        <Route render={() => {
                return (
                    <>
                        {/* <Route render={props => <NavBar {...props} />} /> */}
                        <Route render={props => <AppViews {...props} />} />
                    </>
                )
            }
        } />
    </>
)