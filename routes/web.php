<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', 'Auth\LoginController@index');
Auth::routes();
Route::group(['prefix' => 'movie'], function () { 
    Route::get('list', 'Movie\MovieController@list')->name('movie.list');
    Route::get('detail', 'Movie\MovieController@detail')->name('movie.detail');
    Route::get('search', 'Movie\MovieController@search')->name('movie.search');
});
