var express = require('express');
var app = express();
var path = require('path');
var server_port = process.env.PORT || 3000;


var router = express.Router();

router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));  
});
router.get('/inscription', function(req, res) {
    res.sendFile(path.join(__dirname + '/inscription.html'));
});


app.use('/', router);
app.use('/inscription', router);
app.use(express.static(__dirname + '/public'));

app.listen(server_port);
console.log('Start node server on http://localhost:' + server_port);