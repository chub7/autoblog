export const getArticlesForPagination = /* GraphQL */ `
query getArticlesForPagination  ($page: Int , $pageSize : Int) {
    articles (pagination: {page: $page ,  pageSize: $pageSize}) {
    meta {
      pagination{
        total
      }
    }
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