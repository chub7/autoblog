export const useArticlesSelect = (currentPage: string[], articlesPerPage: number) => {

    const bufResult = Number(currentPage[0]) * articlesPerPage
    const lastArticle = bufResult
    const startArticle = bufResult - articlesPerPage

    return {lastArticle, startArticle}
}