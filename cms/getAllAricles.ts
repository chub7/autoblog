import {gql} from "@apollo/client";

export const getAllArticles = gql`query getAll {
  articles {
    data {
      id
      attributes {
        title
        body
        chapter
        addedDate
      }
    }
  }
}`