import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Navigation, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {ArticlesType} from "@/constants/articles";
import styles from "./slider.module.css"
import pic from "../../public/articlesImg/bmw-mers-330x140.jpg"
import Link from "next/link";
import {PATH} from "@/constants/path";
import {SLIDER_DELAY} from "@/constants/slider";
import {GetAllQuery} from "@/generated/schema";
import {urlBuilder} from "@/utils/build-srs";
import Image from "next/image";


// type ImageSliderType = {
//     articles: ArticlesType[]
// }
const ImageSlider = ({articles}: GetAllQuery) => {
    SwiperCore.use([Autoplay])
    if(articles)
    return (
        <Swiper navigation={true}
                autoplay={{delay: SLIDER_DELAY}}
                pagination={{clickable: true,}}
                modules={[Pagination, Navigation]}
        >
            {articles.data.map(article => {
                return (

                    <SwiperSlide key={article.id} className={styles.slideBackground}>
                        <Image src={urlBuilder(article.attributes?.coverImg?.data?.attributes?.url)} alt={`cover slider`} fill  />
                        <Link href={`${PATH.ARTICLE}${article.id}`}>
                            <div className={styles.description}>
                                <span className={styles.chapter}>{article.attributes?.chapter}</span>
                                <div className={styles.title}>{article.attributes?.title}</div>
                                <p className={styles.shortDescription}>{article.attributes?.body}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
        return <div></div>

};

export default ImageSlider;
