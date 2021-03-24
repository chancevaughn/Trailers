M.AutoInit();

var carousel = document.getElementById("top-carousel")
var moviePosters = document.getElementById("movie-posters-grid")
var cardPage = document.getElementById("card-page")
var allMovies = document.getElementById("all-movies")
var navbar = document.getElementById("navbar")

function startpage(){
carousel.style.display="block";
moviePosters.style.display="block";
cardPage.style.display="none";
navbar.style.display="block"
}
startpage()

moviePosters.onclick = function(){
    carousel.style.display="none";
    moviePosters.style.display="none";
    cardPage.style.display="block";
    navbar.style.display="none"
}

allMovies.onclick = function(){
    carousel.style.display="block";
    moviePosters.style.display="block";
    cardPage.style.display="none";
    navbar.style.display="block"
}
