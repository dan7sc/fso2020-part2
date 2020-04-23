import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    const {course} = props

    return <h1>{course}</h1>
}

const Part = (props) => {
    const {name, exercises} = props

    return (
        <p>
          {name} {exercises}
        </p>
    )
}

const Content = (props) => {
    const {parts} = props

    return (
        <div>
          <Part name={parts[0].name} exercises={parts[0].exercises} />
          <Part name={parts[1].name} exercises={parts[1].exercises} />
          <Part name={parts[2].name} exercises={parts[2].exercises} />
        </div>
    )
}

// const Total = (props) => {
//     const {parts} = props

//     return <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
// }

const Course = (props) => {
    const {course} = props

    return (
        <div>
          <Header course={course.name} />
          <Content parts={course.parts} />
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name:'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name:'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name:'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return (
        <div>
          <Course course={course} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
