# Assignment 1 - ReactJS app.

Name: Gjorgi Gjorgiev

## Overview.

Used React to develop and increase the functionality of my Movies App.

### Features.
 
+ Pagination
+ Added Actors, Actor details, latest movies and trending movies
+ Added filmography to each actor's details page
+ Added a rating descending/ascending filter for movies

## Setup requirements.

Had to install NPM and copy my .env file into my local repository to get it working but other than that, everything else ran smoothly.

## API endpoints.

+ Actor - https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}
+ Actor Details - https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US
+ Latest Movies - https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
+ Trending Movies - https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1

## Routing.

+ Actor - /actors - A list of all the actors
+ Actor Details - /actor/:id - Pulls in the details for each specific actor when you click into them 
+ Latest Movies - /movies/latest - Pulls in the latest movies from the TMDB API
+ Trending Movies = /movies/trending - Pulls in the trending movies from the TMDB API
