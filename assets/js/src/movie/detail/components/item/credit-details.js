/**
 * credit actor element
 */
const creditActorElement = (data) => {
    return `<!--begin::Avatar-->
                <div class="symbol symbol-45px me-5">
                    <img src="../../assets/images/avatars/blank.png" alt="">
                </div>
                <!--end::Avatar-->

                <!--begin::Wrapper-->
                <div class="d-flex flex-column flex-row-fluid">
                    <!--begin::Info-->
                    <div class="d-flex align-items-center flex-wrap mb-0">
                        <!--begin::Name-->
                        <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Actors</a>
                        <!--end::Name-->
                    </div>
                    <!--end::Info-->

                    <!--begin::Text-->
                    <span class="text-gray-800 fs-7 fw-normal pt-1">${data.Actors}</span>
                    <!--end::Text-->
                </div>
                <!--end::Wrapper-->`;
};

/**
 * credit writter element
 */
const creditWritterElement = (data) => {
    return `<!--begin::Avatar-->
                <div class="symbol symbol-45px me-5">
                    <img src="../../assets/images/avatars/blank.png" alt="">
                </div>
                <!--end::Avatar-->

                <!--begin::Wrapper-->
                <div class="d-flex flex-column flex-row-fluid">
                    <!--begin::Info-->
                    <div class="d-flex align-items-center flex-wrap mb-0">
                        <!--begin::Name-->
                        <a href="#" class="text-gray-800 text-hover-primary fw-bold me-6">Writter</a>
                        <!--end::Name-->
                    </div>
                    <!--end::Info-->

                    <!--begin::Text-->
                    <span class="text-gray-800 fs-7 fw-normal pt-1">${data.Writer}</span>
                    <!--end::Text-->
                </div>
                <!--end::Wrapper-->`;
};

/**
 * details element
 */
const detailElement = (data) => {
    return `<!--begin::Item-->
            <div class="d-flex flex-stack fw-semibold fs-5 text-muted mb-4">
                <!--begin::Text-->
                <a href="#" class="text-muted text-hover-primary pe-2">Rated </a>
                <!--end::Text-->

                <!--begin::Number-->
                <div class="m-0">${data.Rated}</div>
                <!--end::Number-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack fw-semibold fs-5 text-muted mb-4">
                <!--begin::Text-->
                <a href="#" class="text-muted text-hover-primary pe-2">Year </a>
                <!--end::Text-->

                <!--begin::Number-->
                <div class="m-0">${data.Year}</div>
                <!--end::Number-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack fw-semibold fs-5 text-muted mb-4">
                <!--begin::Text-->
                <a href="#" class="text-muted text-hover-primary pe-2">Language</a>
                <!--end::Text-->

                <!--begin::Number-->
                <div class="m-0">${data.Language}</div>
                <!--end::Number-->
            </div>
            <!--end::Item-->
            <!--begin::Item-->
            <div class="d-flex flex-stack fw-semibold fs-5 text-muted mb-4">
                <!--begin::Text-->
                <a href="#" class="text-muted text-hover-primary pe-2">Country</a>
                <!--end::Text-->

                <!--begin::Number-->
                <div class="m-0">${data.Country}</div>
                <!--end::Number-->
            </div>
            <!--end::Item-->`;
};

export { creditActorElement, creditWritterElement, detailElement };
