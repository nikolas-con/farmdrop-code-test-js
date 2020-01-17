import { ADD_ITEM_IN_BASKET, FETCH_POST, PLUS_QUANTITY, MINUS_QUANTITY, GET_USER_INFO, LOGOUT } from './types'
import { query } from './query.js'
import { apolloClient } from '../../utility/graphgl/graphgl'
import { getUserData, register, updateUserProfile, login } from '../../utility/api/api';
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
    let user = await getUserData()
    dispatch({ type: GET_USER_INFO, user: user })
  }
}
export const userLogin = (loginInfo) => {
  return async (dispatch) => {
    let result = await login(loginInfo)
    localStorage.setItem("token", result.jwt)
    let user = await getUserData()
    dispatch({ type: GET_USER_INFO, user: {...user, jwt: result.jwt } })
  }
}

export const userRegister = (userInfo) => {
  return async (dispatch) => {
    let result = await register(userInfo)
    localStorage.setItem("token", result.jwt)
    let user = await getUserData()
    dispatch({ type: GET_USER_INFO, user: {...user, jwt: result.jwt}})
  }
}
export const updateUser = (user) => {
  return async (dispatch) => {
    let userUpdated= await updateUserProfile(user)
    dispatch({ type: GET_USER_INFO, user: userUpdated})
  }
}
export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT})
  }
}