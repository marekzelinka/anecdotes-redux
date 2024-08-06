import { useDispatch, useSelector } from 'react-redux'
import { addVote } from './reducer.js'

function App() {
  const dispatch = useDispatch()

  const anecdotes = useSelector((state) => state)

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes} votes{' '}
            <button
              type="button"
              onClick={() => dispatch(addVote(anecdote.id))}
            >
              vote
            </button>
          </div>
        </div>
      ))}
      <h2>Create new</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault()

          const form = event.target
          const formData = new FormData(form)

          const anecdote = formData.get('anecdote')?.toString()
          console.log('create', anecdote)
        }}
      >
        <input
          type="text"
          name="anecdote"
          id="anecdote"
          aria-label="New anecodte"
        />
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default App
