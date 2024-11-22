<!--begin::Input group--->
<div class="fv-row mb-8 fv-plugins-icon-container">
    <!--begin::username-->
    <input type="text" placeholder="Username" name="username" autocomplete="off" class="form-control bg-transparent">
    <!--end::username-->
    <div class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
    </div>
</div>

<!--end::Input group--->
<div class="fv-row" data-kt-password-meter="true">
    <div class="position-relative mb-3">
        <input class="form-control form-control-lg bg-transparent" type="password" placeholder="Password"
            name="password" autocomplete="off" />

        <!--begin::Visibility toggle-->
        <span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
            data-kt-password-meter-control="visibility">
            <i class="ki-duotone ki-eye-slash fs-1"><span class="path1"></span><span class="path2"></span><span
                    class="path3"></span><span class="path4"></span></i>
            <i class="ki-duotone ki-eye d-none fs-1"><span class="path1"></span><span class="path2"></span><span
                    class="path3"></span></i>
        </span>
        <!--end::Visibility toggle-->
    </div>
</div>
<!--end::Input group--->

<!--begin::Wrapper-->
<div class="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
    <div></div>

    <!--begin::Link-->
    <a href="javascript::void(0)" class="link-primary">
        Forgot Password ?
    </a>
    <!--end::Link-->
</div>
<!--end::Wrapper-->

<!--begin::Submit button-->
<div class="d-grid mb-10">
    <button type="submit" id="login-submit-button" class="btn btn-primary">
        <!--begin::Indicator label-->
        <span class="indicator-label">
            Sign In</span>
        <!--end::Indicator label-->
    </button>
</div>
<!--end::Submit button-->
