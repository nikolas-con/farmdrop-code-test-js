import axios from 'axios'

export const login = async (info) => {
  let post = {
    method: 'post',
    url: '/users/login',
    data: info
  }
  let result = await axios(post)
  localStorage.setItem("token", result.data.jwt)
}
export const register = async (user) => {
  let postCreadUser = {
    method: 'put',
    url: '/users/create',
    data: user
  }
  let resultCreateUser = await axios(postCreadUser)
  localStorage.setItem("token", resultCreateUser.data.jwt)
}
export const getUserData = async () => {
  const token = localStorage.getItem("token")
  const tokenSplit = token.split('.')
  const decodeToken = atob(tokenSplit[1])
  const id = JSON.parse(decodeToken).id
  let post = {
    method: 'get',
    url: `/users/${id}`
  }
  let result = await axios(post)
  const user = result.data
  return user
}
export const updateUserProfile = async (user) => {
  const formData = new FormData()
  const data = JSON.stringify({first_name: 'nikolas',last_name: 'kakp'})
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