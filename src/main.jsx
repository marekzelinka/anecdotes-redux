import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import App from './App.jsx'
import { reducer } from './reducer.js'

const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
