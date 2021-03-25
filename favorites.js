var favoriteMovie = JSON.parse(localStorage.getItem("movie")) || [
    {src: "",
    href: ""
    }]

var urlParams = new URLSearchParams(window.location.search);
var movie = urlParams.get('movie');

$(".saveBtn").on('click', function() {
    //click & grab number that corresponds to # 
    var index = $(this).parent().attr("#movie-posters-grid")
    parseInt(index)
    favoriteMovie[index] = $(this).val()
    //create local storage set item 
    localStorage.setItem("movie", JSON.stringify(favoriteMovie))
})
//1. user 