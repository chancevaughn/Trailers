var omdbAppId = 'trilogy';
var omdbPath = 'http://www.omdbapi.com/';
var omdbPosterPath = 'http://img.omdbapi.com/';
var movies = ['Titanic', 'Avengers+age+of+ultron'];

var movieDetails = {};
var selectedMovie = '';

async function searchMovie(movie) {
    selectedMovie = movie;
    await retrieveMovieInfo(movie)
}

async function retrieveMovieInfo() {
    await fetch(`${omdbPath}?t=${movies[0]}&apikey=${omdbAppId}`)
        .then(function(response) { return response.json() }) // Convert data to json
        .then(function(data) {
            movieDetails = data;
        })
        retrieveMovieInfo();}
    // $("#card-page-container").siblings(".card-movie-title").text(movieDetails);
    document.getElementById("card-page-container").nextSibling(".card-movie-title").innerHTML = movieDetails;
