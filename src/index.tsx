import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/store'

const rootElement = document.getElementById('root')

const app = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

ReactDOM.render(app, rootElement)