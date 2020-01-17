import axios from 'axios'

export const login = async (info) => {
  let post = {
    method: 'post',
    url: '/users/login',
    data: info
  }
  let result = await axios(post)
  return result.data
}
export const register = async (user) => {
  let postCreadUser = {
    method: 'put',
    url: '/users/create',
    data: user
  }
  let resultCreateUser = await axios(postCreadUser)
  return resultCreateUser.data
}
export const getUserData = async () => {
  const token = localStorage.getItem("token")
  if (token === null) {
    return null
  }
  let post = {
    method: 'get',
    url: '/users/profile',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }
  let result = await axios(post)
  const user = result.data
  return user
}
export const updateUserProfile = async (user) => {
  const formData = new FormData()
  const data = JSON.stringify({first_name: user.first_name,last_name: user.last_name})
  formData.append('json', data)
  let post = {
    method: 'post',
    url: '/users/update',
    data: formData,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  let result = await axios(post)
  return result.data
}
export const deleteUserProfile = async () => {
  let post = {
    method: 'delete',
    url: '/users/delete',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json'
    }
  }
  await axios(post)
}