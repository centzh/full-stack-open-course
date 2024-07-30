// Course Information App
// Purpose - Refactoring the code into separate components
// Approach - We create three separate components - Header, Content and Total

const Header = () => {
  return (
    <div>

    </div>
  )
}

const Content = () => {
  return (
    <div>

    </div>
  )
}

const Total = () => {
  return (
    <div>
      
    </div>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App