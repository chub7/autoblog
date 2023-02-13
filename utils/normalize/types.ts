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


export type ArticleOptionalType = Pick<NonNullable<GetAllQuery['articles']>['data'][0], 'id' | 'attributes'>
export type AttributesArticleOptionalType = Pick<NonNullable<ArticleOptionalType['attributes']>, 'coverImg' | 'title' | 'body' | 'chapter' | 'addedDate'>
export type CoverImgOptionalType = Pick<NonNullable<AttributesArticleOptionalType>['coverImg'], 'data'>
export type CoverImgDataOptionalType = Pick<NonNullable<CoverImgOptionalType['data']>, 'attributes'>
export type CoverImgDataAttributesOptionalType = Pick<NonNullable<CoverImgDataOptionalType['attributes']> , 'url'>