import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
const ProtectedRouteRegister =({ component: Component, user, ...rest}) => {
  return (
    <Route {...rest} render={(props) => {
      if (user.jwt === null){
        return <Component {...props} />
      } else {
        return <Redirect to="/"/>
      }
    }}/>
  );
}
const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(ProtectedRouteRegister)