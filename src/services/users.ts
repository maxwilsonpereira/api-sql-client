import Axios from 'axios'
import { user } from '../models'

// const api = 'http://localhost:3001'
const api = 'https://api-sql-maxmix.herokuapp.com'

// GET ALL USERS ****************************************
export function getUsers() {
  return Axios.get(`${api}/users`)
}

// CREATE USER ****************************************
export const createUser = (params: user) => {
  return Axios.post(`${api}/create-user`, params)
}

// UPDATE USER ****************************************
export const updateUser = (params: user) => {
  return Axios.put(`${api}/update-user`, params)
}

// DELETE  USER ****************************************
export const deleteUser = (id: number) => {
  return Axios.delete(`${api}/delete-user/${id}`)
}

// DELETE ALL USERS ****************************************
// Updating the states here only for teaching purposes!
// In production I would just return a response and update the
// states on the parent component, leaving this function
// completely independent / uncoupled!
export const deletAllUsers = (
  setUsersList: (usersList: user[]) => void,
  clearCurrentUserHandler: () => void,
  setMessage: (message: string) => void
) => {
  Axios.delete(`${api}/delete-all-users`).then(() => {
    setUsersList([])
    clearCurrentUserHandler()
    setMessage('')
  })
}
