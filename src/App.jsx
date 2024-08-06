import { AnecdoteForm } from './components/AnecdoteForm.jsx'
import { AnecdoteList } from './components/AnecdoteList.jsx'
import { Filter } from './components/Filter.jsx'
import { Notification } from './components/Notification.jsx'

function App() {
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
