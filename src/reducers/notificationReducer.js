import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'message here',
  reducers: {
    setNotification: (_state, action) => {
      return action.payload
    },
    removeNotification: () => null,
  },
})

export const {
  reducer: notificationReducer,
  actions: { setNotification, removeNotification },
} = notificationSlice
