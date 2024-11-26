
## Tech Stack

**Client:** Javascript, Sweetalert 2, Cookie Js, Bootstrap 5

**Server:** Laravel 5.5 | PHP 7.4, MySQL, OMDB API, JWT Auth, Docker, CI/CD

## Features

 - Login, Logout
 - Movie List
 - Movie Detail
 - My Favorite
 - Multi Language (ENG | IDN)
 - My Favorite List
 - Filter & Search
 - Infinite Scroll
 - Skeleton Loader
 - Empty Layout

## Installation
install composer
```bash
  composer install
```
run migration    
```bash
  php artisan migrate
```
run seeder
```bash
  php artisan db:seed --class=DatabaseSeeder
```
create account, get API Key from omdbapi and paste on .env
```bash
  OMDB_URL= 
  OMDB_KEY= 
```
## Demo

- Username : administrator
- Password : password

## API Reference

#### Login

```http
  POST /api/auth/login
```

#### Get movie list

```http
  GET /api/auth/movie/list
```

#### Get movie detail

```http
  GET /api/auth/movie/detail/{$id}
```

#### Get movie highlight

```http
  GET /api/auth/movie/highlight/{$itile}
```

#### Search Movie

```http
  GET /api/auth/movie/search?t=
```

## Screenshots

#### login page
![login page](assets/images/ss/login.png)

#### login fail
![login fail](assets/images/ss/login%20fail.png)

#### movie list
![movie list](assets/images/ss/movie%20list.png)

#### movie detail
![movie detail](assets/images/ss/movie%20detail.png)

#### movie detail 2
![movie detail 2](assets/images/ss/movie%20detail%202.png)

#### simple search
![simple search](assets/images/ss/simple%20search.png)

#### advaced search
![advaced search](assets/images/ss/advanced%20search.png)

#### my favorite
![my favorite](assets/images/ss/my%20favorite.png)

#### multi languange
![multi languange](assets/images/ss/multi%20language.png)