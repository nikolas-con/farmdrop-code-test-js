import { ADD_ITEM_IN_BASKET, FETCH_POST, PLUS_QUANTITY, MINUS_QUANTITY } from '../actions/types'

const initialState = {
  products: [],
  basket: []
}

export const postReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_POST:
      return {
        ...state,
        products: actions.products
      }
    case ADD_ITEM_IN_BASKET:
      return { ...state, basket: state.basket.concat(actions.basket) }
    case PLUS_QUANTITY: {
      const newStatePlus = [...state.basket]
      newStatePlus[actions.indexBasket].quantity ++
      return { ...state, basket: newStatePlus }
    }
    case MINUS_QUANTITY: {
      let newStateMinus = [...state.basket]
      if (newStateMinus[actions.indexBasket].quantity === 1) {
        newStateMinus.splice(actions.indexBasket)
        return { ...state, basket: newStateMinus }
      }
      if (newStateMinus[actions.indexBasket].quantity > 0) {
        newStateMinus[actions.indexBasket].quantity --
        return { ...state, basket: newStateMinus }
      }
      break;
    }
    default:
      return state
  }
}