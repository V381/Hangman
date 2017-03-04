var express = require('express');
var path = require('path');
var app = express();


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'))
});


app.use(express.static(__dirname));
app.set('port', process.env.PORT || 8080);
app.listen(8080)