import {ApolloClient, gql, InMemoryCache, useQuery} from "@apollo/client";
import {GetAllQuery} from "@/generated/schema";
import { normalizeGetAllArticles} from "@/utils/normalize/normalize";
import {queryGetAllArticles} from "@/cms/getAllAricles";
import {ARTICLES_PER_PAGE} from "@/constants/pagination";

export const getAllArticles = async () => {
    const client = new ApolloClient({
        uri: process.env.STRAPI_API_URL,
        cache: new InMemoryCache()
    });
    const {data} = await client.query<GetAllQuery>({
        query: gql`${queryGetAllArticles}`,
    })

    return normalizeGetAllArticles(data)
}

export const check = `
query getAll ($page: Int!, $pageSize: Int!) {
  articles (pagination: {start: $page, limit: $pageSize}){
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

export const getArticles = async (page:number = 5, pageSize:number=ARTICLES_PER_PAGE) => {
    const client = new ApolloClient({
        uri: process.env.STRAPI_API_URL,
        cache: new InMemoryCache()
    });
    // const {data} = useQuery(gql`${check}`,{variables: {page, pageSize }})
    const {data} = await client.query<GetAllQuery>({
        query: gql`${check}`, variables: {page, pageSize}
    })

    return normalizeGetAllArticles(data)
}

