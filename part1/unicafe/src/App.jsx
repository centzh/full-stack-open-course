import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    // If I have <div> here then the buttons will end up on top of each other rather than L to R
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    // We can return this without using div
    // You should not wrap <tr> around <div> since <div> is not a valid child of table
    // Return <tr> directly from component
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const all = good + neutral + bad
  const average = (good - bad)/all
  const positive = (good/all)*100
  if(all == 0){
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      {/* Use <div> here to get rid of extra line (when using <p></p>) */}
      <h1>statistics</h1>

      <table>
        <tbody>
        <StatisticLine text={'good'} value={good}/>
        <StatisticLine text={'neutral'} value={neutral}/>
        <StatisticLine text={'bad'} value={bad}/>
        <StatisticLine text={'all'} value={all}/>
        <StatisticLine text={'average'} value={average}/>
        <StatisticLine text={'positive'} value={positive + "%"}/>
        </tbody>

      </table>
     
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App