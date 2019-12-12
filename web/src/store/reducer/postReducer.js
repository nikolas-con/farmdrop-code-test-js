import { ADD_ITEM_IN_BASKET, FETCH_POST, PLUS_QUANTITY, MINUS_QUANTITY, GET_USER_INFO, LOGOUT } from '../actions/types'

const jwt = localStorage.getItem("token")
const initialState = {
  products: [],
  basket: [],
  user: {jwt},
  isAuthenticated: false
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
    case GET_USER_INFO: {
      if (actions.user !== null) {
        let userInfon = {...actions.user}
        delete userInfon.__v
        delete userInfon._id
        return {
          ...state,
          isAuthenticated: true,
          user: { ...state.user, ...userInfon }
        }
      }
      return { ...state }
      
    }
    case LOGOUT: {
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: {jwt}
      }
    }
    default:
      return state
  }
}