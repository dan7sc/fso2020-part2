import React from 'react'

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
          {parts.map(part => <Part
                               key={part.id}
                               name={part.name}
                               exercises={part.exercises}
                             />
                    )
          }
        </div>
    )
}

const Total = (props) => {
    const {parts} = props
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <div>
          <b>total of {total} exercises</b>
        </div>
    )
}

const Course = (props) => {
    const {course} = props

    return (
        <div>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
    )
}

export default Course
