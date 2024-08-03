import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import People from './components/People'
import PersonForm from './components/PersonForm'
import noteService from './services/notes'

const App = () => {

  // state variable representing collection of people
  const [persons, setPersons] = useState([])

  // state variable representing current input name
  const [newName, setNewName] = useState('')

  // state variable representing current input number 
  const [newNumber, setNewNumber] = useState('')

  // state variable representing filter input search name
  const [newSearchName, setNewSearchName] = useState('')
 
  // Retrieve data from server 
  useEffect(() => {
    noteService
    // getAll returns promise with response.data (a person)
    // we then handle the response by setting the persons state to the response
    .getAll()
    .then(person=>setPersons(person))
  },[])

  // handler for changes in input name 
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // handler for changes in input number
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  // handler for changes in input search name
  // note: every time we type something into the filter, we re-render the page
  // and personsToShow is updated and displayed
  const handleSearchNameChange = (event) => {
    setNewSearchName(event.target.value)
  }

  const onClick = (id) => {
    // One big design question is where do you handle the click
    if(window.confirm(`Delete ${name}?`)){
      console.log(`Deleting ${name} from ID ${id}`)
      noteService.remove(id)
      setPersons(persons.filter(person=>person.id!=id))
    }
    console.log(`hello from ${id}`)
  }

  const personsToShow = persons.filter(person=>person.name.toLowerCase().includes(newSearchName.toLowerCase()))

  // handler for adding a person (form submission)
  const addPerson = (event) => {

    // prevent default action
    event.preventDefault()

    // create new name object
    const person = {
      name: newName, 
      number: newNumber,
    }

    const names = persons.map(person=>person.name)
    if(names.includes(newName)){
      alert(`${newName} is already added to phonebook`) // not '' but ``
      setNewName('')
      setNewNumber('')
    }else{
      noteService
        .create(person)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearchName={newSearchName} handleSearchNameChange={handleSearchNameChange}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson}/>
      <h2>Numbers</h2>
      <People personsToShow={personsToShow} onClick={onClick}/>
    </div>
  )
}

export default App