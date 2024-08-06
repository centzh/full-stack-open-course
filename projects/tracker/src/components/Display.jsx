import { useState } from "react"
import Input from './Input'

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
            id: dailyRecords.length + 1 // define id as record number so we can use as key, 
        }
    
        setDailyRecords(dailyRecords.concat(new_record))
        console.log(dailyRecords)
    }
 

    return (
        <div>
            <h1>Daily tracker</h1>
        
            <form onSubmit={handleFormSubmit}>
                <p>What did you accomplish? </p> 
                <Input input={accomplishInput} setInput={setAccomplishInput} handler={handleInputChange}/>

                <p>How many hours did you work?</p>
                <Input input={hoursInput} setInput={setHoursInput} handler={handleInputChange}/>
                
                <div>
                    <button type ="submit">save</button>
                </div>
            </form>
            <p></p>
            
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Day</th>
                            <th>Accomplished</th>
                            <th>Hours worked</th>
                        </tr>
                        {dailyRecords.map(record=>
                        <tr key={record.id}>
                            <td>{record.id}</td> 
                            <td>{record.accomplished}</td> 
                            <td>{record.hoursWorked}</td> 
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Display 