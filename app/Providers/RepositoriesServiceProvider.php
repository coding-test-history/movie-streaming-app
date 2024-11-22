<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoriesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->authRepositories();
        $this->movieRepositories();
    }

    /**
     * auth repositories
     */
    public function authRepositories()
    {
        $this->app->bind(
            'App\Repositories\Auth\Login\LoginRepositories',
            'App\Repositories\Auth\Login\EloquentLoginRepositories'
        );
    }

    /**
     * movie repositories
     */
    public function movieRepositories()
    {
        $this->app->bind(
            'App\Repositories\Movie\MovieRepositories',
            'App\Repositories\Movie\EloquentMovieRepositories'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
