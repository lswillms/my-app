import React from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import QuestionList from "./QuestionList"
import NavBar from "./NavBar"
import Scores from "./Scores";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path = "/" element={<Home/>}>
        </Route>
        <Route exact path = "./QuestionList" element={<QuestionList/>}>
        </Route>
        <Route exact path = "/scores" element={<Scores/>}>
       </Route>
      </Routes>
    </div>
  );
}

export default App;
