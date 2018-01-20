// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var parser = require('./routes/parser');
var time = require('./routes/timestamp');
var shorty = require('./routes/shorter');
var find = require('./routes/find');
var bodyParser = require('body-parser');
var formidable = require('express-formidable');


app.use(bodyParser.json());
app.use(formidable());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

app.get("/api/whoami", function (req, res) {
  res.send(parser(req));
})

app.get("/upload", function (request, response) {
  response.sendFile(__dirname + '/views/form.html');
  });
app.post('/upload', (req, res) => {
  var size = {size:null};
  size.size= req.files.file['size'];
  res.send(JSON.stringify(size));
});

app.get("/new/:url(*)", function(req,res){
  shorty(req,res);
})

app.get("/:id", function (req, res) {
  find(req,res);
})

app.get("/time/:timestamp", function (req, res) {
  res.send(time(req.params.timestamp));
})

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
  });

app.get("/dreams", function (request, response) {
  response.send(dreams);
});
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var PORT = process.env.PORT||5000;
var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
