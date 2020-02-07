

function moviesRoute(app){
    app.route('/movies')
        .get(function(req, res, next){
            res.status(200).json('Hey, This is movies route');
        });
}

module.exports = moviesRoute;