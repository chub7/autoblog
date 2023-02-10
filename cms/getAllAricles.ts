export const getAllArticles = /* GraphQL */ `
query getAll {
  articles {
    data {
      id
      attributes {
        title
        body
        chapter
        addedDate
        coverImg {
          data {
            attributes{
              url
            }
          }
        }       
      }
    }
  }
}
`