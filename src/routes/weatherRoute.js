const { currenTemp } = require('../controllers/weatherController');

function weatherRoute(app){
    app.route('/weather/currenttemp')
        .get(currenTemp)
}

module.exports = weatherRoute;