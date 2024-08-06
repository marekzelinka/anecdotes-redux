import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AnecdoteForm } from './components/AnecdoteForm.jsx'
import { AnecdoteList } from './components/AnecdoteList.jsx'
import { Filter } from './components/Filter.jsx'
import { Notification } from './components/Notification.jsx'
import { setAnecdotes } from './reducers/anecdoteReducer.js'
import { getAllAnecdotes } from './services/anecdotes.js'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getAllAnecdotes().then((anecdotes) => dispatch(setAnecdotes(anecdotes)))
  }, [dispatch])

  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <h2>Create new</h2>
      <AnecdoteForm />
    </>
  )
}

export default App
