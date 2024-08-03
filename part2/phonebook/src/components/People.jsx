import Person from './Person'

const People = ({personsToShow, onClick}) => {
    return (
        /* key needs to go here with Person definition */
        <div>
            {personsToShow.map(person=>
            <Person key={person.name} 
                    name={person.name} 
                    number={person.number} 
                    id={person.id}
                    onClick={onClick}
            />)}
        </div>
    )
}

export default People