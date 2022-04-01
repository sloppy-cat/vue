import axios, { AxiosResponse } from 'axios'

const url = "https://jsonplaceholder.typicode.com/posts/1/comments"

export interface Comment_ {
  id: number
  name: string
  email: string
  body: string
  postId: number
}

export const getComments = async () => {
  const res = await axios.get<Comment_[]>(url)
  return(res.data)
}
