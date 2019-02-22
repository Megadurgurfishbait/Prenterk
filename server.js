//server.js
const express = require('express');
const path = require('path');
const port = process.env.PORT || 2666;
const bodyParser = require('body-parser');
var compression = require('compression')
const cors = require('cors');
const app = express();
app.use(compression())
app.use(cors());
//app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, './Client/build'), {maxAge: "360d"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const email = require('./EmailSettings/Email');
app.post('/email', email.sendEmail)
app.post('/email', (req, res) => {
      console.log(req.body);
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './Client/build', 'index.html'), {maxAge: "360d"});
});


app.listen(port);

console.log(`SERVER RUNNING ON ${port}`);