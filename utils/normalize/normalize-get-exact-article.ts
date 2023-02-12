import {GetExactArticleQuery} from "@/generated/schema";
import { emptyObjForNormalizeGetAllArticles, normalizeArticle} from "@/utils/normalize/normalize-get-all-articles";
import {ArticleRequiredType} from "@/utils/normalize/types";

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
