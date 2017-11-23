var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/demo/index.html');
});
app.use(express.static('demo'));

app.listen(port);
