import React, { useState, useEffect } from 'react';
import './userProfile.scss'
import { updateUser } from '../../store/actions/dataActions';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
const UserProfile = (props) => {
  const [user, setUser] = useState(props.user)
  const history = useHistory()

  useEffect(()=> {
    setUser(props.user)
  },[props.user])

  const onChangeInput = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onHandleUpdateProfile = async () => {
    await props.updateUser(user)
    history.push('/')
  }
  return (
    <div className="user-profile-form">
      <div className="user-profile-header">
        <span>User Profile</span>
      </div>
      <p><span>First Name: </span><input type="text" onChange={onChangeInput} value={user.first_name} name="first_name"/></p>
      <p><span>Last Name: </span><input type="text" onChange={onChangeInput} value={user.last_name} name="last_name" placeholder="Last name"/></p>
      <p><span>Email: </span><input type="email" onChange={onChangeInput} value={user.email} name="email" placeholder="Email"/></p>
      <button onClick={onHandleUpdateProfile}>Update</button>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
})
const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);