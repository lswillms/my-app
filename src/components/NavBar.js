import React from "react"
import {NavLink} from "react-router-dom"
import {Menu} from "semantic-ui-react"


function NavBar() {

    return(
     <div>
     <Menu className="navigation">
        <Menu.Item
            as = {NavLink}
            exact to = "/"
              activestyle={{
                 background: "darkblue",
             }}
        >
            Home
        </Menu.Item>
        <Menu.Item
            as = {NavLink}
            to = "/questionlist"
            activestyle={{
                 background: "darkblue",
             }}
        >
           New Game
        </Menu.Item>

        <Menu.Item
            as = {NavLink}
            to = "/scores"
            activestyle={{
                background: "darkblue",
             }}
        >
            Scores
        </Menu.Item>
        <Menu.Item
            as = {NavLink}
            to = "/questionform"
            activestyle={{
                background: "darkblue",
             }}
        >
            Submit New Question
        </Menu.Item>
        </Menu>
     </div>

    )
}

export default NavBar