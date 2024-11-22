/**
 * highlight element
 */
const highlightBannerElement = (rowData) => {
    return `<div class="card-body d-flex justify-content-between flex-column ps-xl-18"
        style="background-color:#020202;background-image:url('${rowData.Poster}');background-position: right;background-repeat: no-repeat;background-size: contain;">
            <div class="mb-20 pt-xl-13">
                <h3 class="fw-bold text-white fs-4x mb-5 ms-n1">${rowData.Title}</h3>
                <span class="fw-bold text-white fs-4 mb-8 d-block lh-0">${rowData.Actors}</span>

                <div class="d-flex align-items-center">
                    <div class="d-flex align-items-center me-6">
                        <a href="#" class="me-2">
                            <i class="bi bi-star-fill text-warning fs-3"></i>
                        </a>
                        <span class="fw-semibold text-white fs-6">${rowData.imdbRating}</span>
                    </div>

                    <div class="d-flex align-items-center">
                        <a href="#" class="me-2">
                            <i class="bi bi-person-fill text-primary fs-3"></i>
                        </a>
                        <span class="fw-semibold text-white fs-6">${rowData.imdbVotes} Votes</span>
                    </div>
                </div>
            </div>

            <div class="mb-xl-10 mb-3">
                <a href="/movie/detail/${rowData.imdbID}" class="btn btn-primary fw-semibold me-2"
                    data-bs-target="#kt_modal_upgrade_plan">
                    Watch Now
                </a>

                <button
                    class="btn btn-color-white bg-transparent btn-outline fw-semibold"
                    style="border: 1px solid rgba(255, 255, 255, 0.3)"
                    id="favorite-button" 
                            data-fav-title="${rowData.Title}" 
                            data-fav-poster="${rowData.Poster}" 
                            data-fav-id="${rowData.imdbID}" 
                            data-fav-type="${rowData.Type}" 
                            data-fav-year="${rowData.Year}">
                    Add Favorite
                </button>
            </div>
        </div>`;
};

/**
 * highlight clip
 */
const highlightClipElement = (rowData) => {
    return `<div class="card-header bg-black">
                <h3 class="card-title fw-bold text-white">${rowData.Rated}</h3>
            </div>

            <div class="card-body bg-black pt-0">
                <div class="mx-auto mb-6 bgi-no-repeat bgi-size-cover bgi-position-center w-125px h-125px"
                    style="background-image:url('${rowData.Poster}')">
                </div>

                <div class="text-center mb-5">
                    <h1 class="text-white fw-bold">${rowData.Title}</h1>
                    <span class="text-white opacity-75 fw-semibold">${rowData.Genre}</span>
                </div>
            </div>

            <div class="card-footer bg-primary p-0 pb-9">
                <div class="mt-n10">
                    <div class="mb-5">
                        <div class="d-flex flex-stack px-4 text-white opacity-75">
                            <span class="current-time" data-kt-element="current-time">0:00</span>
                            <span class="duration" data-kt-element="duration">5:53</span>
                        </div>

                        <input type="range" class="form-range" data-kt-element="progress" min="0" max="100"
                            value="0" step="0.01">
                    </div>

                    <div class="d-flex flex-center">
                        <button class="btn btn-icon mx-1" data-kt-element="replay-button">
                            <i class="bi bi-arrow-repeat fs-2 text-white"></i>
                        </button>

                        <button class="btn btn-icon mx-1" data-kt-element="play-prev-button">
                            <i class="bi bi-caret-left-fill fs-2 text-white"></i>
                        </button>

                        <button class="btn btn-icon mx-6 play-pause" data-kt-element="play-button">
                            <i class="bi bi-play-fill text-white fs-4x" data-kt-element="play-icon"></i>

                            <i class="bi bi-pause-fill text-white fs-4x d-none" data-kt-element="pause-icon"></i>
                        </button>

                        <button class="btn btn-icon mx-1 next" data-kt-element="play-next-button">
                            <i class="bi bi-caret-right-fill fs-2 text-white"></i>
                        </button>

                        <button class="btn btn-icon mx-1" data-kt-element="shuffle-button">
                            <i class="bi bi-shuffle fs-2 text-white"></i>
                        </button>
                    </div>
                </div>
            </div>`;
};

export { highlightBannerElement, highlightClipElement };
