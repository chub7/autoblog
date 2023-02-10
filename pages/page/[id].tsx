import {ARTICLES, ArticlesType} from "@/constants/articles";
import {GetStaticPathsContext, GetStaticPropsContext, InferGetStaticPropsType} from "next";
import Image from "next/image";
import Link from "next/link";
import {PATH} from "@/constants/path";
import {Pagination} from "@/components/pagination/pagination";
import {useArticlesSelect} from "@/pages/page/hook/useArticlesSelect";
import {ARTICLES_PER_PAGE} from "@/constants/pagination";
import styles from "./[id].module.css"


const Page = ({articles, currentPage, articlesPerPage}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {lastArticle, startArticle} = useArticlesSelect(currentPage, articlesPerPage)
    return (
        <>
            <div className={styles.articlesContainer}>{articles.slice(startArticle, lastArticle).map(article => {
                return (
                    <div key={article.id} className="m-10 w-300">
                        <Image src={article.coverImage} alt="article cover" height="140" className="m-1"/>
                        <Link href={`${PATH.ARTICLE}${article.id}`}><h3
                            className={styles.titleArticle}>{article.title}</h3></Link>
                        <p className="m-1">{article.shortDescriptionArticle.slice(0, article.shotDescriptionLength)}</p>
                    </div>
                )
            })}
            </div>
            <Pagination countOfArticles={articles.length} countArticlesPerPage={articlesPerPage} currentPage={+currentPage[0]}/>
        </>
    )
}


export const getStaticProps = (context: GetStaticPropsContext<{ id: string[] }>) => {
    const {id} = context.params!;
    const articles = ARTICLES

    return {
        props: {
            articles,
            currentPage: id,
            articlesPerPage: ARTICLES_PER_PAGE
        }
    }
}

export const getStaticPaths = (context: GetStaticPathsContext) => {
    const articles: ArticlesType[] = ARTICLES

    const paths = articles.map(article => {
        return {
            params: {
                id: article.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export default Page
