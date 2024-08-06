import { useState } from "react"

const Display = () => {

    const [input, setInput] = useState("")

    const handleInputChange = (event) => {
        const current_input = event.target.value
        console.log(current_input)
        setInput(current_input)
    }

    return (
        <div>
            <h1>Daily tracker</h1>
            <form>
                <p>What did you accomplish </p> 
                <input 
                    value={input}
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}

export default Display 