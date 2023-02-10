import {gql} from "@apollo/client";
import {GetArticlesForPaginationQuery} from "@/generated/schema";
import {getArticlesForPagination} from "@/cms/queies/get-articles-for-pagination";

import {apolloClient} from "@/cms/operations/apollo-client";
import {normalizeGetArticlesForPagination} from "@/utils/normalize/normalize-get-articles-for-pagination";

export const getArticles = async (page: number = 1, pageSize: number = 3) => {
    const client = apolloClient()

    const {data} = await client.query<GetArticlesForPaginationQuery>({
        query: gql`${getArticlesForPagination}`, variables: {page: page, pageSize: pageSize}
    })

    return normalizeGetArticlesForPagination(data)
}