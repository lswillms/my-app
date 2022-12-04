import React, {useState} from "react";
import { Header } from "semantic-ui-react";

function QuestionForm({ handleAddQuestion }) {

    const [ question, setQuestion] = useState("")
    const [ option1, setOption1] = useState("")
    const [ option2, setOption2] = useState("")
    const [ option3, setOption3] = useState("")
    const [ answer, setAnswer ] = useState("")

    
    function handleSubmit(e) {
        e.preventDefault()
    
        const formData = {
            question:question,
            option1: option1,
            option2: option2,
            option3: option3,
            answer: answer
        }

        fetch(" http://localhost:3000/questionslist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
            })
            .then((resp) => resp.json())
            .then((newQuestion) => handleAddQuestion(newQuestion))

         setQuestion("")
         setOption1("")
         setOption2("")
         setOption3("")
         setAnswer("")
    }
    
    


    return (
        <div className="form">
            <Header>Submit New Question</Header>
            <form onSubmit = {handleSubmit} className="new question">
           
                <div className="ui input focus">
                <label>
                    Question:  
                    <input
                        type = "text"
                        name = "question"
                        value = {question}
                        onChange={(e) => setQuestion(e.target.value)}
                       
                    />
                </label>
                </div>
             <br></br>
                <div className="ui input focus">
                 <label>
                        Option 1:
                    <input
                      type = "text"
                      name = "option1"
                      value = {option1}
                      onChange={(e) => setOption1(e.target.value)}
                      
                    />
                 </label>
                </div>
                <br></br>
                <span className="ui input focus">
                 <label>
                    Option 2:
                    <input
                        type = "text"
                        name = "option2"
                        value = {option2}
                        onChange ={(e) => setOption2(e.target.value)}
                        
                    />
                 </label>
                 </span>
                 <br></br>
                 <div className="ui input focus">
                  <label>
                    Option 3:
                    <input
                         type = "text"
                         name = "option3"
                         value = {option3}
                         onChange = {(e) => setOption3(e.target.value)}
                         
                    />
                 </label>
                </div>
                <br></br>
                <div className="ui input focus">
                 <label>
                    Answer:
                   <input
                        type = "text"
                        name = "answer"
                        value = {answer}
                        onChange = {(e) => setAnswer(e.target.value)}
                       
                    />
                  </label>
                 </div>
                 <br></br>
                 <button className="submit">Submit</button>
                 <br></br>
        </form>
        </div>

    )
    }

export default QuestionForm