import React from "react"
import {NavLink} from "react-router-dom"
import {Menu} from "semantic-ui-react"


function NavBar() {


    
    return(
     <div>
     <Menu>
        <NavLink
            to = "/"
              activestyle={{
                 background: "darkblue",
             }}
        >
            Home
        </NavLink>
        <NavLink
            to = "/questionlist"
            activestyle={{
                 background: "darkblue",
             }}
        >
           New Game
        </NavLink>

        <NavLink
            to = "/scores"
            activestyle={{
                background: "darkblue",
             }}
        >
            Scores
        </NavLink>
        <NavLink
            to = "/questionform"
            activestyle={{
                background: "darkblue",
             }}
        >
            Submit New Question
        </NavLink>
        </Menu>
     </div>

    )
}

export default NavBar