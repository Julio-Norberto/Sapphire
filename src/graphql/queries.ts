import { gql } from 'graphql-request'

export const GRAPHQL_QUERIES = gql`
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

  query GET_POST_BY_ID($id: ID!) # POST
  {
    post(id: $id) {
      data {
        id,
        attributes {
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

  query GETCATEGORY
  {
    categories {
      data {
        attributes {
          slug,
          posts {
            data {
              attributes {
                title,
                excerpt,
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