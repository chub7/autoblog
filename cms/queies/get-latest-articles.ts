export const queryGetLatestArticles= /* GraphQL */ `
query getLatestArticles ($start: Int, $limit: Int) {
    articles (pagination : {start: $start, limit: $limit }){
     data {
      id 
      attributes {
        title
        body
        chapter
        addedDate
        coverImg {
          data{
            id
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