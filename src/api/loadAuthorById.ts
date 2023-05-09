import { Variables, request } from 'graphql-request'
import { GETAUTHORBYID } from '../graphql/queries'

export const loadAuthorById = async(id: Variables) => {
    const data = await request('http://localhost:1337/graphql', GETAUTHORBYID, id)

    return data
}