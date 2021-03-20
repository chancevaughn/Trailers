M.AutoInit();
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,
        { 
        fullWidth: false,
        indicators: false,
        // duration: 1000
        }
    );
});
// var instance = M.Carousel.init({
//     fullWidth: true,
//     indicators: true,
//     duration: 1000
// });
var carousel = document.getElementById("top-carousel")
var moviePosters = document.getElementById("movie-posters-grid")
var cardPage = document.getElementById("card-page")

function startpage(){
carousel.style.display="block";
moviePosters.style.display="block";
cardPage.style.display="none";
}
startpage()

moviePosters.onclick=function(){
    carousel.style.display="none";
moviePosters.style.display="none";
cardPage.style.display="block";
}
