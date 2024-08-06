import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'fitler',
  initialState: '',
  reducers: {
    setFilter: (_state, action) => {
      return action.payload
    },
  },
})

export const {
  reducer: filterReducer,
  actions: { setFilter },
} = filterSlice
