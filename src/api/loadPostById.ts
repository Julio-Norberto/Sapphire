import { Variables, request } from 'graphql-request'
import { GETPOSTBYID } from '../graphql/queries'

export const loadPostById = async(id: Variables) => {
  const data = await request('http://localhost:1337/graphql', GETPOSTBYID, id)

  return data
}