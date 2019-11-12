import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import { postReducer } from './reducer/postReducer'
// import { ADD_ITEM_IN_BASKET, FETCH_POST, PLUS_QUANTITY, MINUS_QUANTITY  } from './actions/types'

const middlweare = [thunk]

const initialState = { products: [], basket: [] }

const postReducer = (state = initialState, actions) => {
  if (actions.type === 'FETCH_POST') {
    return { ...state, products: actions.products }
  }
  if (actions.type === 'ADD_ITEM_IN_BASKET') {
    console.log(actions.basket)
    return { ...state, basket: state.basket.concat(actions.basket) }
  }
  if (actions.type === 'PLUS_QUANTITY') {
    const newStatePlus = [...state.basket]
    newStatePlus[actions.indexBasket].quantity ++
    return { ...state, basket: newStatePlus }
  }
  if (actions.type === 'MINUS_QUANTITY') {
    let newStateMinus = [...state.basket]
    if (newStateMinus[actions.indexBasket].quantity === 1) {
      newStateMinus.splice(actions.indexBasket)
      return  {...state, basket: newStateMinus }
    }
    if (newStateMinus[actions.indexBasket].quantity > 0) {
      newStateMinus[actions.indexBasket].quantity --
      return { ...state, basket: newStateMinus }
    }
  }
  return state
}


const store = createStore(
  postReducer,
  // applyMiddleware(...middlweare)
  compose(
    applyMiddleware(...middlweare),
    window.navigator.userAgent.includes('Chrome') ?
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
  )
  )

export default store