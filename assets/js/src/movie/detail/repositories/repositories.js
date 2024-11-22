/**
 * detail data movie
 * @param {*} url
 * @returns
 */
const getMovieDetailAPI = async (url) => {
    try {
        const response = await sendApiRequest(
            {
                url: url,
                type: "GET",
            },
            true
        );
        return response.data;
    } catch (e) {
        if (e.status == 404) {
            page === 1 ? swalNotFound({ data: "Movie Detail" }) : swal.close();
        } else {
            const { responseJSON } = e;
            const message =
                e instanceof ReferenceError
                    ? error.message
                    : responseJSON.message;
            swalError(message);
        }
    }
};

/**
 * recommended data movie
 * @param {*} url
 * @returns
 */
const getMovieRecommendedAPI = async (url) => {
    try {
        const response = await sendApiRequest(
            {
                url: url,
                type: "GET",
            },
            true
        );
        return response.data.Search;
    } catch (e) {
        if (e.status == 404) {
            page === 1 ? swalNotFound({ data: "Movie Recommended" }) : swal.close();
        } else {
            const { responseJSON } = e;
            const message =
                e instanceof ReferenceError
                    ? error.message
                    : responseJSON.message;
            swalError(message);
        }
    }
};

export { getMovieDetailAPI, getMovieRecommendedAPI };
