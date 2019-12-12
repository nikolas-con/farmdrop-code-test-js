import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
const ProtectedRoute =({ component: Component, user, ...rest}) => {
  return (
    <Route {...rest} render={(props) => {
      console.log(user)
      if (user.jwt !== null){
        return <Component {...props} />
      } else {
        return <Redirect to="/register"/>
      }
    }}/>
  );
}
const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(ProtectedRoute)