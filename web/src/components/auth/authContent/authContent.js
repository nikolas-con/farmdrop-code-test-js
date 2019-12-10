import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginModal from '../loginModal/loginModal'
import { connect } from 'react-redux'
import { logout } from '../../../store/actions/dataActions';
import './authContent.scss'

const AuthContent = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  if (props.isAuthenticated) {
    return (
      <div>
        <Link to="/user-profile" className="login-button">User Profile</Link>
        <span onClick={()=> props.logout()} className="logout-button">Log out</span>
      </div>
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