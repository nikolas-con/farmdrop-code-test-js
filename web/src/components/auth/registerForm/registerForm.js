import React, { useState } from 'react'
import './registerFrom.scss'
import { useHistory } from 'react-router-dom'
import { userRegister } from '../../../store/actions/dataActions'
import { connect } from 'react-redux'

const RegisterForm = (props) => {
  let history = useHistory()

  const [ user, setuser ] = useState({
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    image_urls:[]
  })
  const onChangeInput = e => {
    setuser({ ...user, [e.target.name]: e.target.value })
  }
  const onHandleRegister = async (e) => {
    e.preventDefault();
    try {
      await props.userRegister(user)
      history.push('/')
    } catch (error) {
      alert('Authentication problem')
    }
  }
  return (
    <div className="register-form">
      <form onSubmit={onHandleRegister}>
        <h2>Register to Farmdrop</h2>
        <p><input type="text" onChange={onChangeInput} name="first_name" placeholder="First name"/></p>
        <p><input type="text" onChange={onChangeInput} name="last_name" placeholder="Last name"/></p>
        <p><input type="email" onChange={onChangeInput} name="email" placeholder="Email"/></p>
        <p><input type="password" onChange={onChangeInput} name="password" placeholder="Password"/></p>
        <button>Register</button>
      </form>
    </div>
   );
}
const mapDispatchToProps = dispatch => ({
  userRegister: (user) => dispatch(userRegister(user))
})
export default connect(null,mapDispatchToProps)(RegisterForm);
