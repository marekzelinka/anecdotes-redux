/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from 'react-redux'
import { addVoteToAnecdote } from '../reducers/anecdoteReducer.js'
import {
  removeNotification,
  setNotification,
} from '../reducers/notificationReducer.js'

export function AnecdoteList() {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const copy = anecdotes.slice()

    return copy
      .sort((a, b) => b.votes - a.votes)
      .filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase()),
      )
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

  function notify(message) {
    dispatch(setNotification(message))
    setTimeout(() => dispatch(removeNotification()), 5000)
  }

  function handleClick() {
    notify(`You voted "${anecdote.content}"`)

    dispatch(addVoteToAnecdote(anecdote.id))
  }

  return (
    <button type="button" onClick={handleClick}>
      vote
    </button>
  )
}
