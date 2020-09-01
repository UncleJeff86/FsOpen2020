import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
 <>
  <h1>{props.course}</h1>
 </>  
  )
}

const Total = (props) => {
  return (
    <>
    <p>
    Number of exercises {props.total}
    </p>
    </>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
 <>
  <Part msg={part1} nro={exercises1} />
  <Part msg={part2} nro={exercises2} />
  <Part msg={part3} nro={exercises3} />
 </>  
  )
}

const Part = (props) => {
  
  return (
    <>
    <p>{props.msg} {props.nro}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
 // const part1 = 'Fundamentals of React'
  const exercises1 = 10
 // const part2 = 'Using props to pass data'
  const exercises2 = 7
 // const part3 = 'State of a component'
  const exercises3 = 14

  
  return (
    <div>
      <Header course={course}/>
      <Content/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// Fin!