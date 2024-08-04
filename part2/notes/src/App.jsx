import { useState, useEffect } from 'react' 
import Note from './components/Note'
import noteService from './services/notes'

// The key must be defined for the Note components, not the li tags 
// This is because we now have an array of Notes not li tags
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(n => n.id !== id ? n : returnedNote))
      })
      .catch(error => {
        alert(
          `the note '${note.content} was already deleted from server`
        )
        // remove already deleted note from applications's state
        // none of the other notes have the id as the already deleted note (id = 1000)
        // so all the other notes remain, and the already deleted note is filtered out
        setNotes(notes.filter(n => n.id !== id))
      })
  }

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

    noteService
      .create(noteObject)
      .then(returnedNote => {
        // we add the new note object to the list of notes which is a state variable
        setNotes(notes.concat(returnedNote))

        // We set the current note to be empty, this is linked to the form's internal state value
        setNewNote('')
      })   
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
        {notesToShow.map(note=>
          <Note 
            key={note.id} 
            note={note}
            toggleImportance={()=>toggleImportanceOf(note.id)}
          />
        )}
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
