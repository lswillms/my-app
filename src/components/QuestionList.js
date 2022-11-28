import React from "react"

function QuestionList({questionToDisplay}) {

    
    return (
        <div>
            <h1>Questions</h1>
             <ul>{questionToDisplay}</ul>
        </div>

    )
}

export default QuestionList