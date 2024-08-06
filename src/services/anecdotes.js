import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/anecdotes',
})

export async function getAllAnecdotes() {
  const response = await instance.get('/')
  return response.data
}

export async function createAnecdote(content) {
  const anecdoteObject = { content, votes: 0 }
  const response = await instance.post('/', anecdoteObject)
  return response.data
}
