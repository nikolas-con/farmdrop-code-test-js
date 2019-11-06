import React, { Fragment } from 'react';
// import MainScreen from '../src/screens/mainScreen'
import TheHeader from '../src/components/header/TheHeader'
import TheProductGrind from '../src/components/productGrind/TheProductGrind'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <TheHeader/>
      <TheProductGrind/>
    </Provider>
  );
}
export default App;
