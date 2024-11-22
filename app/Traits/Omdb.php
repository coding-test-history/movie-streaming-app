<?php

namespace App\Traits;

trait Omdb
{
    private function url($param)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => config('app.omdb_url')."?apikey=".config('app.omdb_key')."&{$param}",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_TIMEOUT => 30000,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                // Set Here Your Requesred Headers
                'Content-Type: application/json',
            ),
        ));
        $data = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);

        return $data;
    }
}
