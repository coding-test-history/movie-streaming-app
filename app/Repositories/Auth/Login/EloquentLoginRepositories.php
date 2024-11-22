<?php

namespace App\Repositories\Auth\Login;

/**
 * import trait
 */

use App\Traits\Response;
use App\Traits\Message;

/**
 * import repositories
 */

use App\Repositories\Auth\Login\LoginRepositories;

class EloquentLoginRepositories implements LoginRepositories
{
    use Response, Message;

    public function __construct()
    {
    }

    /**
     * login
     */
    public function login($request)
    {
        try {
            /**
             * filter input only email, password
             */
            $credentials = $request;
            $token = auth('api')->attempt($credentials);

            /**
             * create token
             */
            if (!$token) :
                $response = $this->sendResponse($this->outputMessage('invalid', 'credential'), 401);
            else :
                $response = $this->sendResponse(null, 200, [
                    'token'      => $token,
                    'type'       => 'bearer',
                    'expires_in' => auth('api')->factory()->getTTL() * 60
                ]);
            endif; 
        } catch (\Exception $e) {
            $response = $this->sendResponse($e->getMessage(), 500);
        }
        return $response;
    }
}
