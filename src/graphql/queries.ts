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

export const GETPOSTBYID = gql`
  query GET_POST_BY_ID($id: ID!) # POST
  {
    post(id: $id) {
      data {
        id,
        attributes {
          createdAt,
          title,
          excerpt,
          content,
          categoryPost,
          authorName,
          cover {
            data {
              attributes {
                alternativeText,
                url
              }
            }
          },
          author {
            data {
              id,
              attributes {
                displayName,
                slug,
                photo {
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
      }
    }
  }
`

export const GETAUTHORBYID = gql`
  query GET_AUTHOR_BY_ID($id: ID!) { # AUTHOR PAGE
    author(id: $id) {
      data {
        attributes {
          displayName,
          slug,
          photo {
            data {
              attributes {
                alternativeText,
                url
              }
            }
          },
          posts {
            data {
              id,
              attributes {
                title,
                excerpt,
                category {
                  data {
                    attributes {
                      displayName
                    }
                  }
                },
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
      }
    }
  }
`