/**
 * listing data movie
 * @param {*} url
 * @returns
 */
const getMovieDataAPI = async (url) => {
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
            page === 1 ? swalNotFound({ data: "Movie Search" }) : swal.close();
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

export { getMovieDataAPI };
