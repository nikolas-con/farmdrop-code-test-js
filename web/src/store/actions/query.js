import ApolloClient, { gql } from 'apollo-boost'

const apolloClient2 = new ApolloClient({
  uri: 'https://staging-graphql-gateway.farmdrop.com/graphql',
})

export const apolloClient = apolloClient2

export const query = gql ` {
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
