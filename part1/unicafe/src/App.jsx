import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    // If I have <div> here then the buttons will end up on top of each other rather than L to R
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (1*good + 0*neutral -1*bad)/total
  const positive = (good/total)*100

  const handleGoodClick = () => {
    const updatedGood = good + 1 // This is safer
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <div>
        <h1>give feedback</h1>

        <Button onClick={handleGoodClick} text={'good'}/>
        <Button onClick={handleNeutralClick} text={'neutral'}/>
        <Button onClick={handleBadClick} text={'bad'}/>

        <h1>statistics</h1>

        {/* Use <div> here to get rid of extra line (when using <p></p>) */}
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
        <div>all {total}</div>
        <div>average {average}</div>
        <div>positive {positive}%</div>
        
    </div>
  )
}

export default App