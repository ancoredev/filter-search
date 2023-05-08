import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './app/store'

import { BrowserRouter, HashRouter } from 'react-router-dom'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
