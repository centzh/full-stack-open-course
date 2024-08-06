import { useState } from "react"
import Input from './Input'

const sum = (arr) => {
    const initialValue = 0
    const total = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    )
    return total
}

const Statistics = ({totalHoursWorked, averageHoursWorked, mostHoursWorked}) => {
    
    return (
        <div>
            <h2>Statistics</h2>
            <div>{`Total hours worked is ${totalHoursWorked}`}</div>
            <div>{`Average hours worked is ${averageHoursWorked}`}</div> 
            <div>{`Most hours worked is ${mostHoursWorked}`}</div>
        </div>
    )
}
 
const Display = () => {
    
    const [accomplishInput, setAccomplishInput] = useState("")
    const [hoursInput, setHoursInput] = useState("")
    const [records, setRecords] = useState([])
      
    // event handler for changes in input elements
    const handleInputChange = (event, setInputFunction) => {
        const current_input = event.target.value
        // console.log(current_input)
        setInputFunction(current_input)
    }

    // event handler for form submissions
    const handleFormSubmit = (event) => {
        event.preventDefault()
        
        // Check if hours worked is not a number
        if(isNaN(hoursInput)){
            alert("Number of hours is not a number")
            setHoursInput('')
            return
        }

        if(hoursInput < 0 || hoursInput > 24 ){
            alert("Number of hours is outside the 24-hour range")
            setHoursInput('')
            return
        }

        // We can just define an object here, there is no template for an object
        const new_record = {
            accomplished: accomplishInput, 
            hoursWorked: Number(hoursInput),
            id: records.length + 1 // define id as record number so we can use as key, 
        }
    
        setRecords(records.concat(new_record))
        console.log(records)
        
        // Clear inputs
        setAccomplishInput('')
        setHoursInput('')
    }

    const hoursWorked = records.map(record=>record.hoursWorked)
    const totalHoursWorked = sum(hoursWorked)
    const averageHoursWorked = totalHoursWorked / records.length
    const mostHoursWorked = Math.max(...hoursWorked)
 
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
                        {records.map(record=>
                        <tr key={record.id}>
                            <td>{record.id}</td> 
                            <td>{record.accomplished}</td> 
                            <td>{record.hoursWorked}</td> 
                        </tr>
                        )}
                    </tbody>
                </table>
            </div> 
            <Statistics totalHoursWorked={totalHoursWorked} averageHoursWorked={averageHoursWorked} mostHoursWorked={mostHoursWorked}/>
        </div>
    )
}

export default Display 