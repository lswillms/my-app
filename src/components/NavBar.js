import React from "react"
import {NavLink} from "react-router-dom"

function NavBar() {

    const linkStyles = {
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

    
    return(
     <div>
        <NavLink
            to = "/"
            style={linkStyles}
              activestyle={{
                 background: "darkblue",
             }}
        >
            Home
        </NavLink>
        <NavLink
            to = "/questionlist"
            style={linkStyles}
            activestyle={{
                 background: "darkblue",
             }}
            
        >
           Questions
        </NavLink>
        <NavLink
            to = "/scores"
            style={linkStyles}
            activestyle={{
                background: "darkblue",
             }}
        >
            Scores
        </NavLink>
     </div>

    )
}

export default NavBar