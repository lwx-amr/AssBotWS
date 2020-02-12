const { topHeadLines } = require('../controllers/newsController');

function newsRoute(app){
    app.route('/news')
        .get(topHeadLines);
}

module.exports = newsRoute;