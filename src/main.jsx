import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { combineReducers, legacy_createStore as createStore } from 'redux'
import App from './App.jsx'
import { anecdoteReducer } from './reducers/anecdoteReducer.js'
import { filterReducer } from './reducers/filterReducer.js'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
})
const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
