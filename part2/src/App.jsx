import { useState } from 'react' 
import Note from './components/Note'

// The key must be defined for the Note components, not the li tags 
// This is because we now have an array of Notes not li tags
const App = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* The key goes here, not in the individual note  */}
        {notes.map(note=><Note key={note.id} note={note}/>)}
      </ul>
    </div>
  )
} 

export default App
