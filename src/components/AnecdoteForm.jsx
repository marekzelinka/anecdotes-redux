import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducer'

export function AnecdoteForm() {
  const dispatch = useDispatch()

  return (
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
  )
}
