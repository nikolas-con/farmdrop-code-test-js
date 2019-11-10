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
export function fetchPost () {
  return function (dispatch) {
    console.log('1')
    axios(postParam)
      .then(res => dispatch({
        type: FETCH_POST,
        products: res.data.data.productSearch.nodes
      }))
      .catch(console.error);
  }
}

export function addNewItemInOrder (item) {
  return function (dispatch) {
    dispatch({
      type: ADD_ITEM_IN_BASKET,
      basket: item
    })
  }
}

export function plusQuantity (indexBasket) {
  return function (dispatch) {
    dispatch({
      type: PLUS_QUANTITY,
      indexBasket: indexBasket
    })
  }
}
export function minusQuantity (indexBasket) {
  return function (dispatch) {
    dispatch({
      type: MINUS_QUANTITY,
      indexBasket: indexBasket
    })
  }
}