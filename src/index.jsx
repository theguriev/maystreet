import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { setupAsyncReducers } from '@redux-things/core'
import createSagaMiddleware from 'redux-saga'

import { saga, reducers } from 'features'
import './index.css'
import App from './App'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = () => {
  if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
  }
  return compose
}

const store = setupAsyncReducers(
  createStore(
    v => v,
    composeEnhancers()(
      applyMiddleware(sagaMiddleware)
    )
  ),
  reducers
)

sagaMiddleware.run(saga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
