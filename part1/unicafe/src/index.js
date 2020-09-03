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
  bad: 0,
  all: 0,
  score: 0
})

  

  const handleGood = () => {
    console.log("Good review!")
    const newReview ={
      ...feedbackCounter,
      good: feedbackCounter.good + 1,
      all: feedbackCounter.all +1,
      score: feedbackCounter.score +1
      
    }
    setReview(newReview)
  }

  const handleNeutral = () => {
    console.log("Neutral review")
    const newReview ={
      ...feedbackCounter,
      neutral: feedbackCounter.neutral + 1,
      all: feedbackCounter.all +1
    }
    setReview(newReview)
  }

  const handleBad = () => {
    console.log("Bad review!")
    const newReview ={
      ...feedbackCounter,
      bad: feedbackCounter.bad + 1,
      all: feedbackCounter.all +1,
      score: feedbackCounter.score -1
    }
    setReview(newReview)
  }
console.log("Score: ", feedbackCounter.score)
console.log("Count: ", feedbackCounter.all)
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
      bad {feedbackCounter.bad}<br/>
      all {feedbackCounter.all}<br/>
      average {feedbackCounter.score / feedbackCounter.all}<br/>
      positive {feedbackCounter.good / feedbackCounter.all * 100} %<br/>      
      </p>
           
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)