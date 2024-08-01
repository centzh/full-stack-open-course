import { useState, useEffect } from 'react' 
import axios from 'axios'
import Note from './components/Note'

// The key must be defined for the Note components, not the li tags 
// This is because we now have an array of Notes not li tags
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')
 
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const addNote = (event) => {
    // here, the event is the submission of the form
    // the target value is the form itself, we don't care about it specifically
    // we prevent the default action of the event, which is submitting the form
    // we only care about the trigger of the event, not its follow through
    event.preventDefault()

    // instead, we create a new object
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }
    
    // we add the new note object to the list of notes which is a state variable
    setNotes(notes.concat(noteObject))

    // We set the current note to be empty, this is linked to the form's internal state value
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    // The target value is the current value of the form lement
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  // The form has two events
  // - a note is submitted
  // - a note is submitted
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {/* The key goes here, not in the individual note  */}
        {notesToShow.map(note=><Note key={note.id} note={note}/>)}
      </ul>

      <form onSubmit={addNote}>
        <input 
          // Because we have forced input's state to match the newNote state
          // and because input is supposed to be able to change freely
          // we need to ensure changes in input are reflected in the newNote state
          // that's why we use a handler to handle changes to the input 
          // and flow these changes to newNote 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
     
  )
} 

export default App
