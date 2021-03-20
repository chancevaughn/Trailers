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
