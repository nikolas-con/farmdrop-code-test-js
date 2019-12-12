import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TheHeader from '../components/header/TheHeader'
import TheProductContainer from '../components/productContainer/TheProductContainer'
import RegisterForm from '../components/auth/registerForm/registerForm'
import UserProfile from  '../components/user/userProfile'
import ProtectedRoute from '../components/protecteRoute/protectedRoute'
const Routing = () => {
  return (
    <Router>
      <TheHeader/>
      <Switch>
        <Route path="/" exact component={TheProductContainer}/>
        <Route path="/register" exact component={RegisterForm}/>
        <ProtectedRoute exact path="/user-profile" component={UserProfile}/>
      </Switch>
    </Router>
   );
}
 
export default Routing;