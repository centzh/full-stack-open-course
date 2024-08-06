import { useState } from "react"

const handleInputChange = (event, setInputFunction) => {
    const current_input = event.target.value
    console.log(current_input)
    setInputFunction(current_input)
}

const Display = () => {

    const [accomplishInput, setAccomplishInput] = useState("")
    const [hoursInput, setHoursInput] = useState("")
      
    return (
        <div>
            <h1>Daily tracker</h1>
        
            <form>
                <p>What did you accomplish? </p> 
                <input 
                    value={accomplishInput}
                    onChange={(event) => handleInputChange(event, setAccomplishInput)}
                />
                <p>How many hours did you work?</p>
                <input
                    value={hoursInput}
                    onChange={(event) => handleInputChange(event, setHoursInput)}
                />
            </form>
        </div>
    )
}

export default Display 