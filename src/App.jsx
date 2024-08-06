import { useDispatch, useSelector } from 'react-redux'
import { addVote, createAnecdote } from './reducer.js'

function App() {
  const dispatch = useDispatch()

  const anecdotes = useSelector((state) => {
    const copy = state.slice()
    return copy.sort((a, b) => b.votes - a.votes)
  })

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

          const content = formData.get('content')?.toString()
          dispatch(createAnecdote(content))

          form.reset()
          form.elements.content?.focus()
        }}
      >
        <input
          type="text"
          name="content"
          id="content"
          aria-label="New anecodte"
        />
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default App
