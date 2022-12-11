import React, { useState } from "react"
import {Button, Header} from "semantic-ui-react"


function QuestionItem( { question, nextQuestion,handleDeleteList, reset}) {

    const [ selectedAnswer, setSelectedAnswer] = useState("")
  
     const handleAnswer= (e) => {
        setSelectedAnswer(e.target.value)
     }
    
    function createClass(option) {
        if(option === selectedAnswer) {
            if(selectedAnswer === question.answer) {
                return "ui active button correct"
            }else {
                return "ui active button wrong"
            }
        }else {
            return "ui active button"
        }
    }
    

      function handleDeleteClick() {
        fetch(`http://localhost:3000/questionslist/${question.id}`, {
          method: "DELETE",
        })
        .then((resp) => resp.json())
        .then(() => handleDeleteList(question))
      }
    
    return(
     <div>
            <div>
                <Header className = "ui header"> {question.question}</Header>
            </div>     
            <div>
                <Button className= {createClass(question.option1)}
                    onClick= {handleAnswer}
                    value = {question.option1}
                    variant="contained"
                > 
                    {question.option1}
                 </Button>
            </div>
            <div>
                <Button className={createClass(question.option2)} 
                    onClick= {handleAnswer}  
                    value = {question.option2}
                    variant="contained"
                > 
                    {question.option2}
                 </Button>
            </div>
            <div>
                <Button  className={createClass(question.option3)}
                    onClick= {handleAnswer}
                    value = {question.option3}
                    variant="contained"
                > 
                    {question.option3}
                </Button>
            </div>
            <div>
                    <Button onClick={handleDeleteClick}> <i className="trash alternate icon"></i> </Button>
                    <Button onClick = {nextQuestion}> <i className="angle double right icon"></i> </Button>
                    <Button onClick={reset}><i className = "redo icon"></i></Button>
            </div>
    </div>
)
}

export default QuestionItem