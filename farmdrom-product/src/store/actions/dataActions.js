import { ADD_ITEM_IN_BASKET, FETCH_POST, PLUS_QUANTITY, MINUS_QUANTITY } from './types'
// import Products from '../../support/data/products'
// import Products from '../../support/data/products'


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
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};
export function fetchPost () {
  return function (dispatch) {
    fetch("https://staging-graphql-gateway.farmdrop.com/graphql", opts)
      .then(res => res.json())
      .then(post => 
        dispatch({
          type: FETCH_POST,
          products: post.data.productSearch.nodes
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