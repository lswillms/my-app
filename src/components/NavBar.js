import React from "react"
import {NavLink} from "react-router-dom"

function NavBar() {
    return(
     <div>
        <NavLink
            to = "./Home"
            exact
        >
            Home
        </NavLink>
        <NavLink
            to = "./QuestionList"
            exact
        >
            Home
        </NavLink>
        <NavLink
            to = "./Scores"
            exact
        >
            Home
        </NavLink>
     </div>

    )
}

export default NavBar