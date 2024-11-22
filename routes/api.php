<?php

/**
 * auth
 */
Route::post('auth/login', 'API\Auth\Login\APILoginController@login')->name('auth.login');

/**
 * movie
 */
Route::get('movie/list', 'API\Movie\APIMovieController@list')->name('movie.list');
Route::get('movie/highlight/{title}', 'API\Movie\APIMovieController@highlight')->name('movie.highlight');
Route::get('movie/detail/{id}', 'API\Movie\APIMovieController@detail')->name('movie.detail');
Route::get('movie/search', 'API\Movie\APIMovieController@search')->name('movie.search');
