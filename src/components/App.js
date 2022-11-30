import React, {useEffect, useState} from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import QuestionList from "./QuestionList"
import NavBar from "./NavBar"
import QuestionForm from "./QuestionForm";
import 'semantic-ui-css/semantic.min.css'
import QuestionItem from "./QuestionItem";


function App() {

  const [ questions, setQuestions] = useState([])
  const [ start, setStart] = useState(0)
  
    useEffect(() => {
        fetch("http://localhost:3000/questions")
        .then((resp) => resp.json())
        .then((data) => setQuestions(data))
    }, [])

    const allQuestionsToDisplay = questions.map((question) => (
      <QuestionItem
          key = {question.id}
          question = {question.question}
          option1 = {question.option1}
          option2 = {question.option2}
          option3 = {question.option3}
          answer = {question.answer}
          nextQuestion = {nextQuestion}
          />
  ))

  const questionToDisplay = allQuestionsToDisplay.slice(start, start + 1)

  function nextQuestion(e) {
    setStart(start + 1)
  }

  function handleAddQuestion(newQuestion) {
    setQuestions([... questions, newQuestion])
  }

  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path = "/" element={<Home/>}>
        </Route>
        <Route path = "/questionlist" element={<QuestionList  questionToDisplay = {questionToDisplay} />}> 
        </Route>
        <Route path = "/questionform" element={<QuestionForm questions = {questions} handleAddQuestion = {handleAddQuestion}/>}>
       </Route>
      </Routes>
    </div>
  );
}

export default App;
