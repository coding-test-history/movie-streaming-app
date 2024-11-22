@extends('themes.auth-theme')
@section('content')
    <form class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" id="login-form" action="{{ route('login') }}"
        method="post">
        @csrf
        <!--begin::Heading-->
        @include(components('auth', 'login', 'heading'))
        <!--begin::Heading-->

        <!--begin::Login options-->
        @include(components('auth', 'login', 'options'))
        <!--end::Login options-->

        <!--begin::Separator-->
        <div class="separator separator-content my-14">
            <span class="w-125px text-gray-500 fw-semibold fs-7">Or username</span>
        </div>
        <!--end::Separator-->

        @include(formAuth())

        <!--begin::Sign up-->
        @include(components('auth', 'login', 'sign-up'))
        <!--end::Sign up-->
    </form>
@stop
