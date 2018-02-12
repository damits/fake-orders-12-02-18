var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var clients = require('./routes/clients');
var admin = require('./routes/admin');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/admin', admin);
app.use('/clients', clients);

var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("App is running on port " + port);
});
module.exports = app;
