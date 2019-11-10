import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { postReducer } from './reducer/postReducer'

const middlweare = [thunk]

const store = createStore(
  postReducer,
  compose(
    applyMiddleware(...middlweare),
    window.navigator.userAgent.includes('Chrome') ?
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
  )
  )

export default store