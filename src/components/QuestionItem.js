import React from "react"

function QuestionItem( { question, option1, option2, option3 }) {

    return(
     <div className="question-list">
       <div className = "question"> {question}</div>
            <div className="answer">
                <div>
                    <button className="choices"> {option1}</button>
                </div>
                <div>
                    <button className="choices"> {option2}</button>
                </div>
                <div>
                    <button className="choices"> {option3}</button>
                </div>
            </div>
        </div>
  

    )
}

export default QuestionItem