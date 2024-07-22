import { useState } from 'react'

let anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.',
]

function getRandomAnecdoteIndex() {
  return Math.floor(Math.random() * anecdotes.length)
}

function getMostVotesAnecdote(points) {
  let mostPoints = Math.max(...points)
  let anecdoteIndex = points.indexOf(mostPoints)

  return { anecdote: anecdotes[anecdoteIndex], points: mostPoints }
}

function App() {
  let [selected, setSelected] = useState(0)
  let [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  let topAnecdote = getMostVotesAnecdote(points)

  let handleNext = () => setSelected(getRandomAnecdoteIndex())

  let handleVote = () => {
    let copy = points.slice()
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <>
      <section>
        <h2>Anecdote of the day</h2>
        <div>{anecdotes[selected]}</div>
        <div>has {points[selected]} votes</div>
        <button type="button" onClick={handleVote}>
          vote
        </button>
        <button type="button" onClick={handleNext}>
          next anecdote
        </button>
      </section>
      <section>
        <h2>Anecdote with most votes</h2>
        <div>{topAnecdote.anecdote}</div>
        <div>has {topAnecdote.points} votes</div>
      </section>
    </>
  )
}

export default App
