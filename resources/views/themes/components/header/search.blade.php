<!--begin::Search-->
<div id="kt_header_search" class="header-search d-flex align-items-stretch" data-kt-search-keypress="true"
    data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto"
    data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">

    <!--begin::Search toggle-->
    <div class="d-flex align-items-center" data-kt-search-element="toggle" id="kt_header_search_toggle">
        <div class="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px">
            <i class="ki-duotone ki-magnifier fs-1"><span class="path1"></span><span class="path2"></span></i>
        </div>
    </div>
    <!--end::Search toggle-->

    <!--begin::Menu-->
    <div data-kt-search-element="content" class="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">
        <!--begin::Wrapper-->
        <div data-kt-search-element="wrapper">
            <!--begin::Form-->
            <form data-kt-search-element="form" class="w-100 position-relative" autocomplete="off" action="{{url('movie/search')}}">
                <!--begin::Icon-->
                <i class="ki-duotone ki-magnifier fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-0"><span
                        class="path1"></span><span class="path2"></span></i> <!--end::Icon-->

                <!--begin::Input-->
                <input type="text" class="search-input form-control form-control-flush ps-10" name="title"
                    placeholder="Search..." data-kt-search-element="input" id="movie-search" />
                <!--end::Input-->

                <!--begin::Spinner-->
                <span class="search-spinner  position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1"
                    data-kt-search-element="spinner">
                    <span class="spinner-border h-15px w-15px align-middle text-gray-500"></span>
                </span>
                <!--end::Spinner-->

                <!--begin::Reset-->
                <span
                    class="search-reset  btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none"
                    data-kt-search-element="clear">
                    <i class="ki-duotone ki-cross fs-2 fs-lg-1 me-0"><span class="path1"></span><span
                            class="path2"></span></i> </span>
                <!--end::Reset-->

                <!--begin::Toolbar-->
                <div class="position-absolute top-50 end-0 translate-middle-y" data-kt-search-element="toolbar">
                    <!--begin::Advanced search toggle-->
                    <div data-kt-search-element="advanced-options-form-show"
                        class="btn btn-icon w-20px btn-sm btn-active-color-primary" data-bs-toggle="tooltip"
                        title="Show more search options">
                        <i class="ki-duotone ki-down fs-2"></i>
                    </div>
                    <!--end::Advanced search toggle-->
                </div>
                <!--end::Toolbar-->
            </form>
            <!--end::Form-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Preferences-->
        <form data-kt-search-element="advanced-options-form" class="pt-1 d-none" action="{{url('movie/search')}}">
            <!--begin::Heading-->
            <h3 class="fw-semibold text-gray-900 mb-7">Advanced Search</h3>
            <!--end::Heading-->

            <!--begin::Input group-->
            <div class="mb-5">
                <!--begin::Radio group-->
                <div class="nav-group nav-group-fluid">
                    <!--begin::Option-->
                    <label>
                        <input type="radio" class="btn-check" name="type" value="movie" checked="checked" />
                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary">
                            Movie
                        </span>
                    </label>
                    <!--end::Option-->

                    <!--begin::Option-->
                    <label>
                        <input type="radio" class="btn-check" name="type" value="series" />
                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                            Series
                        </span>
                    </label>
                    <!--end::Option-->

                    <!--begin::Option-->
                    <label>
                        <input type="radio" class="btn-check" name="type" value="episode" />
                        <span class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                            Episode
                        </span>
                    </label>
                    <!--end::Option-->
                </div>
                <!--end::Radio group-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="mb-5">
                <input type="text" class="form-control form-control-sm form-control-solid"
                    placeholder="Title" name="title" />
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="mb-5">
                <input type="text" class="form-control form-control-sm form-control-solid"
                    placeholder="Year" name="year" />
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="d-flex justify-content-end">
                <button type="reset" class="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
                    data-kt-search-element="advanced-options-form-cancel">Cancel</button>

                <button class="btn btn-sm fw-bold btn-primary"
                    data-kt-search-element="advanced-options-form-search">Search</button>
            </div>
            <!--end::Actions-->
        </form>
        <!--end::Preferences-->
    </div>
    <!--end::Menu-->
</div>
<!--end::Search-->
