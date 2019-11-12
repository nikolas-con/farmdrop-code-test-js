import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { postReducer } from './reducer/postReducer'
// import { ADD_ITEM_IN_BASKET, FETCH_POST, PLUS_QUANTITY, MINUS_QUANTITY  } from './actions/types'

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