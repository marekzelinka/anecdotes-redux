import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/anecdotes',
})

export async function getAllAnecdotes() {
  const response = await instance.get('/')
  return response.data
}
