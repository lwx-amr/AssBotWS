const express = require('express');
const newsRoute = require('./src/routes/newsRoute');
const moviesRoute = require('./src/routes/moviesRoute');

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

newsRoute(app);
moviesRoute(app);

// Add port to start server
app.listen(port, function(err){
    if(err)
        throw err;
    console.log('Magic happens on ' + port);
});