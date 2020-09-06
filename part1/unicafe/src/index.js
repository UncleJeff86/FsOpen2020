import React, { useState } from 'react'
import ReactDOM from 'react-dom'




// ...obsolete version...
//   const OneStat = ({props}) => {
    
//   return (
//    <>
//     {props.text} {props.rate} {props.unit}<br/>
//    </>
//  )
// }
// DESTRUCTURED version below
const Button = ({handle, text}) => <><button onClick={handle}>{text}</button></>

const OneStat = ({text, rate, unit}) => <><tr><td>{text}</td><td>{rate}</td><td>{unit}</td></tr></>
   
const Statistics = (props) => {
    
 return (
    <>
    <table>
      <tbody>
       <OneStat text="good " rate={props.fbc.good}/>
       <OneStat text="neutral " rate={props.fbc.neutral}/>
       <OneStat text="bad " rate={props.fbc.bad}/>
       <OneStat text="all " rate={props.fbc.all}/>
       <OneStat text="average " rate={props.fbc.score / props.fbc.all}/>
       <OneStat text="positive" rate={props.fbc.good / props.fbc.all} unit="%"/>
      </tbody>
    </table>
      
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
       <Statistics fbc={feedbackCounter}/>
      </div>
    )
  }
  
console.log("Score: ", feedbackCounter.score)
console.log("Count: ", feedbackCounter.all)
  return (
    <div>
      <h1>give feedback</h1>
      
      <Button handle={handleGood} text="good1"/>
      <Button handle={handleNeutral} text="neutral1"/>
      <Button handle={handleBad} text="bad1"/>

      <h1>statistics</h1>
      <History />
      
           
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
// Fin!