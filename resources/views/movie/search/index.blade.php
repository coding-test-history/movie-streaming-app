@extends('themes.main-theme')
@section('content')
    <!--begin::Row-->
    <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
        <!--begin::Col-->
        <div class="col-xl-12">
            <!--begin::Row-->
            <div class="row g-5 g-xl-9 mb-5 mb-xl-9" id="div-listing">
                @include('movie.search.components.listing')
            </div>
            <!--end::Row-->
        </div>
        <!--end::Col-->
    </div>
    <!--end::Row-->
@stop
