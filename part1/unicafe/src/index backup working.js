import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  // save clicks of each button to own state
  //const [good, setGood] = useState(0)
  //const [neutral, setNeutral] = useState(0)
  //const [bad, setBad] = useState(0)

const [feedbackCounter, setReview] = useState({
  good: 0, 
  neutral: 0, 
  bad: 0
})

  const handleGood = () => {
    const newReview ={
      ...feedbackCounter,
      good: feedbackCounter.good + 1,
      
    }
    setReview(newReview)
  }

  const handleNeutral = () => {
    const newReview ={
      ...feedbackCounter,
      neutral: feedbackCounter.neutral + 1,
    }
    setReview(newReview)
  }

  const handleBad = () => {
    const newReview ={
      ...feedbackCounter,
      bad: feedbackCounter.bad + 1
    }
    setReview(newReview)
  }

  return (
    <div>
      <h1>give feedback</h1>
      
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      
      <h1>statistics</h1>
      
      <p>
      good {feedbackCounter.good}<br/>
      neutral {feedbackCounter.neutral}<br/>
      bad {feedbackCounter.bad}
      </p>
           
      </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)