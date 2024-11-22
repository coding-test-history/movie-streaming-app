<?php

namespace App\Http\Controllers\Movie;

use App\Http\Controllers\Controller;

class MovieController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * movie listing
     */
    public function list()
    {
        return view('movie.list.index', ['title' => 'Movie List']);
    }

    /**
     * movie detail
     */
    public function detail()
    {
        return view('movie.detail.index', ['title' => 'Movie Detail']);
    }

    /**
     * movie search
     */
    public function search()
    {
        return view('movie.search.index', ['title' => 'Movie Search']);
    }
}
