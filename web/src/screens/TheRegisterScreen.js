import React,{ Fragment } from 'react'
import TheHeader from '../components/header/TheHeader'
import RegisterForm from '../components/auth/registerForm/registerForm'

const TheRegisterScreen = () => {
  return (
    <Fragment>
      <TheHeader/>
      <RegisterForm/>
    </Fragment>
  );
}
 
export default TheRegisterScreen;