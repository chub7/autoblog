import {GetArticlesForPaginationQuery} from "@/generated/schema";
import {ArticleRequiredType, emptyObjForNormalizeGetAllArticles, normalizeArticle} from "@/utils/normalize/normalize-get-all-articles";

export type GetArticlesForPaginationRequiredQueryTyped = {
    __typename?: "Query";
    articles: {
        __typename?: "ArticleEntityResponseCollection";
        data: Array<ArticleRequiredType>
        meta: { pagination: { __typename?: "Pagination"; total: number } }
    }
};

export const normalizeGetArticlesForPagination = (data: GetArticlesForPaginationQuery): GetArticlesForPaginationRequiredQueryTyped => {

    return {
        ...data,
        articles: {
            ...data.articles,
            data: data.articles?.data.map(element => {
                return normalizeArticle(element)
            }) || [emptyObjForNormalizeGetAllArticles],
            meta: data.articles? {...data.articles.meta} : {pagination: { total: 1} }
        }
    }
}