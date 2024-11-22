<?php

namespace App\Http\Controllers\API\Movie;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

/**
 * import repositories
 */

use App\Repositories\Movie\MovieRepositories;

class APIMovieController extends Controller
{
    protected $movieRepositories;
    protected $request;

    public function __construct(
        MovieRepositories $movieRepositories,
        Request $request
    ) {
        /**
         * defined repositories
         */
        $this->movieRepositories = $movieRepositories;

        /**
         * defined component
         */
        $this->request = $request;
    }

    /**
     * listing data
     */
    public function list()
    {
        /**
         * param
         */
        $keyword = $this->request->input('s');
        $page = $this->request->input('page');
        $param = "s={$keyword}&page={$page}";

        /**
         * process
         */
        $response = $this->movieRepositories->list($param);
        $code = $response['code'];
        unset($response['code']);

        /**
         * return response
         */
        return response()->json($response, $code);
    }

    /**
     * highlight
     */
    public function highlight($title)
    {
        /**
         * param
         */
        $title = str_replace(' ', '+', $title);
        $param = "t={$title}&plot=short";

        /**
         * process
         */
        $response = $this->movieRepositories->detail($param);
        $code = $response['code'];
        unset($response['code']);

        /**
         * return response
         */
        return response()->json($response, $code);
    }

    /**
     * detail data
     */
    public function detail($id)
    {
        /**
         * param
         */
        $param = "i={$id}&plot=full";

        /**
         * process
         */
        $response = $this->movieRepositories->detail($param);
        $code = $response['code'];
        unset($response['code']);

        /**
         * return response
         */
        return response()->json($response, $code);
    }

    /**
     * search data
     */
    public function search($title, $type = null, $year = null)
    {
        /**
         * request
         */
        $titleRequest = str_replace(' ', '+', $this->request->input('title'));
        $typeRequest = $this->request->input('type');
        $yearRequest = $this->request->input('year');
        $page = $this->request->input('page');

        /**
         * param
         */
        $title = is_null($titleRequest) ? "" : "s={$titleRequest}";
        $type = is_null($typeRequest) ? "" : "&type={$typeRequest}";
        $year = is_null($yearRequest) ? "" : "&y={$yearRequest}";
        $param = $title . $type . $year . "&page={$page}";

        /**
         * process
         */
        $response = $this->movieRepositories->detail($param);
        $code = $response['code'];
        unset($response['code']);

        /**
         * return response
         */
        return response()->json($response, $code);
    }
}
