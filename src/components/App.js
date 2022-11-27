import React from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import QuestionList from "./QuestionList"
import NavBar from "./NavBar"
import Scores from "./Scores";
import QuestionForm from "./QuestionForm";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path = "/" element={<Home/>}>
        </Route>
        <Route path = "/questionlist" element={<QuestionList/>}>
        </Route>
        <Route path = "/scores" element={<Scores/>}>
       </Route>
        <Route path = "/questionform" element={<QuestionForm/>}>
       </Route>
      </Routes>
    </div>
  );
}

export default App;
