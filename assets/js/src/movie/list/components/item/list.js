/**
 * row list
 */
const listElement = (rowData) => {
    const { Title, Year, imdbID, Type, Poster } = rowData;
    return `<div class="col-sm-3 mb-3 mb-sm-0">
                    <div class="m-0">
                        <div class="card-rounded position-relative mb-5">
                            <div class="bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded"
                                style="background-image:url(${Poster})">
                            </div>

                            <button class="btn btn-icon h-auto w-auto p-0 ms-4 mb-4 position-absolute bottom-0 right-0"
                            id="favorite-button" 
                            data-fav-title="${Title}" 
                            data-fav-poster="${Poster}" 
                            data-fav-id="${imdbID}" 
                            data-fav-type="${Type}" 
                            data-fav-year="${Year}">
                                <i class="bi bi-heart-fill text-white fs-2x"></i>
                            </button>
                        </div>

                        <div class="m-0">
                            <a href="/movie/detail?id=${imdbID}" class="text-gray-800 text-hover-primary fs-3 fw-bold d-block mb-2">${Title}</a>
                            <span class="fw-bold fs-6 text-gray-500 d-block lh-1">${Type} (${Year})</span>
                        </div>
                    </div>
                </div>`;
};

export { listElement };
