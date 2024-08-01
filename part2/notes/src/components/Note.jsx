const Note = ({note, toggleImportance}) => {
    const label = note.important
        ? 'make not important'
        : 'make important'
    return (
      <li>
        {note.content}
        <button onClick={toggleImportance}>{label}</button>
      </li>
    )
}

const Paper = () => {
    return(
        <div>
            
        </div>
    )
}

export default Note