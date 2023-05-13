import { Variables, request } from 'graphql-request'
import { GETPOSTBYID } from '../graphql/queries'

import { graphqlURL } from '@/config/config'

// 'http://localhost:1337/graphql'

export const loadPostById = async(id: Variables) => {
  const data = await request(graphqlURL, GETPOSTBYID, id)

  return data
}