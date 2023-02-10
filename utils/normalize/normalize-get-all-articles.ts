import {GetAllQuery} from "@/generated/schema";


export type GetAllRequiredQueryTyped = {
    __typename?: "Query";
    articles: {
        __typename?: "ArticleEntityResponseCollection";
        data: Array<ArticleRequiredType>
    }
};

export type ArticleRequiredType = {
    __typename?: "ArticleEntity";
    id: string;
    attributes: ArticleRequiredAttributesType
}

export type ArticleRequiredAttributesType = {
    __typename?: "Article";
    title: string;
    body: string;
    chapter: string;
    addedDate: string;
    coverImg: ArticleRequiredCoverImgType
}

export type ArticleRequiredCoverImgType = {
    __typename?: "UploadFileEntityResponse",
    data: DataRequiredCoverImgType
}

export type DataRequiredCoverImgType = {
    __typename?: "UploadFileEntity";
    attributes: AttributesRequiredCoverImgType;
}
export type AttributesRequiredCoverImgType = { __typename?: "UploadFile"; url: string }

export const normalizeAttributesCoverImg = (attributesCoverImg: any) : AttributesRequiredCoverImgType => {
    return {
        url: attributesCoverImg.url || ``
    }
}

export const normalizeDataCoverImg = (dataCoverImg: any) : DataRequiredCoverImgType  => {
    return {
        attributes: normalizeAttributesCoverImg(dataCoverImg.attributes)
    }
}

export const normalizeCoverImg = (coverImg: any): ArticleRequiredCoverImgType => {
    return {
        data: normalizeDataCoverImg(coverImg.data)
    }
}

export const normalizeArticleAttributes = (attributes: any): ArticleRequiredAttributesType => {
    return {
        addedDate: attributes.addedDate || ``,
        body: attributes.body || ``,
        title: attributes.title || ``,
        chapter: attributes.chapter || ``,
        coverImg: normalizeCoverImg(attributes.coverImg)
    }
}

export const normalizeArticle = (article: any): ArticleRequiredType => {
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






export const emptyObjForNormalizeGetAllArticles = {
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


