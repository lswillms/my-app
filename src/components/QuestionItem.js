import React, {useState} from "react"
import {Button, Header} from "semantic-ui-react"


function QuestionItem( { question, option1, option2, option3, answer, nextQuestion, handleAnswerButton }) {

    const [ selectedAnswer, setSelectedAnswer] = useState(false)
   

    return(
     <div>
       <div>
        <Header className = "ui header"> {question}</Header>
        </div>
            <div>
                <Button onClick = {handleAnswerButton} variant="contained" className="ui active button"> {option1}</Button>
                </div>
                <div>
                    <Button onClick = {handleAnswerButton} variant="contained" className="ui active button"> {option2}</Button>
                </div>
                <div>
                    <Button onClick = {handleAnswerButton} variant="contained"className="ui active button"> {option3}</Button>
                </div>
                <div>
                    <Button> <i className="trash alternate icon"></i> </Button>
                    <Button onClick = {nextQuestion}> <i className="angle double right icon"></i> </Button>
                </div>
            </div>
    
    )
}

export default QuestionItem