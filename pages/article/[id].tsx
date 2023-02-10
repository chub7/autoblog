import {ARTICLES, ArticlesType} from "@/constants/articles";
import {GetStaticPathsContext, GetStaticPropsContext, InferGetStaticPropsType} from "next";


const Article  = ({article}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>{article.title}</div>
    )
}


export const getStaticProps  = (context : GetStaticPropsContext<{ id: string[] }>) => {
    const { id } = context.params!;
    const article = ARTICLES.filter(article => article.id === +id)

    return {
        props: {
            article: {...article[0]}
        }
    }
}

export const getStaticPaths = (context: GetStaticPathsContext) => {
    const articles: ArticlesType[] = ARTICLES

    const paths = articles.map(article => {
        return {
            params: {id: article.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export default Article

