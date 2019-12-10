import React, { useState, useMemo, useRef } from 'react';
import { updateUserProfile,  deleteUserProfile } from '../../utility/api/api';
const UserProfile = (props) => {
  const inref= useRef()
  const [user, setUser] = useState({})
  useMemo(()=> {
    setUser(props.user)
  },[props.user])
  
  const onChangeInput = e => {
    console.log(e)
    console.log(inref.current.name)
    setUser({ ...user, [e.target.name]: e.target.value })

  }
  const onHandleUpdateProfile = async (e) => {
    e.preventDefault();
    console.log(inref.current.name)
    await updateUserProfile(user)
  }
  const deleteProfile = async ()=> {
    await deleteUserProfile()
  }
  return (
    <div className="register-form">
      <form onSubmit={onHandleUpdateProfile}>
        <h2>user</h2>
        <p><span>First Name: </span><input type="text" ref={inref} onChange={onChangeInput} value={user.first_name} name="first_name"/></p>
        <p><span>Last Name: </span><input type="text" onChange={onChangeInput} value={user.last_name} name="last_name" placeholder="Last name"/></p>
        <p><span>Email: </span><input type="email" onChange={onChangeInput} value={user.email} name="email" placeholder="Email"/></p>
        <button>Update</button>
      </form>
      <button onClick={deleteProfile}>Delete</button>
    </div>
  );
}

export default UserProfile;