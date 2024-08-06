import { createSlice } from '@reduxjs/toolkit'

const generateId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVoteToAnecdote: (state, action) => {
      return state.map((anecdote) =>
        anecdote.id === action.payload
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote,
      )
    },
    createAnecdote: (state, action) => {
      state.push({
        content: action.payload,
        id: generateId(),
        votes: 0,
      })
    },
    setAnecdotes: (_state, action) => {
      return action.payload
    },
  },
})

export const {
  reducer: anecdoteReducer,
  actions: { createAnecdote, addVoteToAnecdote, setAnecdotes },
} = anecdoteSlice
