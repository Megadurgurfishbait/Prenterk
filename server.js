//server.js
const express = require('express');
const path = require('path');
const port = process.env.PORT || 1111;
const bodyParser = require('body-parser');
const hsts = require('hsts')
var compression = require('compression');

// Simple, no?

const cors = require('cors');
const app = express();
app.use(compression())
app.use(cors());
//app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, './Client/build/'), {maxAge: "360d"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Setja inn Strict-Transport-Securtiy
app.use(hsts({
  maxAge: 31536000,        // Must be at least 1 year to be approved
  includeSubDomains: false, // Must be enabled to be approved
  preload: true
}))

const email = require('./EmailSettings/Email');
app.post('/email', email.sendEmail)

app.use(function forceLiveDomain(req, res, next) {
  var host = req.get('Host');
  if (host === 'http://pvs.is') {
    return res.redirect(301, 'https://www.pvs.is');
  }
  return next();
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './Client/build/', 'index.html'), {maxAge: "360d"});
});

app.get('*', (req, res) => {
  res.status(404)
  .sendFile(path.join(__dirname, './Client/build', 'index.html'), {maxAge: "360d"});
  res.redirect('/');

});

app.listen(port);

console.log(`SERVER RUNNING ON ${port}`);