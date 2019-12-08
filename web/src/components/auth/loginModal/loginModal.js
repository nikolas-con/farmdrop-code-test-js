import React, { useState } from 'react';
import './loginModal.scss'
import { login, getUserData } from '../../../utility/api/api'
import { connect } from 'react-redux'
import { getUserInfo } from '../../../store/actions/dataActions'
const LoginModal = (props) => {
  const [ loginInfo , setLoginInfo ] = useState({email: null, password: null})
  const onChangeInput = e => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
  }
  const onHandleLogin = async e => {
    e.preventDefault();
    try{
      await login(loginInfo)
      let newUser = await getUserData()
      console.log(newUser)
      props.getUserInfo(newUser)
    }catch (error) {
      alert('Authentication problem')
      console.log(error)
    }
    props.setShowLoginModal(false)
  }
  return (
  <div className="modal">
    <span className="exit-button" onClick={()=> props.setShowLoginModal(false)}>x</span>
    <form>
      <p><input onChange={onChangeInput} type="email" name="email" placeholder="Email"/></p>
      <p><input onChange={onChangeInput} type="password" name="password" placeholder="Password"/></p>
      <span onClick={onHandleLogin} className="login-button-modal">Login</span>
    </form>
  </div>
  );
}
const mapDispatchToProps = dispatch => ({
  getUserInfo: (newUser) => dispatch(getUserInfo(newUser))
  
})
export default connect(null, mapDispatchToProps)(LoginModal);