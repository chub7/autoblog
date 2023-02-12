import {GetExactArticleQuery} from "@/generated/schema";
import {ArticleRequiredType, emptyObjForNormalizeGetAllArticles, normalizeArticle} from "@/utils/normalize/normalize-get-all-articles";

export type GetExactArticleRequiredQueryTyped = {
    __typename?: "Query";
    article: {
        __typename?: "ArticleEntityResponseCollection";
        data: ArticleRequiredType
    }
};

export const normalizeGetExactArticle = (data: GetExactArticleQuery): GetExactArticleRequiredQueryTyped => {

    return {
        ...data,
        article: {
            data: data.article?.data
                ? normalizeArticle(data.article?.data)
                : emptyObjForNormalizeGetAllArticles
        }
    }
}
