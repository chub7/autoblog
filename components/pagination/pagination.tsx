import {fillArray} from "@/utils/fill-array";
import Link from "next/link";
import styles from "@/components/pagination/pagination.module.css";
import {PATH} from "@/constants/path";
import {FIRST_PAGE} from "@/constants/pagination";

type PaginationType = {
    countOfArticles: number,
    countArticlesPerPage: number
    currentPage?: number
}

export const Pagination = ({countOfArticles, countArticlesPerPage,currentPage}: PaginationType) => {
    const pages = fillArray(countOfArticles, countArticlesPerPage)
    const handleHrefPagination = (page: number) => {
        return page === FIRST_PAGE
            ? `/`
            : `${PATH.PAGE}${page}`
    }

    return (
        <nav className={styles.paginationContainer}>
            <ul className={styles.pagination}>
                <li>
                    <Link href={currentPage? `${PATH.PAGE}${--currentPage}` : ``} className={styles.previousPage}>Previous</Link>
                </li>
                {pages.map(page => {
                    return <li key={page}>
                        <Link href={handleHrefPagination(page)} aria-current="page"
                              className={styles.eachButtonPage}>{page}
                        </Link>
                        </li>
                })}
                <li>
                    <Link href={`${PATH.PAGE}${currentPage?++currentPage : 2}`} className={styles.nextPage}>Next</Link>
                </li>
            </ul>
        </nav>
    )
}