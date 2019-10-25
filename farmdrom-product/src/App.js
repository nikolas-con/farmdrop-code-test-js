import React, { Fragment } from 'react';
import MainScreen from '../src/screens/mainScreen'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <MainScreen/>
      </Fragment>
    </Provider>
  );
}

export default App;
