import React from 'react'

const RegisterForm = () => {
  return (
    <div>
      <input type="text" name="fname" placeholder="First name"/>
      <input type="text" name="lname" placeholder="Last name"/>
      <input type="email" name="email" placeholder="Email"/>
      <input type="password" name="password" placeholder="Password"/>
    </div>
   );
}
 
export default RegisterForm;