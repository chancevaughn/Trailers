var omdbAppId = 'trilogy';
var omdbPath = 'http://www.omdbapi.com/';

var movieDetails = {};

var urlParams = new URLSearchParams(window.location.search);
var movie = urlParams.get('movie');

async function init() {
    await retrieveMovieInfo(movie)
    buildHTMLAndAssignValues();
}

async function retrieveMovieInfo(movie) {
    await fetch(`${omdbPath}?t=${movie}&apikey=${omdbAppId}`)
        .then(function(response) { return response.json() }) // Convert data to json
        .then(function(data) {movieDetails = data;})
}

function buildHTMLAndAssignValues() {
    $(".brand-logo").text(movieDetails.Title);
    $(".card-movie-title").text(movieDetails.Title);
    $(".card-movie-plot").text(`Movie Plot: ${movieDetails.Plot}`)
    $(".card-movie-rating").text(`Rotten Tomatoes Rating: ${movieDetails.Ratings[1].Value}`)

}
init()
