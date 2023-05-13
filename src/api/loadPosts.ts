import { request } from 'graphql-request'
import { GETPOSTS } from '../graphql/queries'

import { graphqlURL } from '@/config/config'

export const loadPosts = async() => {
  const data = await request(graphqlURL, GETPOSTS)

  return data
}