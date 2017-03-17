console.log("Server.js starting");
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.listen(process.env.PORT);
console.log("Listening on port: " + process.env.PORT);