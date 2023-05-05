import { request } from 'graphql-request'
import { GETPOSTS } from '../graphql/queries'

export const loadPosts = async() => {
  const data = await request('http://localhost:1337/graphql', GETPOSTS)

  return data
}