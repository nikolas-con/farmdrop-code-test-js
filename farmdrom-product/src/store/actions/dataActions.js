import { ADD_ITEM_IN_BASKET, FETCH_POST, PLUS_QUANTITY, MINUS_QUANTITY } from './types'
import { query, url } from './query'
import axios from 'axios';

const postParam = {
  method: 'post',
  url: url,
  headers: { "Content-Type": "application/json" },
  data: { query }
}
export const fetchPost = () =>{
  return async (dispatch) => {
    let result = await axios(postParam)
    let products = result.data.data.productSearch.nodes
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