import { responsiveFontSizes } from "@mui/material";
import React, {useState} from "react";
import { Header } from "semantic-ui-react";


function QuestionForm({question}) {

    const [ newQuestion, setNewQuestion] = useState("")
    const [ option1, setOption1] = useState("")
    const [ option2, setOptions2] = useState("")
    const [ option3, setOptions3] = useState("")
    const [ answer, setAnswer] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const formData = {
            question:question,
            option1: option1,
            option2: option2,
            option3: option3,
            answer: answer,
        }

        fetch(" http://localhost:3000/questions", {
            methud: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }
    return (
        <div>
            <Header>Submit New Question</Header>
            <form onSubmit = {handleSubmit}className="new question">
                <div>
                <label>
                    Question:  
                    <input
                         type = "text"
                        value = {question}
                >
                </input>
                </label>
                </div>

                <div>
                 <label>
                        Option 1:
                    <input
                      type = "text"
                      value = {option1}
                >
                     </input>
                 </label>
                </div>

                <div>
                 <label>
                    Option 2:
                    <input
                      type = "text"
                     value = {option2}
                >
                    </input>
                 </label>
                 </div>
                 
                 <div>
                  <label>
                    Option 3:
                    <input
                     type = "text"
                     value = {option3}
                >
                    </input>
                 </label>
                </div>
                
                <div>
                 <label>
                    Answer: 
                   <input
                    type = "text"
                    value = {answer}
                >
                     </input>
                  </label>
                 </div>
                 <button>Submit</button>
        </form>
        </div>

    )
}

export default QuestionForm