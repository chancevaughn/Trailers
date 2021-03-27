var favoriteMovies = JSON.parse((window.localStorage.getItem('movie')));
//loop through the array to grab the keys of each index
for (var i = 0; i < favoriteMovies.length; i++) {
$("#movie-posters-grid").append(`
<div class="col s4 l3">
<div class="row"></div>
<div class="card responsive-img">
<a href="${favoriteMovies[i].href}" class="card-image">
  <img src="Images/movie-posters/${favoriteMovies[i].src}.jpeg">
</a>
</div>
`)
}

// for example
// favoriteMovies.forEach or for (let movie of favoiteMovies) or favoriteMovies.map.... etc
// then create the element using jquery and append to the container
