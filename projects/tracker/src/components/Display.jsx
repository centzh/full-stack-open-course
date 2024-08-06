import { useState } from "react"

const Display = () => {
    
    const [accomplishInput, setAccomplishInput] = useState("")
    const [hoursInput, setHoursInput] = useState("")
    const [dailyRecords, setDailyRecords] = useState([])
      
    // event handler for changes in input elements
    const handleInputChange = (event, setInputFunction) => {
        const current_input = event.target.value
        // console.log(current_input)
        setInputFunction(current_input)
    }

    // event handler for form submissions
    const handleFormSubmit = (event) => {
        event.preventDefault()

        // We can just define an object here, there is no template for an object
        const new_record = {
            accomplished: accomplishInput, 
            hoursWorked: hoursInput,
            id: dailyRecords.length // define id as record number so we can use as key, 
        }
    
        setDailyRecords(dailyRecords.concat(new_record))
        console.log(dailyRecords)
    }
 

    return (
        <div>
            <h1>Daily tracker</h1>
        
            <form onSubmit={handleFormSubmit}>
                <p>What did you accomplish? </p> 
                <input 
                    value={accomplishInput}
                    onChange={(event) => handleInputChange(event, setAccomplishInput)}
                />
            </form>

            <form onSubmit={handleFormSubmit}>
                <p>How many hours did you work?</p>
                <input
                    value={hoursInput}
                    onChange={(event) => handleInputChange(event, setHoursInput)}
                />
                <button type="submit">save</button>
            </form>
            <p></p>
            
            <div>
                {dailyRecords.map(record=>
                    <div key={record.id}>
                        {record.accomplished} {record.hoursWorked}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Display 