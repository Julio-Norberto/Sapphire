import { Variables, request } from 'graphql-request'
import { GETCATEGORYBYID } from '../graphql/queries'

import { graphqlURL } from '@/config/config'

export const loadCategoryById = async(id: Variables) => {
    const data = await request(graphqlURL, GETCATEGORYBYID, id)

    return data
}