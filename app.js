
var express = require('express');
var app     = express();
var port    =   process.env.PORT || 3000;

// ROUTES
// ==============================================

function f1 ( req, res, next ) {
    console.log( 'f1() called. --------- ');
    next();
}

app.use( f1 );

// sample route with a route the way we're used to seeing it
app.get('/sample', function(req, res) {
    console.log('sample end point invoked');
    res.send('this is a sample!');  
});



/*// we'll create our routes here

var router = express.Router();

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
    res.send('im the home page!');  
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
    res.send('im the about page!'); 
});

// apply the routes to our application
app.use('/', router);  */


// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);