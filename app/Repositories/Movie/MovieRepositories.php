<?php

namespace App\Repositories\Movie;

interface MovieRepositories
{
    public function list($param);
    public function highlight($param);
    public function detail($param);
    public function search($param);
}
