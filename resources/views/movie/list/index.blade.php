@extends('themes.main-theme')
@section('content')
    <!--begin::Row-->
    <div class="row g-5 gx-xl-10 mb-5 mb-xl-10">
        <!--begin::Col-->
        <div class="col-xl-8">
            <!--begin::Engage widget 6-->
            @include('movie.list.components.highlight-banner')
            <!--end::Engage widget 6-->

        </div>
        <!--end::Col-->

        <!--begin::Col-->
        <div class="col-xl-4">
            <!--begin::Video widget 2-->
            <div class="card card-flush h-xl-100" id="highlight-clip">
                @include('movie.list.components.highlight-clip')
            </div>
            <!--end::Video widget 2-->
        </div>
        <!--end::Col-->
    </div>
    <!--end::Row-->

    <!--begin::Row-->
    <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
        <!--begin::Col-->
        <div class="col-xl-12">
            <!--begin::Row-->
            <div class="row g-5 g-xl-9 mb-5 mb-xl-9" id="div-listing">
                @include('movie.list.components.listing')
            </div>
            <!--end::Row-->
        </div>
        <!--end::Col-->
    </div>
    <!--end::Row-->
@stop
