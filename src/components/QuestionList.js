import React, { useEffect, useState } from "react"
import QuestionItem from "./QuestionItem"

function QuestionList() {

    const [ questions, setQuestions] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/questions")
        .then((resp) => resp.json())
        .then((data) => setQuestions(data))
    }, [])

    const questionToDisplay = questions.map((question) => (
        <QuestionItem
            key = {question.id}
            question = {question.question}
            option1 = {question.option1}
            option2 = {question.option2}
            option3 = {question.option3}
            answer = {question.answer}
            />
    ))
        

    
    return (
        <div>
            <h1>Questions</h1>
             <ul>{questionToDisplay}</ul>
        </div>

    )
}

export default QuestionList