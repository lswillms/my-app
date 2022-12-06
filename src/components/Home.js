import React from "react"
import {Header} from "semantic-ui-react"



function Home() {

    return(
    <div>
      <img src ="/Images/sports.jpeg"alt = "sports"/>
        <Header className="header">
          <h1>Sports Trivia Genie</h1>
        </Header>
        <div>
         <p>Do you want to create a trivia game that challenge your friends against your trivia knowledge? </p>
         <p>Introuducing Sports Trivia Genie</p>
         <p> With this app, you will able add and remove any trivia question that you choose.</p>
         <p> Add as many questions as your want and make them as easy or hard as you want.</p>
         <p>Challenge your friends today!</p>
         </div>
    </div>
    )
}

export default Home