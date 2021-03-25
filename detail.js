var omdbAppId = 'trilogy';
var youtubeAPI = 'AIzaSyBbiwbK5jz8XGwneVdyFF6oyJpDol-X80U';
var omdbPath = 'http://www.omdbapi.com/';
var youtubePath = 'https://youtube.googleapis.com/youtube/v3/search';

var movieDetails = {};
var movieTrailer = {};

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
    await fetch(`${youtubePath}?part=snippet&part=id&channelId=UCi8e0iOVk1fEOogdfu4YgfA&q=${movie}&key=${youtubeAPI}`)
    .then(function(response) { return response.json() })
    .then(function(data) {movieTrailer = data;})
    console.log(movieTrailer)
    }

function buildHTMLAndAssignValues() {
    $(".brand-logo").text(movieDetails.Title);
    $(".card-movie-title").text(movieDetails.Title);
    $(".card-movie-plot").text(`Movie Plot: ${movieDetails.Plot}`)
    $(".card-movie-rating").text(`Rotten Tomatoes Rating: ${movieDetails.Ratings[1].Value}`)
    $(".video-container iframe").attr("src", `https://www.youtube.com/embed/${movieTrailer.items[0].id.videoId}`);

//if no rotten tomato rating is available, state that no rotten tomato rating is available 
}
init()
