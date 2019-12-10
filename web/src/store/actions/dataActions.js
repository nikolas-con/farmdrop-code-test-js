import { ADD_ITEM_IN_BASKET, FETCH_POST, PLUS_QUANTITY, MINUS_QUANTITY, GET_USER_INFO, LOGOUT } from './types'
import { query } from './query.js'
import { apolloClient } from '../../utility/graphgl/graphgl'
import { getUserData } from '../../utility/api/api';
export const fetchPost = () =>{
  return async (dispatch) => {
    let result = await apolloClient.query({ query: query })
    let products = result.data.productSearch.nodes
    dispatch({ type: FETCH_POST, products: products })
  }
}

export const addNewItemInOrder = (item) => {
  return (dispatch) => {
    dispatch({ type: ADD_ITEM_IN_BASKET, basket: item })
  }
}

export const plusQuantity = (indexBasket) => {
  return (dispatch) => {
    dispatch({ type: PLUS_QUANTITY, indexBasket: indexBasket })
  }
}
export const minusQuantity = (indexBasket) => {
  return (dispatch) => {
    dispatch({ type: MINUS_QUANTITY, indexBasket: indexBasket })
  }
}
export const getUserInfo = () => {
  return async (dispatch) => {
    let result = await getUserData()
    dispatch({ type: GET_USER_INFO, user: result.user })
  }
}
export const logout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch({ type: LOGOUT})
  }
}