import {InferGetStaticPropsType} from 'next'
import Image from "next/image";
import Link from "next/link";
import {PATH} from "@/constants/path";
import {Pagination} from "@/components/pagination/pagination";
import ImageSlider from "@/components/slider/slider";
import styles from "./index.module.css"
import {ARTICLES_PER_PAGE} from "@/constants/pagination";
import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

import {GetAllQuery} from "@/generated/schema";
import {urlBuilder} from "@/utils/build-srs";
import {getAllArticles} from "@/cms/getAllAricles";


export default function Home({articlesPerPage, articles}: InferGetStaticPropsType<typeof getStaticProps>) {

    if (articles.articles) {
        return (
            <main>
                <ImageSlider articles={articles.articles}/>
                <div className={styles.containerArticles}>
                    {articles.articles?.data.slice(0, articlesPerPage).map(article => {
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
}


export const getStaticProps = async () => {
    const client = new ApolloClient({
        uri: "http://localhost:1337/graphql",
        cache: new InMemoryCache()
    });
    const {data} = await client.query<GetAllQuery>({
        query: gql`${getAllArticles}`
    })


    return {
        props: {
            articles: data,
            articlesPerPage: ARTICLES_PER_PAGE
        }
    }
}
