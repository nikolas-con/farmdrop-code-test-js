import React from 'react';
import Routing from '../src/router/router'
import { Provider } from 'react-redux'
import store from './store/store'

const App = (props) => {
  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  )
}

export default App;
