import React from 'react';
import TheHeader from '../src/components/header/TheHeader'
import TheProductContainer from '../src/components/productGrind/TheProductContainer'
import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <TheHeader/>
      <TheProductContainer/>
    </Provider>
  )
}
export default App;
