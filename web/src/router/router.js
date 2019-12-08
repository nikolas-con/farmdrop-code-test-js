import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TheProductsScreen from '../screens/TheProductsScreen'
import TheRegisterScreen from '../screens/TheRegisterScreen'

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TheProductsScreen}/>
        <Route path="/register" exact component={TheRegisterScreen}/>
      </Switch>
    </Router>
   );
}
 
export default Routing;