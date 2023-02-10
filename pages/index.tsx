import {InferGetStaticPropsType} from 'next'
import Image from "next/image";
import Link from "next/link";
import {PATH} from "@/constants/path";
import {Pagination} from "@/components/pagination/pagination";
import ImageSlider from "@/components/slider/slider";
import styles from "./index.module.css"
import {ARTICLES_PER_PAGE} from "@/constants/pagination";
import {urlBuilder} from "@/utils/build-srs";
import {getAllArticles, getArticles} from "@/cms/operations/get-all-articles";



export default function Home({articlesPerPage, articles}: InferGetStaticPropsType<typeof getStaticProps>) {

        return (
            <main>
                <ImageSlider articles={articles.articles}/>
                <div className={styles.containerArticles}>
                    {articles.articles.data.map(article => {
                        return (
                            <div key={article.id} className={styles.eachArticle}>
                                <div className={styles.coverImageArticle}>
                                <Image src={urlBuilder(article.attributes?.coverImg?.data?.attributes?.url)}
                                       alt="article cover"
                                       fill
                                       className={styles.coverArticle}/>
                                </div>
                                <Link href={`${PATH.ARTICLE}${article.id}`}><h3
                                    className={styles.titleArticle}>{article.attributes?.title}</h3>
                                </Link>
                                <p className={styles.descriptionArticle}>{article.attributes?.body}</p>
                            </div>)
                    })}
                </div>
                <Pagination countOfArticles={articles.articles.data.length} countArticlesPerPage={articlesPerPage}/>
            </main>
        )
}


export const getStaticProps = async () => {
    const articles  = await getArticles(1,2)

    return {
        props: {
            articles: articles,
            articlesPerPage: ARTICLES_PER_PAGE
        }
    }
}
