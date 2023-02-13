import {gql} from "@apollo/client";
import {GetAllQuery} from "@/generated/schema";
import {normalizeGetAllArticles} from "@/utils/normalize/normalize-get-all-articles";
import {queryGetLatestArticles} from "@/cms/queies/get-latest-articles";
import {apolloClient} from "@/cms/operations/apollo-client";

export const getLatestArticles = async (start:number,limit:number) => {
    const client = apolloClient()

    const {data} = await client.query<GetAllQuery>({
        query: gql`${queryGetLatestArticles}`, variables: {start,limit}
    })

    return normalizeGetAllArticles(data)
}