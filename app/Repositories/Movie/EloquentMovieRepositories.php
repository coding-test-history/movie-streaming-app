<?php

namespace App\Repositories\Movie;

/**
 * import trait
 */

use App\Traits\Response;
use App\Traits\Message;
use App\Traits\Omdb;

/**
 * import repositories
 */

use App\Repositories\Movie\MovieRepositories;

class EloquentMovieRepositories implements MovieRepositories
{
    use Response, Message, Omdb;

    public function __construct()
    {
    }

    /**
     * listing data
     */
    public function list($param)
    {
        try {
            /**
             * data pendaftaran
             */
            $data = $this->url($param);
            $response = $this->sendResponse(null, 200, json_decode($data));
        } catch (\Exception $e) {
            $response = $this->sendResponse($e->getMessage(), 500);
        }

        return $response;
    }

    /**
     * highlight data
     */
    public function highlight($param)
    {
        try {
            /**
             * data pendaftaran
             */
            $data = $this->url($param);
            $response = $this->sendResponse(null, 200, json_decode($data));
        } catch (\Exception $e) {
            $response = $this->sendResponse($e->getMessage(), 500);
        }

        return $response;
    }

    /**
     * detail data
     */
    public function detail($param)
    {
        try {
            /**
             * data pendaftaran
             */
            $data = $this->url($param);
            $response = $this->sendResponse(null, 200, json_decode($data));
        } catch (\Exception $e) {
            $response = $this->sendResponse($e->getMessage(), 500);
        }

        return $response;
    }

    /**
     * search data
     */
    public function search($param)
    {
        try {
            /**
             * data pendaftaran
             */
            $data = $this->url($param);
            $response = $this->sendResponse(null, 200, json_decode($data));
        } catch (\Exception $e) {
            $response = $this->sendResponse($e->getMessage(), 500);
        }

        return $response;
    }
}
