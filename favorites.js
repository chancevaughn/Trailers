var favoriteMovies = JSON.parse((window.localStorage.getItem('favoriteMovie')));
$(".card-movies a").attr("href", favoriteMovies[0].href);
$(".card-movies img").attr("src", (favoriteMovies[0].src));


// use jquery to map over the movies
// for example
// favoriteMovies.forEach or for (let movie of favoiteMovies) or favoriteMovies.map.... etc
// then create the element using jquery and append to the container

