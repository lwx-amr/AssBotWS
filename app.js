const express = require('express');
const newsRoute = require('./src/routes/newsRoute');
const moviesRoute = require('./src/routes/moviesRoute');
const curerencyRoute = require('./src/routes/currencyRoute');
const weatherRoute = require('./src/routes/weatherRoute');
//const curerencyRoute = require('./src/routes/currencyRoute');

// Initialize app
const app = express();
const port = 3000;

// Middleware to handle json data 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Index Rendering
app.get('/', function(req, res){
    res.status(200).json('Hello, Welcome to our great web service');
});

// Service Routes
newsRoute(app);
moviesRoute(app);
curerencyRoute(app);
weatherRoute(app);

// Add port to start server
app.listen(port, function(err){
    if(err)
        throw err;
    console.log('Magic happens on ' + port);
});