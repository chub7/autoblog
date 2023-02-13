export const queryGetExactArticle = /* GraphQL */ `
query getExactArticle ($id:ID) {
    article (id: $id){
     data  {
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