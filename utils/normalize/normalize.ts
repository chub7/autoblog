import {GetAllQuery} from "@/generated/schema";

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

const normalizeAttributesCoverImg = (attributesCoverImg: AttributesRequiredCoverImgType) : AttributesRequiredCoverImgType => {
    return {
        url: attributesCoverImg.url || ``
    }
}

const normalizeDataCoverImg = (dataCoverImg: DataRequiredCoverImgType) : DataRequiredCoverImgType  => {
    return {
        attributes: normalizeAttributesCoverImg(dataCoverImg.attributes)
    }
}

const normalizeCoverImg = (coverImg: ArticleRequiredCoverImgType): ArticleRequiredCoverImgType => {
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


