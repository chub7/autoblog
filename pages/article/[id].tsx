import {GetStaticPathsContext, GetStaticPropsContext, InferGetStaticPropsType} from "next";
import styles from "@/pages/article/[id].module.css";
import Image from "next/image";
import Link from "next/link";
import {PATH} from "@/constants/path";
import vk from "../../public/social-media-icons/3787324_vkontakte_brand_logo_social media_vk_icon.png"
import facebook from "../../public/social-media-icons/317752_facebook_social media_social_icon.png"
import twitter from "../../public/social-media-icons/3225183_app_logo_media_popular_social_icon.png"
import linked from "../../public/social-media-icons/3225190_app_linkedin_logo_media_popular_icon.png"
import {COMMENTS} from "@/constants/comments";
import {urlBuilder} from "@/utils/build-srs";
import ReactMarkdown from "react-markdown";
import {getAllArticles} from "@/cms/operations/get-all-articles";


const Article = ({article, articles}: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <div className={styles.container}>
            <div className={styles.mainColumn}>
                <div className={styles.currentArticle}>
                    <div className={styles.titleArticle}>{article.attributes.title}</div>
                    <ReactMarkdown className={styles.bodyText}>{article.attributes.body}</ReactMarkdown>
                </div>
                <div className={styles.socialMedia}>
                    <Image className={styles.socialIcon} src={vk} alt={`vk`} width={48} height={48}/>
                    <Image className={styles.socialIcon} src={facebook} alt={`facebook`} width={48} height={48}/>
                    <Image className={styles.socialIcon} src={twitter} alt={`twitter`} width={48} height={48}/>
                    <Image className={styles.socialIcon} src={linked} alt={`linked`} width={48} height={48}/>
                </div>
                <p className={styles.offerLatestArticles}>Вам также может быть интересно</p>
                <div className={styles.interestingArticles}>{articles.articles.data.slice(-4).map(article => {
                    return (
                        <div key={article.id} className={styles.lastArticles}>
                            <div className={styles.containerImage}>
                            <Image src={urlBuilder(article.attributes.coverImg.data?.attributes?.url)}
                                   alt="article cover" fill className="m-1"/></div>
                            <Link href={`${PATH.ARTICLE}${article.id}`}><h3
                                className={styles.titleArticle}>{article.attributes.title}</h3></Link>
                            <p className="m-1">{article.attributes.body.slice(0, 80)}</p>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className={styles.rightColumn}>
                <input className={styles.searchInput} type={`text`}/>
                <div>
                    <p>Свежие комментарии</p>
                    <ul className={styles.ulCustom}>
                        {COMMENTS.map(comment => {
                            return (<li key={comment.title} className={styles.eachLi}>{comment.title} <a
                                className={styles.commentLink}>{comment.link}</a></li>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async (context: GetStaticPropsContext<{ id: string[] }>) => {
    const {id} = context.params!;
    const articles = await getAllArticles()
    const articleGraphQl = articles.articles.data.filter(article => +article.id === +id)

    return {
        props: {
            article: {...articleGraphQl[0]},
            articles: articles,
        }
    }
}

export const getStaticPaths = async (context: GetStaticPathsContext) => {
    const articles = await getAllArticles()
    const paths = articles.articles.data.map(article => {
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

