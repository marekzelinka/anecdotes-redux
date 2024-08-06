import { AnecdoteForm } from './components/AnecdoteForm.jsx'
import { AnecdoteList } from './components/AnecdoteList.jsx'

function App() {
  return (
    <>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>Create new</h2>
      <AnecdoteForm />
    </>
  )
}

export default App
