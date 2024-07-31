import Person from './Person'

const People = ({personsToShow}) => {
    return (
        /* key needs to go here with Person definition */
        <div>
            {personsToShow.map(person=><Person key={person.name} name={person.name} number={person.number}/>)}
        </div>
    )
}

export default People