export const usePage = (currentPage: string[], articlesPerPage: number, countArticles: number) => {

    // const lastArticle = Number(currentPage[0]) * articlesPerPage
    // const startArticle = lastArticle > countArticles+1
    //     ? lastArticle - Number(currentPage[0]) + 1
    //     : lastArticle - Number(currentPage[0])

    const bufResult = Number(currentPage[0]) * articlesPerPage
    const lastArticle = bufResult
    const startArticle = bufResult - articlesPerPage

    return {lastArticle, startArticle}
}