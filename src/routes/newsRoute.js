

function newsRoute(app){
    app.route('/news')
        .get(function(req, res, next){
            res.status(200).json('Hey, This is news route');
        });
}

module.exports = newsRoute;