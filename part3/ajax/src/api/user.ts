import axios from 'axios';

const url = "http://localhost:4000/api/user/"

export const getUser = (id: string) => {
  return axios.get(`${url}${id}`)
}
