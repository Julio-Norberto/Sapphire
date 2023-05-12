import { Variables, request } from 'graphql-request'
import { GETCATEGORYBYID } from '../graphql/queries'

export const loadCategoryById = async(id: Variables) => {
    const data = await request('http://localhost:1337/graphql', GETCATEGORYBYID, id)

    return data
}