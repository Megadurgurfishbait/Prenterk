//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;

var compression = require('compression')
const app = express();
app.use(compression())
//app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/Client/build'), {maxAge: "360d"}))



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/Client/build', 'index.html'), {maxAge: "360d"});
});


app.listen(port);

console.log(`SERVER RUNNING ON ${port}`);