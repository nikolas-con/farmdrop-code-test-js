import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TheProductsScreen from '../screens/TheProductsScreen'
import TheRegisterScreen from '../screens/TheRegisterScreen'

const Routing = () => {
  return (
    <Router>
      <Route path="/" exact component={TheProductsScreen}/>
      <Route path="/register" exact component={TheRegisterScreen}/>
    </Router>
   );
}
 
export default Routing;