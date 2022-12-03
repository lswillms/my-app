import React, {useState, useEffect} from "react"
import {Button, Header} from "semantic-ui-react"


function QuestionItem( { question, nextQuestion,handleDeleteList}) {

    const [ selectedAnswer, setSelectedAnswer] = useState("")


    const handleAnswer =  (e)  => {
        setSelectedAnswer(e.target.value)
    
        if (selectedAnswer === question.answer) {
            alert("Correct")
        } else {
            alert("Try again")
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
                <Button className="ui active button" 
                    onClick= {handleAnswer}  
                    value = {question.option1}
                    variant="contained"
                > 
                    {question.option1}
                 </Button>
            </div>
            <div>
                <Button className="ui active button" 
                    onClick= {handleAnswer}  
                    value = {question.option2}
                    variant="contained"
                > 
                    {question.option2}
                 </Button>
            </div>
            <div>
                <Button  className="ui active button" 
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
            </div>
            <span></span>
    </div>
    
    )
}

export default QuestionItem