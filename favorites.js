var favoriteMovies = JSON.parse((window.localStorage.getItem('movie')));
//loop through the array to grab the keys of each index
for (var i = 0; i < favoriteMovies.length; i++) {
    $(".movies-container").append(`
<div class="col s4 l3">
<div class="card responsive-img">
<a href="${favoriteMovies[i].href}" class="card-image">
  <img src="Images/movie-posters/${favoriteMovies[i].src}.jpeg">
</a>
</div>
`)
}

