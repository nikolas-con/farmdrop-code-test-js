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