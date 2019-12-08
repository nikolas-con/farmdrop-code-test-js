import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginModal from '../loginModal/loginModal'
import { connect } from 'react-redux'
import './authContent.scss'
import { logout } from '../../../store/actions/dataActions';
const AuthContent = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const logout = () => {
    props.logout()
    localStorage.clear()
  }
  if (props.isAuthenticated) {
    return (
      <span onClick={logout} className="logout-button">Log out</span>
    )
  } else {
    return (
      <div>
        <Link to="/register" className="register-button">Register</Link>
        <span className="login-button" onClick={()=> setShowLoginModal(true)}>Login</span>
        {showLoginModal ? <LoginModal setShowLoginModal={setShowLoginModal}/>: null}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})
export default connect(mapStateToProps, mapDispatchToProps)(AuthContent);