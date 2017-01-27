var http = require('http');
var path = require('path');
var express = require('express');

var app = express();
var server = http.createServer(app);

//Sets the views folder - where we will get our HTML
app.set('views', path.join(__dirname, 'views'));
//Sets the view engine to EJS - our template files must be .ejs
app.set('view engine', 'ejs');

//Routing for /
app.get('/', (request, response) => {
    
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
});
