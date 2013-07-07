var express = require('express');
var fs = require('fs');

// Read the content of index.html and returns a buffer
var index = fs.readFileSync('index.html');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // Buffer to string
  response.send(index.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
