<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>
    <title>{{ config('app.name') }} - {{ $title }} </title>
    {!! metaAttribute('login') !!}
</head>

<body id="kt_body" class="app-blank bgi-size-cover bgi-attachment-fixed bgi-position-center">
    <div class="d-flex flex-column flex-column-fluid flex-lg-row">
        <!--begin::Aside-->
        <div class="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
            <!--begin::Aside-->
            <div class="d-flex flex-center flex-lg-start flex-column">
            </div>
            <!--begin::Aside-->
        </div>
        <!--begin::Aside-->

        <!--begin::Body-->
        <div
            class="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
            <!--begin::Card-->
            <div class="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
                <!--begin::Wrapper-->
                <div class="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
                    <!--begin::content-->
                    @yield('content')
                    <!--end::content-->
                </div>
                <!--end::Wrapper-->

                <!--begin::Footer-->
                @include('themes.components.footer.auth')
                <!--end::Footer-->
            </div>
            <!--end::Card-->
        </div>
        <!--end::Body-->
    </div>
    {!! javascriptPluginAttribute('login') !!}
</body>

</html>
