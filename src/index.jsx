import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {
    const {handleClick, text} = props

    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const App = (props) => {
    const initialVotes = Array.apply(null, new Array(5)).map(Number.prototype.valueOf, 0)
    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(initialVotes)
    const {anecdotes} = props
    const maxNumberOfVotes = Math.max(...vote)
    const mostVotedAnecdote = anecdotes[vote.indexOf(maxNumberOfVotes)]

    const handleNextClick = () => {
        const newSelected = Math.floor(Math.random() * 5)
        setSelected(newSelected)
    }

    const handleVoteClick = () => {
        const currentVote = [...vote]
        currentVote[selected] += 1
        setVote(currentVote)
    }

    return (
        <div>
          <div>
            <h1>Anecdote of the day</h1>
            <div>{anecdotes[selected]}</div>
            <div>has {vote[selected]} votes</div>
            <Button handleClick={handleVoteClick} text='vote' />
            <Button handleClick={handleNextClick} text='next anecdote' />
          </div>
          <div>
            <h1>Anecdote with most votes</h1>
            <div>
              <div>{mostVotedAnecdote}</div>
              <div>has {maxNumberOfVotes} votes</div>
            </div>
          </div>
        </div>
    )
}

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
