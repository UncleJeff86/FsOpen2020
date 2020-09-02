import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  console.log(props)
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

const Content = (props) => {
 
  return (
 <>
  <p>
  {props.name}{props.exercises}
  </p>
 </>  
  )
}

// Part component unused
const Part = (props) => {
  
  return (
    <>
    <p>{props.msg} {props.nro}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content name={part1.name} exercises={part1.exercises}/>
      <Content name={part2.name} exercises={part2.exercises}/>
      <Content name={part3.name} exercises={part3.exercises}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// Fin!