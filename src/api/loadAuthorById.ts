import { Variables, request } from 'graphql-request'
import { GETAUTHORBYID } from '../graphql/queries'

import { graphqlURL } from '@/config/config'

export const loadAuthorById = async(id: Variables) => {
    const data = await request(graphqlURL, GETAUTHORBYID, id)

    return data
}