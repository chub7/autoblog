import {GetAllQuery} from "@/generated/schema";

export const normalizeElem= (articles: ArticleTypeOptionalsFields) : ArticleTypeRequiredFields  => {
    const { id,attributes,} = articles
    if(id && attributes){
        return {
            ...articles,
            id,
            attributes
        }
    }
    return {} as ArticleTypeRequiredFields
}

export const normalizeGetAll = (data: GetAllQuery) : GetAllQueryTyped =>{
    if (data.articles) {
        return {
            ...data,
            articles: {
                ...data.articles,
                data: data.articles.data.map(element=>{
                    return normalizeElem(element)
                })
            }
        }
    } else return {} as GetAllQueryTyped

}

export type GetAllQueryTyped = {
    __typename?: "Query";
    articles: {
        __typename?: "ArticleEntityResponseCollection";
        data:  Array<ArticleTypeRequiredFields>
    }
};

export type ArticleTypeRequiredFields = {
    __typename?: "ArticleEntity";
    id: string;
    attributes: {
        __typename?: "Article";
        title: string;
        body: string;
        chapter: string;
        addedDate: string;
        coverImg: {
            __typename?: "UploadFileEntityResponse";
            data?: {
                __typename?: "UploadFileEntity";
                attributes?: { __typename?: "UploadFile"; url: string };
            };
        };
    };
}

export type ArticleTypeOptionalsFields = {
    __typename?: "ArticleEntity";
    id?: string;
    attributes?: {
        __typename?: "Article";
        title: string;
        body: string;
        chapter: string;
        addedDate: string;
        coverImg: {
            __typename?: "UploadFileEntityResponse";
            data?: {
                __typename?: "UploadFileEntity";
                attributes?: { __typename?: "UploadFile"; url: string };
            };
        };
    };
}
