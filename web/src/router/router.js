import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TheProductsScrees from '../screens/TheProductsScreen'

const Routing = () => {
  return (
    <Router>
      <Route to="/" component={TheProductsScrees}/>
    </Router>
   );
}
 
export default Routing;