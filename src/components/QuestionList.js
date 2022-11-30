import React from "react"

function QuestionList({questionToDisplay, handleAnswerButton}) {

    
    return (
        <div>
            <h1>Question</h1>
             <ul>{questionToDisplay}</ul>
        </div>

    )
}

export default QuestionList