import {gql} from "@apollo/client";
import {GetExactArticleQuery} from "@/generated/schema";
import {normalizeGetExactArticle} from "@/utils/normalize/normalize";
import {queryGetExactArticle} from "@/cms/queies/get-exact-article";
import {apolloClient} from "@/cms/operations/apollo-client";

export const getExactArticle = async (id:number) => {
    const client = apolloClient()

    const {data} = await client.query<GetExactArticleQuery>({
        query: gql`${queryGetExactArticle}`, variables: {id}
    })

    return normalizeGetExactArticle(data)
}