var express = require('express');
var app = express();
var path = require('path');
var server_port = process.env.PORT || 3000;


app.set('view engine', 'ejs');


var router = express.Router();

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next(); 
});

router.get('/', function(req, res) {
	res.render('pages/index');
});
router.get('/inscription', function(req, res) {
    res.render('pages/inscription');
});


app.use('/', router);
app.use('/inscription', router);
app.use(express.static(__dirname + '/public'));

app.listen(server_port);
console.log('Start node server on http://localhost:' + server_port);