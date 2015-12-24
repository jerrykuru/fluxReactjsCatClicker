
var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser = require('body-parser');
var fs = require('fs');


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use("/", express.static(__dirname + '/'));

app.listen(3000);

var COMMENTS_FILE = path.join(__dirname, 'catData.json');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/cats', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});



console.log("Running at Port 3000");
