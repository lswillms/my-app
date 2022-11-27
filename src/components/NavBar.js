import React from "react"
import {NavLink} from "react-router-dom"

function NavBar() {
    return(
     <div>
        <NavLink
            to = "/home"
            exact
        >
            Home
        </NavLink>
        <NavLink
            to = "/questionlist"
            exact
        >
           Questions
        </NavLink>
        <NavLink
            to = "/scores"
            exact
        >
            Scores
        </NavLink>
     </div>

    )
}

export default NavBar