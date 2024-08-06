/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducer'

export function AnecdoteList() {
  const anecdotes = useSelector((state) => {
    const copy = state.slice()
    return copy.sort((a, b) => b.votes - a.votes)
  })

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} votes <VoteButton anecdote={anecdote} />
          </div>
        </div>
      ))}
    </div>
  )
}

function VoteButton({ anecdote }) {
  const dispatch = useDispatch()

  return (
    <button type="button" onClick={() => dispatch(addVote(anecdote.id))}>
      vote
    </button>
  )
}
