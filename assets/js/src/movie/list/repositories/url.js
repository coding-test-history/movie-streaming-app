/**
 * url listing data
 */
function urlMovieData(page, keyword) {
    keyword = keyword === null ? "game" : keyword;
    return `../api/movie/list?s=${keyword}&page=${page}`;
}

/**
 * url highlight data
 */
function urlMovieHighlight(title) {
    return `../api/movie/highlight/${title}`;
}