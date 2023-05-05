import { gql } from 'graphql-request'

export const GETPOSTS = gql`
  query GETPOSTS # POSTCARD
  {
    posts {
      data {
        id,
        attributes {
          title,
          excerpt,
          categoryPost,
          cover {
            data {
              attributes {
                alternativeText,
                url
              }
            }
          }
        }
      }
    }
  }
`