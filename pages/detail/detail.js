var omdbAppId = 'trilogy';
var omdbPath = 'http://www.omdbapi.com/';
var omdbPosterPath = 'http://img.omdbapi.com/';
// var movies = ['Titanic', 'Avengers+age+of+ultron'];

var movieDetails = {};
var selectedMovie = '';

const urlParams = new URLSearchParams(window.location.search);
const movie = urlParams.get('movie');

async function init() {
    await retrieveMovieInfo(movie)
}

async function retrieveMovieInfo(movie) {
    await fetch(`${omdbPath}?t=${movie}&apikey=${omdbAppId}`)
        .then(function(response) { return response.json() }) // Convert data to json
        .then(function(data) {movieDetails = data;})
}

init()

$("#card-page-container").siblings(".card-movie-title").text(movieDetails.Title);
document.getElementById("card-page-container").nextSibling(".card-movie-title").text = movieDetails.Plot;