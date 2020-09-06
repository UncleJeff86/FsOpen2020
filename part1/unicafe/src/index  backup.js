import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {

 return (
    <>
       {props.msg}{props.rev}{props.unit}<br/>
    </>
 )
}


const App = () => {
 
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
  
  const History = () => {
    if (feedbackCounter.all === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    return (
      <div>
        <p>
          <Statistics msg="good " rev={feedbackCounter.good }/> 
          <Statistics msg="neutral " rev={feedbackCounter.neutral}/> 
          <Statistics msg="bad " rev={feedbackCounter.bad}/> 
          <Statistics msg="all " rev={feedbackCounter.all}/>   
          <Statistics msg="average " rev={feedbackCounter.score / feedbackCounter.all}/>    
          <Statistics msg="positive " rev={feedbackCounter.good / feedbackCounter.all * 100} unit=" %"/>  
        </p>
      </div>
    )
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
      <History />
      
           
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
// Fin!