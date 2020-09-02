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
  {props.name} {props.exercises}
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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content name={parts[0].name} exercises={parts[0].exercises}/>
      <Content name={parts[1].name} exercises={parts[1].exercises}/>
      <Content name={parts[2].name} exercises={parts[2].exercises}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// Fin!