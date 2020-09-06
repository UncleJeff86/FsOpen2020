import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) =><button onClick={handleClick} >{text}</button>
 
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [voteCount, setVote] = useState(Array(6).fill(0))

  const randomize = () => {
    setSelected(Math.floor(Math.random() * 6))
    
  }
  const vote = (selected) => {
    const copy = [...voteCount]
    copy[selected] += 1
    setVote(copy)
    
  }
const max =  Math.max(...voteCount)
const highestIndex = voteCount.indexOf(max)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}<br/>
      has {voteCount[selected]} votes<br/>

      <Button handleClick={() => vote(selected)} text="vote"/>
      <Button handleClick={randomize} text="next anecdote"/>

      <h2>Anecdote with the most votes</h2>
      {anecdotes[highestIndex]}<br/>
      has {voteCount[highestIndex]} votes
      
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)