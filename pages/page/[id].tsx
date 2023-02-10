import {ARTICLES, ArticlesType} from "@/constants/articles";
import {GetStaticPathsContext, GetStaticPropsContext, InferGetStaticPropsType} from "next";
import Image from "next/image";
import Link from "next/link";
import {PATH} from "@/constants/path";
import {Pagination} from "@/components/pagination/pagination";

import {ARTICLES_PER_PAGE} from "@/constants/pagination";
import styles from "./[id].module.css"
import {getAllArticles} from "@/cms/operations/get-all-articles";
import {getArticles} from "@/cms/operations/get-articles-for-pagination";
import {urlBuilder} from "@/utils/build-srs";


const Page = ({articles, currentPage, articlesPerPage}: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <>
            <div className={styles.articlesContainer}>{articles.data.map(article => {
                return (
                    <div key={article.id} className="m-10 w-300">
                        <div className={styles.coverImageArticle}>
                            <Image src={urlBuilder(article.attributes.coverImg.data.attributes.url)}
                                   alt="article cover"
                                   fill
                                   className="m-1"/>
                        </div>
                        <Link href={`${PATH.ARTICLE}${article.id}`}><h3
                            className={styles.titleArticle}>{article.attributes.title}</h3></Link>
                        <p className="m-1">{article.attributes.body.slice(0, 80)}</p>
                    </div>
                )
            })}
            </div>
            <Pagination countOfArticles={articles.meta.pagination.total} countArticlesPerPage={articlesPerPage}
                        currentPage={+currentPage[0]}/>
        </>
    )
}


export const getStaticProps = async (context: GetStaticPropsContext<{ id: string[] }>) => {
    const {id} = context.params!;
    const allArticles = await getArticles(+id, +ARTICLES_PER_PAGE)
    return {
        props: {
            articles: allArticles.articles,
            currentPage: id,
            articlesPerPage: ARTICLES_PER_PAGE
        }
    }
}

export const getStaticPaths = async (context: GetStaticPathsContext) => {
    const allArticles = await getAllArticles()
    const paths = allArticles.articles.data.map(article => {
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
