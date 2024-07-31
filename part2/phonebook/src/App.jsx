import { useState } from 'react'
import Filter from './components/Filter'
import People from './components/People'
import PersonForm from './components/PersonForm'

const App = () => {

  // state variable representing collection of people
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  // state variable representing current input name
  const [newName, setNewName] = useState('')

  // state variable representing current input number 
  const [newNumber, setNewNumber] = useState('')

  // state variable representing filter input search name
  const [newSearchName, setNewSearchName] = useState('')

  // handler for changes in input name 
  const handleNameChange = (event) => {
    setNewName(event.target.value)
    // console.log(newName)
  }

  // handler for changes in input number
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    // console.log(newNumber)
  }

  // handler for changes in input search name
  // note: every time we type something into the filter, we re-render the page
  // and personsToShow is updated and displayed
  const handleSearchNameChange = (event) => {
    setNewSearchName(event.target.value)
    // console.log(newSearchName)
  }

  const personsToShow = persons.filter(person=>person.name.toLowerCase().includes(newSearchName.toLowerCase()))
  // console.log(personsToShow)

  // handler for adding a person (form submission)
  const addPerson = (event) => {

    // prevent default action
    event.preventDefault()

    // create new name object
    const person = {
      name: newName, 
      number: newNumber
    }

    const names = persons.map(person=>person.name)
    if(names.includes(newName)){
      alert(`${newName} is already added to phonebook`) // not '' but ``
      setNewName('')
      setNewNumber('')
    }else{
       // add new object to state variable representing collection of persons
      setPersons(persons.concat(person))

      // Clear once you have submitted - forces input to be cleared too
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearchName={newSearchName} handleSearchNameChange={handleSearchNameChange}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
       
      <h2>Numbers</h2>
      <People personsToShow={personsToShow}/>
    </div>
  )
}

export default App