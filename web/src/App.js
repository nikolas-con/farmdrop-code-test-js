import React from 'react';
import TheHeader from '../src/components/header/TheHeader'
import TheProductGrind from '../src/components/productGrind/TheProductGrind'
import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <TheHeader/>
      <TheProductGrind/>
    </Provider>
  );
}
export default App;
