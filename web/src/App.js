import React, { useEffect } from 'react';
import Routing from '../src/router/router'
import { connect } from 'react-redux';
import { getUserData } from './utility/api/api';
import { getUserInfo } from './store/actions/dataActions';
const getUserDataAsync = async(props) => {
  let user = await getUserData()
  props.getUserInfo(user)
}
const App = (props) => {
  useEffect(()=> {
    if (localStorage.key("token") !== null){
      getUserDataAsync(props)
    }
  })
  return (
    <Routing/>
  )
}
const mapDispatchToProps = dispatch => ({
  getUserInfo: (user) => dispatch(getUserInfo(user))
})
export default connect(null, mapDispatchToProps)(App);
