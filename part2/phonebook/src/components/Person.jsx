import noteService from '../services/notes';

// We can pass the ID like this
// Person has ID naturally

const Person = ({name, number, id, onClick}) => {

    // One big design question is where do you handle the click
    // const onClick = () => {
    //     if(window.confirm(`Delete ${name}?`)){
    //         console.log(`Deleting ${name} from ID ${id}`)
    //     }
    //     noteService.remove(id)
    // }

    // () => onClick(id) - parameterise function call
    
    return (
        <div>
            {name} {number} {}
            <button onClick={()=>onClick(id)}>delete</button>
        </div>
    )
}

export default Person