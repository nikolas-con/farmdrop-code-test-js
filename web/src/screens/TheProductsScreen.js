import React from 'react'
import TheHeader from '../components/header/TheHeader'
import TheProductContainer from '../components/productContainer/TheProductContainer'
import { Provider } from 'react-redux'
import store from '../store/store'

const TheProductScreen = () => {
  return (
    <Provider store={store}>
      <TheHeader/>
      <TheProductContainer/>
    </Provider>
   );
}
 
export default TheProductScreen;