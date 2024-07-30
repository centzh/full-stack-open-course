// FULL STACK OPEN COURSE - PART 1
// 30-07-2024
// By Vincent Zhang

// 1. INTRODUCTION TO COMPONENTS, PARAMETERS AND PASSING DATA

// Greets Maya and Peter
const Greetings = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={"Maya"} age={36}/>
      <Hello name={"Peter"} age={10}/>
    </div>
  )
}

// Greets someone with their name and age 
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

// Keep this relatively light, you can run various components here
const App = () => {
  return (
    <Greetings />
  )
}

export default App