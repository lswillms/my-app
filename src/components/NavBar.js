import React from "react"
import {NavLink} from "react-router-dom"

function NavBar() {
    return(
     <div>
        <NavLink
            to = "/"
        >
            Home
        </NavLink>
        <NavLink
            to = "/questionlist"
            
        >
           Questions
        </NavLink>
        <NavLink
            to = "/scores"
        >
            Scores
        </NavLink>
     </div>

    )
}

export default NavBar