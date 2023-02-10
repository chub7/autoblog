import {GetAllQuery, GetArticlesForPaginationQuery, GetExactArticleQuery} from "@/generated/schema";
import {getExactArticle} from "@/cms/operations/get-exact-article";

// export const normalizeArticle= (articles: ArticleTypeOptionalsFields) : ArticleTypeRequiredFields  => {
//     const { id,attributes,} = articles
//     if(id && attributes){
//         return {
//             ...articles,
//             id,
//             attributes
//         }
//     }
//     return {} as ArticleTypeRequiredFields
// }


export type GetAllRequiredQueryTyped = {
    __typename?: "Query";
    articles: {
        __typename?: "ArticleEntityResponseCollection";
        data: Array<ArticleRequiredType>
    }
};

type ArticleRequiredType = {
    __typename?: "ArticleEntity";
    id: string;
    attributes: ArticleRequiredAttributesType
}

type ArticleRequiredAttributesType = {
    __typename?: "Article";
    title: string;
    body: string;
    chapter: string;
    addedDate: string;
    coverImg: ArticleRequiredCoverImgType
}

type ArticleRequiredCoverImgType = {
    __typename?: "UploadFileEntityResponse",
    data: DataRequiredCoverImgType
}

type DataRequiredCoverImgType = {
    __typename?: "UploadFileEntity";
    attributes: AttributesRequiredCoverImgType;
}
type AttributesRequiredCoverImgType = { __typename?: "UploadFile"; url: string }

const normalizeAttributesCoverImg = (attributesCoverImg: any) : AttributesRequiredCoverImgType => {
    return {
        url: attributesCoverImg.url || ``
    }
}

const normalizeDataCoverImg = (dataCoverImg: any) : DataRequiredCoverImgType  => {
    return {
        attributes: normalizeAttributesCoverImg(dataCoverImg.attributes)
    }
}

const normalizeCoverImg = (coverImg: any): ArticleRequiredCoverImgType => {
    return {
        data: normalizeDataCoverImg(coverImg.data)
    }
}

const normalizeArticleAttributes = (attributes: any): ArticleRequiredAttributesType => {
    return {
        addedDate: attributes.addedDate || ``,
        body: attributes.body || ``,
        title: attributes.title || ``,
        chapter: attributes.chapter || ``,
        coverImg: normalizeCoverImg(attributes.coverImg)
    }
}

const normalizeArticle = (article: any): ArticleRequiredType => {
    return {
        id: article.id || ``,
        attributes: normalizeArticleAttributes(article.attributes)
    }
}

export const normalizeGetAllArticles = (data: GetAllQuery): GetAllRequiredQueryTyped => {

    return {
        ...data,
        articles: {
            ...data.articles,
            data: data.articles?.data.map(element => {
                return normalizeArticle(element)
            }) || [emptyObjForNormalizeGetAllArticles]
        }
    }
}

// normalizeGetArticlesForPagination
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
// normalizeGetArticlesForPagination

//normalizeGetExactArticle

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
            data: normalizeArticle(data.article?.data) || [emptyObjForNormalizeGetAllArticles]
        }
    }
}
//normalizeGetExactArticle


const emptyObjForNormalizeGetAllArticles = {
    id: ``,
    attributes: {
        addedDate: ``,
        body: ``,
        title: ``,
        chapter: ``,
        coverImg: {
            data: {
                attributes: {
                    url: ``
                }
            }
        }
    }
}


