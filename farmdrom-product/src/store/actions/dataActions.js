import { ADD_ITEM_IN_BASKET, FETCH_POST, PLUS_QUANTITY, MINUS_QUANTITY } from './types'
import axios from 'axios';

const query = `
{
  productSearch(query: "Lamb Roasting Joints", first: 100) {
    nodes {
      name
      producer {
        name
      }
      measurement {
        displayName
      }
      tags(type: "marketing") {
        name
      }
      pricePerUnit
      media {
        type
        url
        position
      }
      variants {
        pricePerUnit
        measurement {
          displayName
        }
        price {
          pence
        }
        saleText
        salePrice {
          pence
        }
      }
      saleText
      price {
        pence
      }
      salePrice {
        pence
      }
    }
  }
}`;
const url = "https://staging-graphql-gateway.farmdrop.com/graphql" 
const postParam = {
  method: 'post',
  url: url,
  headers: { "Content-Type": "application/json" },
  data: { query }
}
export const fetchPost = () =>{
  return async (dispatch) => {
    console.log('1')
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