var express = require('express');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');

var app = express();
var router = express.Router();
var server_port = process.env.PORT || 3000;

app.set('view engine', 'ejs');


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


var db = mongoose.connect('mongodb://localhost:27017/kidscoding');
mongoose.connection.on("error", function(){
	console.log("Erreur de connection à la base de données.")
});
mongoose.connection.on("open", function(){
	console.log("Connection réussie à la base de données.")
});

fs.readdirSync(__dirname + '/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

app.listen(server_port);
console.log('Start node server on http://localhost:' + server_port);