const { latestMovies } = require('../controllers/moviesController');

function moviesRoute(app){
    app.route('/movies')
        .get(latestMovies);
}

module.exports = moviesRoute;