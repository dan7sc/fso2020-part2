import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    const {good, neutral, bad} = props
    const all = good + neutral + bad
    const average = ((1 * good) + (0 * neutral) + (-1 * bad)) / all
    const positive = 100 * (good / all) + ' %'

    if (good || neutral || bad) {
        return (
            <table>
              <tbody>
                <Statistic text='good' value={good} />
                <Statistic text='neutral' value={neutral} />
                <Statistic text='bad' value={bad} />
                <Statistic text='all' value={all} />
                <Statistic text='average' value={average} />
                <Statistic text='positive' value={positive} />
              </tbody>
            </table>
        )
    }
    return <div>No feedback given</div>
}

const Statistic = (props) => {
    const {text, value} = props
    return (
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
    )
}

const Button = (props) => {
    const {text, handleClick} = props

    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)
    const handleBadClick = () => setBad(bad + 1)

    return (
        <div>
          <h1>give feedback</h1>
          <div>
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text='neutral' />
            <Button handleClick={handleBadClick} text='bad' />
          </div>
          <h1>statistics</h1>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
