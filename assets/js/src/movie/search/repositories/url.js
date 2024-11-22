/**
 * url listing data
 */
function urlMovieData(title, type, year, page) {
    return `../api/movie/search?title=${title}&type=${type}&year=${year}&page=${page}`;
}
