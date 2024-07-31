import { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const numElements = anecdotes.length
  const [votes, setVotes] = useState(Array(numElements).fill(0))
  const [argmax, setArgmax] = useState(0)

  const handleVote = () => {
    // Reminder - do not mutate the state directly 
    // Make sure you are working off a deep copy, not a shallow copy 
    const votes_copy = [ ...votes ] // Ensure you make a copy not votes_copy = votes, otherwise you are mutating state
    votes_copy[selected] += 1
    setVotes(votes_copy)
    setArgmax(votes.indexOf(Math.max(...votes)))
  }
   
  const handleNextAnecdote = () => {
    // This needs to go inside the handler function, new number is generated with random click
    // new number is not generated on render
    const entry = Math.floor(Math.random()*numElements)
    setSelected(entry) // If it never freshes, then it just keeps printing this out
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
        has {votes[selected]} votes
      </div>
      <Button text={'vote'} onClick={handleVote}/>
      <Button text={'next anecdote'} onClick={handleNextAnecdote}/>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[argmax]}
    </div>
  )
}

export default App