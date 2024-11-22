/**
 * content info element
 */
const contentInfoElement = (data) => {
    return `<!--begin::Item-->
                <div class="me-9 my-1">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-calendar text-primary fs-2 me-1"><span class="path1"></span><span
                            class="path2"></span><span class="path3"></span><span class="path4"></span></i>
                    <!--end::Icon-->

                    <!--begin::Label-->
                    <span class="fw-bold text-gray-500">${data.Released}</span>
                    <!--end::Label-->
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="me-9 my-1">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-time text-primary fs-2 me-1"><span class="path1"></span><span
                            class="path2"></span></i>
                    <!--end::Icon-->

                    <!--begin::Label-->
                    <span class="fw-bold text-gray-500">${data.Runtime}</span>
                    <!--begin::Label-->
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="me-9 my-1">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-star text-warning fs-2 me-1"><span class="path1"></span><span
                            class="path2"></span><span class="path3"></span></i> <!--end::Icon-->

                    <!--begin::Label-->
                    <span class="fw-bold text-gray-500">${data.imdbRating}</span>
                    <!--end::Label-->
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="me-9 my-1">
                    <!--begin::Icon-->
                    <i class="ki-duotone ki-user text-primary fs-2 me-1"><span class="path1"></span><span
                            class="path2"></span><span class="path3"></span></i> <!--end::Icon-->

                    <!--begin::Label-->
                    <span class="fw-bold text-gray-500">${data.imdbVotes} Votes</span>
                    <!--end::Label-->
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="my-1" id="favorite-button" data-fav-title="${data.Title}" 
                data-fav-poster="${data.Poster}" 
                data-fav-id="${data.imdbID}" 
                data-fav-type="${data.Type}" 
                data-fav-year="${data.Year}">
                    <!--begin::Icon-->
                    <i class="ki-solid ki-heart text-secondary fs-2"></i>
                    <!--end::Icon-->

                    <!--begin::Label-->
                    <span class="fw-bold text-gray-500">Add Favorite</span>
                    <!--end::Label-->
                </div>
                <!--end::Item-->`;
};

/**
 * content title genre element
 */
const contentTitleGenreElement = (data) => {
    return `<!--begin::Title-->
                <a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bold">${data.Title}
                    <span class="fw-bold text-muted fs-5 ps-1">${data.Genre}</span>
                </a>
                <!--end::Title-->

                <!--begin::Container-->
                <div class="overlay mt-8">
                    <!--begin::Image-->
                    <div class="bgi-no-repeat bgi-position-center bgi-size-auto card-rounded min-h-500px"
                        style="background-image:url('${data.Poster}')">
                    </div>
                    <!--end::Image-->
                </div>
                <!--end::Container-->`;
};

/**
 * content director element
 */
const contentDirectorElement = (data) => {
    return `<!--begin::Section-->
            <div class="text-center flex-shrink-0 me-7 me-lg-13">
                <!--begin::Avatar-->
                <div class="symbol symbol-70px symbol-circle mb-2">
                    <img src="../../assets/images/avatars/blank.png" class="" alt="">
                </div>
                <!--end::Avatar-->

                <!--begin::Info-->
                <div class="mb-0">
                    <a href="javacript:void(0);" class="text-gray-700 fw-bold text-hover-primary">${data.Director}</a>

                    <span class="text-gray-500 fs-7 fw-semibold d-block mt-1">Director</span>
                </div>
                <!--end::Info-->
            </div>
            <!--end::Section-->

            <!--begin::Text-->
            <div class="mb-0 fs-6">
                <div class="text-muted fw-semibold lh-lg mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </div>

                <a href="javacript:void(0);" class="fw-semibold link-primary">Director's
                    Profile</a>
            </div>
            <!--end::Text-->`;
};

/**
 * content description element
 */
const contentDescriptionElement = (data) => {
    return `<p class="mb-8">${data.Plot}</p>`;
};

export {
    contentInfoElement,
    contentTitleGenreElement,
    contentDirectorElement,
    contentDescriptionElement,
};
