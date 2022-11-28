import React from "react"
import {Button, Header} from "semantic-ui-react"


function QuestionItem( { question, option1, option2, option3 }) {

    // function handleAnswerButton(e)


    return(
     <div className="question-list">
       <div>
        <Header className = "ui header"> {question}</Header>
        </div>
            <div className="answer">
                <div>
                    <Button variant="contained" className="ui active button"> {option1}</Button>
                </div>
                <div>
                    <Button variant="contained" className="ui active button"> {option2}</Button>
                </div>
                <div>
                    <Button  variant="contained"className="ui active button"> {option3}</Button>
                </div>
            </div>
        </div>
  

    )
}

export default QuestionItem