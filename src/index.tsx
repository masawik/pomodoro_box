import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store/rootReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

const rootElement = document.getElementById('root')
const store = createStore(rootReducer, devToolsEnhancer({}))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, rootElement)