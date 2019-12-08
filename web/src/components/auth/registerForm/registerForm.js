import React, { useState } from 'react'
import './registerFrom.scss'
import { useHistory } from 'react-router-dom'
import { getUserInfo } from '../../../store/actions/dataActions'
import { connect } from 'react-redux'
import { register, getUserData } from '../../../utility/api/api'

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
      register(user)
      let newUser = await getUserData()
      props.getUserInfo(newUser)
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
  getUserInfo: (user) => dispatch(getUserInfo(user))
})
export default connect(null,mapDispatchToProps)(RegisterForm);
