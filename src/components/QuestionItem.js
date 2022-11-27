import React from "react"

function QuestionItem( { question, option1, option2, option3, answer }) {

    return(
     <div className="question">
        <span>Question: {question}</span>
            <div className="answer">
                <button className="choices"> {option1}</button>
                <button className="choices"> {option2}</button>
                <button className="choices"> {option3}</button>
            </div>
            <span>{answer}</span>
        </div>
  

    )
}

export default QuestionItem