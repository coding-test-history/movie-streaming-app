@extends('themes.main-theme')
@section('content')
    <div class="content flex-row-fluid" id="kt_content">
        <div id="kt_app_content" class="app-content  flex-column-fluid ">
            <!--begin::Content container-->
            <div id="kt_app_content_container" class="app-container  container-xxl ">
                <div class="content flex-row-fluid" id="kt_content">
                    <!--begin::Post card-->
                    <div class="card">
                        <!--begin::Body-->
                        <div class="card-body">
                            <!--begin::Layout-->
                            <div class="d-flex flex-column flex-xl-row">
                                <!--begin::Content-->
                                @include('movie.detail.components.content')
                                <!--end::Content-->

                                <!--begin::Sidebar-->
                                @include('movie.detail.components.credit-details')
                                <!--end::Sidebar-->
                            </div>
                            <!--end::Layout-->

                            <!--begin::Section-->
                            <div class="mb-17">
                                <!--begin::Content-->
                                <div class="d-flex flex-stack mb-5">
                                    <!--begin::Title-->
                                    <h3 class="text-gray-900">Recommended Movie</h3>
                                    <!--end::Title-->

                                    <!--begin::Link-->
                                    <a href="/" class="fs-6 fw-semibold link-primary">
                                        View All Movies
                                    </a>
                                    <!--end::Link-->
                                </div>
                                <!--end::Content-->

                                <!--begin::Separator-->
                                <div class="separator separator-dashed mb-9"></div>
                                <!--end::Separator-->

                                <!--begin::Row-->
                                @include('movie.detail.components.recommended')
                                <!--end::Row-->
                            </div>
                            <!--end::Section-->
                        </div>
                        <!--end::Body-->
                    </div>
                    <!--end::Post card-->
                </div>
            </div>
            <!--end::Content container-->
        </div>
    </div>
@stop
