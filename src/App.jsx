import { useDispatch, useSelector } from 'react-redux'
import { AnecdoteForm } from './components/AnecdoteForm.jsx'
import { addVote } from './reducer.js'

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
      <AnecdoteForm />
    </>
  )
}

export default App
