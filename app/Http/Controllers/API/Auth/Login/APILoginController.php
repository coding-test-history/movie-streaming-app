<?php

namespace App\Http\Controllers\API\Auth\Login;

// use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * import form request
 */

use App\Http\Requests\Auth\Login\StoreRequest;

/**
 * import repositories
 */

use App\Repositories\Auth\Login\LoginRepositories;

class APILoginController extends Controller
{
    protected $loginRepositories;

    public function __construct(
        LoginRepositories $loginRepositories
    ) {
        /**
         * defined repositories
         */
        $this->loginRepositories = $loginRepositories;
    }

    public function login(StoreRequest $storeRequest)
    {
        /**
         * form request
         */
        $storeRequest = $storeRequest->validated();
        $storeRequest = collect($storeRequest)->only(['username', 'password'])->toArray();

        /**
         * process
         */
        $response = $this->loginRepositories->login($storeRequest);
        $code = $response['code'];
        unset($response['code']);

        /**
         * return response
         */
        return response()->json($response, $code);
    }

    public function test()
    {
    
        /**
         * process
         */
        $response = $this->loginRepositories->test();
        $code = $response['code'];
        unset($response['code']);

        /**
         * return response
         */
        return response()->json($response, $code);
    }
}
