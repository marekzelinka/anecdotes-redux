import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer.js'
import { createAnecdote } from '../services/anecdotes.js'

export function AnecdoteForm() {
  const dispatch = useDispatch()

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)

        const content = formData.get('content')?.toString()
        const anecdote = await createAnecdote(content)
        dispatch(addAnecdote(anecdote))

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
  )
}
