<!DOCTYPE html>
<html lang="en" data-bs-theme="light">

<head>
    <title>{{ config('app.name') }} - {{ $title }}</title>
    {!! metaAttribute('main') !!}

</head>

<body id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled">
    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="page d-flex flex-row flex-column-fluid">
            <!--begin::Wrapper-->
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <!--begin::Header-->
                <div id="kt_header" class="header align-items-stretch mb-5 mb-lg-10" data-kt-sticky="true"
                    data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}"
                    style="animation-duration: 0.3s;">
                    <!--begin::Container-->
                    <div class=" container-xxl  d-flex align-items-center">
                        <!--begin::Heaeder menu toggle-->
                        @include('themes.components.header.menu')
                        <!--end::Heaeder menu toggle-->
                        <!--begin::Header Logo-->
                        @include('themes.components.header.logo')
                        <!--end::Header Logo-->
                        <!--begin::Wrapper-->
                        <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                            @include('themes.components.header.navbar')
                            <!--begin::Toolbar wrapper-->
                            <div class="topbar d-flex align-items-stretch flex-shrink-0">
                                <!--begin::Search-->
                                @include('themes.components.header.search')
                                <!--end::Search-->

                                <!--begin::Theme mode-->
                                @include('themes.components.header.theme-mode')
                                <!--end::Theme mode-->

                                <!--begin::User-->
                                @include('themes.components.header.user')
                                <!--end::User -->
                            </div>
                            <!--end::Toolbar wrapper-->
                        </div>
                        <!--end::Wrapper-->
                    </div>
                    <!--end::Container-->
                </div>
                <!--end::Header-->

                <!--begin::Container-->
                <div id="kt_content_container" class="d-flex flex-column-fluid align-items-start  container-xxl ">
                    <!--begin::Post-->
                    <div class="content flex-row-fluid" id="kt_content">
                        <div id="kt_app_content" class="app-content  flex-column-fluid ">
                            <!--begin::Content container-->
                            <div id="kt_app_content_container" class="app-container  container-xxl ">
                                @yield('content')
                            </div>
                            <!--end::Content container-->
                        </div>
                    </div>
                    <!--end::Post-->
                </div>
                <!--end::Container-->
                <!--begin::Footer-->
                @include('themes.components.footer.main')
                <!--end::Footer-->
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Page-->
    </div>
    @include('themes.components.modal.favorite')
    {!! javascriptPluginAttribute('main') !!}
</body>

</html>
