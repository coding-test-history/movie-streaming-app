<?php

/**
 * import component
 */

use Illuminate\Support\Facades\Auth;

/**
 * import helper
 */

use App\Helpers\CheckerHelpers;

/**
 * global atribute
 */
function globalAttribute()
{
    return [
        'uriSegment1' => request()->segment(1),
        'uriSegment2' => request()->segment(2),
        'uriSegment3' => request()->segment(3),
        'uriSegment4' => request()->segment(4),
        'uriSegment5' => request()->segment(5),
    ];
}

/**
 * auth attribute
 */
function authAttribute()
{
    return [
        'id' => Auth::user()->id,
        'name' => Auth::user()->name,
        'email' => Auth::user()->email,
    ];
}

/**
 * breadctrumb attribute
 */
function breadcrumbAttribute()
{
    return [];
}

/**
 * images path
 */
function path($type)
{
    $key  = "type";
    $data = [
        [
            'type' => 'user',
            'path' => 'assets/images/avatars'
        ]
    ];

    $filteredArray = array_filter($data, function ($item) use ($key, $type) {
        return $item[$key] === $type;
    });

    return array_values($filteredArray)[0]['path'];
}

/**
 * days
 */
function daysAttribute()
{
    return ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
}


/**
 * level validation
 */
function levelValidationAttribute($param)
{
    $level = [];
    return in_array($param, $level) ? true : false;
}

/**
 * meta attribute
 */
function metaAttribute($theme)
{
    $assetLink = $theme == 'login' ? [
        'plugin' => asset(cssAuth()['plugin'] . '.css'),
        'css' => asset(cssAuth()['css'] . '.css')
    ] : [
        'plugin' => asset(css()['plugin'] . '.css'),
        'css' => asset(css()['css'] . '.css')
    ];

    $metaList = [
        '<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">',
        '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />',
        '<meta charset="utf-8" />',
        '<meta name="description" content="" />',
        '<meta name="keywords" content="" />',
        '<meta name="page" content="auth" />',
        '<meta property="og:locale" content="en_US" />',
        '<meta property="og:type" content="article" />',
        '<meta property="og:title" content="" />',
        '<meta property="og:url" content="" />',
        '<meta property="og:site_name" content="" />',
        '<link rel="canonical" href="" />',
        '<link rel="shortcut icon" href="' . asset('assets/images/logo/logo.png') . '" />',
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" />',
        '<link href="' . asset('assets/css/config/plugins.bundle.css') . '" rel="stylesheet" type="text/css" />',
        '<link href="' . asset('assets/css/config/style.bundle.css') . '" rel="stylesheet" type="text/css" />',
        '<link rel="stylesheet" href="' . asset('assets/css/config/custom.css') . '">',
        '<link rel="stylesheet" href="' . asset('assets/css/config/vendor.css') . '">',
        '<link rel="stylesheet" type="text/css" href="' . $assetLink['plugin'] . '">',
        '<link rel="stylesheet" type="text/css" href="' . $assetLink['css'] . '">',
    ];

    return implode("\n", $metaList);
}

/**
 * javascript plugin attribute
 */
function javascriptPluginAttribute($theme)
{
    $assetLink = $theme == 'login' ? [
        'plugin' => asset(jsAuth()['plugin'] . '.js'),
        'js' => asset(jsAuth()['js'] . '.js')
    ] : [
        'plugin' => asset(js()['plugin'] . '.js'),
        'js' => asset(js()['js'] . '.js')
    ];

    $javascriptPlugin = [
        '<script src="' . asset('assets/js/config/plugins.bundle.js') . '"></script>',
        '<script src="' . asset('assets/js/config/scripts.bundle.js') . '"></script>',
        '<script src="' . asset('assets/vendors/sweetalert2/sweetalert2.js') . '"></script>',
        '<script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js"></script>',
        '<script src="' . asset('assets/js/config/config.js') . '"></script>',
        '<script src="' . asset('assets/js/config/custom.js') . '"></script>',
        '<script src="' . asset('assets/js/utilities/request.js') . '"></script>',
        '<script src="' . asset('assets/js/utilities/token.js') . '"></script>',
        '<script src="' . asset('assets/js/utilities/sweetalert.js') . '"></script>',
        '<script src="' . asset('assets/js/utilities/signout.js') . '"></script>',
        '<script src="' . asset('assets/js/utilities/favorite.js') . '"></script>',
        '<script src="' . $assetLink['plugin']  . '"></script>',
        '<script src="' . $assetLink['js'] . '" type="module"></script>'
    ];
    return implode("\n", $javascriptPlugin);
}
