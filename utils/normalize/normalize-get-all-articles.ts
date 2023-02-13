import {GetAllQuery} from "@/generated/schema";
import {
    ArticleRequiredAttributesType,
    ArticleRequiredCoverImgType, ArticleRequiredType,
    AttributesRequiredCoverImgType, DataRequiredCoverImgType, GetAllRequiredQueryTyped,
    ArticleOptionalType,
    AttributesArticleOptionalType,
    CoverImgOptionalType,
    CoverImgDataOptionalType,
    CoverImgDataAttributesOptionalType
} from "@/utils/normalize/types";


export const normalizeAttributesCoverImg = (attributesCoverImg: CoverImgDataAttributesOptionalType): AttributesRequiredCoverImgType => {
    return {
        url: attributesCoverImg.url || ``
    }
}

export const normalizeDataCoverImg = (dataCoverImg: CoverImgDataOptionalType): DataRequiredCoverImgType => {
    return {
        attributes: dataCoverImg.attributes
            ? normalizeAttributesCoverImg(dataCoverImg.attributes)
            : emptyObjForNormalizeGetAllArticles.attributes.coverImg.data.attributes
    }
}

export const normalizeCoverImg = (coverImg: CoverImgOptionalType): ArticleRequiredCoverImgType => {
    return {
        data: coverImg.data
            ? normalizeDataCoverImg(coverImg.data)
            : emptyObjForNormalizeGetAllArticles.attributes.coverImg.data
    }
}

export const normalizeArticleAttributes = (attributes: AttributesArticleOptionalType): ArticleRequiredAttributesType => {
    return {
        addedDate: attributes.addedDate || ``,
        body: attributes.body || ``,
        title: attributes.title || ``,
        chapter: attributes.chapter || ``,
        coverImg: normalizeCoverImg(attributes.coverImg)
    }
}

export const normalizeArticle = (article: ArticleOptionalType): ArticleRequiredType => {
    return {
        id: article.id || ``,
        attributes: article.attributes
            ? normalizeArticleAttributes(article.attributes)
            : emptyObjForNormalizeGetAllArticles.attributes
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


// type AttributesArticle = Pick<NonNullable<NonNullable<GetAllQuery['articles']>['data'][0]['attributes']>
//     , 'coverImg' | 'title' | 'body' | 'chapter' | 'addedDate'>
//
// type CoverImg = Pick<NonNullable<NonNullable<GetAllQuery['articles']>['data'][0]['attributes']>['coverImg']
//     , 'data'>
//
// type CoverImgData = Pick<NonNullable<NonNullable<NonNullable<GetAllQuery['articles']>['data'][0]['attributes']>['coverImg']['data']>
//     , 'attributes'>
//
// type CoverImgDataAttributes = Pick<NonNullable<NonNullable<NonNullable<NonNullable<GetAllQuery['articles']>['data'][0]['attributes']>['coverImg']['data']>['attributes']>
//     , 'url'>