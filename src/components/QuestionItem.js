import React, {useState} from "react"
import {Button, Header} from "semantic-ui-react"


function QuestionItem( { question, option1, option2, option3, answer, nextQuestion }) {

    const [ selectedAnswer, setSelectedAnswer] = useState("")

    function handleAnswer(e) {
        setSelectedAnswer(e.target.value)

    
    if (selectedAnswer === answer) {
       
    } else {
        return false
    }
}
   
    return(
     <div>
            <div>
                <Header className = "ui header"> {question}</Header>
            </div>     
            <div>
                <Button className="ui active button"
                  onClick= {handleAnswer} 
                  value = {option1}
                  variant="contained"  
                >
                  {option1}
                </Button>
            </div>
            <div>
                <Button className="ui active button" 
                
                    onClick= {handleAnswer}  
                    value = {option2}
                    variant="contained"
                > 
                    {option2}
                 </Button>
            </div>
            <div>
                <Button  className="ui active button" 
                    
                    onClick= {handleAnswer} 
                    value = {option3}
                    variant="contained"
                > 
                    {option3}
                </Button>
            </div>
            <div>
                    <Button> <i className="trash alternate icon"></i> </Button>
                    <Button onClick = {nextQuestion}> <i className="angle double right icon"></i> </Button>
            </div>
    </div>
    
    )
}

export default QuestionItem