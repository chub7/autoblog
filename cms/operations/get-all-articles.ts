import {gql} from "@apollo/client";
import {GetAllQuery} from "@/generated/schema";
import {normalizeGetAllArticles} from "@/utils/normalize/normalize-get-all-articles";
import {queryGetAllArticles} from "@/cms/queies/get-all-aricles";
import {apolloClient} from "@/cms/operations/apollo-client";

export const getAllArticles = async () => {
    const client = apolloClient()
    const {data} = await client.query<GetAllQuery>({
        query: gql`${queryGetAllArticles}`,
    })

    return normalizeGetAllArticles(data)
}





