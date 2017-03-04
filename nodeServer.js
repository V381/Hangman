var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'))
});


app.use(express.static(__dirname));
app.set('port', process.env.PORT || 8080);
http.listen(process.env.PORT, function () {
    console.log('Express server listening on port %d in %s mode', 8080, app.get('env'));
})
