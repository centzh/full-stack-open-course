const Course = ({course}) => {
    const exercises = course.parts.map(part=>part.exercises)
    const initialValue = 0
    console.log(exercises)
    const total = exercises.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    )
    
    return (
      <div>
        <h1>{course.name}</h1>
        {course.parts.map(part=><p key={part.id}>{part.name} {part.exercises}</p>)}
        <strong>
          total of {total} exercises
        </strong>
      </div>
    )
}

export default Course