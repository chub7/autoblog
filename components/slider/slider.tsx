import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./slider.module.css"
import Link from "next/link";
import {PATH} from "@/constants/path";
import {SLIDER_DELAY} from "@/constants/slider";
import {urlBuilder} from "@/utils/build-srs";
import Image from "next/image";
import {GetAllRequiredQueryTyped} from "@/utils/normalize/normalize-get-all-articles";


const ImageSlider = ({articles}: GetAllRequiredQueryTyped) => {
    SwiperCore.use([Autoplay])
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

};

export default ImageSlider;
