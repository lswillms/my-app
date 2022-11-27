import React from "react"
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import QuestionList from "./QuestionList"
import NavBar from "./NavBar"
import Scores from "./Scores";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
             <Home exact path = "./Home"/>
        </Route>
        <Route>
           <NavBar exact path = "./NavBar"/>
        </Route>
        <Route>
           <QuestionList exact path = "./QuestionList" />
        </Route>
        <Route>
           <Scores exact path = "./Scores" />
       </Route>
      </Switch>
    </div>
  );
}

export default App;
