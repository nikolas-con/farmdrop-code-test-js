import React, { useState } from 'react'
import './registerFrom.scss'
import axios from 'axios'

const RegisterForm = () => {
  const userInfo = {
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    image_urls:[]
  }
  const [ user, setuser ] = useState({...userInfo})
  const onChangeInput = e => {
    setuser({ ...user, [e.target.name]: e.target.value })
  }

  const onClick = async (e) => {
    e.preventDefault();
    let post = {
      method: 'put',
      url: '/users/create',
      data: user
    }
    let result = await axios(post)
    localStorage.setItem("token", result.data.jwt)
  }
  return (
    <div className="register-form">
      <form onSubmit={onClick}>
        <p><input type="text" onChange={onChangeInput} name="first_name" placeholder="First name"/></p>
        <p><input type="text" onChange={onChangeInput} name="last_name" placeholder="Last name"/></p>
        <p><input type="email" onChange={onChangeInput} name="email" placeholder="Email"/></p>
        <p><input type="password" onChange={onChangeInput} name="password" placeholder="Password"/></p>
      </form>
    </div>
   );
}
 
export default RegisterForm;