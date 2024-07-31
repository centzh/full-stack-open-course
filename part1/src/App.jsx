// FULL STACK OPEN COURSE - PART 1
// 30-07-2024
// By Vincent Zhang

import { useState } from 'react'

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
const Hello1 = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

// 2. COMPONENT STATE, EVENT HANDLERS

const Hello = ({name, age}) => {

  // Component helper function
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Timer = () => {

  // This line adds state to the component
  // We use destructuring here to pick out a counter for the current state (initialised at 0)
  // and a function to modifify the state
  const [ counter, setCounter ] = useState(0)
  // After 1 second from when setTimeout is called, setCounter is run
  // setCounter modifies the state of the component, so the component is re-rendered
  
  setTimeout(
    () => setCounter(counter + 1), 
    100
  )
  // console.log('rendering...', counter)
  return (
    <div>{counter}</div>
  )
}

const Display = ({counter}) => <div>{counter}</div>


const Button = ({ onClick, name }) => {
  return (
    <button onClick={onClick}>
      {name}
    </button>
  )
}

const ButtonClick = () => {

  // Note: Since state is defined in the parent component
  // and the Button onClick functions are also defined in the parent
  // we don't need to pass the state as a separate parameter to the Buttons
  // but we do need to pass the state as a separate parameter to the Display 
  // since the display and its function is displayed outside the parent

  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }
  
  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} name={'plus'}/>
      <Button onClick={decreaseByOne} name={'minus'}/>
      <Button onClick={setToZero} name={'zero'}/>
    </div>
  )
}



  
// Keep this relatively light, you can run various components here
const App = () => {
  return (
    
    // <Greetings />
    // <Timer/>
    <ButtonClick/>
  )
}

export default App