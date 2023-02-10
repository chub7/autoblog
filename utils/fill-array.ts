export const fillArray = (countOfArticles: number, countArticlesPerPage: number,) => {
    const k = Math.ceil(countOfArticles / countArticlesPerPage)
    return Array.from(Array(k).keys()).map(x => ++x);
}