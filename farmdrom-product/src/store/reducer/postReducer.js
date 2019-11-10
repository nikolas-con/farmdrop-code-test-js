import { ADD_ITEM_IN_BASKET, FETCH_POST, PLUS_QUANTITY, MINUS_QUANTITY  } from '../actions/types'

const initialState = {
  products: [],
  basket: []
}

export function postReducer (state = initialState, actions) {
  switch (actions.type) {
    case FETCH_POST:
      console.log('reducer post')
      return {
        ...state,
        products: actions.products
      }
    case ADD_ITEM_IN_BASKET:
      console.log('add')
      return {
        ...state,
        basket: state.basket.concat(actions.basket)
      }
    case PLUS_QUANTITY:
      const newStatePlus = [...state.basket]
      newStatePlus[actions.indexBasket].quantity ++
      console.log('plus', actions.indexBasket)
      return {
        ...state,
        basket: newStatePlus
      }
    case MINUS_QUANTITY:
        let newStateMinus = [...state.basket]
        if (newStateMinus[actions.indexBasket].quantity === 1) {
          console.log('minus',actions.indexBasket)
          console.log(newStateMinus)
          newStateMinus.splice(actions.indexBasket)
          console.log(newStateMinus)
          return  {
            ...state,
            basket: newStateMinus
          }
        }
        if (newStateMinus[actions.indexBasket].quantity > 0) {
          newStateMinus[actions.indexBasket].quantity --
          return {
            ...state,
            basket: newStateMinus
          }
        }
    default: 
      return state
  }
}